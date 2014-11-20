//canvas reference: http://www.w3schools.com/tags/ref_canvas.asp

var PURPLE = "#39275B";
var GOLD = "#C79900";

$(document).ready(function(){
  
  //initialization
  var canvas = $('#canvas')[0]; //canvas container to draw on
  var g = canvas.getContext("2d"); //graphics context (paintbrush)

  //drawing
  g.font = '60px Helvetica';
  g.fillText('http://goo.gl/TGlfcZ', 10,250);









});



























  // var lineTo = function(evt){
  //   var x = evt.pageX - $('#canvas').offset().left;
  //   var y = evt.pageY - $('#canvas').offset().top;
  //   g.lineTo(x,y);
  //   g.stroke();
  // };

