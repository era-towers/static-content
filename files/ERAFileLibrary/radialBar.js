/*
 * Radial Bar 1.0
 *
 * Copyright (c) 2012 Maximiliano Tabacman
 * Licensed under the MIT LICENSE
*/

(function($) {

    $.fn.radialBar = function(options) {

        var settings = $.extend({
            'thickness': 1.5,
            'hitPointsColor': "#D64636",
            'powerPointsColor': "#174DD4",
            'radius': 34,
        }, options);

        return this.each(function() {

            var allCanvas = $(this).find(".radialBar");
            allCanvas.each(function(index, canvas) {
                var ctx = canvas.getContext("2d");
                canvas = $(canvas);
                var circ = Math.PI * 2;
                var quart = Math.PI / 2;
                ctx.lineWidth = settings.thickness;
                ctx.beginPath();
                ctx.strokeStyle = settings.hitPointsColor;
                var value = $(canvas.children(".hitPoints")[0]).text();
                ctx.arc(settings.radius, settings.radius, settings.radius-1, -(quart), ((circ) * value) - quart, false);
                ctx.stroke();
                ctx.beginPath();
                ctx.strokeStyle = settings.powerPointsColor;
                var value = $(canvas.children(".powerPoints")[0]).text();
                ctx.arc(settings.radius, settings.radius, settings.radius-4, -(quart), ((circ) * value) - quart, false);
                ctx.stroke()
            });
        });

    }
})(jQuery);