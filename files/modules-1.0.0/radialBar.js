"use strict";

/*
 * Radial Bar 1.0
 *
 * Copyright (c) 2012 Maximiliano Tabacman
 * Licensed under the MIT LICENSE
*/

(function($) {

    $.fn.radialBar = function(options) {

        let settings = $.extend({
            'thickness': 1.5,
            'hitPointsColor': "#D64636",
            'powerPointsColor': "#174DD4",
            'radius': 34,
        }, options);

        return this.each(function() {

            let allCanvas = $(this).find(".radialBar");
            allCanvas.each(function(index, canvas) {
                let ctx = canvas.getContext("2d");
                canvas = $(canvas);
                let circ = Math.PI * 2;
                let quart = Math.PI / 2;
                ctx.lineWidth = settings.thickness;
                ctx.beginPath();
                ctx.strokeStyle = settings.hitPointsColor;
                let value = $(canvas.children(".hitPoints")[0]).text();
                ctx.arc(settings.radius, settings.radius, settings.radius-1, -(quart), ((circ) * value) - quart, false);
                ctx.stroke();
                ctx.beginPath();
                ctx.strokeStyle = settings.powerPointsColor;
                value = $(canvas.children(".powerPoints")[0]).text();
                ctx.arc(settings.radius, settings.radius, settings.radius-4, -(quart), ((circ) * value) - quart, false);
                ctx.stroke()
            });
        });

    }
})(jQuery);