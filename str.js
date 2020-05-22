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
String.prototype.data = function(a){
    let t=a.split(">");
    let str=this;
    for(let i=0;i<t.length;i++){
        const th=t[i].split("<")[0];
        if(str.indexOf(th)!=-1){
            str=str.replace(th,",");
        }
    }
    const str2=[];
    str.split(",").map(a=>{if(a!="" && a!=undefined){str2.push(a);}});
    if(str2.length==1){
        return str2[0];
    }
    else if(str2.length==0){
        return 0;
    }
    else{
        return str2;
    }
}
