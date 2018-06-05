$(document).ready(function() {
    $(function(){
        "use strict";
        // Progress Bar Color Default
        $('.circle-progress.circle-progress-bg-pasific').appear(function(){
            $('.circle-progress.circle-progress-bg-pasific').circleProgress({
                lineCap: 'round',
                fill: { color: '#ff4530' }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Color Primary
        $('.circle-progress.circle-progress-bg-primary').appear(function(){
            $('.circle-progress.circle-progress-bg-primary').circleProgress({
                lineCap: 'round',
                fill: { color: '#337ab7' }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Color Success
        $('.circle-progress.circle-progress-bg-success').appear(function(){
            $('.circle-progress.circle-progress-bg-success').circleProgress({
                lineCap: 'round',
                fill: { color: '#5cb85c' }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Color Info
        $('.circle-progress.circle-progress-bg-info').appear(function(){
            $('.circle-progress.circle-progress-bg-info').circleProgress({
                lineCap: 'round',
                fill: { color: '#5bc0de' }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Color Warning
        $('.circle-progress.circle-progress-bg-warning').appear(function(){
            $('.circle-progress.circle-progress-bg-warning').circleProgress({
                lineCap: 'round',
                fill: { color: '#f0ad4e' }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Color Danger
        $('.circle-progress.circle-progress-bg-danger').appear(function(){
            $('.circle-progress.circle-progress-bg-danger').circleProgress({
                lineCap: 'round',
                fill: { color: '#d9534f' }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Color Gray
        $('.circle-progress.circle-progress-bg-gray').appear(function(){
            $('.circle-progress.circle-progress-bg-gray').circleProgress({
                lineCap: 'round',
                fill: { color: '#8b949b' }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Color Dark
        $('.circle-progress.circle-progress-bg-dark').appear(function(){
            $('.circle-progress.circle-progress-bg-dark').circleProgress({                    
                fill: { color: '#111111' }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Gradient Violet
        $('.circle-progress.circle-progress-bg-grad-violet').appear(function(){
            $('.circle-progress.circle-progress-bg-grad-violet').circleProgress({
                lineCap: 'round',
                fill: { gradient: ['#4776E6', '#8E54E9'] }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Gradient Blood Mary
        $('.circle-progress.circle-progress-bg-grad-blood-mary').appear(function(){
            $('.circle-progress.circle-progress-bg-grad-blood-mary').circleProgress({
                lineCap: 'round',
                fill: { gradient: ['#FF512F', '#DD2476'] }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Gradient Bora
        $('.circle-progress.circle-progress-bg-grad-blood-mary').appear(function(){
            $('.circle-progress.circle-progress-bg-grad-bora').circleProgress({
                lineCap: 'round',
                fill: { gradient: ['#2BC0E4', '#EAECC6'] }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Gradient Mojito
        $('.circle-progress.circle-progress-bg-grad-mojito').appear(function(){
            $('.circle-progress.circle-progress-bg-grad-mojito').circleProgress({
                lineCap: 'round',
                fill: { gradient: ['#1D976C', '#93F9B9'] }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Gradient Orange
        $('.circle-progress.circle-progress-bg-grad-orange').appear(function(){
            $('.circle-progress.circle-progress-bg-grad-orange').circleProgress({
                lineCap: 'round',
                fill: { gradient: ['#FFB75E', '#ED8F03'] }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Gradient Purple
        $('.circle-progress.circle-progress-bg-grad-purple').appear(function(){
            $('.circle-progress.circle-progress-bg-grad-purple').circleProgress({
                lineCap: 'round',
                fill: { gradient: ['#DA22FF', '#9733EE'] }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Gradient Stellar
        $('.circle-progress.circle-progress-bg-grad-stellar').appear(function(){
            $('.circle-progress.circle-progress-bg-grad-stellar').circleProgress({
                lineCap: 'round',
                fill: { gradient: ['#7474BF', '#348AC7'] }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

        // Progress Bar Gradient Tripper
        $('.circle-progress.circle-progress-bg-grad-tripper').appear(function(){
            $('.circle-progress.circle-progress-bg-grad-tripper').circleProgress({
                lineCap: 'round',
                fill: { gradient: ['#f857a6', '#ff5858'] }
            }).on('circle-animation-progress', function(event, progress, stepValue) {
                $(this).find('.circle-progress-value').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });
        });

    });
});