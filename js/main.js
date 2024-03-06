$('.top').click(function(){
    $('html,body').animate({
        scrollTop:0
    },800)
});



$('.h_txt').click(function(){
    // 현재 스크롤 위치를 세션 스토리지에 저장
    sessionStorage.setItem('scrollPosition', $(window).scrollTop());

    // 이전 페이지로 리디렉션
    window.history.back();
});