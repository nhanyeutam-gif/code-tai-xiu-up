let mysqli    =     require('../../mysqli');
let checkstring    =     require('../../string');
let info =  require('../../users/info');
let sodu =  require('../../users/sodu');

module.exports = function(req,res)
{
    let data = req.query;
    let name = data.Name;
    let vang = data.Money;
    let server = data.Server;
    if(!!name && !!vang && !!server)
    {
        mysqli.query("INSERT INTO `napvang` SET `name` = '"+name+"', `vang_game` = '"+vang+"', `server` = '"+server+"', `thoigian` = '"+checkstring.time().thoigian+"', `status`  = '1'",function(err,insert){
            
        })
    }
    res.send({
        code : true,
    }).status(200);
}
