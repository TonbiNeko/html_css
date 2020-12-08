function mailTemplate(){
  console.log("matsumotoさん、今日のランチはうどんにしましょう。");
}
mailTemplate();

function weather(){
  console.log("晴れ");
  console.log("曇り");
  console.log("雨");
}
weather();

function introduce(name,age){
  console.log(`私は${name}です。年齢は${age} です。`);
}
function greeting(name){
  console.log(`はじめまして！私は${name}です。`);
}
const name = "三上";
const age = 32;

introduce(name,age);
greeting(name);
