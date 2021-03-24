canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

circle(300, 250, "blue");
circle(345, 290, "yellow");
circle(390, 250, "black");
circle(435, 290, "green");
circle(480, 250, "red");

function circle(X_pos, Y_pos, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(X_pos, Y_pos, 40, 0, 2*Math.PI);
    ctx.stroke();
}