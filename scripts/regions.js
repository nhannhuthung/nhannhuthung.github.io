/* ---------------------------------------------------------------
   THE REGION REGISTRY - single source of truth for every region.

   Three things used to store each country's name: the search index,
   the country-page sidebar, and the collection-page region menu.
   They drifted. Now they all read from here.

   To add a region:
     1. add its data/<slug>.js and collection/<slug>.html
     2. add ONE record to COUNTRIES below
   The slug IS the file name, so links can never point at a missing
   page, and the name shown is the same everywhere by construction.

   REGIONS   - continents in menu order, each with its subregions
               in column order, and the accent colour it wears.
   COUNTRIES - one record per page. `sub: null` means the country
               stands alone in the menu, outside any subregion.
               `also` holds EXTRA search keywords; `en` and `vi` are
               already searchable and never need repeating there.
               `short_en`/`short_vi` are optional, used only by the
               prev/next buttons where a long name would overflow.
   PAGES     - the four site pages: searchable, not part of the
               collection, so they carry no region.
   --------------------------------------------------------------- */

const REGIONS = {
    americas: {
        en: "Americas", vi: "Châu Mỹ", accent: "--a1",
        sub: {
            "north-america": { en: "North America", vi: "Bắc Mỹ" },
            "central-america": { en: "Central America", vi: "Trung Mỹ" },
            "caribbean": { en: "Caribbean", vi: "Caribe" },
            "south-america": { en: "South America", vi: "Nam Mỹ" },
        },
    },
    africa: {
        en: "Africa", vi: "Châu Phi", accent: "--a2",
        sub: {
            "north-africa": { en: "North Africa", vi: "Bắc Phi" },
            "west-africa": { en: "West Africa", vi: "Tây Phi" },
            "central-africa": { en: "Central Africa", vi: "Trung Phi" },
            "east-africa": { en: "East Africa", vi: "Đông Phi" },
            "southern-africa": { en: "Southern Africa", vi: "Nam Phi" },
        },
    },
    europe: {
        en: "Europe", vi: "Châu Âu", accent: "--a3",
        sub: {
            "northern-europe": { en: "Northern Europe", vi: "Bắc Âu" },
            "western-europe": { en: "Western Europe", vi: "Tây Âu" },
            "eastern-europe": { en: "Eastern Europe", vi: "Đông Âu" },
            "southern-europe": { en: "Southern Europe", vi: "Nam Âu" },
        },
    },
    asia: {
        en: "Asia", vi: "Châu Á", accent: "--a4",
        sub: {
            "mid-east-asia": { en: "West Asia (Middle East)", vi: "Tây Á (Trung Đông)" },
            "central-asia": { en: "Central Asia", vi: "Trung Á" },
            "south-asia": { en: "South Asia", vi: "Nam Á" },
            "east-asia": { en: "East Asia", vi: "Đông Á" },
            "south-east-asia": { en: "South East Asia", vi: "Đông Nam Á" },
        },
    },
    oceania: {
        en: "Oceania", vi: "Châu Úc", accent: "--a5",
        sub: {
            "polynesia": { en: "Polynesia", vi: "Đa Đảo" },
        },
    },
    arctic: {
        en: "Arctic", vi: "Bắc Cực", accent: "--a6",
        sub: {},
    },
    antartica: {
        en: "Antarctica", vi: "Nam Cực", accent: "--a7",
        sub: {},
    },
};

