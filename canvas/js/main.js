$(document).ready(function(){
    $('.tab-rel>div:not(":first-of-type")').hide();
    
    $('.main-set-tabul button').each(function(i){
       $(this).attr('data-tab','tab'+i);
    });
    
    $('.main-set-tabul button').on('click',function(){
        
        var dataTab = $(this).data('tab');
        var wrap = $(this).closest('.wrap');
        
        wrap.find('.main-set-tabul button').removeClass('active');
        $(this).addClass('active');
        
        wrap.find('.tab-rel>div').hide();
        wrap.find('.tab-rel>div[data-tab='+dataTab+']').show();
    });
    
}); 