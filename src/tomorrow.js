const Twenty_Four_Hrs = 24 * 60 * 60 * 1000;

function tomorrow(){    
    const today = new Date();
    const tomorrow = new Date(today.getTime() + Twenty_Four_Hrs);
    return tomorrow;

}

module.exports = tomorrow;