const COUNTRIES = {
    // ---- Americas ----
    "brazil": { en: "Brazil", vi: "Brasil", region: "americas", sub: "south-america", also: ["federative republic of brazil", "cộng hòa liên bang brasil"] },
    "canada": { en: "Canada", vi: "Canada", region: "americas", sub: "north-america", also: ["ca na đa"] },
    "colombia": { en: "Colombia", vi: "Colombia", region: "americas", sub: "south-america", also: ["republic of colombia", "cô lôm bi a"] },
    "costa-rica": { en: "Costa Rica", vi: "Costa Rica", region: "americas", sub: "central-america", also: ["republic of costa rica"] },
    "dominican-republic": { en: "Dominican Republic", vi: "Cộng Hòa Dominica", region: "americas", sub: "caribbean" },
    "honduras": { en: "Honduras", vi: "Honduras", region: "americas", sub: "central-america", also: ["republic of honduras", "cộng hòa honduras"] },
    "mexico": { en: "Mexico", vi: "Mexico", region: "americas", sub: "north-america", also: ["united mexican states", "méxico", "hợp chúng quốc méxico", "mê hi cô"] },
    "uruguay": { en: "Uruguay", vi: "Uruguay", region: "americas", sub: "south-america", also: ["oriental republic of uruguay", "cộng hòa đông uruguay"] },
    "usa": { en: "United States", vi: "Hoa Kỳ", region: "americas", sub: "north-america", also: ["usa", "united states of america", "america", "mỹ", "mĩ", "hoa kì", "hợp chủng quốc hoa kì", "hợp chủng quốc hoa kỳ"] },
    "venezuela": { en: "Venezuela", vi: "Venezuela", region: "americas", sub: "south-america", also: ["bolivarian republic of venezuela"] },
    // ---- Africa ----
    "drc": { en: "Democratic Republic of the Congo", vi: "Cộng Hòa Dân Chủ Congo", short_en: "DR Congo", short_vi: "CH Congo", region: "africa", sub: "central-africa", also: ["drc", "democratic republic of congo", "dr congo", "congo"] },
    "egypt": { en: "Egypt", vi: "Ai Cập", region: "africa", sub: "north-africa", also: ["arab republic of egypt"] },
    "ethiopia": { en: "Ethiopia", vi: "Ethiopia", region: "africa", sub: "east-africa", also: ["federal democratic republic of ethiopia"] },
    "ghana": { en: "Ghana", vi: "Ghana", region: "africa", sub: "west-africa", also: ["republic of ghana"] },
    "guinea": { en: "Guinea", vi: "Guinea", region: "africa", sub: "west-africa", also: ["republic of guinea"] },
    "kenya": { en: "Kenya", vi: "Kenya", region: "africa", sub: "east-africa", also: ["republic of kenya"] },
    "malawi": { en: "Malawi", vi: "Malawi", region: "africa", sub: "east-africa", also: ["republic of malawi"] },
    "mauritius": { en: "Mauritius", vi: "Mauritius", region: "africa", sub: "east-africa", also: ["republic of mauritius"] },
    "puntland": { en: "Puntland", vi: "Puntland", region: "africa", sub: "east-africa", also: ["puntland state of somalia"] },
    "rwanda": { en: "Rwanda", vi: "Rwanda", region: "africa", sub: "east-africa", also: ["republic of rwanda"] },
    "somalia": { en: "Somalia", vi: "Somalia", region: "africa", sub: "east-africa", also: ["federal republic of somalia"] },
    "uemoa": { en: "West African Economic And Monetary Union", vi: "Liên Minh Kinh Tế Và Tiền Tệ Tây Phi", short_en: "WAEMU", short_vi: "UEMOA", region: "africa", sub: "west-africa", also: ["uemoa", "waemu", "west africa, western africa", "tây phi"] },
    "zambia": { en: "Zambia", vi: "Zambia", region: "africa", sub: "southern-africa", also: ["republic of zambia", "dăm bi a"] },
    // ---- Europe ----
    "belarus": { en: "Belarus", vi: "Belarus", region: "europe", sub: "eastern-europe", also: ["republic of belarus", "bê la rút"] },
    "croatia": { en: "Croatia", vi: "Croatia", region: "europe", sub: "southern-europe", also: ["republic of croatia"] },
    "england": { en: "England", vi: "Anh", region: "europe", sub: "northern-europe", also: ["anh quốc"] },
    "eu": { en: "European Union", vi: "Liên Minh Châu Âu", short_en: "EU", short_vi: "EU", region: "europe", sub: null, also: ["eu"] },
    "france": { en: "France", vi: "Pháp", region: "europe", sub: "western-europe" },
    "ireland": { en: "Ireland", vi: "Ireland", region: "europe", sub: "northern-europe", also: ["republic of ireland", "ai len"] },
    "italy": { en: "Italy", vi: "Ý", region: "europe", sub: "southern-europe" },
    "moldova": { en: "Moldova", vi: "Moldova", region: "europe", sub: "eastern-europe", also: ["republic of moldova"] },
    "netherlands": { en: "Netherlands", vi: "Hà Lan", region: "europe", sub: "western-europe", also: ["kingdom of the netherlands", "vương quốc hà lan"] },
    "norway": { en: "Norway", vi: "Na Uy", region: "europe", sub: "northern-europe", also: ["kingdom of norway"] },
    "russia": { en: "Russia", vi: "Nga", region: "europe", sub: "eastern-europe", also: ["russian federation"] },
    "scotland": { en: "Scotland", vi: "Scotland", region: "europe", sub: "northern-europe", also: ["kingdom of scotland"] },
    "serbia": { en: "Serbia", vi: "Serbia", region: "europe", sub: "southern-europe", also: ["republic of serbia", "cộng hòa serbia"] },
    "sweden": { en: "Sweden", vi: "Thụy Điển", region: "europe", sub: "northern-europe", also: ["kingdom of sweden", "vương quốc thụy điển"] },
    "switzerland": { en: "Switzerland", vi: "Thụy Sĩ", region: "europe", sub: "western-europe", also: ["swiss confederation", "liên bang thụy sĩ"] },
    "transnistria": { en: "Transnistria", vi: "Transnistria", region: "europe", sub: "eastern-europe" },
    "ukraine": { en: "Ukraine", vi: "Ukraine", region: "europe", sub: "eastern-europe" },
    "yugoslavia": { en: "Yugoslavia", vi: "Nam Tư", region: "europe", sub: "southern-europe" },
    // ---- Asia ----
    "bangladesh": { en: "Bangladesh", vi: "Bangladesh", region: "asia", sub: "south-asia", also: ["people's republic of bangladesh", "băng la đét"] },
    "bhutan": { en: "Bhutan", vi: "Bhutan", region: "asia", sub: "south-asia", also: ["kingdom of bhutan", "bu tan"] },
    "cambodia": { en: "Cambodia", vi: "Campuchia", region: "asia", sub: "south-east-asia", also: ["kingdom of cambodia", "cam pu chia"] },
    "china": { en: "China", vi: "Trung Quốc", region: "asia", sub: "east-asia", also: ["people's republic of china", "trung"] },
    "hong-kong": { en: "Hong Kong", vi: "Hồng Kông", region: "asia", sub: "east-asia" },
    "india": { en: "India", vi: "Ấn Độ", region: "asia", sub: "south-asia", also: ["republic of india", "ấn"] },
    "indochinese-union": { en: "Indochinese Union", vi: "Liên Bang Đông Dương", region: "asia", sub: "south-east-asia", also: ["french indochina", "indochina", "indochinese peninsula", "mainland southeast asia", "msea", "đông dương", "bán đảo ấn trung", "bán đảo hoa ấn", "đông nam á lục địa", "đông dương thuộc pháp"] },
    "indonesia": { en: "Indonesia", vi: "Indonesia", region: "asia", sub: "south-east-asia", also: ["indo", "republic of indonesia"] },
    "iran": { en: "Iran", vi: "Iran", region: "asia", sub: "mid-east-asia", also: ["islamic republic of iran"] },
    "israel": { en: "Israel", vi: "Israel", region: "asia", sub: "mid-east-asia", also: ["state of israel"] },
    "japan": { en: "Japan", vi: "Nhật Bản", region: "asia", sub: "east-asia", also: ["nhật"] },
    "kyrgyzstan": { en: "Kyrgyzstan", vi: "Kyrgyzstan", region: "asia", sub: "central-asia", also: ["kyrgyz republic"] },
    "laos": { en: "Laos", vi: "Lào", region: "asia", sub: "south-east-asia", also: ["lao people's democratic republic"] },
    "lebanon": { en: "Lebanon", vi: "Liban", region: "asia", sub: "mid-east-asia", also: ["republic of lebanon"] },
    "macau": { en: "Macau", vi: "Ma Cao", region: "asia", sub: "east-asia", also: ["macao"] },
    "malaysia": { en: "Malaysia", vi: "Malaysia", region: "asia", sub: "south-east-asia", also: ["malay", "mã lai", "ma lai xi a"] },
    "mongolia": { en: "Mongolia", vi: "Mông Cổ", region: "asia", sub: "east-asia" },
    "myanmar": { en: "Myanmar", vi: "Myanmar", region: "asia", sub: "south-east-asia", also: ["burma", "miến điện", "mi an ma"] },
    "nepal": { en: "Nepal", vi: "Nepal", region: "asia", sub: "south-asia", also: ["federal democratic republic of nepal"] },
    "north-korea": { en: "North Korea", vi: "Triều Tiên", region: "asia", sub: "east-asia", also: ["democratic people's republic of korea", "bắc triều tiên"] },
    "oman": { en: "Oman", vi: "Oman", region: "asia", sub: "mid-east-asia", also: ["sultanate of oman"] },
    "pakistan": { en: "Pakistan", vi: "Pakistan", region: "asia", sub: "south-asia", also: ["islamic republic of pakistan"] },
    "philippines": { en: "Philippines", vi: "Philippines", region: "asia", sub: "south-east-asia" },
    "saudi-arabia": { en: "Saudi Arabia", vi: "Ả Rập Xê Út", region: "asia", sub: "mid-east-asia", also: ["kingdom of saudi arabia"] },
    "singapore": { en: "Singapore", vi: "Singapore", region: "asia", sub: "south-east-asia", also: ["republic of singapore", "xing ga po"] },
    "south-korea": { en: "South Korea", vi: "Hàn Quốc", region: "asia", sub: "east-asia", also: ["korea", "republic of korea", "hàn", "đại hàn", "đại hàn dân quốc", "nam hàn"] },
    "south-vietnam": { en: "South Vietnam", vi: "Việt Nam Cộng Hòa", region: "asia", sub: "south-east-asia", also: ["republic of vietnam", "nam việt nam", "miền nam việt nam"] },
    "syria": { en: "Syria", vi: "Syria", region: "asia", sub: "mid-east-asia", also: ["syrian arab republic"] },
    "taiwan": { en: "Taiwan", vi: "Đài Loan", region: "asia", sub: "east-asia", also: ["republic of china", "đài"] },
    "tajikistan": { en: "Tajikistan", vi: "Tajikistan", region: "asia", sub: "central-asia", also: ["republic of tajikistan"] },
    "thailand": { en: "Thailand", vi: "Thái Lan", region: "asia", sub: "south-east-asia", also: ["kingdom of thailand", "thái"] },
    "turkiye": { en: "Turkiye", vi: "Thổ Nhĩ Kỳ", region: "asia", sub: "mid-east-asia", also: ["turkey", "republic of turkiye"] },
    "turkmenistan": { en: "Turkmenistan", vi: "Turkmenistan", region: "asia", sub: "central-asia" },
    "uae": { en: "United Arab Emirates", vi: "Các Tiểu Vương Quốc Ả Rập Thống Nhất", region: "asia", sub: "mid-east-asia", also: ["uae", "emirates"] },
    "uzbekistan": { en: "Uzbekistan", vi: "Uzbekistan", region: "asia", sub: "central-asia", also: ["republic of uzbekistan"] },
    "viet-nam": { en: "Viet Nam", vi: "Việt Nam", region: "asia", sub: "south-east-asia", also: ["vietnam", "socialist republic of vietnam", "cộng hòa xã hội chủ nghĩa việt nam"] },
    // ---- Oceania ----
    "australia": { en: "Australia", vi: "Úc", region: "oceania", sub: null, also: ["commonwealth of australia"] },
    "new-zealand": { en: "New Zealand", vi: "New Zealand", region: "oceania", sub: "polynesia" },
    // ---- Arctic ----
    "arctic-territories": { en: "Arctic Territories", vi: "Lãnh Thổ Bắc Cực", region: "arctic", sub: null, also: ["các lãnh thổ bắc cực"] },
    // ---- Antarctica ----
    "kerguelen-islands": { en: "Kerguelen Islands", vi: "Quần Đảo Kerguelen", region: "antartica", sub: null, also: ["kerguelen"] },
};

