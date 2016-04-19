
import Store from 'react-native-simple-store';
const STORE_KEY = 'summoner_history';

let Utils = {
    addSummonerToHistory(summoner){
        var summoner = this.formatSummonerData(summoner);
        Store.get(STORE_KEY).then((summonerList)=>{
            if(summonerList){
                summonerList = this.checkForDuplicateSummoner(summoner,summonerList);
                if(summonerList.length > 2){
                    summonerList.splice(0, summonerList.length - 2);
                }
                summonerList.push(summoner);
            }else{
                summonerList = [];
                summonerList.push(summoner);
            }
            Store.save(STORE_KEY,summonerList).then(()=>{
                return new Promise(function (resolve,reject) {
                    resolve(summoner);
                })
            });
        });
    },
    checkForDuplicateSummoner(summoner, summonerList){
        summonerList.forEach(function(item, index) {
            if(item.summonerName === summoner.summonerName){
                summonerList.splice(index, 1);
            }
        });
        return summonerList;
    },
    formatSummonerData(summoner){
        var data = {
            region : summoner.region 
        };
        summoner.participants.forEach(function (item) {
            if(item.itsMe){
                data.summonerName = item.summonerName;
                data.rankString = item.rank.rankString;
                data.summonerId = item.summonerId;
                data.profileIconImage = item.profileIconImage;
                return ;
            }
        });
        return data;
        
    },
    getSummonersFromHistory(){
        return Store.get(STORE_KEY).then((list) => list.reverse())
    },
    calculateStats(stats){
        var kill,death,assist,winRate, totalPlayedGame;
        
        if(stats.kills == null || stats.deaths == null || stats.assists == null || stats){
            return {kill : 0, death: 0, assist: 0, wins: 0, losses: 0, winRate: 0, totalPlayed: 0};
        }
        totalPlayedGame = parseInt(stats.wins) + parseInt(stats.losses)
        
        kill =  parseInt(stats.kills) / totalPlayedGame;
        death =  parseInt(stats.deaths) / totalPlayedGame;
        assist = parseInt(stats.assists) / totalPlayedGame;
        winRate = (parseInt(stats.wins) / (totalPlayedGame)) * 100;
            
        return {
            kill : kill.toFixed(1), 
            death: death.toFixed(1), 
            assist: assist.toFixed(1), 
            wins: stats.wins, 
            losses: stats.losses, 
            totalPlayed : totalPlayedGame,
            winRate: winRate.toFixed(0)
        };
    },
    calculateKda(kill,death,assist){
        var kda = (kill + assist) / death ;
        newKda = kda.toFixed(2);
        return newKda
    },
    calculateTotalGold(totalGold){
        
        var total_gold = Math.round((totalGold / 1000));
        return total_gold
        
    }
    
}

    

module.exports = Utils;