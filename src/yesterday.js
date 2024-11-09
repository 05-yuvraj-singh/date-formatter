const Twenty_Four_Hrs = 24 * 60 * 60 * 1000;

function yesterday(){
    const today = new Date();
    const yesterday = new Date(today.getTime() - Twenty_Four_Hrs);
    return yesterday;

}

module.exports = yesterday;