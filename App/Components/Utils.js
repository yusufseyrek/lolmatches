
import Store from 'react-native-simple-store';
const STORE_KEY = 'summoner_history';

let Utils = {
    addSummonerToHistory(summoner){
        var summoner = this.formatSummonerData(summoner);
        //TODO arrange duplicated history datas.
        Store.get(STORE_KEY).then((summonerList)=>{
            if(summonerList){
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
        var kill,death,assist,winRate;
        
        if(stats.kills == null || stats.deaths == null || stats.assists == null){
            return {kill : 0, death: 0, assist: 0, wins: 0, losses: 0, winRate: 0};
        }
        
        kill = parseInt(stats.total_games) / parseInt(stats.kills);
        death =  parseInt(stats.total_games) / parseInt(stats.deaths);
        assist = parseInt(stats.total_games) / parseInt(stats.assists);
        winRate = (parseInt(stats.wins) / (parseInt(stats.wins) + parseInt(stats.losses))) * 100;

        return {
            kill : kill.toFixed(1), 
            death: death.toFixed(1), 
            assist: assist.toFixed(1), 
            wins: stats.wins, 
            losses: stats.losses, 
            winRate: winRate.toFixed(0)
        };
    }
}

module.exports = Utils;