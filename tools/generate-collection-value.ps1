# Regenerates scripts/collection-value.js from the per-country files in data/.
#
# Run this whenever you ADD or CHANGE banknotes:
#     Windows:      powershell -ExecutionPolicy Bypass -File tools\generate-collection-value.ps1
#     Ubuntu/macOS: pwsh -File tools/generate-collection-value.ps1
#
# It sums the FACE VALUE of every banknote whose `type` starts with "Circulating",
# grouped by ISO currency code. The web page converts those amounts to USD using
# live rates; the rates captured here are only a fallback for when that fetch fails.

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$dataDir = Join-Path $repo 'data'
$outFile = Join-Path (Join-Path $repo 'scripts') 'collection-value.js'

# ---- country file -> ISO 4217 currency code -------------------------------
$currencyByCountry = @{
    'australia' = 'AUD'; 'bangladesh' = 'BDT'; 'bhutan' = 'BTN'; 'brazil' = 'BRL'
    'cambodia' = 'KHR'; 'canada' = 'CAD'; 'china' = 'CNY'; 'colombia' = 'COP'
    'costa-rica' = 'CRC'; 'dominican-republic' = 'DOP'; 'drc' = 'CDF'; 'egypt' = 'EGP'
    'england' = 'GBP'; 'ethiopia' = 'ETB'; 'eu' = 'EUR'; 'ghana' = 'GHS'
    'guinea' = 'GNF'; 'honduras' = 'HNL'; 'hong-kong' = 'HKD'; 'india' = 'INR'
    'indonesia' = 'IDR'; 'iran' = 'IRR'; 'israel' = 'ILS'; 'japan' = 'JPY'
    'kenya' = 'KES'; 'laos' = 'LAK'; 'lebanon' = 'LBP'; 'macau' = 'MOP'
    'malawi' = 'MWK'; 'malaysia' = 'MYR'; 'mauritius' = 'MUR'; 'mexico' = 'MXN'
    'moldova' = 'MDL'; 'mongolia' = 'MNT'; 'myanmar' = 'MMK'; 'nepal' = 'NPR'
    'new-zealand' = 'NZD'; 'norway' = 'NOK'; 'oman' = 'OMR'; 'pakistan' = 'PKR'
    'philippines' = 'PHP'; 'puntland' = 'SOS'; 'russia' = 'RUB'; 'rwanda' = 'RWF'
    'saudi-arabia' = 'SAR'; 'scotland' = 'GBP'; 'serbia' = 'RSD'; 'singapore' = 'SGD'
    'south-korea' = 'KRW'; 'sweden' = 'SEK'; 'switzerland' = 'CHF'; 'taiwan' = 'TWD'
    'tajikistan' = 'TJS'   # modern somoni; the 1990s ruble notes are non-circulating
    'thailand' = 'THB'; 'transnistria' = 'PRB'; 'turkiye' = 'TRY'; 'turkmenistan' = 'TMT'
    'uae' = 'AED'; 'uemoa' = 'XOF'; 'ukraine' = 'UAH'; 'usa' = 'USD'
    'uzbekistan' = 'UZS'; 'viet-nam' = 'VND'; 'zambia' = 'ZMW'
}

# Sub-units: "<country>|<unit>" => how many of that unit make one main currency unit.
$subunitDivisor = @{
    'egypt|Piastres' = 100     # 100 piastres = 1 Egyptian pound
    'oman|Baisas'    = 1000    # 1000 baisa    = 1 Omani rial
}

function Parse-Denom([string]$raw) {
    $t = $raw.Trim() -replace ',', ''          # commas = thousands separators
    if ($t -match '^\d{1,3}(\.\d{3})+$') {     # e.g. "1.000" / "50.000" = thousands too
        $t = $t -replace '\.', ''
    }
    $v = 0.0
    if ([double]::TryParse($t, [Globalization.NumberStyles]::Float,
                           [Globalization.CultureInfo]::InvariantCulture, [ref]$v)) { return $v }
    return $null
}

# NOTE: the trailing ,? tolerates a stray comma after the last argument, e.g.
# currencyInfo("20", "20", "Baht", "Baht",) - valid JS, and present in a few files.
$titleRe    = [regex]'title:\s*currencyInfo\(\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,\s*"([^"]*)"\s*,?\s*\)'
$typeDeclRe = [regex]'const\s+(\w+)\s*=\s*\{\s*en:\s*"([^"]*Banknote[^"]*)"'
$inlineRe   = [regex]'type:\s*\{\s*en:\s*"([^"]*)"'

$amounts   = @{}   # ISO -> summed face value
$noteCounts = @{}  # ISO -> number of notes
$skipped   = @()
$warnings  = @()
$totalNotes = 0

