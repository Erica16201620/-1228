function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#e5e5e5");
  textSize(40)

    translate(width/2,height/2)
    fill('#ffbf69')
    ellipse(mouseX,mouseY,400) //臉


    fill('#432818')
    stroke('#353535')
    ellipse(mouseX,80+mouseY,60,100) //鼻子
    fill('#f4f3ee')
    stroke('#ffe6a7')
    ellipse(-70+mouseX,-90+mouseY,90)  //左眼
    fill('#353535')
    ellipse(-70+mouseX,-90+mouseY,60)   //眼珠

    fill('#f4f3ee')
    ellipse(70+mouseX,-90+mouseY,90)  //右眼
    fill('#353535')
    ellipse(70+mouseX,-90+mouseY,60)   //眼珠

    fill('#fdc500')
    ellipse(150+mouseX,180+mouseY,60,120)//右腳
    fill('#fdc500')
    ellipse(-150+mouseX,180+mouseY,60,120)//左腳

    music_btn = createButton("放音樂跳舞")
    music_btn.position(10,10)
    music_btn.size(350, 100);
    music_btn.style('background-color', '#2a6f97');
    music_btn.style('font-size', '44px');
    music_btn.style('color', 'white');
    music_btn.mousePressed(music_btn_pressed)
    function music_btn_pressed(){
      song.stop()
      song.play()
      songIsplay = true
      mosueIsplay = false
      amp=new p5.Amplitude()  
    
    }


}