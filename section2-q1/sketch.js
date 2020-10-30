// 小手調べ
function setup(){
noFill();
stroke(0,0,255);
for(let i = 0; i<5; i++){
  let x=(i + 1)*10;
  ellipse(50,50,x)
}
  noFill();
  stroke(255,0,0);
  for(let s = 0; s<5; s++){
    let x=(s + 6)*10;
    ellipse(50,50,x)
}
      // BLANK[1]
}
