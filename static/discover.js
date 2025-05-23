const langMap = {
  "af": ["Afrikaans", "Afrikaans"],
  "agq": ["Aghem", "Aghem"],
  "ak": ["Akan", "Akan"],
  "am": ["Amharic", "አማርኛ"],
  "ar": ["Arabic", "العربية"],
  "as": ["Assamese", "অসমীয়া"],
  "asa": ["Asu", "Kipare"],
  "ast": ["Asturian", "asturianu"],
  "az": ["Azerbaijani", "azərbaycan"],
  "bas": ["Basaa", "Ɓàsàa"],
  "be": ["Belarusian", "беларуская"],
  "bem": ["Bemba", "Ichibemba"],
  "bez": ["Bena", "Hibena"],
  "bg": ["Bulgarian", "български"],
  "bgc": ["Haryanvi", "हरियाणवी"],
  "bho": ["Bhojpuri", "भोजपुरी"],
  "bm": ["Bambara", "bamanakan"],
  "bn": ["Bangla", "বাংলা"],
  "bo": ["Tibetan", "བོད་སྐད་"],
  "br": ["Breton", "brezhoneg"],
  "brx": ["Bodo", "बर’"],
  "bs": ["Bosnian", "bosanski"],
  "ca": ["Catalan", "català"],
  "ccp": ["Chakma", "𑄌𑄋𑄴𑄟𑄳𑄦"],
  "ce": ["Chechen", "нохчийн"],
  "ceb": ["Cebuano", "Cebuano"],
  "cgg": ["Chiga", "Rukiga"],
  "chr": ["Cherokee", "ᏣᎳᎩ"],
  "ckb": ["CentralKurdish", "کوردییناوەندی"],
  "cs": ["Czech", "čeština"],
  "cv": ["Chuvash", "чӑваш"],
  "cy": ["Welsh", "Cymraeg"],
  "da": ["Danish", "dansk"],
  "dav": ["Taita", "Kitaita"],
  "de": ["German", "Deutsch"],
  "dje": ["Zarma", "Zarmaciine"],
  "doi": ["Dogri", "डोगरी"],
  "dsb": ["LowerSorbian", "dolnoserbšćina"],
  "dua": ["Duala", "duálá"],
  "dz": ["Dzongkha", "རྫོང་ཁ"],
  "ebu": ["Embu", "Kĩembu"],
  "ee": ["Ewe", "Eʋegbe"],
  "el": ["Greek", "Ελληνικά"],
  "en": ["English", "English"],
  "eo": ["Esperanto", "Esperanto"],
  "es": ["Spanish", "Español"],
  "et": ["Estonian", "eesti"],
  "eu": ["Basque", "euskara"],
  "ewo": ["Ewondo", "ewondo"],
  "fa": ["Persian", "فارسی"],
  "ff": ["Fula", "Pulaar"],
  "fi": ["Finnish", "suomi"],
  "fil": ["Filipino", "Filipino"],
  "fo": ["Faroese", "føroyskt"],
  "fr": ["French", "Français"],
  "fur": ["Friulian", "furlan"],
  "fy": ["WesternFrisian", "Frysk"],
  "ga": ["Irish", "Gaeilge"],
  "gd": ["ScottishGaelic", "Gàidhlig"],
  "gl": ["Galician", "galego"],
  "gsw": ["SwissGerman", "Schwiizertüütsch"],
  "gu": ["Gujarati", "ગુજરાતી"],
  "guz": ["Gusii", "Ekegusii"],
  "gv": ["Manx", "Gaelg"],
  "ha": ["Hausa", "Hausa"],
  "haw": ["Hawaiian", "ʻŌleloHawaiʻi"],
  "he": ["Hebrew", "עברית"],
  "hi": ["Hindi", "हिन्दी"],
  "hr": ["Croatian", "hrvatski"],
  "hsb": ["UpperSorbian", "hornjoserbšćina"],
  "hu": ["Hungarian", "magyar"],
  "hy": ["Armenian", "հայերեն"],
  "ia": ["Interlingua", "interlingua"],
  "id": ["Indonesian", "Indonesia"],
  "ig": ["Igbo", "Igbo"],
  "ii": ["SichuanYi", "ꆈꌠꉙ"],
  "is": ["Icelandic", "íslenska"],
  "it": ["Italian", "Italiano"],
  "ja": ["Japanese", "日本語"],
  "jgo": ["Ngomba", "Ndaꞌa"],
  "jmc": ["Machame", "Kimachame"],
  "jv": ["Javanese", "Jawa"],
  "ka": ["Georgian", "ქართული"],
  "kab": ["Kabyle", "Taqbaylit"],
  "kam": ["Kamba", "Kikamba"],
  "kde": ["Makonde", "Chimakonde"],
  "kea": ["Kabuverdianu", "kabuverdianu"],
  "kgp": ["Kaingang", "kanhgág"],
  "khq": ["KoyraChiini", "Koyraciini"],
  "ki": ["Kikuyu", "Gikuyu"],
  "kk": ["Kazakh", "қазақтілі"],
  "kkj": ["Kako", "kakɔ"],
  "kl": ["Kalaallisut", "kalaallisut"],
  "kln": ["Kalenjin", "Kalenjin"],
  "km": ["Khmer", "ខ្មែរ"],
  "kn": ["Kannada", "ಕನ್ನಡ"],
  "ko": ["Korean", "한국어"],
  "kok": ["Konkani", "कोंकणी"],
  "ks": ["Kashmiri", "کٲشُر"],
  "ksb": ["Shambala", "Kishambaa"],
  "ksf": ["Bafia", "rikpa"],
  "ksh": ["Colognian", "Kölsch"],
  "ku": ["Kurdish", "kurdî"],
  "kw": ["Cornish", "kernewek"],
  "ky": ["Kyrgyz", "кыргызча"],
  "lag": ["Langi", "Kɨlaangi"],
  "lb": ["Luxembourgish", "Lëtzebuergesch"],
  "lg": ["Ganda", "Luganda"],
  "lkt": ["Lakota", "Lakȟólʼiyapi"],
  "ln": ["Lingala", "lingála"],
  "lo": ["Lao", "ລາວ"],
  "lrc": ["NorthernLuri", "لۊریشومالی"],
  "lt": ["Lithuanian", "lietuvių"],
  "luo": ["Luo", "Dholuo"],
  "luy": ["Luyia", "Luluhia"],
  "lv": ["Latvian", "latviešu"],
  "mai": ["Maithili", "मैथिली"],
  "mas": ["Masai", "Maa"],
  "mer": ["Meru", "Kĩmĩrũ"],
  "mfe": ["Morisyen", "kreolmorisien"],
  "mg": ["Malagasy", "Malagasy"],
  "mgo": ["Metaʼ", "metaʼ"],
  "mi": ["Māori", "Māori"],
  "mk": ["Macedonian", "македонски"],
  "ml": ["Malayalam", "മലയാളം"],
  "mn": ["Mongolian", "монгол"],
  "mni": ["Manipuri", "মৈতৈলোন্"],
  "mr": ["Marathi", "मराठी"],
  "ms": ["Malay", "Melayu"],
  "mt": ["Maltese", "Malti"],
  "mua": ["Mundang", "MUNDAŊ"],
  "my": ["Burmese", "မြန်မာ"],
  "mzn": ["Mazanderani", "مازرونی"],
  "naq": ["Nama", "Khoekhoegowab"],
  "nb": ["NorwegianBokmål", "norskbokmål"],
  "nd": ["NorthNdebele", "isiNdebele"],
  "ne": ["Nepali", "नेपाली"],
  "nl": ["Dutch", "Nederlands"],
  "nmg": ["Kwasio", "Kwasio"],
  "nn": ["NorwegianNynorsk", "norsknynorsk"],
  "nnh": ["Ngiemboon", "Shwóŋòngiembɔɔn"],
  "no": ["Norwegian", "norsk"],
  "nus": ["Nuer", "ThokNath"],
  "nyn": ["Nyankole", "Runyankore"],
  "om": ["Oromo", "Oromoo"],
  "or": ["Odia", "ଓଡ଼ିଆ"],
  "os": ["Ossetic", "ирон"],
  "pa": ["Punjabi", "ਪੰਜਾਬੀ"],
  "pcm": ["NigerianPidgin", "NaijíriáPíjin"],
  "pl": ["Polish", "polski"],
  "ps": ["Pashto", "پښتو"],
  "pt": ["Portuguese", "Português"],
  "qu": ["Quechua", "Runasimi"],
  "raj": ["Rajasthani", "राजस्थानी"],
  "rm": ["Romansh", "rumantsch"],
  "rn": ["Rundi", "Ikirundi"],
  "ro": ["Romanian", "română"],
  "rof": ["Rombo", "Kihorombo"],
  "ru": ["Russian", "русский"],
  "rw": ["Kinyarwanda", "Kinyarwanda"],
  "rwk": ["Rwa", "Kiruwa"],
  "sa": ["Sanskrit", "संस्कृतभाषा"],
  "sah": ["Yakut", "сахатыла"],
  "saq": ["Samburu", "Kisampur"],
  "sat": ["Santali", "ᱥᱟᱱᱛᱟᱲᱤ"],
  "sbp": ["Sangu", "Ishisangu"],
  "sc": ["Sardinian", "sardu"],
  "sd": ["Sindhi", "سنڌي"],
  "se": ["NorthernSami", "davvisámegiella"],
  "seh": ["Sena", "sena"],
  "ses": ["KoyraboroSenni", "Koyraborosenni"],
  "sg": ["Sango", "Sängö"],
  "shi": ["Tachelhit", "ⵜⴰⵛⵍⵃⵉⵜ"],
  "si": ["Sinhala", "සිංහල"],
  "sk": ["Slovak", "slovenčina"],
  "sl": ["Slovenian", "slovenščina"],
  "smn": ["InariSami", "anarâškielâ"],
  "sn": ["Shona", "chiShona"],
  "so": ["Somali", "Soomaali"],
  "sq": ["Albanian", "shqip"],
  "sr": ["Serbian", "српски"],
  "su": ["Sundanese", "BasaSunda"],
  "sv": ["Swedish", "Svenska"],
  "sw": ["Swahili", "Kiswahili"],
  "ta": ["Tamil", "தமிழ்"],
  "te": ["Telugu", "తెలుగు"],
  "teo": ["Teso", "Kiteso"],
  "tg": ["Tajik", "тоҷикӣ"],
  "th": ["Thai", "ไทย"],
  "ti": ["Tigrinya", "ትግርኛ"],
  "tk": ["Turkmen", "türkmendili"],
  "to": ["Tongan", "leafakatonga"],
  "tr": ["Turkish", "Türkçe"],
  "tt": ["Tatar", "татар"],
  "twq": ["Tasawaq", "Tasawaqsenni"],
  "tzm": ["CentralAtlasTamazight", "Tamaziɣtnlaṭlaṣ"],
  "ug": ["Uyghur", "ئۇيغۇرچە"],
  "uk": ["Ukrainian", "українська"],
  "ur": ["Urdu", "اردو"],
  "uz": ["Uzbek", "o‘zbek"],
  "vai": ["Vai", "ꕙꔤ"],
  "vi": ["Vietnamese", "TiếngViệt"],
  "vun": ["Vunjo", "Kyivunjo"],
  "wae": ["Walser", "Walser"],
  "wo": ["Wolof", "Wolof"],
  "xh": ["Xhosa", "IsiXhosa"],
  "xog": ["Soga", "Olusoga"],
  "yav": ["Yangben", "nuasue"],
  "yi": ["Yiddish", "ייִדיש"],
  "yo": ["Yoruba", "ÈdèYorùbá"],
  "yrl": ["Nheengatu", "nheẽgatu"],
  "yue": ["Cantonese", "粵語"],
  "zgh": ["StandardMoroccanTamazight", "ⵜⴰⵎⴰⵣⵉⵖⵜ"],
  "zh": ["Chinese", "中文"],
  "zu": ["Zulu", "isiZulu"],
};

