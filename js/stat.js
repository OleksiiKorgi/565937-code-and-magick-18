'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var BAR_CHART_GAP_Y = 200;
var BAR_CHART_WIDTH = 40;
var BAR_CHART_HEIGHT = 150;
var MIN_Y = 100;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// var checkArrayIsEmpty = function (arr){
//    return arr && arr.length ? true : false;
// };

var getMaxElement = function(arr) {
  var max = arr[0];
  for(var index = 0; index < arr.length; index++) {
    if(max < arr[index]) {
      max = arr[index];
    }
  }
  return max;
};



window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText ('Ура вы победили!', CLOUD_X + FONT_GAP * 2, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText ('Список результатов:', CLOUD_X + FONT_GAP * 2, CLOUD_Y + GAP + FONT_GAP * 2);

  var indexName = 0;
  var userNames = ['Вы', 'Иван', 'Юлия', 'Игорь'];

var maxTime = getMaxElement(times);

for (var i = 0; i < userNames.length; i++) {
ctx.fillText(Math.floor(times[i]), CLOUD_X + (CLOUD_X * i) + FONT_GAP * 2, CLOUD_HEIGHT -  (BAR_CHART_HEIGHT * times[i]) / maxTime - FONT_GAP*2);  
ctx.fillRect (CLOUD_X + (CLOUD_X * i) + FONT_GAP * 2, CLOUD_HEIGHT -  (BAR_CHART_HEIGHT * times[i]) / maxTime - FONT_GAP,
BAR_CHART_WIDTH, (BAR_CHART_HEIGHT * times[i]) / maxTime);
ctx.fillText (userNames[i], CLOUD_X + (CLOUD_X * i) + FONT_GAP * 2,CLOUD_HEIGHT);
}
};
