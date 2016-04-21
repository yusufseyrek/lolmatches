


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
  }


};

module.exports = Strings;