const UNSPECIFIFIED_LANGUAGE = "";
const userLanguages = new Set(navigator.languages.map((code) => code.split("-")[0]));
const feedElmId = (id) => `feed-${id}`;
const nullRename = (name) => ["", name];
const langRename = (lang) => {
  if (lang in langMap) {
    return langMap[lang];
  } else if (lang === UNSPECIFIFIED_LANGUAGE) {
    return ["", "(unspecified)"];
  }
  return ["", lang];
};
const isUserLanguage = (lang) => {
  return userLanguages.has(lang) || lang === UNSPECIFIFIED_LANGUAGE;
};

var render_table = () => {
  const tbody = document.getElementById("feed-table-body");

  feeds.forEach(feed => {
    var row = document.createElement("tr");
    row.id = feedElmId(feed.id);

    var cell = document.createElement("td");
    var tag = document.createElement("span");
    if (feed.type == "Podcast") {
      tag.className = "tag is-warning is-light";
    } else {
      tag.className = "tag is-info is-light";
    }
    tag.innerText = feed.type;
    cell.appendChild(tag);
    row.appendChild(cell);

    cell = document.createElement("td");
    var link = document.createElement("a");
    link.innerText = feed.title;
    link.href = `feed-${feed.id}/`;
    cell.appendChild(link);
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = feed.desc;
    row.appendChild(cell);

    cell = document.createElement("td");
    feed.cats.forEach(cat => {
      var tag = document.createElement("span");
      tag.classList = "tag m-1";
      tag.innerText = cat;
      cell.appendChild(tag);
    });
    row.appendChild(cell);
    tbody.appendChild(row);
  });
};

