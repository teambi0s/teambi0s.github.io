$(document).ready(function() {
    
    $(function() {
        "use strict";
        $('#progressBar1').appear(function(){
            $('#progressBar1 .progress-bar').progressbar({
                transition_delay: 500,
                refresh_speed: 50,
                display_text: 'fill',
                use_percentage: true,
                percent_format: function(percent) { return percent + '%'; },
                amount_format: function(amount_part, amount_total) { return amount_part + ' / ' + amount_total; },
            });   
        });
        
        $('#progressBar2').appear(function(){
            $('#progressBar2 .progress-bar').progressbar({
                transition_delay: 500,
                refresh_speed: 50,
                display_text: 'fill',
                use_percentage: true,
                percent_format: function(percent) { return percent + '%'; },
                amount_format: function(amount_part, amount_total) { return amount_part + ' / ' + amount_total; },
            });   
        });
        
        $('#progressBar3').appear(function(){
            $('#progressBar3 .progress-bar').progressbar({
                transition_delay: 500,
                refresh_speed: 50,
                display_text: 'fill',
                use_percentage: true,
                percent_format: function(percent) { return percent + '%'; },
                amount_format: function(amount_part, amount_total) { return amount_part + ' / ' + amount_total; },
            });   
        });
        
        $('#progressBar4').appear(function(){
            $('#progressBar4 .progress-bar').progressbar({
                transition_delay: 500,
                refresh_speed: 50,
                display_text: 'fill',
                use_percentage: true,
                percent_format: function(percent) { return percent + '%'; },
                amount_format: function(amount_part, amount_total) { return amount_part + ' / ' + amount_total; },
            });   
        });
        
        $('#progressBar5').appear(function(){
            $('#progressBar5 .progress-bar').progressbar({
                transition_delay: 500,
                refresh_speed: 50,
                display_text: 'fill',
                use_percentage: true,
                percent_format: function(percent) { return percent + '%'; },
                amount_format: function(amount_part, amount_total) { return amount_part + ' / ' + amount_total; },
            });   
        });  
        
        $('#progressBar6').appear(function(){
            $('#progressBar6 .progress-bar').progressbar({
                transition_delay: 500,
                refresh_speed: 50,
                display_text: 'fill',
                use_percentage: true,
                percent_format: function(percent) { return percent + '%'; },
                amount_format: function(amount_part, amount_total) { return amount_part + ' / ' + amount_total; },
            });   
        });
        
    }); 
    
});