const PAGES = {
    "index": { en: "Home", vi: "Trang Chủ", also: ["homepage", "index"] },
    "collection": { en: "Collection", vi: "Bộ Sưu Tập", also: ["collections", "collect", "sưu tầm", "bộ sưu tậm"] },
    "about": { en: "About", vi: "Giới Thiệu", also: ["information", "info", "thông tin"] },
    "contact": { en: "Contact", vi: "Liên Hệ", also: ["contanct us", "liên lạc"] },
};


/* ---------------------------------------------------------------
   Derived lookups - the three consumers read these, never the raw
   objects, so there is one place to change if the shape moves.
   --------------------------------------------------------------- */

// `en` and `vi` are always searchable, so `also` only carries the extras.
function searchKeywords(entry) {
    return [entry.en, entry.vi].concat(entry.also || []).map(s => s.toLowerCase());
}

// Slugs of one continent, ordered by the name actually on screen.
function countriesIn(regionKey, lang) {
    return Object.keys(COUNTRIES)
        .filter(slug => COUNTRIES[slug].region === regionKey)
        .sort((a, b) => COUNTRIES[a][lang].localeCompare(COUNTRIES[b][lang]));
}

// Same, narrowed to one subregion. Pass null for the countries that sit
// outside every subregion (European Union, Australia, the polar pages).
function countriesInSub(regionKey, subKey, lang) {
    return countriesIn(regionKey, lang).filter(slug => COUNTRIES[slug].sub === subKey);
}

// Link to a country page, correct from either depth of the site.
function countryHref(slug, insideCollection) {
    return insideCollection ? `${slug}.html` : `collection/${slug}.html`;
}
