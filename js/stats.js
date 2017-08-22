'use strict';
window.renderStatistics = function (ctx, names, times) {

  var histogramWidth = 150; // область гистограммы
  var initialY = 240; // начало Y для каждого из столбиков
  var initialX = 150; // начало X для каждого из столбиков
  var indent = 90; // отступ
  var barHeigth = 40; // высота столбика

  // тень поля
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 430, 280);
  // основное поле
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Поздравляем вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var findMax = function (args) {
    var max = -1;
    for (var i = 0; i < args.length; i++) {
      var arg = args[i];
      if (arg > max) {
        max = arg;
      }
    }
    return max;
  };

  var drawRect = function (numElem) {
    if (names[numElem] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var visibility = function (min, max) {
        var intra = min - 0.5 + Math.random() * (max - min + 1); intra = Math.round(intra); return intra;
      };
      ctx.globalAlpha = visibility(3, 8) * 0.1;
      ctx.fillStyle = 'rgb(0, 0, 255)';
    }

    ctx.fillRect(initialX + indent * numElem, initialY, barHeigth, times[numElem] * step * -1);
    ctx.globalAlpha = 1;
  };

  var drawText = function (numElem) {
    ctx.fillText(names[numElem], initialX + indent * numElem, initialY + 20);
    ctx.fillText(times[numElem].toFixed(0), initialX + indent * numElem, initialY - times[numElem] * step - 10);
  };

  var step = histogramWidth / (findMax(times) - 0); // пропорция шага

  for (var i = 0; i < times.length; i++) {
    drawRect(i);
    drawText(i);
  }

};
