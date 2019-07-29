
//選單使用的變數
var menu = "menu";
var btnProduct = "menu #btn-product";
var btnLanguage = "menu #btn-language";
var area = "menu .area";
var areaProduct = "menu #area-product";
var areaLanguage = "menu #area-language";

//移動裝置選單的變數
var mBtnMenu = "menu #btn-m-menu";
var mBtnLanguage = "menu #btn-m-language";
var mArea = "menu .area-m";
var mAreaMenu = "menu #area-m-menu";
var mAreaLanguage = "menu #area-m-language";

//產品預覽器使用的變數
var picMax = 5;
var picNum = 4;
var pic = "#section04 #pic img";
var arrowLeft = "#section04 #arrow-left";
var arrowRight = "#section04 #arrow-right";
var dot = "#section04 #dot";

$(document).ready(function(){
  //選單前置
  $( btnProduct ).mouseenter( btnProductEnter );
  $( btnLanguage  ).mouseenter( btnLanguageEnter );
  $( menu ).mouseleave( menuLeave );

  //移動裝置選單前置
  $( mBtnMenu ).click( mBtnMenuClick );
  $( mBtnLanguage ).click( mBtnLanguageClick );
  $( mArea ).click( mAreaClick );

  //產品預覽前置
  $( arrowLeft ).css( "opacity", 0.5 );
  $( arrowRight ).css( "opacity", 0.5 );
  $( pic ).click( arrowRightClick );

  $( arrowLeft ).click( arrowLeftClick );
  $( arrowRight ).click( arrowRightClick );
  for( let i = 0; i < picMax; i++ ){
    if( i == picNum ){ $( dot + i ).css( "opacity", 1 ) }
    else{ $( dot + i ).css( "opacity", 0.5 ) }
    $( dot + i ).click( function(){
      $( dot + picNum ).animate( { opacity: 0.5 } );
      changePic( i );
    } );
  }
});

function btnProductEnter(){
  menuLeave();
  $( areaProduct ).css( "opacity", "0" );
  $( areaProduct ).css( "display", "inline" );
  $( areaProduct ).animate( { opacity: 1 } );
}

function btnLanguageEnter(){
  menuLeave();
  $( areaLanguage ).css( "opacity", "0" );
  $( areaLanguage ).css( "display", "inline" );
  $( areaLanguage ).animate( { opacity: 1 } );
}

function menuLeave(){
  $( area ).css( "display", "none" );
}

function mBtnMenuClick(){
  mAreaClick();
  $( mAreaMenu ).css( "opacity", "0" );
  $( mAreaMenu ).css( "display", "inline" );
  $( mAreaMenu ).animate( { opacity: 1 } );
}

function mBtnLanguageClick(){
  mAreaClick();
  $( mAreaLanguage ).css( "opacity", "0" );
  $( mAreaLanguage ).css( "display", "inline" );
  $( mAreaLanguage ).animate( { opacity: 1 } );
}

function mAreaClick(){
  $( mArea ).css( "display", "none" );
}

function arrowLeftClick(){
  if( picNum - 1 >= 0 ){
    $( dot + picNum ).animate( { opacity: 0.5 } );
    changePic( picNum - 1 );
  }
}

function arrowRightClick(){
  if( picNum + 1 < picMax ){
    $( dot + picNum ).animate( { opacity: 0.5 } );
    changePic( picNum + 1 );
  }
}

function changePic( value ){
  if( value != 0 && value != picMax - 1 ){
    $( arrowLeft ).css( "opacity", 0.5 );
    $( arrowRight ).css( "opacity", 0.5 );
  }
  else if( value == 0 ){ $( arrowLeft ).css( "opacity", 0.2 ) }
  else if( value == picMax - 1 ){ $( arrowRight ).css( "opacity", 0.2 ) }
  $( pic ).animate( { opacity: 0 }, function(){
    $( pic ).attr( "src", "Website/images/s04/pic"+ value +".png" );
    $( pic ).animate( { opacity: 1 } );
    $( dot + value ).animate( { opacity: 1 } );
  });
  picNum = value;
}
