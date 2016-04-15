


let StaticData = {

  regions : [
    { key : "BR" , label : "BR - Brazil"},
    { key : "EUNE" , label : "EUNE - Europe Nordic & East"},
    { key : "EUW" , label : "EUW - Europe West"},
    { key : "LAN" , label : "LAN - Latin America North"},
    { key : "LAS" , label : "LAS - Latin America South"},
    { key : "NA" , label : "NA - North America"},
    { key : "OCE" , label : "OCE - Oceania"},
    { key : "RU" , label : "RU - Russia"},
    { key : "TR" , label : "TR - Turkey"},
    { key : "SEA" , label : "SEA - South East Asia"},
    { key : "KR" , label : "KR - Republic of Korea"}
  ],
  getRankedIcon(rank){
      let icons = {
          "unranked" : require('../Assets/Images/provisional.png'),
          "bronze" : require('../Assets/Images/bronze.png'),
          "silver" : require('../Assets/Images/silver.png'),
          "gold" : require('../Assets/Images/gold.png'),
          "platinum" : require('../Assets/Images/platinum.png'),
          "diamond" : require('../Assets/Images/diamond.png'),
          "master" : require('../Assets/Images/master.png'),
          "challenger" : require('../Assets/Images/challenger.png')
      };
      return icons[rank]
  },
  dummy : {"gameId":377488634,"mapId":11,"gameMode":"CLASSIC","gameType":"MATCHED_GAME","gameQueueConfigId":410,"participants":[{"teamId":100,"championId":133,"profileIconId":562,"summonerName":"YILDIZ TILBE","summonerId":893035,"runes":{"statistics":[{"label":"Crit Chance","value":"+0.93%"},{"label":"Armor Pen","value":"+10.24"},{"label":"Cooldown","value":"-7.5%"},{"label":"Attack Speed","value":"+6.88%"},{"label":"Attack Damage","value":"+6.75"}]},"rank":{"tier":"platinum","division":4,"rankString":"Platinum IV"},"rank_last":{"tier":"platinum","division":2,"rankString":"Platinum II"},"champion_stats":{"wins":"5","losses":"6","kills":"126","assists":"88","deaths":"89","total_games":"313","total_wins":"169","total_losses":"144"},"top_champions":[{"champion_id":"412","kills":"178","deaths":"402","assists":"1331","wins":"43","losses":"29","played":"72","creep_score":"1704","name":"Thresh","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Thresh.png"},{"champion_id":"432","kills":"38","deaths":"85","assists":"236","wins":"9","losses":"5","played":"14","creep_score":"239","name":"Bard","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Bard.png"},{"champion_id":"64","kills":"50","deaths":"92","assists":"150","wins":"8","losses":"5","played":"13","creep_score":"516","name":"LeeSin","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/LeeSin.png"}],"championName":"Quinn","championSquareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Quinn.png","championSplashImage":"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Quinn_0.jpg","masterie":{"ferocity":12,"cunning":18,"resolve":0},"itsMe":false,"spells":[{"spellName":"Teleport","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerTeleport.png"},{"spellName":"Flash","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"}]},{"teamId":100,"championId":222,"profileIconId":502,"summonerName":"Makaveli the Don","summonerId":2760932,"runes":{"statistics":[{"label":"Attack Damage","value":"+15.26"},{"label":"Magic Resist","value":"+12.06"},{"label":"Armor","value":"+9"}]},"rank":{"tier":"platinum","division":4,"rankString":"Platinum IV"},"rank_last":{"tier":"platinum","division":5,"rankString":"Platinum V"},"champion_stats":{"wins":null,"losses":null,"kills":null,"assists":null,"deaths":null,"total_games":"110","total_wins":"64","total_losses":"46"},"top_champions":[{"champion_id":"60","kills":"94","deaths":"57","assists":"131","wins":"8","losses":"4","played":"12","creep_score":"271","name":"Elise","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Elise.png"},{"champion_id":"121","kills":"71","deaths":"15","assists":"42","wins":"6","losses":"1","played":"7","creep_score":"177","name":"Khazix","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Khazix.png"},{"champion_id":"81","kills":"52","deaths":"32","assists":"74","wins":"3","losses":"4","played":"7","creep_score":"1352","name":"Ezreal","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Ezreal.png"}],"championName":"Jinx","championSquareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Jinx.png","championSplashImage":"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_0.jpg","masterie":{"ferocity":18,"cunning":12,"resolve":0},"itsMe":false,"spells":[{"spellName":"Flash","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"},{"spellName":"Heal","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerHeal.png"}]},{"teamId":100,"championId":254,"profileIconId":1108,"summonerName":"GotYıkamaBorusu","summonerId":1826093,"runes":{"statistics":[{"label":"Attack Damage","value":"+15.26"},{"label":"Magic Resist","value":"+4.02"},{"label":"Cooldown","value":"-5%"},{"label":"Armor","value":"+9"}]},"rank":{"tier":"platinum","division":5,"rankString":"Platinum V"},"rank_last":{"tier":"platinum","division":2,"rankString":"Platinum II"},"champion_stats":{"wins":null,"losses":null,"kills":null,"assists":null,"deaths":null,"total_games":"227","total_wins":"104","total_losses":"123"},"top_champions":[{"champion_id":"111","kills":"65","deaths":"140","assists":"434","wins":"23","losses":"14","played":"37","creep_score":"1843","name":"Nautilus","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Nautilus.png"},{"champion_id":"40","kills":"10","deaths":"67","assists":"311","wins":"13","losses":"8","played":"21","creep_score":"242","name":"Janna","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Janna.png"},{"champion_id":"267","kills":"22","deaths":"81","assists":"293","wins":"11","losses":"8","played":"19","creep_score":"268","name":"Nami","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Nami.png"}],"championName":"Vi","championSquareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Vi.png","championSplashImage":"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vi_0.jpg","masterie":{"ferocity":12,"cunning":18,"resolve":0},"itsMe":false,"spells":[{"spellName":"Flash","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"},{"spellName":"Smite","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerSmite.png"}]},{"teamId":100,"championId":127,"profileIconId":503,"summonerName":"Archenion","summonerId":404177,"runes":{"statistics":[{"label":"Magic Pen","value":"+7.83"},{"label":"Magic Resist","value":"+12.06"},{"label":"Armor","value":"+9"},{"label":"Ability Power","value":"+14.85"}]},"rank":{"tier":"platinum","division":3,"rankString":"Platinum III"},"rank_last":{"tier":"platinum","division":1,"rankString":"Platinum I"},"champion_stats":{"wins":"4","losses":"0","kills":"28","assists":"48","deaths":"19","total_games":"170","total_wins":"84","total_losses":"86"},"top_champions":[{"champion_id":"98","kills":"79","deaths":"74","assists":"190","wins":"10","losses":"6","played":"16","creep_score":"1719","name":"Shen","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Shen.png"},{"champion_id":"62","kills":"73","deaths":"46","assists":"105","wins":"7","losses":"4","played":"11","creep_score":"718","name":"MonkeyKing","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/MonkeyKing.png"},{"champion_id":"161","kills":"64","deaths":"45","assists":"95","wins":"9","losses":"2","played":"11","creep_score":"1944","name":"Velkoz","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Velkoz.png"}],"championName":"Lissandra","championSquareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Lissandra.png","championSplashImage":"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lissandra_0.jpg","masterie":{"ferocity":12,"cunning":18,"resolve":0},"itsMe":false,"spells":[{"spellName":"Flash","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"},{"spellName":"Ignite","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerDot.png"}]},{"teamId":100,"championId":412,"profileIconId":979,"summonerName":"Mârd","summonerId":10560494,"runes":{"statistics":[{"label":"Attack Damage","value":"+7.56"},{"label":"Magic Resist","value":"+12.06"},{"label":"Armor","value":"+9"},{"label":"Attack Speed","value":"+13.5%"}]},"rank":{"tier":"Unranked","rankString":"Unranked"},"rank_last":{"tier":"Unranked","rankString":"Unranked"},"champion_stats":{"wins":null,"losses":null,"kills":null,"assists":null,"deaths":null,"total_games":"9","total_wins":"6","total_losses":"3"},"top_champions":[{"champion_id":"18","kills":"34","deaths":"24","assists":"30","wins":"2","losses":"1","played":"3","creep_score":"741","name":"Tristana","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Tristana.png"},{"champion_id":"21","kills":"14","deaths":"18","assists":"15","wins":"2","losses":"0","played":"2","creep_score":"440","name":"MissFortune","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/MissFortune.png"},{"champion_id":"236","kills":"19","deaths":"16","assists":"14","wins":"1","losses":"1","played":"2","creep_score":"556","name":"Lucian","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Lucian.png"}],"championName":"Thresh","championSquareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Thresh.png","championSplashImage":"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Thresh_0.jpg","masterie":{"ferocity":0,"cunning":12,"resolve":18},"itsMe":false,"spells":[{"spellName":"Flash","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"},{"spellName":"Ignite","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerDot.png"}]},{"teamId":200,"championId":81,"profileIconId":582,"summonerName":"Samess","summonerId":3278830,"runes":{"statistics":[{"label":"Attack Damage","value":"+15.26"},{"label":"Magic Resist","value":"+12.06"},{"label":"Armor","value":"+9"}]},"rank":{"tier":"gold","division":2,"rankString":"Gold II"},"rank_last":{"tier":"platinum","division":5,"rankString":"Platinum V"},"champion_stats":{"wins":null,"losses":null,"kills":null,"assists":null,"deaths":null,"total_games":"29","total_wins":"19","total_losses":"10"},"top_champions":[{"champion_id":"35","kills":"70","deaths":"54","assists":"52","wins":"6","losses":"2","played":"8","creep_score":"711","name":"Shaco","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Shaco.png"},{"champion_id":"105","kills":"58","deaths":"22","assists":"22","wins":"4","losses":"0","played":"4","creep_score":"698","name":"Fizz","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Fizz.png"},{"champion_id":"60","kills":"52","deaths":"29","assists":"27","wins":"1","losses":"3","played":"4","creep_score":"224","name":"Elise","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Elise.png"}],"championName":"Ezreal","championSquareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Ezreal.png","championSplashImage":"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ezreal_0.jpg","masterie":{"ferocity":12,"cunning":18,"resolve":0},"itsMe":false,"spells":[{"spellName":"Heal","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerHeal.png"},{"spellName":"Flash","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"}]},{"teamId":200,"championId":245,"profileIconId":1027,"summonerName":"Merhaba Ben Uras","summonerId":5771798,"runes":{"statistics":[{"label":"Attack Speed","value":"+15.28%"},{"label":"Ability Power","value":"+10.71"},{"label":"Armor","value":"+9"},{"label":"Health","value":"+78"}]},"rank":{"tier":"platinum","division":3,"rankString":"Platinum III"},"rank_last":{"tier":"gold","division":1,"rankString":"Gold I"},"champion_stats":{"wins":"1","losses":"0","kills":"9","assists":"9","deaths":"10","total_games":"155","total_wins":"90","total_losses":"65"},"top_champions":[{"champion_id":"60","kills":"517","deaths":"255","assists":"457","wins":"34","losses":"14","played":"48","creep_score":"2063","name":"Elise","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Elise.png"},{"champion_id":"79","kills":"238","deaths":"197","assists":"402","wins":"18","losses":"15","played":"33","creep_score":"1725","name":"Gragas","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Gragas.png"},{"champion_id":"90","kills":"87","deaths":"62","assists":"89","wins":"7","losses":"4","played":"11","creep_score":"2060","name":"Malzahar","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Malzahar.png"}],"championName":"Ekko","championSquareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Ekko.png","championSplashImage":"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ekko_0.jpg","masterie":{"ferocity":12,"cunning":18,"resolve":0},"itsMe":true,"spells":[{"spellName":"Teleport","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerTeleport.png"},{"spellName":"Flash","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"}]},{"teamId":200,"championId":25,"profileIconId":508,"summonerName":"Super Frank","summonerId":423824,"runes":{"statistics":[{"label":"Magic Pen","value":"+7.83"},{"label":"Ability Power","value":"+25.56"},{"label":"Armor","value":"+9"}]},"rank":{"tier":"gold","division":2,"rankString":"Gold II"},"rank_last":{"tier":"platinum","division":2,"rankString":"Platinum II"},"champion_stats":{"wins":"5","losses":"7","kills":"41","assists":"180","deaths":"65","total_games":"121","total_wins":"59","total_losses":"62"},"top_champions":[{"champion_id":"1","kills":"136","deaths":"86","assists":"135","wins":"11","losses":"8","played":"19","creep_score":"3019","name":"Annie","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Annie.png"},{"champion_id":"54","kills":"64","deaths":"88","assists":"96","wins":"3","losses":"10","played":"13","creep_score":"1774","name":"Malphite","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Malphite.png"},{"champion_id":"25","kills":"41","deaths":"65","assists":"180","wins":"5","losses":"7","played":"12","creep_score":"353","name":"Morgana","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Morgana.png"}],"championName":"Morgana","championSquareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Morgana.png","championSplashImage":"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Morgana_0.jpg","masterie":{"ferocity":0,"cunning":12,"resolve":18},"itsMe":false,"spells":[{"spellName":"Flash","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"},{"spellName":"Ignite","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerDot.png"}]},{"teamId":200,"championId":7,"profileIconId":759,"summonerName":"The Madly","summonerId":298400,"runes":{"statistics":[{"label":"Magic Pen","value":"+7.83"},{"label":"Cooldown","value":"-5%"},{"label":"Cooldown / Level","value":"-0.28% (-5.01% @ 18)"},{"label":"Magic Resist","value":"+6.68"},{"label":"Ability Power","value":"+14.85"}]},"rank":{"tier":"gold","division":2,"rankString":"Gold II"},"rank_last":{"tier":"diamond","division":5,"rankString":"Diamond V"},"champion_stats":{"wins":"2","losses":"1","kills":"38","assists":"25","deaths":"13","total_games":"192","total_wins":"102","total_losses":"90"},"top_champions":[{"champion_id":"64","kills":"147","deaths":"119","assists":"214","wins":"8","losses":"11","played":"19","creep_score":"654","name":"LeeSin","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/LeeSin.png"},{"champion_id":"222","kills":"191","deaths":"95","assists":"157","wins":"13","losses":"5","played":"18","creep_score":"3448","name":"Jinx","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Jinx.png"},{"champion_id":"67","kills":"148","deaths":"60","assists":"114","wins":"11","losses":"5","played":"16","creep_score":"3122","name":"Vayne","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Vayne.png"}],"championName":"Leblanc","championSquareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Leblanc.png","championSplashImage":"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Leblanc_0.jpg","masterie":{"ferocity":12,"cunning":18,"resolve":0},"itsMe":false,"spells":[{"spellName":"Flash","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"},{"spellName":"Ignite","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerDot.png"}]},{"teamId":200,"championId":78,"profileIconId":539,"summonerName":"D Grây Man","summonerId":881631,"runes":{"statistics":[{"label":"Attack Damage","value":"+15.26"},{"label":"Magic Resist","value":"+6.7"},{"label":"Cooldown","value":"-3.33%"},{"label":"Armor","value":"+9"}]},"rank":{"tier":"platinum","division":4,"rankString":"Platinum IV"},"rank_last":{"tier":"diamond","division":4,"rankString":"Diamond IV"},"champion_stats":{"wins":"2","losses":"4","kills":"33","assists":"71","deaths":"26","total_games":"72","total_wins":"33","total_losses":"39"},"top_champions":[{"champion_id":"154","kills":"64","deaths":"55","assists":"198","wins":"9","losses":"6","played":"15","creep_score":"522","name":"Zac","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Zac.png"},{"champion_id":"254","kills":"48","deaths":"35","assists":"54","wins":"4","losses":"3","played":"7","creep_score":"198","name":"Vi","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Vi.png"},{"champion_id":"81","kills":"54","deaths":"27","assists":"62","wins":"4","losses":"3","played":"7","creep_score":"1310","name":"Ezreal","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Ezreal.png"}],"championName":"Poppy","championSquareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Poppy.png","championSplashImage":"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_0.jpg","masterie":{"ferocity":6,"cunning":6,"resolve":18},"itsMe":false,"spells":[{"spellName":"Smite","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerSmite.png"},{"spellName":"Flash","spellUrl":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"}]}],"observers":{"encryptionKey":"ijktYLnYyR+KuY3SpRYZu48ujl3fWqYm"},"platformId":"TR1","bannedChampions":[{"championId":238,"teamId":100,"pickTurn":1,"name":"Zed","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Zed.png"},{"championId":12,"teamId":200,"pickTurn":2,"name":"Alistar","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Alistar.png"},{"championId":48,"teamId":100,"pickTurn":3,"name":"Trundle","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Trundle.png"},{"championId":105,"teamId":200,"pickTurn":4,"name":"Fizz","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Fizz.png"},{"championId":102,"teamId":100,"pickTurn":5,"name":"Shyvana","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Shyvana.png"},{"championId":111,"teamId":200,"pickTurn":6,"name":"Nautilus","squareImage":"http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Nautilus.png"}],"gameStartTime":1460119511479,"gameLength":146,"region":"tr","map":"Summoner's Rift","gameQueueConfig":"Ranked 5v5"},
  
  matchList:[
  {
    "matchId": 377880337,
    "region": "TR",
    "platformId": "TR1",
    "matchMode": "CLASSIC",
    "matchType": "MATCHED_GAME",
    "matchCreation": 1460157332263,
    "matchDuration": 1911,
    "queueType": "TEAM_BUILDER_DRAFT_RANKED_5x5",
    "mapId": 11,
    "season": "SEASON2016",
    "matchVersion": "6.7.139.3624",
    "teams": [
      {
        "teamId": 100,
        "winner": true,
        "firstBlood": false,
        "firstTower": false,
        "firstInhibitor": true,
        "firstBaron": false,
        "firstDragon": false,
        "firstRiftHerald": false,
        "towerKills": 10,
        "inhibitorKills": 1,
        "baronKills": 0,
        "dragonKills": 2,
        "riftHeraldKills": 0,
        "vilemawKills": 0,
        "dominionVictoryScore": 0,
        "bans": [
          {
            "championId": 54,
            "pickTurn": 1,
            "championName": "Malphite",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Malphite.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg"
          },
          {
            "championId": 111,
            "pickTurn": 3,
            "championName": "Nautilus",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Nautilus.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg"
          },
          {
            "championId": 238,
            "pickTurn": 5,
            "championName": "Zed",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Zed.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg"
          }
        ]
      },
      {
        "teamId": 200,
        "winner": false,
        "firstBlood": true,
        "firstTower": true,
        "firstInhibitor": false,
        "firstBaron": false,
        "firstDragon": true,
        "firstRiftHerald": false,
        "towerKills": 7,
        "inhibitorKills": 1,
        "baronKills": 0,
        "dragonKills": 1,
        "riftHeraldKills": 0,
        "vilemawKills": 0,
        "dominionVictoryScore": 0,
        "bans": [
          {
            "championId": 122,
            "pickTurn": 2,
            "championName": "Darius",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Darius.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg"
          },
          {
            "championId": 120,
            "pickTurn": 4,
            "championName": "Hecarim",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Hecarim.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg"
          },
          {
            "championId": 268,
            "pickTurn": 6,
            "championName": "Azir",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Azir.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg"
          }
        ]
      }
    ],
    "myData": {
      "teamId": 100,
      "championId": 79,
      "highestAchievedSeasonTier": "SILVER",
      "participantId": 3,
      "championName": "Gragas",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Gragas.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg",
      "spells": [
        {
          "spellName": "Flash",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"
        },
        {
          "spellName": "Smite",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerSmite.png"
        }
      ],
      "goldPerMinDeltas": {
        "zeroToTen": 220.70000000000002,
        "tenToTwenty": 376.6,
        "twentyToThirty": 399.8
      },
      "winner": true,
      "champLevel": 16,
      "kills": 3,
      "deaths": 6,
      "assists": 20,
      "items": [
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3025.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3047.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/1409.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3065.png"
      ],
      "totalGold": 11352,
      "minionsKilled": 23
    },
    "myDataIdentitiy": {
      "participantId": 3,
      "player": {
        "summonerId": 1882353,
        "summonerName": "YusufSeyrek",
        "matchHistoryUri": "/v1/stats/player_history/TR1/200144184",
        "profileIcon": 774
      }
    }
  },
  {
    "matchId": 377689742,
    "region": "TR",
    "platformId": "TR1",
    "matchMode": "CLASSIC",
    "matchType": "MATCHED_GAME",
    "matchCreation": 1460154885162,
    "matchDuration": 1878,
    "queueType": "TEAM_BUILDER_DRAFT_RANKED_5x5",
    "mapId": 11,
    "season": "SEASON2016",
    "matchVersion": "6.7.139.3624",
    "teams": [
      {
        "teamId": 100,
        "winner": false,
        "firstBlood": false,
        "firstTower": true,
        "firstInhibitor": false,
        "firstBaron": false,
        "firstDragon": false,
        "firstRiftHerald": false,
        "towerKills": 1,
        "inhibitorKills": 0,
        "baronKills": 0,
        "dragonKills": 1,
        "riftHeraldKills": 0,
        "vilemawKills": 0,
        "dominionVictoryScore": 0,
        "bans": [
          {
            "championId": 105,
            "pickTurn": 1,
            "championName": "Fizz",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Fizz.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg"
          },
          {
            "championId": 79,
            "pickTurn": 3,
            "championName": "Gragas",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Gragas.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg"
          },
          {
            "championId": 122,
            "pickTurn": 5,
            "championName": "Darius",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Darius.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg"
          }
        ]
      },
      {
        "teamId": 200,
        "winner": true,
        "firstBlood": true,
        "firstTower": false,
        "firstInhibitor": true,
        "firstBaron": true,
        "firstDragon": true,
        "firstRiftHerald": false,
        "towerKills": 9,
        "inhibitorKills": 2,
        "baronKills": 1,
        "dragonKills": 2,
        "riftHeraldKills": 0,
        "vilemawKills": 0,
        "dominionVictoryScore": 0,
        "bans": [
          {
            "championId": 131,
            "pickTurn": 2,
            "championName": "Diana",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Diana.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg"
          },
          {
            "championId": 11,
            "pickTurn": 4,
            "championName": "MasterYi",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/MasterYi.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg"
          },
          {
            "championId": 114,
            "pickTurn": 6,
            "championName": "Fiora",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Fiora.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg"
          }
        ]
      }
    ],
    "myData": {
      "teamId": 200,
      "championId": 113,
      "highestAchievedSeasonTier": "SILVER",
      "participantId": 10,
      "championName": "Sejuani",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Sejuani.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg",
      "spells": [
        {
          "spellName": "Flash",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"
        },
        {
          "spellName": "Smite",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerSmite.png"
        }
      ],
      "goldPerMinDeltas": {
        "zeroToTen": 238.2,
        "tenToTwenty": 384.3,
        "twentyToThirty": 459
      },
      "winner": true,
      "champLevel": 15,
      "kills": 7,
      "deaths": 3,
      "assists": 11,
      "items": [
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3190.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3800.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3009.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3742.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/1401.png"
      ],
      "totalGold": 11770,
      "minionsKilled": 23
    },
    "myDataIdentitiy": {
      "participantId": 10,
      "player": {
        "summonerId": 1882353,
        "summonerName": "YusufSeyrek",
        "matchHistoryUri": "/v1/stats/player_history/TR1/200144184",
        "profileIcon": 774
      }
    }
  },
  {
    "matchId": 377697277,
    "region": "TR",
    "platformId": "TR1",
    "matchMode": "CLASSIC",
    "matchType": "MATCHED_GAME",
    "matchCreation": 1460150051863,
    "matchDuration": 2270,
    "queueType": "TEAM_BUILDER_DRAFT_RANKED_5x5",
    "mapId": 11,
    "season": "SEASON2016",
    "matchVersion": "6.7.139.3624",
    "teams": [
      {
        "teamId": 100,
        "winner": true,
        "firstBlood": true,
        "firstTower": false,
        "firstInhibitor": true,
        "firstBaron": true,
        "firstDragon": false,
        "firstRiftHerald": true,
        "towerKills": 9,
        "inhibitorKills": 2,
        "baronKills": 1,
        "dragonKills": 3,
        "riftHeraldKills": 1,
        "vilemawKills": 0,
        "dominionVictoryScore": 0,
        "bans": [
          {
            "championId": 238,
            "pickTurn": 1,
            "championName": "Zed",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Zed.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg"
          },
          {
            "championId": 54,
            "pickTurn": 3,
            "championName": "Malphite",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Malphite.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg"
          },
          {
            "championId": 245,
            "pickTurn": 5,
            "championName": "Ekko",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Ekko.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg"
          }
        ]
      },
      {
        "teamId": 200,
        "winner": false,
        "firstBlood": false,
        "firstTower": true,
        "firstInhibitor": false,
        "firstBaron": false,
        "firstDragon": true,
        "firstRiftHerald": false,
        "towerKills": 3,
        "inhibitorKills": 0,
        "baronKills": 0,
        "dragonKills": 1,
        "riftHeraldKills": 0,
        "vilemawKills": 0,
        "dominionVictoryScore": 0,
        "bans": [
          {
            "championId": 12,
            "pickTurn": 2,
            "championName": "Alistar",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Alistar.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg"
          },
          {
            "championId": 157,
            "pickTurn": 4,
            "championName": "Yasuo",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Yasuo.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg"
          },
          {
            "championId": 39,
            "pickTurn": 6,
            "championName": "Irelia",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Irelia.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg"
          }
        ]
      }
    ],
    "myData": {
      "teamId": 100,
      "championId": 201,
      "highestAchievedSeasonTier": "SILVER",
      "participantId": 5,
      "championName": "Braum",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Braum.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg",
      "spells": [
        {
          "spellName": "Flash",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"
        },
        {
          "spellName": "Exhaust",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerExhaust.png"
        }
      ],
      "goldPerMinDeltas": {
        "zeroToTen": 152.7,
        "tenToTwenty": 349.2,
        "twentyToThirty": 288,
        "thirtyToEnd": 477.6
      },
      "winner": true,
      "champLevel": 13,
      "kills": 0,
      "deaths": 11,
      "assists": 18,
      "items": [
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3401.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3800.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/2045.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3009.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3742.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/1006.png"
      ],
      "totalGold": 11473,
      "minionsKilled": 51
    },
    "myDataIdentitiy": {
      "participantId": 5,
      "player": {
        "summonerId": 1882353,
        "summonerName": "YusufSeyrek",
        "matchHistoryUri": "/v1/stats/player_history/TR1/200144184",
        "profileIcon": 774
      }
    }
  },
  {
    "matchId": 377686057,
    "region": "TR",
    "platformId": "TR1",
    "matchMode": "CLASSIC",
    "matchType": "MATCHED_GAME",
    "matchCreation": 1460147609055,
    "matchDuration": 1788,
    "queueType": "TEAM_BUILDER_DRAFT_RANKED_5x5",
    "mapId": 11,
    "season": "SEASON2016",
    "matchVersion": "6.7.139.3624",
    "teams": [
      {
        "teamId": 100,
        "winner": true,
        "firstBlood": false,
        "firstTower": false,
        "firstInhibitor": true,
        "firstBaron": false,
        "firstDragon": true,
        "firstRiftHerald": true,
        "towerKills": 9,
        "inhibitorKills": 1,
        "baronKills": 0,
        "dragonKills": 3,
        "riftHeraldKills": 1,
        "vilemawKills": 0,
        "dominionVictoryScore": 0,
        "bans": [
          {
            "championId": 11,
            "pickTurn": 1,
            "championName": "MasterYi",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/MasterYi.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg"
          },
          {
            "championId": 245,
            "pickTurn": 3,
            "championName": "Ekko",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Ekko.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg"
          },
          {
            "championId": 121,
            "pickTurn": 5,
            "championName": "Khazix",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Khazix.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg"
          }
        ]
      },
      {
        "teamId": 200,
        "winner": false,
        "firstBlood": true,
        "firstTower": true,
        "firstInhibitor": false,
        "firstBaron": false,
        "firstDragon": false,
        "firstRiftHerald": false,
        "towerKills": 2,
        "inhibitorKills": 0,
        "baronKills": 0,
        "dragonKills": 0,
        "riftHeraldKills": 0,
        "vilemawKills": 0,
        "dominionVictoryScore": 0,
        "bans": [
          {
            "championId": 238,
            "pickTurn": 2,
            "championName": "Zed",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Zed.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg"
          },
          {
            "championId": 102,
            "pickTurn": 4,
            "championName": "Shyvana",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Shyvana.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg"
          },
          {
            "championId": 5,
            "pickTurn": 6,
            "championName": "XinZhao",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/XinZhao.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg"
          }
        ]
      }
    ],
    "myData": {
      "teamId": 100,
      "championId": 25,
      "highestAchievedSeasonTier": "SILVER",
      "participantId": 5,
      "championName": "Morgana",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Morgana.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg",
      "spells": [
        {
          "spellName": "Flash",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"
        },
        {
          "spellName": "Exhaust",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerExhaust.png"
        }
      ],
      "goldPerMinDeltas": {
        "zeroToTen": 166.9,
        "tenToTwenty": 436.29999999999995
      },
      "winner": true,
      "champLevel": 14,
      "kills": 4,
      "deaths": 6,
      "assists": 18,
      "items": [
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3157.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3092.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3801.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3117.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3050.png"
      ],
      "totalGold": 11384,
      "minionsKilled": 24
    },
    "myDataIdentitiy": {
      "participantId": 5,
      "player": {
        "summonerId": 1882353,
        "summonerName": "YusufSeyrek",
        "matchHistoryUri": "/v1/stats/player_history/TR1/200144184",
        "profileIcon": 774
      }
    }
  },
  {
    "matchId": 377316966,
    "region": "TR",
    "platformId": "TR1",
    "matchMode": "CLASSIC",
    "matchType": "MATCHED_GAME",
    "matchCreation": 1460056450769,
    "matchDuration": 2254,
    "queueType": "TEAM_BUILDER_DRAFT_RANKED_5x5",
    "mapId": 11,
    "season": "SEASON2016",
    "matchVersion": "6.7.139.3624",
    "teams": [
      {
        "teamId": 100,
        "winner": false,
        "firstBlood": false,
        "firstTower": false,
        "firstInhibitor": false,
        "firstBaron": true,
        "firstDragon": false,
        "firstRiftHerald": true,
        "towerKills": 5,
        "inhibitorKills": 1,
        "baronKills": 1,
        "dragonKills": 2,
        "riftHeraldKills": 1,
        "vilemawKills": 0,
        "dominionVictoryScore": 0,
        "bans": [
          {
            "championId": 136,
            "pickTurn": 1,
            "championName": "AurelionSol",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/AurelionSol.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg"
          },
          {
            "championId": 86,
            "pickTurn": 3,
            "championName": "Garen",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Garen.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg"
          },
          {
            "championId": 25,
            "pickTurn": 5,
            "championName": "Morgana",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Morgana.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg"
          }
        ]
      },
      {
        "teamId": 200,
        "winner": true,
        "firstBlood": true,
        "firstTower": true,
        "firstInhibitor": true,
        "firstBaron": false,
        "firstDragon": true,
        "firstRiftHerald": false,
        "towerKills": 11,
        "inhibitorKills": 3,
        "baronKills": 0,
        "dragonKills": 2,
        "riftHeraldKills": 0,
        "vilemawKills": 0,
        "dominionVictoryScore": 0,
        "bans": [
          {
            "championId": 54,
            "pickTurn": 2,
            "championName": "Malphite",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Malphite.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg"
          },
          {
            "championId": 122,
            "pickTurn": 4,
            "championName": "Darius",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Darius.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg"
          },
          {
            "championId": 78,
            "pickTurn": 6,
            "championName": "Poppy",
            "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Poppy.png",
            "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg"
          }
        ]
      }
    ],
    "myData": {
      "teamId": 200,
      "championId": 267,
      "highestAchievedSeasonTier": "SILVER",
      "participantId": 9,
      "championName": "Nami",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Nami.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg",
      "spells": [
        {
          "spellName": "Flash",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"
        },
        {
          "spellName": "Exhaust",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerExhaust.png"
        }
      ],
      "goldPerMinDeltas": {
        "zeroToTen": 229.60000000000002,
        "tenToTwenty": 322.4,
        "twentyToThirty": 378,
        "thirtyToEnd": 201.8
      },
      "winner": true,
      "champLevel": 15,
      "kills": 2,
      "deaths": 5,
      "assists": 20,
      "items": [
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3092.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3190.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3222.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/1327.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/3024.png",
        "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/item/1052.png"
      ],
      "totalGold": 12119,
      "minionsKilled": 9
    },
    "myDataIdentitiy": {
      "participantId": 9,
      "player": {
        "summonerId": 1882353,
        "summonerName": "YusufSeyrek",
        "matchHistoryUri": "/v1/stats/player_history/TR1/200144184",
        "profileIcon": 774
      }
    }
  }
]
};

module.exports = StaticData;
