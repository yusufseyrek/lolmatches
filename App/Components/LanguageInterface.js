
import Store from 'react-native-simple-store';

const LANGUGAGE_STORE_KEY = 'language_key';

let LanguageInterface = {
  languageList : [
    {"langSlug": "tr", "image": require('../Assets/Images/turkishflag.png'), "langKey":"turkish"},
    {"langSlug": "en", "image": require('../Assets/Images/britishflag.png'), "langKey":"english"},
  ],
  langSlug : "",
  defaultLang : "tr",
  get(key){
    return this.data[key][this.langSlug];
  },
  data : {
      "selectsummoner" :{"tr":"Sihirdar Seçiniz", "en" : "Select Summoner"},
      "gameinfo" : { "tr" : "Oyun Bilgisi", "en" : "Game Info"},
      "entersummoner" : {"tr" : "Sihirdar Adınızı Giriniz", "en" : "Enter Your Summoner Name"},
      "selectregion" : {"tr" : "Sunucuyu Seçiniz", "en" : "Select Your Region"},
      "cancel" : {"tr" : "İptal", "en" : "Cancel"},
      "searchgame" : {"tr" : "Aktif Oyun Ara", "en" : "Search Active Game"},
      "enterproperly" : {"tr" : "Bilgileri Eksiksiz Giriniz", "en" : "Enter Infos Properly"},
      "warning" : {"tr" : "Uyarı", "en" : "Warning"},
      "search" : {"tr" : "Ara", "en" : "Search"},
      "recentsearch" : {"tr" : "Son Aramalar", "en" : "Recent Searches"},
      "gamenotfound" : {"tr" : "Oyun Bulunamadı", "en" : "Game Not Found"},
      "purpleteam" : {"tr" : "Mor Takım", "en" : "Purple Team"},
      "blueteam" : {"tr" : "Mavi Takım", "en" : "Blue Team"},
      "wins" : {"tr" : "Kazanmalar", "en" : "Wins"},
      "ranked" : {"tr" : "Dereceli", "en" : "Ranked"},
      "masteries" : {"tr" : "Kabiliyetler", "en" : "Masteries"},
      "winrate" : {"tr" : "Kaz. Oranı", "en" : "Win Rate"},
      "runes" : {"tr" : "Rünler", "en" : "Runes"},
      "summonerdetails" : {"tr" : "Sihirdar Detayları", "en" : "Summoner Details"},
      "matchhistory" : {"tr" : "Maç Geçmişi", "en" : "Match History"},
      "back" : {"tr" : "Geri", "en" : "Back"},
      "turkish" : {"tr" : "Türkçe" , "en" : "Turkish"},
      "english" : {"tr" : "İngilizce" , "en" : "English"},
      "selectlanguage" : {"tr" : "Dil Seçiniz", "en" : "Select Language"},
      "summonerstats" : {"tr": "Sihirdar İstatistikleri", "en": "Summoner Stats"},
      "summonerprofile" : {"tr": "Sihirdar Profili", "en": "Summoner Profile"},
      "teambuilderdraftranked5x5" : {"tr" : "Dereceli 5x5" , "en" : "Ranked 5x5"},
      "rankedsolo5x5" : {"tr" : "Dereceli" , "en" : "Ranked"},
      "rankedteam3x3" : {"tr" : "Dereceli 3x3", "en" : "Ranked 3x3"},
      "rankedteam5x5" : {"tr" : "Dereceli Takım 5x5", "en" : "Ranked Team 5x5"},
      "rankedpremade3x3" : {"tr" : "Dereceli Duo 3x3" , "en" : "Ranked Duo 3x3"},
      "rankedpremade5x5" : {"tr" : "Dereceli Duo 5x5" , "en" : "Ranked Duo 5x5"},
      "normal" : {"tr" : "Normal" , "en" : "Normal"},
      "normal3x3" : {"tr" : "Normal 3x3" , "en" : "Normal 3x3"},
      "bot" : {"tr" : "Yapay Zeka" , "en" : "Bot"},
      "bot3x3" : {"tr" : "Yapay Zeka 3x3" , "en" : "Bot 3x3"},
      "oneforall5x5" : {"tr" : "Birimiz Hepimiz İçin" , "en" : "One For All"},
      "firstblood1x1" : {"tr" : "İlk kan 1x1" , "en" : "First Blood 1x1"},
      "firstblood2x2" : {"tr" : "İlk kan 2x2" , "en" : "First Blood 2x2"},
      "hexakill" : {"tr" : "6'da 6" , "en" : "Hexa Kill"},
      "urf" : {"tr" : "Urf" , "en" : "Urf"},
      "aramunranked5x5" : {"tr" : "Aram" , "en" : "Aram"},
      "counterpick" : {"tr" : "Counter Pick" , "en" : "Counter Pick"}
  },
  getCurrentLanguage(){
    return Store.get(LANGUGAGE_STORE_KEY).then((language)=>{
      if(language){
        this.langSlug = language.key;
        return language.key;
      }
      else{
        this.langSlug = this.defaultLang;
        return this.defaultLang;
      }
        
    });
    
    
  },
  setCurrentLanguage(key){
    this.langSlug = key;
    return Store.save(LANGUGAGE_STORE_KEY,{key: key});
  }

};

module.exports = LanguageInterface;
