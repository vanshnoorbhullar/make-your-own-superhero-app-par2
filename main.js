var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var player_object="";
var block_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(IMG){
        player_object=IMG;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(IMG){
        block_object=IMG;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey==true && keypress=="80"){
        console.log("P and shift pressed together");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true && keypress=="77"){
        console.log("M and shift is pressed together");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keypress=="38"){
        up();
        console.log("Up key is pressed");
    }
    if(keypress=="40"){
        down();
        console.log("Down key is pressed");
    }
    if(keypress=="37"){
        left();
        console.log("Left key is pressed");
    }
    if(keypress=="39"){
        right();
        console.log("Right key is pressed");
    }
    if(keypress=="84"){
        new_image("thor_face.png");
        console.log("T is pressed");
    }
    if(keypress=="83"){
        new_image("spiderman_body.png");
        console.log("S is pressed");
    }
    if(keypress=="76"){
        new_image("captain_america_left_hand.png")
        console.log("L is pressed");
    }
    if(keypress=="72"){
        new_image("hulk_legs.png");
        console.log("H is pressed");
    }
    if(keypress=="73"){
        new_image("ironman_right_hand.png");
        console.log("I is pressed");
    }
}
function up(){
    if(player_y>=0){
       player_y=player_y-block_height;
       console.log("block height="+block_height);
       console.log("Up key is pressed.x="+player_x+", y="+player_y);
       canvas.remove(player_object);
       player_update();
    }  
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        console.log("block height="+block_height);
        console.log("Down key is pressed.x="+player_x+", y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        console.log("block width="+block_width);
        console.log("Left is pressed.x="+player_x+", y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_width;
        console.log("block_width="+block_width);
        console.log("Right key is pressed.x="+player_x+", y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}