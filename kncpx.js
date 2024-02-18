function shinkana(){
var str = document.querySelector("textarea#test").value;

 //いろんな処理
  const ksj01 = ['','一','二','三','四','五','六','七','八','九']
const ksj02 = ['','','二','三','四','五','六','七','八','九']
function henk(ssj){
    let sj = Number(ssj)
    if(sj==0){return '零'}else if(sj<10){
        return ksj01[ssj]
    }else if(sj<100){
        let b01 = Math.floor(sj/10)
        let b02 = sj%10
        return ksj02[b01]+'十'+ksj01[b02]
    }else{return String(sj)}
}

function henk01(ssj){
    let sj = Number(ssj)
    if(sj<100){return henk(sj)}else
    if(sj=>100, sj<1000){
        let b11 = Math.floor(sj/100)
        let b12 = sj%100
        if(b12==0){return ksj02[b11]+'百'}else{
        return ksj02[b11]+'百'+henk(b12)}
    }else{return String(sj)}
}

function henk02(ssj){
    let sj = Number(ssj)
    if(sj<1000){return henk01(sj)}else
    if(sj=>1000, sj<10000){
        let b21 = Math.floor(sj/1000)
        let b22 = sj%1000
        if(b22==0){return ksj02[b21]+'千'}else{
        return ksj02[b21]+'千'+henk01(b22)}
    }else{return String(sj)}
}

function henk03(ssj){
    let sj = Number(ssj)
    if(sj<10000){return henk02(sj)}else
    if(sj=>10000, sj<100000000){
        let b31 = Math.floor(sj/10000)
        let b32 = sj%10000
        if(b32==0){return henk02(b31)+'万'}else{
        return henk02(b31)+'万'+henk02(b32)}
    }else{return String(sj)}
}


function henk04(ssj){
    let sj = Number(ssj)
    if(sj<100000000){return henk03(sj)}else
    if(sj=>100000000, sj<1000000000000){
        let b31 = Math.floor(sj/100000000)
        let b32 = sj%100000000
        if(b32==0){return henk03(b31)+'億'}else{
        return henk03(b31)+'億'+henk03(b32)}
    }else{return String(sj)}
}

function henk05(ssj){
    let sj = Number(ssj)
    if(sj<1000000000000){return henk04(sj)}else
    if(sj=>1000000000000){
        let b31 = Math.floor(sj/1000000000000)
        let b32 = sj%1000000000000
        if(b32==0){return henk04(b31)+'兆'}else{
        return henk04(b31)+'兆'+henk04(b32)}
    }else{return String(sj)}
}



document.querySelector("div#result").innerHTML = henk05(str);
}
