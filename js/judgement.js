// function get_achievement(x,y,z){
//   let sum = x + y + z;
//   if (sum >= 250){
//     return "A";
//   } else if (sum >= 200){
//     return "B";
//   }else if (sum >=100){
//     return "C";
//   }else{
//     return "D";
//   }
// }
// console.log(get_achievement(60,100,40));
// console.log(get_achievement(0,0,0));

// まず合格か不合格か判定
// function passOrFail(x,y,z){
//   if (x >= 60 && y >= 60 && z >= 60){
//     return "合格";
//   }else{
//     return "不合格";
//   }
// }
// console.log(passOrFail(60,100,40));//fail
// console.log(passOrFail(0,0,0));//Fail
// console.log(passOrFail(60,60,60));//pass
//
// function get_achievement(x,y,z){
//   let sum = x + y + z;
//   if (sum >= 250){
//     return "A";
//   } else if (sum >= 200){
//     return "B";
//   }else if (sum >=100){
//     return "C";
//   }else{
//     return "D";
//   }
// }
// console.log(get_achievement(60,100,40));
// console.log(get_achievement(0,0,0));
//
// function tellToStudent(x,y,z,fun1,fun2){
//   let result1 = fun1(x,y,z);
//   let result2 = fun2(x,y,z)
//     return `あなたの成績は${result1}です。${result2}です！`;
// }
// console.log(tellToStudent(60,100,40,get_achievement,passOrFail));
// console.log(tellToStudent(0,0,0,get_achievement,passOrFail));
// console.log(tellToStudent(100,100,100,get_achievement,passOrFail));
// console.log(tellToStudent(60,60,60,get_achievement,passOrFail));

// - get_achievement関数を使用すること
// - get_pass_or_failure関数を使用すること
// - カリキュラム内で開発するjudgement関数に以下の機能を追加すること
// -「あなたの成績は◯です。合格or不合格です」と出力させること

function get_pass_or_failure(x,y,z){
  if(x >= 60 && y >= 60 && z >= 60){
    return "合格"
  }else{
    return "不合格"
  }
}
console.log(get_pass_or_failure(60,100,40));
console.log(get_pass_or_failure(60,60,60));

function get_achievement(x,y,z){
  let sum = x + y + z;
  if (sum >= 250){
    return "A";
  } else if (sum >= 200){
    return "B";
  }else if (sum >=100){
    return "C";
  }else{
    return "D";
  }
}

function judgement(x,y,z){
  let achievement = get_achievement(x,y,z);
  let pass_or_failure = get_pass_or_failure(x,y,z);
  return `あなたの成績は${achievement}です。${pass_or_failure}です！`;
}
console.log(judgement(60,100,40));//B,fail
console.log(judgement(0,0,0));//D,fail
console.log(judgement(100,100,100));//A,pass
console.log(judgement(60,60,60));//C,pass
