//canvas reference: http://www.w3schools.com/tags/ref_canvas.asp

var PURPLE = "#39275B";
var GOLD = "#C79900";

$(document).ready(function(){
  
  //initialization
  var canvas = $('#canvas')[0]; //canvas container to draw on
  var g = canvas.getContext("2d"); //graphics context (paintbrush)

  //drawing
  //g.font = '60px Helvetica';
  //g.fillText('http://goo.gl/TGlfcZ', 10,250);

  g.fillStyle = PURPLE;
  g.fillRect(50, 60, 100, 200);

  g.strokeStyle = PURPLE;
  g.lineWidth = 4;

  g.beginPath();
  g.moveTo(200, 200);
  g.lineTo(220, 400);
  g.stroke();
  g.lineTo(270, 250);
  g.lineTo(320, 400);
  g.lineTo(350, 200);
  g.stroke();

  $('#canvas').click(function(evt) {
    var x = evt.pageX - $('#canvas').offset().left;
    var y = evt.pageY - $('#canvas').offset().top;
    g.lineTo(x, y);
    g.stroke();
  });

  $('#canvas').mousedown(function(evt) {
    $('#canvas').mousemove(function(evt) {
      var x = evt.pageX - $('#canvas').offset().left;
      var y = evt.pageY - $('#canvas').offset().top;
      g.lineTo(x, y);
      g.stroke();
    });
  });

  $('#canvas').mouseup(function(evt) {
    $('#canvas').unbind(mousemove);
  });

});