foreach ($f in Get-ChildItem (Join-Path $dataDir '*.js')) {
    $country = $f.BaseName
    $c = Get-Content $f.FullName -Raw

    $typeMap = @{}
    foreach ($d in $typeDeclRe.Matches($c)) { $typeMap[$d.Groups[1].Value] = $d.Groups[2].Value }

    $titles = @($titleRe.Matches($c))
    for ($i = 0; $i -lt $titles.Count; $i++) {
        $m     = $titles[$i]
        $start = $m.Index
        $end   = if ($i + 1 -lt $titles.Count) { $titles[$i + 1].Index } else { $c.Length }
        $chunk = $c.Substring($start, $end - $start)

        # resolve this entry's type string
        $typeStr = $null; $best = [int]::MaxValue
        foreach ($name in $typeMap.Keys) {
            $idx = $chunk.IndexOf("$name.")
            if ($idx -ge 0 -and $idx -lt $best) { $best = $idx; $typeStr = $typeMap[$name] }
        }
        if (-not $typeStr) {
            $im = $inlineRe.Match($chunk)
            if ($im.Success) { $typeStr = $im.Groups[1].Value }
        }
        if (-not $typeStr) { $warnings += "$country : could not resolve type for '$($m.Groups[1].Value) $($m.Groups[3].Value)'"; continue }

        $totalNotes++
        if (-not $typeStr.StartsWith('Circulating')) { continue }

        $unit  = $m.Groups[3].Value.Trim()
        $denom = Parse-Denom $m.Groups[1].Value
        if ($null -eq $denom) { $warnings += "$country : unparsable denomination '$($m.Groups[1].Value)'"; continue }

        $code = $currencyByCountry[$country]
        if (-not $code) { $skipped += "$country ($unit) - no currency mapping"; continue }

        $div = $subunitDivisor["$country|$unit"]
        if ($div) { $denom = $denom / $div }

        if ($amounts.ContainsKey($code)) { $amounts[$code] += $denom; $noteCounts[$code]++ }
        else { $amounts[$code] = $denom; $noteCounts[$code] = 1 }
    }
}

$circulatingNotes = ($noteCounts.Values | Measure-Object -Sum).Sum

# ---- capture today's rates as an offline fallback -------------------------
$fallback = @{}
$rateNote = 'none - live fetch only'
try {
    $r = Invoke-RestMethod -Uri 'https://open.er-api.com/v6/latest/USD' -TimeoutSec 25
    if ($r.result -eq 'success') {
        foreach ($code in $amounts.Keys) {
            $v = $r.rates.$code
            if ($v) { $fallback[$code] = [double]$v }
        }
        $rateNote = "captured $((Get-Date).ToString('yyyy-MM-dd')) from open.er-api.com"
    }
} catch {
    Write-Host "WARNING: could not fetch fallback rates ($($_.Exception.Message))" -ForegroundColor Yellow
}

$unpriced = @($amounts.Keys | Where-Object { -not $fallback.ContainsKey($_) } | Sort-Object)

# ---- write the generated file --------------------------------------------
$sb = [System.Text.StringBuilder]::new()
[void]$sb.AppendLine('// AUTO-GENERATED by tools/generate-collection-value.ps1 - do not edit by hand.')
[void]$sb.AppendLine("// Face value of every 'Circulating' banknote, grouped by ISO currency code.")
[void]$sb.AppendLine("// Regenerate after adding banknotes:  powershell -ExecutionPolicy Bypass -File tools\generate-collection-value.ps1")
[void]$sb.AppendLine('const collectionValue = {')
[void]$sb.AppendLine("    generated: `"$((Get-Date).ToString('yyyy-MM-dd'))`",")
[void]$sb.AppendLine("    noteCount: $circulatingNotes,")
[void]$sb.AppendLine("    totalNotes: $totalNotes,   // every banknote in the collection, circulating or not")
[void]$sb.AppendLine('    // total face value held, per currency')
[void]$sb.AppendLine('    amounts: {')
foreach ($k in ($amounts.Keys | Sort-Object)) {
    $val = [math]::Round($amounts[$k], 4)
    [void]$sb.AppendLine("        $k`: $($val.ToString([Globalization.CultureInfo]::InvariantCulture)),")
}
[void]$sb.AppendLine('    },')
[void]$sb.AppendLine('    // how many circulating notes make up each currency total')
[void]$sb.AppendLine('    notes: {')
foreach ($k in ($noteCounts.Keys | Sort-Object)) { [void]$sb.AppendLine("        $k`: $($noteCounts[$k]),") }
[void]$sb.AppendLine('    },')
[void]$sb.AppendLine("    // units of each currency per 1 USD ($rateNote)")
[void]$sb.AppendLine('    fallbackRates: {')
foreach ($k in ($fallback.Keys | Sort-Object)) {
    [void]$sb.AppendLine("        $k`: $($fallback[$k].ToString([Globalization.CultureInfo]::InvariantCulture)),")
}
[void]$sb.AppendLine('    }')
[void]$sb.AppendLine('};')

Set-Content -Path $outFile -Value $sb.ToString() -Encoding utf8

# ---- report ---------------------------------------------------------------
""
"Parsed $totalNotes banknote entries."
"Circulating notes counted: $circulatingNotes across $($amounts.Count) currencies."
"Wrote: $outFile"
if ($unpriced.Count) {
    ""
    "No exchange rate available for: $($unpriced -join ', ')"
    "  (these are skipped in the page total; their notes are excluded from the count)"
}
if ($skipped.Count)  { ""; "Skipped:"; $skipped  | ForEach-Object { "  $_" } }
if ($warnings.Count) { ""; "Warnings:"; $warnings | ForEach-Object { "  $_" } }
