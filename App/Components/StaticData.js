


let StaticData = {
  BLUE_COLOR : '#255a8a',
  PURPLE_COLOR : 'purple',
  GOLD_COLOR : '#FFB347',
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
  dummy : {
  "gameId": 380301186,
  "mapId": 11,
  "gameMode": "CLASSIC",
  "gameType": "MATCHED_GAME",
  "gameQueueConfigId": 410,
  "participants": [
    {
      "teamId": 100,
      "championId": 67,
      "profileIconId": 906,
      "summonerName": "veil Nebulâ",
      "summonerId": 2832285,
      "runes": {
        "statistics": [
          {
            "label": "Attack Damage",
            "value": "+8.51"
          },
          {
            "label": "Attack Speed",
            "value": "+16.05%"
          },
          {
            "label": "Magic Resist",
            "value": "+6.7"
          },
          {
            "label": "Armor",
            "value": "+9"
          }
        ]
      },
      "rank": {
        "tier": "diamond",
        "division": 1,
        "rankString": "Diamond I"
      },
      "rank_last": {
        "tier": "diamond",
        "division": 4,
        "rankString": "Diamond IV"
      },
      "champion_stats": {
        "wins": "34",
        "losses": "18",
        "kills": "380",
        "assists": "343",
        "deaths": "244",
        "total_games": "256",
        "total_wins": "142",
        "total_losses": "114"
      },
      "top_champions": [
        {
          "champion_id": "236",
          "kills": "469",
          "deaths": "293",
          "assists": "413",
          "wins": "32",
          "losses": "28",
          "played": "60",
          "creep_score": "13410",
          "name": "Lucian",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Lucian.png"
        },
        {
          "champion_id": "67",
          "kills": "380",
          "deaths": "244",
          "assists": "343",
          "wins": "34",
          "losses": "18",
          "played": "52",
          "creep_score": "9720",
          "name": "Vayne",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Vayne.png"
        },
        {
          "champion_id": "81",
          "kills": "123",
          "deaths": "89",
          "assists": "134",
          "wins": "8",
          "losses": "14",
          "played": "22",
          "creep_score": "3708",
          "name": "Ezreal",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Ezreal.png"
        }
      ],
      "championName": "Vayne",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Vayne.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vayne_0.jpg",
      "masterie": {
        "ferocity": 18,
        "cunning": 12,
        "resolve": 0
      },
      "itsMe": false,
      "spells": [
        {
          "spellName": "Flash",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"
        },
        {
          "spellName": "Heal",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerHeal.png"
        }
      ],
      "profileIconImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/906.png"
    },
    {
      "teamId": 100,
      "championId": 12,
      "profileIconId": 912,
      "summonerName": "67 MUSTANG GT500",
      "summonerId": 2272730,
      "runes": {
        "statistics": [
          {
            "label": "Armor",
            "value": "+8.23"
          },
          {
            "label": "Magic Resist",
            "value": "+12.06"
          },
          {
            "label": "Mana Regen",
            "value": "+0.73"
          },
          {
            "label": "Ability Power",
            "value": "+14.85"
          }
        ]
      },
      "rank": {
        "tier": "challenger",
        "division": 1,
        "rankString": "Challenger I"
      },
      "rank_last": {
        "tier": "gold",
        "division": 5,
        "rankString": "Gold V"
      },
      "champion_stats": {
        "wins": "12",
        "losses": "8",
        "kills": "49",
        "assists": "236",
        "deaths": "75",
        "total_games": "328",
        "total_wins": "210",
        "total_losses": "118"
      },
      "top_champions": [
        {
          "champion_id": "25",
          "kills": "729",
          "deaths": "569",
          "assists": "1883",
          "wins": "91",
          "losses": "51",
          "played": "142",
          "creep_score": "10158",
          "name": "Morgana",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Morgana.png"
        },
        {
          "champion_id": "43",
          "kills": "274",
          "deaths": "325",
          "assists": "1095",
          "wins": "49",
          "losses": "33",
          "played": "82",
          "creep_score": "5041",
          "name": "Karma",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Karma.png"
        },
        {
          "champion_id": "91",
          "kills": "515",
          "deaths": "193",
          "assists": "303",
          "wins": "31",
          "losses": "11",
          "played": "42",
          "creep_score": "8707",
          "name": "Talon",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Talon.png"
        }
      ],
      "championName": "Alistar",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Alistar.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Alistar_0.jpg",
      "masterie": {
        "ferocity": 12,
        "cunning": 18,
        "resolve": 0
      },
      "itsMe": false,
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
      "profileIconImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/912.png"
    },
    {
      "teamId": 100,
      "championId": 33,
      "profileIconId": 562,
      "summonerName": "Anasterian",
      "summonerId": 419551,
      "runes": {
        "statistics": [
          {
            "label": "Attack Speed",
            "value": "+15.28%"
          },
          {
            "label": "Magic Resist / Level",
            "value": "+1.5 (+27 @ 18)"
          },
          {
            "label": "Armor",
            "value": "+9"
          },
          {
            "label": "Ability Power",
            "value": "+14.85"
          }
        ]
      },
      "rank": {
        "tier": "diamond",
        "division": 1,
        "rankString": "Diamond I"
      },
      "rank_last": {
        "tier": "challenger",
        "division": 1,
        "rankString": "Challenger I"
      },
      "champion_stats": {
        "wins": "0",
        "losses": "1",
        "kills": "10",
        "assists": "11",
        "deaths": "6",
        "total_games": "289",
        "total_wins": "154",
        "total_losses": "135"
      },
      "top_champions": [
        {
          "champion_id": "8",
          "kills": "761",
          "deaths": "539",
          "assists": "884",
          "wins": "78",
          "losses": "55",
          "played": "133",
          "creep_score": "24358",
          "name": "Vladimir",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Vladimir.png"
        },
        {
          "champion_id": "36",
          "kills": "253",
          "deaths": "254",
          "assists": "481",
          "wins": "37",
          "losses": "21",
          "played": "58",
          "creep_score": "10313",
          "name": "DrMundo",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/DrMundo.png"
        },
        {
          "champion_id": "16",
          "kills": "19",
          "deaths": "90",
          "assists": "249",
          "wins": "9",
          "losses": "10",
          "played": "19",
          "creep_score": "300",
          "name": "Soraka",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Soraka.png"
        }
      ],
      "championName": "Rammus",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Rammus.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rammus_0.jpg",
      "masterie": {
        "ferocity": 0,
        "cunning": 12,
        "resolve": 18
      },
      "itsMe": true,
      "spells": [
        {
          "spellName": "Teleport",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerTeleport.png"
        },
        {
          "spellName": "Flash",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"
        }
      ],
      "profileIconImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/562.png"
    },
    {
      "teamId": 100,
      "championId": 103,
      "profileIconId": 771,
      "summonerName": "Gaddar Omar",
      "summonerId": 2073036,
      "runes": {
        "statistics": [
          {
            "label": "Magic Pen",
            "value": "+7.83"
          },
          {
            "label": "Ability Power",
            "value": "+25.56"
          },
          {
            "label": "Armor",
            "value": "+9"
          }
        ]
      },
      "rank": {
        "tier": "challenger",
        "division": 1,
        "rankString": "Challenger I"
      },
      "rank_last": {
        "tier": "diamond",
        "division": 2,
        "rankString": "Diamond II"
      },
      "champion_stats": {
        "wins": "0",
        "losses": "1",
        "kills": "1",
        "assists": "1",
        "deaths": "1",
        "total_games": "199",
        "total_wins": "121",
        "total_losses": "78"
      },
      "top_champions": [
        {
          "champion_id": "60",
          "kills": "199",
          "deaths": "85",
          "assists": "221",
          "wins": "16",
          "losses": "7",
          "played": "23",
          "creep_score": "726",
          "name": "Elise",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Elise.png"
        },
        {
          "champion_id": "39",
          "kills": "109",
          "deaths": "54",
          "assists": "105",
          "wins": "13",
          "losses": "5",
          "played": "18",
          "creep_score": "2721",
          "name": "Irelia",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Irelia.png"
        },
        {
          "champion_id": "236",
          "kills": "116",
          "deaths": "66",
          "assists": "117",
          "wins": "9",
          "losses": "6",
          "played": "15",
          "creep_score": "3001",
          "name": "Lucian",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Lucian.png"
        }
      ],
      "championName": "Ahri",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Ahri.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg",
      "masterie": {
        "ferocity": 12,
        "cunning": 18,
        "resolve": 0
      },
      "itsMe": false,
      "spells": [
        {
          "spellName": "Flash",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"
        },
        {
          "spellName": "Ignite",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerDot.png"
        }
      ],
      "profileIconImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/771.png"
    },
    {
      "teamId": 100,
      "championId": 76,
      "profileIconId": 1078,
      "summonerName": "EG0 Womanizer",
      "summonerId": 1941748,
      "runes": {
        "statistics": [
          {
            "label": "Attack Damage",
            "value": "+8.51"
          },
          {
            "label": "Ability Power",
            "value": "+25.56"
          },
          {
            "label": "Armor",
            "value": "+9"
          }
        ]
      },
      "rank": {
        "tier": "master",
        "division": 1,
        "rankString": "Master I"
      },
      "rank_last": {
        "tier": "challenger",
        "division": 1,
        "rankString": "Challenger I"
      },
      "champion_stats": {
        "wins": "28",
        "losses": "11",
        "kills": "424",
        "assists": "298",
        "deaths": "204",
        "total_games": "151",
        "total_wins": "88",
        "total_losses": "63"
      },
      "top_champions": [
        {
          "champion_id": "76",
          "kills": "424",
          "deaths": "204",
          "assists": "298",
          "wins": "28",
          "losses": "11",
          "played": "39",
          "creep_score": "1776",
          "name": "Nidalee",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Nidalee.png"
        },
        {
          "champion_id": "103",
          "kills": "127",
          "deaths": "77",
          "assists": "95",
          "wins": "12",
          "losses": "2",
          "played": "14",
          "creep_score": "3000",
          "name": "Ahri",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Ahri.png"
        },
        {
          "champion_id": "64",
          "kills": "162",
          "deaths": "106",
          "assists": "114",
          "wins": "6",
          "losses": "6",
          "played": "12",
          "creep_score": "751",
          "name": "LeeSin",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/LeeSin.png"
        }
      ],
      "championName": "Nidalee",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Nidalee.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Nidalee_0.jpg",
      "masterie": {
        "ferocity": 12,
        "cunning": 0,
        "resolve": 18
      },
      "itsMe": false,
      "spells": [
        {
          "spellName": "Smite",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerSmite.png"
        },
        {
          "spellName": "Flash",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"
        }
      ],
      "profileIconImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/1078.png"
    },
    {
      "teamId": 200,
      "championId": 107,
      "profileIconId": 1106,
      "summonerName": "Güvercin Kira",
      "summonerId": 8192892,
      "runes": {
        "statistics": [
          {
            "label": "Attack Damage",
            "value": "+7.92"
          },
          {
            "label": "Attack Speed",
            "value": "+14.09%"
          },
          {
            "label": "Magic Resist",
            "value": "+6.7"
          },
          {
            "label": "Cooldown",
            "value": "-3.33%"
          },
          {
            "label": "Armor",
            "value": "+9"
          }
        ]
      },
      "rank": {
        "tier": "challenger",
        "division": 1,
        "rankString": "Challenger I"
      },
      "rank_last": {
        "tier": "master",
        "division": 1,
        "rankString": "Master I"
      },
      "champion_stats": {
        "wins": "0",
        "losses": "1",
        "kills": "1",
        "assists": "3",
        "deaths": "5",
        "total_games": "239",
        "total_wins": "150",
        "total_losses": "89"
      },
      "top_champions": [
        {
          "champion_id": "104",
          "kills": "415",
          "deaths": "204",
          "assists": "361",
          "wins": "37",
          "losses": "14",
          "played": "51",
          "creep_score": "4489",
          "name": "Graves",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Graves.png"
        },
        {
          "champion_id": "60",
          "kills": "229",
          "deaths": "166",
          "assists": "219",
          "wins": "23",
          "losses": "11",
          "played": "34",
          "creep_score": "1490",
          "name": "Elise",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Elise.png"
        },
        {
          "champion_id": "102",
          "kills": "204",
          "deaths": "135",
          "assists": "187",
          "wins": "16",
          "losses": "12",
          "played": "28",
          "creep_score": "2440",
          "name": "Shyvana",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Shyvana.png"
        }
      ],
      "championName": "Rengar",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Rengar.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rengar_0.jpg",
      "masterie": {
        "ferocity": 12,
        "cunning": 18,
        "resolve": 0
      },
      "itsMe": false,
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
      "profileIconImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/1106.png"
    },
    {
      "teamId": 200,
      "championId": 83,
      "profileIconId": 761,
      "summonerName": "Dartz",
      "summonerId": 492484,
      "runes": {
        "statistics": [
          {
            "label": "Armor Pen",
            "value": "+16.64"
          },
          {
            "label": "Magic Resist",
            "value": "+12.06"
          },
          {
            "label": "Health / Level",
            "value": "+12 (+216.01 @ 18)"
          },
          {
            "label": "Attack Damage",
            "value": "+2.25"
          }
        ]
      },
      "rank": {
        "tier": "diamond",
        "division": 1,
        "rankString": "Diamond I"
      },
      "rank_last": {
        "tier": "diamond",
        "division": 4,
        "rankString": "Diamond IV"
      },
      "champion_stats": {
        "wins": "4",
        "losses": "0",
        "kills": "16",
        "assists": "31",
        "deaths": "12",
        "total_games": "244",
        "total_wins": "135",
        "total_losses": "109"
      },
      "top_champions": [
        {
          "champion_id": "114",
          "kills": "202",
          "deaths": "133",
          "assists": "148",
          "wins": "16",
          "losses": "13",
          "played": "29",
          "creep_score": "5742",
          "name": "Fiora",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Fiora.png"
        },
        {
          "champion_id": "236",
          "kills": "163",
          "deaths": "104",
          "assists": "145",
          "wins": "10",
          "losses": "13",
          "played": "23",
          "creep_score": "4766",
          "name": "Lucian",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Lucian.png"
        },
        {
          "champion_id": "36",
          "kills": "86",
          "deaths": "83",
          "assists": "142",
          "wins": "11",
          "losses": "9",
          "played": "20",
          "creep_score": "4228",
          "name": "DrMundo",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/DrMundo.png"
        }
      ],
      "championName": "Yorick",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Yorick.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yorick_0.jpg",
      "masterie": {
        "ferocity": 18,
        "cunning": 12,
        "resolve": 0
      },
      "itsMe": false,
      "spells": [
        {
          "spellName": "Flash",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"
        },
        {
          "spellName": "Teleport",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerTeleport.png"
        }
      ],
      "profileIconImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/761.png"
    },
    {
      "teamId": 200,
      "championId": 133,
      "profileIconId": 1023,
      "summonerName": "Nyctophiliâ",
      "summonerId": 262112,
      "runes": {
        "statistics": [
          {
            "label": "Attack Damage",
            "value": "+8.51"
          },
          {
            "label": "Magic Resist",
            "value": "+12.06"
          },
          {
            "label": "Armor",
            "value": "+9"
          },
          {
            "label": "Attack Speed",
            "value": "+13.5%"
          }
        ]
      },
      "rank": {
        "tier": "challenger",
        "division": 1,
        "rankString": "Challenger I"
      },
      "rank_last": {
        "tier": "challenger",
        "division": 1,
        "rankString": "Challenger I"
      },
      "champion_stats": {
        "wins": "19",
        "losses": "6",
        "kills": "244",
        "assists": "211",
        "deaths": "130",
        "total_games": "172",
        "total_wins": "109",
        "total_losses": "63"
      },
      "top_champions": [
        {
          "champion_id": "133",
          "kills": "244",
          "deaths": "130",
          "assists": "211",
          "wins": "19",
          "losses": "6",
          "played": "25",
          "creep_score": "3760",
          "name": "Quinn",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Quinn.png"
        },
        {
          "champion_id": "34",
          "kills": "119",
          "deaths": "53",
          "assists": "113",
          "wins": "11",
          "losses": "6",
          "played": "17",
          "creep_score": "3448",
          "name": "Anivia",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Anivia.png"
        },
        {
          "champion_id": "7",
          "kills": "170",
          "deaths": "101",
          "assists": "102",
          "wins": "9",
          "losses": "8",
          "played": "17",
          "creep_score": "2644",
          "name": "Leblanc",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Leblanc.png"
        }
      ],
      "championName": "Quinn",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Quinn.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Quinn_0.jpg",
      "masterie": {
        "ferocity": 12,
        "cunning": 18,
        "resolve": 0
      },
      "itsMe": false,
      "spells": [
        {
          "spellName": "Ignite",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerDot.png"
        },
        {
          "spellName": "Flash",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"
        }
      ],
      "profileIconImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/1023.png"
    },
    {
      "teamId": 200,
      "championId": 236,
      "profileIconId": 987,
      "summonerName": "Edward Elric W",
      "summonerId": 621570,
      "runes": {
        "statistics": [
          {
            "label": "Attack Damage",
            "value": "+8.51"
          },
          {
            "label": "Attack Speed",
            "value": "+16.05%"
          },
          {
            "label": "Magic Resist",
            "value": "+6.7"
          },
          {
            "label": "Health",
            "value": "+40"
          },
          {
            "label": "Armor",
            "value": "+4"
          }
        ]
      },
      "rank": {
        "tier": "challenger",
        "division": 1,
        "rankString": "Challenger I"
      },
      "rank_last": {
        "tier": "challenger",
        "division": 1,
        "rankString": "Challenger I"
      },
      "champion_stats": {
        "wins": "26",
        "losses": "19",
        "kills": "301",
        "assists": "287",
        "deaths": "205",
        "total_games": "216",
        "total_wins": "123",
        "total_losses": "93"
      },
      "top_champions": [
        {
          "champion_id": "81",
          "kills": "405",
          "deaths": "263",
          "assists": "447",
          "wins": "31",
          "losses": "21",
          "played": "52",
          "creep_score": "10211",
          "name": "Ezreal",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Ezreal.png"
        },
        {
          "champion_id": "236",
          "kills": "301",
          "deaths": "205",
          "assists": "287",
          "wins": "26",
          "losses": "19",
          "played": "45",
          "creep_score": "9403",
          "name": "Lucian",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Lucian.png"
        },
        {
          "champion_id": "51",
          "kills": "189",
          "deaths": "164",
          "assists": "221",
          "wins": "18",
          "losses": "13",
          "played": "31",
          "creep_score": "6201",
          "name": "Caitlyn",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Caitlyn.png"
        }
      ],
      "championName": "Lucian",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Lucian.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Lucian_0.jpg",
      "masterie": {
        "ferocity": 18,
        "cunning": 12,
        "resolve": 0
      },
      "itsMe": false,
      "spells": [
        {
          "spellName": "Heal",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerHeal.png"
        },
        {
          "spellName": "Flash",
          "spellUrl": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/spell/SummonerFlash.png"
        }
      ],
      "profileIconImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/987.png"
    },
    {
      "teamId": 200,
      "championId": 201,
      "profileIconId": 22,
      "summonerName": "Bâbe",
      "summonerId": 630838,
      "runes": {
        "statistics": [
          {
            "label": "Armor",
            "value": "+15.49"
          },
          {
            "label": "Magic Resist",
            "value": "+4.02"
          },
          {
            "label": "Cooldown",
            "value": "-5%"
          },
          {
            "label": "Health",
            "value": "+48"
          },
          {
            "label": "Health Regen",
            "value": "+1.08"
          }
        ]
      },
      "rank": {
        "tier": "challenger",
        "division": 1,
        "rankString": "Challenger I"
      },
      "rank_last": {
        "tier": "challenger",
        "division": 1,
        "rankString": "Challenger I"
      },
      "champion_stats": {
        "wins": "31",
        "losses": "17",
        "kills": "49",
        "assists": "617",
        "deaths": "195",
        "total_games": "260",
        "total_wins": "155",
        "total_losses": "105"
      },
      "top_champions": [
        {
          "champion_id": "201",
          "kills": "49",
          "deaths": "195",
          "assists": "617",
          "wins": "31",
          "losses": "17",
          "played": "48",
          "creep_score": "1881",
          "name": "Braum",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Braum.png"
        },
        {
          "champion_id": "412",
          "kills": "90",
          "deaths": "238",
          "assists": "643",
          "wins": "27",
          "losses": "21",
          "played": "48",
          "creep_score": "1598",
          "name": "Thresh",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Thresh.png"
        },
        {
          "champion_id": "421",
          "kills": "148",
          "deaths": "93",
          "assists": "345",
          "wins": "20",
          "losses": "10",
          "played": "30",
          "creep_score": "1429",
          "name": "RekSai",
          "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/RekSai.png"
        }
      ],
      "championName": "Braum",
      "championSquareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Braum.png",
      "championSplashImage": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Braum_0.jpg",
      "masterie": {
        "ferocity": 0,
        "cunning": 12,
        "resolve": 18
      },
      "itsMe": false,
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
      "profileIconImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/profileicon/22.png"
    }
  ],
  "observers": {
    "encryptionKey": "e00QplMvzvRTm73HFhlTGpcQkKnzojo6"
  },
  "platformId": "TR1",
  "bannedChampions": [
    {
      "championId": 54,
      "teamId": 100,
      "pickTurn": 1,
      "name": "Malphite",
      "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Malphite.png"
    },
    {
      "championId": 111,
      "teamId": 200,
      "pickTurn": 2,
      "name": "Nautilus",
      "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Nautilus.png"
    },
    {
      "championId": 16,
      "teamId": 100,
      "pickTurn": 3,
      "name": "Soraka",
      "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Soraka.png"
    },
    {
      "championId": 203,
      "teamId": 200,
      "pickTurn": 4,
      "name": "Kindred",
      "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Kindred.png"
    },
    {
      "championId": 11,
      "teamId": 100,
      "pickTurn": 5,
      "name": "MasterYi",
      "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/MasterYi.png"
    },
    {
      "championId": 245,
      "teamId": 200,
      "pickTurn": 6,
      "name": "Ekko",
      "squareImage": "http://ddragon.leagueoflegends.com/cdn/6.7.1/img/champion/Ekko.png"
    }
  ],
  "gameStartTime": 1460729444767,
  "gameLength": 498,
  "region": "tr",
  "map": "Summoner's Rift",
  "gameQueueConfig": "Ranked 5v5",
  "replayStatus": 1
},
  
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
        "winner": false,
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
      "winner": false,
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
