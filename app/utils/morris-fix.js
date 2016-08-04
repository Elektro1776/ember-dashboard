//
// Note: This file includes fixes to Morris charts resizing code.
// Without these changes Morris chart creates erros on the console when
// resizing. These fixes won't be needed once Morris library
// fixes these issues in their main repository.
//

//
// Temporary fix for resizing issue with morris.js chart library
// Reference: https://github.com/morrisjs/morris.js/issues/420
//
Morris.Donut.prototype.setLabels = function(label1, label2) {
    var inner, maxHeightBottom, maxHeightTop, maxWidth, text1bbox, text1scale, text2bbox, text2scale;
    inner = (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) * 2 / 3;
    maxWidth = 1.8 * inner;
    maxHeightTop = inner / 2;
    maxHeightBottom = inner / 3;
    this.text1.attr({
        text: label1,
        transform: ''
    });
    text1bbox = this.text1.getBBox();
    text1scale = Math.min(maxWidth / text1bbox.width, maxHeightTop / text1bbox.height);
    /* jshint  eqeqeq : false */
    if (isNaN(text1scale) || text1scale == '-Infinity') {
        text1scale = '0.0';
    }
    this.text1.attr({
        transform: 'S' + text1scale + ',' + text1scale + ',' + (text1bbox.x + text1bbox.width / 2) + ',' + (text1bbox.y + text1bbox.height)
    });
    this.text2.attr({
        text: label2,
        transform: ''
    });
    text2bbox = this.text2.getBBox();
    text2scale = Math.min(maxWidth / text2bbox.width, maxHeightBottom / text2bbox.height);
    /* jshint  eqeqeq : false */
    if (isNaN(text2scale) || text2scale == '-Infinity') {
        text2scale = '0.0';
    }
    var t = {
        transform: 'S' + text2scale + ',' + text2scale + ',' + (text2bbox.x + text2bbox.width / 2) + ',' + text2bbox.y
    };
    return this.text2.attr(t);
};
//

//
// Temporary fix for resizing bar charts.
// Include check for negative width values.
//
Morris.Bar.prototype.drawBar = function(xPos, yPos, width, height, barColor, opacity, radiusArray) {
  var maxRadius, path;
  maxRadius = Math.max.apply(Math, radiusArray);
  if (width < 0) {
    width = 0;
  }
  if (maxRadius === 0 || maxRadius > height) {
    path = this.raphael.rect(xPos, yPos, width, height);
  } else {
    path = this.raphael.path(this.roundedRect(xPos, yPos, width, height, radiusArray));
  }
  return path.attr('fill', barColor).attr('fill-opacity', opacity).attr('stroke', 'none');
};

export default null;
