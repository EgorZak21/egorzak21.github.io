$(document).ready(function(){
    $('.info').hide();
    $(window).resize(function(){
    if($(document).width()>=991){
        $('.main-set-tabul').show(500);
    }
    });
    
    $('.tab-rel>div:not(":first-of-type")').hide();
    
    $('.main-set-tabul button').each(function(i){
       $(this).attr('data-tab','tab'+i);
    });
    
    $('.main-set-tabul button').on('click',function(){
        
        var dataTab = $(this).data('tab');
        var wrap = $(this).closest('.wrap');
        
        wrap.find('.main-set-tabul button').removeClass('active');
        $(this).addClass('active');
        if($(document).width()<991){
            $('.main-set-tabul').toggle(500);
        }
        wrap.find('.tab-rel>div').hide();
        wrap.find('.tab-rel>div[data-tab='+dataTab+']').show();
    });
    $('#graf').on('click',function(){
        if($(document).width()<991){
            $('.main-set-tabul').toggle(500);
        }
    });
    $('.none-ul li').on('click',function(){
        $('.none-ul').hide(500);
    });
    $('.ulrel button').on('click',function(){
        $('.none-ul').toggle(500);
    });
    $('#parab').on('click',function(){
        $('.info').hide();
        $('#parabTab').show();
    });
    $('#ellips').on('click',function(){
        $('.info').hide();
        $('#ellipsTab').show();
    });
    $('#circl').on('click',function(){
        $('.info').hide();
        $('#circlTab').show();
    });
    $('#giper').on('click',function(){
        $('.info').hide();
        $('#giperTab').show();
    });
    $('form').submit(function (e) {
    e.preventDefault();
});
}); 