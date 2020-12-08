let dicMember = {
  position:
  {
    ceo:"noro",
    aiTeacher:"nakao",
    railsTeacher:"shibata"
  }
};
console.log(dicMember.position);
console.log(dicMember.position.ceo);
console.log(dicMember["position"]["ceo"]);



let blogs = [
  { title:"今日は暑いな",
    content:"でも頑張るぞ"
  },
  { title:"今日の仕事が終われば",
    content:"明日から旅行だ"
  },
  { title:"明日から",
    content:"プログラミングするぞ"
  }
];
console.log(blogs[0]["title"])
console.log(blogs[0]["title"],blogs[0]["content"]);

let dicMember2 = {
  ceo:"noro",
  aiTeacher:"nakao",
  railsTeacher:"shibata"
}
dicMember2["mentor"] = "matsumoto";
console.log(dicMember2);

let test = [
  {subject:"math",
   points:70},
  {subject:"english",
   points:50},
  {subject:"society",
   points:80}
];
test.push({subject:"science",points:100});
console.log(test);
console.log(test[3]["points"]);
//配列名[配列の番号][ハッシュのキー]
