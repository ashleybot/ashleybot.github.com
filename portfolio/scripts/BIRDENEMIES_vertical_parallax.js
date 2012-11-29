var far_hilltop = 250;
var near_hilltop = 450;
var previousWindowPosition = 0;
var sunOrigin;

$(document).ready(function () {
  sunOrigin = $('#sun').position();
});

$(window).scroll(function () { 

  var windowPosition = window.scrollY;
  var display = $('#scrollY');
  display.html(windowPosition);
  
  var direction = 'lesser';
  if (previousWindowPosition < windowPosition){
    direction = 'greater';
  }
  
  adjustSky(window.scrollY, direction);
  
  adjustSun(window.scrollY, direction);
  
  adjustMountains(window.scrollY);
  
  adjustFarTrees(window.scrollY);
  
  adjustFarHills(window.scrollY, direction);
  
  adjustSideTrees(window.scrollY, direction);
  
  adjustNearHills(window.scrollY, direction);
  
  adjustBird(window.scrollY, direction);
  
  previousWindowPosition = windowPosition; // for figuring out direction
});

var lastColor= '#fef8da';
function adjustSky(offset, direction){
  var body = $('body');
  var rgb = hexToRgb(lastColor);
  
  var red = rgb.r;
  if (red > 35){
    red = red - 10;
  } 
  var green = rgb.g;
  if (green > 135){
    green = green - 10;
  }
  var hex = rgbToHex(red, green, rgb.b);
  
  if (offset <= 0){
    hex = '#fef8da';
  }
  body.css('background-color', hex); // from #fef 8da 254,245,218 to #0f7 8db 15,120,219
  lastColor = hex;
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function adjustSun(offset, direction){
  var sun = $('#sun');
  var sunY = sun.position().top;
  var sunX = sun.position().left;
  
  if (direction == 'greater'){
    sunY = sunY - 1;
    sunX = sunX + 9;
  }
  else {
    sunY = sunY + 1;
    sunX = sunX - 9;
  }
  if (offset <= 0){
    sunX = sunOrigin.left;
  }
  sun.css('left', sunX + 'px');
}

function adjustMountains(offset){
  var mountains = $('#mountains');
  var mountaintop = 50 + offset;
  mountains.css('top', mountaintop + 'px');
}

function adjustFarTrees(offset){
  var far_trees = $('#far_trees');
  var far_treetop = 200 + offset;
  far_trees.css('top', far_treetop + 'px');
}

function adjustFarHills(offset, direction){
  var far_hills = $('#far_hills');
  if (offset > 0){
    if (direction == 'greater'){
      if (far_hilltop > 180){
        far_hilltop = far_hilltop - 1;
      }
    }
    else
    {
      far_hilltop = far_hilltop + 1;
    }
  }
  else{
    far_hilltop = 250;
  }
  far_hills.css('top', far_hilltop + 'px');
}

function adjustBird(offset, direction){
  var bird = $('#bird');
  var birdleft = bird.position().left;  
  if (offset <= 0){
    bird.css('left', 0);
    bird.css('top', 50);
  }
  else{
    bird.css('top', (offset + 50) + 'px');
    if (direction == 'greater'){
      bird.css('left', (birdleft - 1) + 'px');
    }
    else{
      bird.css('left', (birdleft + 1) + 'px');
    }
  }
}

function adjustSideTrees(offset, direction){
  var lefttrees = $('#left_trees');
  var lefttrees_left = lefttrees.position().left;
  var righttrees = $('#right_trees');
  var righttrees_left = righttrees.position().left;
  var righttrees_top = righttrees.position().top;
  
  
  if (offset <= 0){
    lefttrees.css('left',-220);
    righttrees.css('left',550);
    //righttrees.css('top',190);
  }
  else
  {
    if (direction == 'greater'){
      lefttrees.css('left', (lefttrees_left - 1) + 'px');
      righttrees.css('left', (righttrees_left + 1) + 'px');
      /*if (righttrees_top > 90){
        righttrees.css('top', (righttrees_top - 1) + ' px');
      }*/
    }
    else{
      lefttrees.css('left', (lefttrees_left + 1) + 'px');
      righttrees.css('left', (righttrees_left - 1) + 'px');
      /*if (righttrees_top <= 190) {
        righttrees.css('top', (righttrees_top + 1) + ' px');
      }*/
    }
  }
}

function adjustNearHills(offset, direction){
  var near_hills = $('#near_hills');
  
  if (offset > 0){
      if (direction == 'greater'){
        near_hilltop = near_hilltop - 1;
      }
      else{
        near_hilltop = near_hilltop + 2;
      }
  }
  else{
    near_hilltop = 450;
  }
  near_hills.css('top', near_hilltop + 'px');
}

