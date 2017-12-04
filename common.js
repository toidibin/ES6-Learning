
 // 打印参数 避免重复写console.log
 function l(){
    var args = Array.prototype.slice.call(arguments);
    console.log(args.join(','));
    
}