


var lang = "tr";


let Strings = {
  get(key){
    return this.data[key][lang];
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
  }


};

module.exports = Strings;
