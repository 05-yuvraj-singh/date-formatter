const msInDay = 24 * 60 * 60 * 1000; //milliseconds in 1 day

function timeAgo(targetDate , options= {onlyDays : false}){
    const diffInMs = ( new Date() - targetDate); // difference in ms
    const diffInDays = Math.floor(diffInMs /msInDay); //difference in days
    if(options.onlyDays)
        return (diffInMs <0 ? {days:-1} : {days : diffInDays}); //returns {days : -1} if target date is of future
    
    const years = Math.floor(diffInDays/365)
    return (diffInMs <0 ? {years : -1 , days:-1} : {years , days : diffInDays%365}); //returns {years : -1 , days : -1} if target date is of future
}

module.exports = timeAgo;