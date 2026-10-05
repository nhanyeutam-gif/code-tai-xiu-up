/* 
    Tac gia     : NGUYEN NGOC VAN
    Function    : GET TIME
*/
let thoigian = function()
{
    let time        =  {};
    time.ngay       = (new Date()).getDate();
    time.thang      = (new Date()).getMonth();
    time.nam        = (new Date()).getFullYear();
    time.thoigian   = Date.now();
    return time;
}


module.exports =  thoigian;
