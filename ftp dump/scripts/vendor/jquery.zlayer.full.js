/**
 * jQuery.zLayer.full v0.4 plugin
 * Copyright (c) 2013 Devin R. Olsen
 * Date: 3/25/2013
 *
 * Project Home:
 * http://www.devinrolsen.com/jquery-zlayers-plugin/
 */
$.fn.extend({
    zlayer: function (layers, options) {
        var canvasOptions = $.extend({
            reposition: true,
            repositionTransition: 'all 1s ease-in-out'
        }, options);
        var canvas = $(this);
        var canvasPos = canvas.offset();
        var canvasWidth = canvas.width();
        var canvasHeight = canvas.height();
        var canvasLeft = canvasPos.left;
        var canvasTop = canvasPos.top;
        var isTransform = $.support.opacity;
        var isTouch = ((('ontouchstart' in window) || !! ('onmsgesturechange' in window)) && !('onmspointermove' in window));
        var prefix = ['-webkit-', '-moz-', '-o-', '-ms-', ''];
        $(this).bind('mousemove touchmove touchstart mspointermove', function (e) {
            var event = e; //Clone event to variable
            var i = layers.length;
            while (i--) { //loop over each layer in our layers array
                var layer = $(layers[i].layer); //Layer
                var layerPos = layer.offset(); //Layer offset				 	
                var o = $.extend({
                    confine: '',
                    force: 'push',
                    mass: 10
                }, layers[i]);
                if (isTouch) {
                    event = e.originalEvent.touches[0];
                }
                //Gather local coordinates of event relative to canvas and it's offset
                var localX = event.pageX - canvasLeft;
                var localY = event.pageY - canvasTop;
                var xHasRoom = (localX <= canvasWidth && localX >= 0) ? true : false; //Condition for event area X
                var yHasRoom = (localY <= canvasHeight && localY >= 0) ? true : false; //Condition for event area Y
                if (xHasRoom && yHasRoom) {
                    //Relocate canvas's orgin to absolute center of canvas vs. 0,0 or top left
                    var x = localX - canvasWidth / 2;
                    var y = localY - canvasHeight / 2;
                    //Does this document support CSS3 Transforms?
                    if (isTransform) {
                        var css = {};
                        var j = prefix.length;
                        var translate = [cal(x, 'x'), 'px,', cal(y, 'y'), 'px'].join(""); //Construct our translate style properties
                        while (j--) { //Loop over prefixes and apply styles
                            var pfix = prefix[j],
                                transform = [pfix, 'transform'].join("");
                            css[transform] = ['translate(', translate, ')'].join("");
                            css[transform] = ['translate3d(', translate, ',0)'].join("");
                            css[[pfix, 'transition'].join("")] = '';
                        }
                    } else { //All else fails, repostion off top left styles
                        css['top'] = cal(y, 'y');
                        css['left'] = cal(x, 'x');
                    }
                    layer.css(css);
                } else {
                    canvas.trigger('mouseleave touchend mspointerout');
                    return;
                }
            }

            function cal(a, t) {
                var a = (o.force == 'pull') ? //IF FORCE IS PULL
                (o.confine == t) ? a = 0 : a = a / o.mass : //IF FORCE IS PUSH
                (o.confine == t) ? //IF AXIS IS CONFINED
                a = 0 : a = -a / o.mass;
                return parseInt(a);
            };
            e.preventDefault();
        }).bind('mouseleave touchend mspointerout', function () {
            if (canvasOptions.reposition == true) {
                var k = layers.length;
                while (k--) {
                    var css = {};
                    var l = prefix.length;
                    while (l--) { //Loop over prefixes and apply styles
                        var pfix = prefix[l],
                            transform = [pfix, 'transform'].join("");
                        css[transform] = ['translate(0,0)'].join("");
                        css[transform] = ['translate3d(0,0,0)'].join("");
                        css[[pfix, 'transition'].join("")] = canvasOptions.repositionTransition;
                    }
                    css['left'] = css['top'] = '0';
                    jQuery(layers[k].layer).css(css);
                }
            }
        });
    }
});