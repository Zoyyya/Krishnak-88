var canvas = new fabric.Canvas("myCanvas");
playerxposition=10;
playeryposition=10;
block_image_height=30;
block_image_width=30;
var playerobject="";
var blockimageobject="";
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set(
            {
                top:playeryposition,
                left:playerxposition
            }
        );
        canvas.add(playerobject);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        blockimageobject=Img;
        blockimageobject.scaleToWidth(block_image_width);
        blockimageobject.scaleToHeight(block_image_height);
        blockimageobject.set(
            {
                top:playeryposition,
                left:playerxposition
            }
        );
        canvas.add(blockimageobject);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
   keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey== true && keypressed=='80')
    {
        console.log("p and shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;

    }
    if ( e.shiftKey== true && keypressed=='77')
    {
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
        
    }
    if (keypressed=='38')
    {
        up();
        console.log("up");
    }
    if (keypressed=='39')
    {
        right();
        console.log("left");
    }
    if (keypressed=='40')
    {
        down();
        console.log("down");
    }
    if (keypressed=='37')
    {
        left();
        console.log("left");
    }
    if (keypressed=='87')
    {
        new_image('wall.jpg');
        console.log("w");
    }
    if (keypressed=='71')
    {
        new_image('ground.png');
        console.log("g");
    }
    if (keypressed=='76')
    {
        new_image('light_green.png');
        console.log("l");
    }
    if (keypressed=='84')
    {
        new_image('trunk.jpg');
        console.log("t");
    }
    if (keypressed=='82')
    {
        new_image('roof.jpg');
        console.log("r");
    }
    if (keypressed=='89')
    {
        new_image('yellow_wall.png');
        console.log("y");
    }
    if (keypressed=='68')
    {
        new_image('dark_green.png');
        console.log("d");
    }
    if (keypressed=='67')
    {
        new_image('cloud.jpg');
        console.log("c");
    }
}
function up()
{
     if (playeryposition>=0)
    {
        playeryposition=playeryposition-block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("When up arrow is pressed , X = "+ playerxposition +", Y = " + playeryposition);
        canvas.remove(playerobject);
        player_update();
    }
}
function down()
{
     if (playeryposition<=500)
    {
        playeryposition=playeryposition+block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("When down arrow is pressed , X = "+ playerxposition +", Y = " + playeryposition);
        canvas.remove(playerobject);
        player_update();
    }
}
function right()
{
     if (playerxposition<=800)
    {
        playerxposition=playerxposition+block_image_width;
        console.log("block image width =" + block_image_width);
        console.log("When right arrow is pressed , X = "+ playerxposition +", Y = " + playeryposition);
        canvas.remove(playerobject);
        player_update();
    }
}
function left()
{
     if (playerxposition>0)
    {
        playerxposition=playerxposition-block_image_width;
        console.log("block image width =" + block_image_width);
        console.log("When left arrow is pressed , X = "+ playerxposition +", Y = " + playeryposition);
        canvas.remove(playerobject);
        player_update();
    }
}