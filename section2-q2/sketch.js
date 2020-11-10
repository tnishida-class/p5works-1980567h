// チェッカー
function setup() {
  createCanvas(160,160);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 8; j++){
      if(i%2==0 && j%2==1){
        fill(125,125,125);
        console.log(i,j);
    rect(i * 20, j* 20,20,20);
  fill(255,0,0);
  for(let x=0; x<10; x++){
    for(let y=0; y<3; y++){
      if(x%2==0 && y%2==1 || x%2==1 && y%2==0){
        console.log(x,y);
  ellipse(x*20+10,y*20+10,18);
    }

}}}

    else if(i%2==1 && j%2==0){
        fill(125,125,125);
      console.log(i,j);
        rect(i * 20, j * 20,20,20);
      fill(0,0,0);
      for(let s=0; s<8; s++){
        for(let t=5; t<8; t++){
          if(s%2==0 && t%2==1 || s%2==1 && t%2==0){
            console.log(s,t);
            ellipse(s*20+10,t*20+10,18);
          }
        }
    }
  }}}}
