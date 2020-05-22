String.prototype.strcut = function(a,b){
    let returnSTR="";
    for(let i=a;i<=b;i++){
        returnSTR=returnSTR+this.charAt(i);
    }
    return returnSTR;
}
String.prototype.compare = function(a){
    let t=a.split(">");
    let str=this;
    for(let i=0;i<t.length;i++){
        const th=t[i].split("<")[0];
        if(str.indexOf(th)!=-1){
            str=str.replace(th,"");
        }
        else{
            return false;
        }
    }
    return true;
}