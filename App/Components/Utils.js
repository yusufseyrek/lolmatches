


let Utils = {
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
    },
    calculateKda(kill,death,assist){
        
        var kda = (kill + assist) / death ;
        newKda=kda.toFixed(2);
        return newKda
        
    },
    calculateTotalGold(totalGold){
        
        var total_gold = Math.round((totalGold / 1000));
        return total_gold
        
    }
    
}

    

module.exports = Utils;