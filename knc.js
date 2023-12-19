function shinkana(){
var str = document.querySelector("textarea#test").value;

 //いろんな処理
str = str.replace(/ITF/g, 'ITF.');

document.querySelector("div#result").innerHTML = str;
}
