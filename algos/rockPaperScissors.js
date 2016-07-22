function rockPaperScissors(num) {
    var res = [];
    var t = ['rock', 'paper', 'scissors'];
    if (num < 1) return [];

function rps(part, n){
    part = part || [];
    if (part.length === n) return res.push(part);

    for (var i = 0; i < t.length; i++){
        rps(part.concat(t[i]),n);
    }
}
rps([], num);
return res;
}



module.exports = rockPaperScissors;