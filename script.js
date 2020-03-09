
function myFunction() {
    var random = 0;
    var myhexcolor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    var myhex=[0,0,0,0,0,0];
    for(var a=0;a<6;a++){
       random= Math.floor(Math.random() * 15);
        myhex[a]=myhexcolor[random];
    }
    
    var hexcolorlast = "#"+ myhex.join('');
    document.body.style.backgroundColor = hexcolorlast;
    document.getElementById('try').innerHTML = hexcolorlast;

}