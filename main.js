canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="car2.jpg";
car2_x=10;
car2_y=10;

background_image="racing.jpg";
function add(){
    background_imgtag=new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_image;

car1_imgtag=new Image();
car1_imgtag.onload=uploadcar_1;
car1_imgtag.src=car1_image;
}

function add(){
car2_imgtag=new Image();
car2_imgtag.onload=uploadcar_2;
car2_imgtag.src=car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadcar_1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar_2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='38'){
        uo();
        console.log("up");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
}
function up(){
    if (rover_y>=0){
     rover_y=rover_y-10;
     uploadBackground();
        uploadRover();
        console.log("when up is pressed,x="+rover_x+" y="+rover_y);
    }
}
function down(){
    if (rover_y<=500){
     rover_y=rover_y+10;
     uploadBackground();
        uploadRover();
        console.log("when down is pressed,x="+rover_x+" y="+rover_y);
    }
}
function left(){
    if (rover_x>=0){
     rover_x=rover_x-10;
     uploadBackground();
        uploadRover();
        console.log("when left is pressed,x="+rover_x+" y="+rover_y);
    }
}
function right(){
    if (rover_x<=700){
     rover_x=rover_x+10;
     uploadBackground();
        uploadRover();
        console.log("when right is pressed,x="+rover_x+" y="+rover_y);
    }
}
nasa_array=["racing ground1.jpg","racing ground2.jpg","racing ground3.jpg","racing ground4.jpg"];
Random_number=Math.floor(Math.random() * 4);
background_image=nasa_array[Random_number];