const on_filter_select_change = (elmId, filter) => {
  const target = document.getElementById(elmId);
  for (var i = 0; i < target.length; i++) {
    const opt = target[i];
    const v = opt.value;
    if (opt.selected) {
      filter.add(v);
    } else {
      filter.delete(v);
    }
  };
  on_filter_change();
}

const render_filter = (targetId, values, filterSet, rename=nullRename, isDefault=(a)=>false) => {
  const target = document.getElementById(targetId);
  target.onchange=() => {
    on_filter_select_change(targetId, filterSet);
  };

  // Sort the values by occurances
  var valCounter = {};
  values.forEach((v) => {
    const sortKey = v.toLowerCase();
    if (!(sortKey in valCounter)) {
      valCounter[sortKey] = {
        count: 0,
        canonicalV: v,
      };
    }
    valCounter[sortKey].count += 1;
    if (v > valCounter[sortKey].canonicalV) {
      valCounter[sortKey].canonicalV = v;
    }
  });
  const sortedValues = Object.keys(valCounter).sort((a, b) => {
    return valCounter[b].count - valCounter[a].count;
  });

  sortedValues.forEach(v => {
    var opt = document.createElement("option");
    opt.value = v;

    if (isDefault(v)) {
      opt.selected = true;
      filterSet.add(v);
    } else {
      opt.selected = false;
    }

    var fullName, titleName;
    [titleName, fullName] = rename(valCounter[v].canonicalV);
    opt.innerText = fullName;
    opt.title = titleName;
    target.appendChild(opt);
  });
};

