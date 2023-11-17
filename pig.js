function setup() 
{
  createCanvas(400, 400);
  strokeWeight(4);
}

function draw()
 {
background(125, 255, 125);

// DISCLAIMER I KNOW I DONT HAVE TO PUT FILL EVERYTIME JUST HELPS ME KEEP TRACK OF WHAT COLOR I AM USING AND TO STAY ORGANIZED FOR WHAT PART IS USING WHAT COLOR. // AND ALSO THE EXTRA LINE EXTENSIONS IS ALSO FOR ORGANIZATION. //
   
  // legs
   fill(255, 192, 203);
     rect(125, 250, 25, 125);
     rect(250, 250, 25, 125);
  
   // the paws or sumthin idk what that black thing is
   fill(0, 0, 0)
     rect(250, 351, 25, 25);
     rect(125, 351, 25, 25)

  // body
   fill(255, 192, 203)
     ellipse(200, 200, 200, 170)
   
  // ears
   fill(255, 192, 203)
     ellipse(175, 145, 20, 30)
     ellipse(225, 145, 20, 30)

  // face
   fill(255, 192, 203)
     ellipse(200, 200, 100, 115)
   
  // left eye
   fill(255, 255, 255)
     ellipse(185, 175, 25, 25)
   
   fill(0, 0, 0)
     ellipse(185, 175, 12, 12)

  // right eye
    fill(255, 255, 255)
      ellipse(215, 175, 25, 25)

    fill(0, 0, 0)
      ellipse(215, 175, 12, 12)

  // nose
   fill(255, 192, 203)
     ellipse(200, 210, 35, 20)

   fill(0, 0, 0)
     ellipse(192, 210, 7, 7)
     ellipse(207, 210, 7, 7)

  // mouth
   arc(200, 235, 30, 30, 0, 3, OPEN)
     noFill();
  
   
  // extrazz
   print(mouseX, mouseY)
   
}
