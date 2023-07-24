$(function(){
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')
    $('.gnb>li').hover(function(){
        console.log('hello')
        $('.gnb_bg').show()
        $('.gnb_first').eq($(this).index()).css('display','block')
    },function(){}
    )

    // Header
})