const render_langs = () => {
  const langs = feeds.map((feed) => feed.lang);
  render_filter("feed-langs", langs, filters.languages, rename=langRename, isDefault=isUserLanguage);
};

const render_type_filter = () => {
  const types = feeds.map((feed) => feed.type);
  render_filter("feed-types", types, filters.types);
};

const render_cat_filter = () => {
  const cats = [];
  feeds.forEach((feed) => {
    feed.cats.forEach((cat) => {
      // Filter out some noise
      if (cat.length > 3) {
        cats.push(cat);
      }
    });
  });
  render_filter("feed-cats", cats, filters.categories);
};

const shouldShowFeed = (feed) => {
  if (filters.types.size > 0 && !filters.types.has(feed.type.toLowerCase())) {
    return false;
  }
  if (filters.languages.size > 0 && !filters.languages.has(feed.lang.toLowerCase())) {
    return false;
  }
  if (filters.categories.size > 0 && !feed.cats.some((cat) => filters.categories.has(cat.toLowerCase()))) {
    return false;
  }
  return true;
};

const on_filter_change = () => {
  var shownCount = 0;
  feeds.forEach(feed => {
    var e = document.getElementById(feedElmId(feed.id));
    if (shouldShowFeed(feed)) {
      shownCount += 1;
      e.style.display = "";
    } else {
      e.style.display = "none";
    }
  });
  var e = document.getElementById("shown-feed-count");
  if (shownCount == feeds.length) {
    e.innerText = "All"
  } else {
    e.innerText = shownCount.toLocaleString() + " of";
  }
}

const toggleFilterPanel = () => {
  const panel = document.getElementById("panel-filters");
  const button = document.getElementById("btn-toggle-filters");
  button.innerText = (panel.style.display === "") ? "Show Filters" : "Hide Filters";
  panel.style.display = (panel.style.display === "") ? "none" : "";
};

const parse_uri_fragment = () => {
  const cat = window.location.hash.substr(1);
  if (cat) {
    filters.categories.clear();
    filters.categories.add(cat);
  }
};

(function() {
  render_type_filter();
  render_langs();
  render_cat_filter();
  render_table();
  parse_uri_fragment();
  on_filter_change();
})();
