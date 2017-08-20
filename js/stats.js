window.renderStatistics = function (ctx, names, times) {
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
  var max = -1;
  var maxIndex = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  // -------------------------------------------------------------------------------------------

  var histogramWidth = 150;              // область гистограммы
  var step = histogramWidth / (max - 0); // пропорция шага

  var initialY = 240; // начало Y для каждого из столбиков
  var initialX = 150; // начало X для каждого из столбиков
  var indent = 90;    // отступ
  var barHeigth = 40; // высота столбика

  for (var i = 0; i < times.length; i++) {
    ctx.fillRect(initialX + indent * i, initialY, barHeigth, times[i] * step * -1);

    ctx.fillText(names[i], initialX + indent * i, initialY + 20);
    ctx.fillText(times[i].toFixed(2), initialX + indent * i, initialY - histogramWidth - 10);
  }

};
