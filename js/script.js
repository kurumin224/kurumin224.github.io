// ■ハンバーガーボタンをクリックしたときの動作
// ・アニメーション有効
// ・スマホ版メニューを表示
// ・スクロール不可
$('.hamburger__btn').on('click',function(){
    $('.hamburger__btn').toggleClass('active');
    $('.sp-nav').fadeToggle(500);
    $('body').toggleClass('noscroll');
});

