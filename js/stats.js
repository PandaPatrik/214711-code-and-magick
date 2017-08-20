window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';

  ctx.fillText('Что за нарен?!', 120, 40);
};
