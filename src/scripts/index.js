/**
 * Created by baobao on 2016/7/25.
 */
"use strict";
require("bootstrap-css").carousel;
var pageData = require('./data.js');
var Vue = require('vue');
var $jq = require('jquery');
require('./common/fsvs.js');
var carousel = require('vue-strap').carousel;
var slider = require('vue-strap').slider;
require("../styles/index.scss");
var videojs = require('./common/video.js');
var HEIGHT = window.screen.height-80;
var videoPlay;
var cookie_val = getCookie("isChinese") || "chinese";
document.cookie="isChinese="+ cookie_val;
function getCookie(cookie_name){
    var allcookies = document.cookie;

    var cookie_pos = allcookies.indexOf(cookie_name);   //索引的长度  ,开始索引的位置

    // 如果找到了索引，就代表cookie存在,反之，就说明不存在。
    if (cookie_pos != -1){

        // 把cookie_pos放在值的开始，只要给值加1即可。
        cookie_pos = cookie_pos+cookie_name.length + 1; //计算取cookie值得开始索引，加的1为“=”
        var cookie_end = allcookies.indexOf(";", cookie_pos);  //计算取cookie值得结束索引

        if (cookie_end == -1){
            cookie_end = allcookies.length;

        }
        var value = unescape(allcookies.substring(cookie_pos, cookie_end)); //这里就可以得到你想要的cookie的值了。\
        //alert(values);
    }
    return value;
}
var vueVm = new Vue({
    el: '#content',
    components: {
        'carousel': carousel,
        'slider':slider
    },
    data:{
        isChinese: cookie_val==='chinese'?true:false,
        interval:1000,
        currentPage:0,
        currentHeight:HEIGHT,
        titleListChina:['服务','产品','支持','关于'],
        titleList:['Servers','Product','Support','About'],
        imgList: pageData.imgList
    },
    methods:{
        choseTitle: function (index){
            this.currentPage = index+1;
            fsvs.slideToIndex(this.currentPage);
        },
        changeLanguage: function (value){
          document.cookie="isChinese="+ (value ? 'chinese':'english');
          this.isChinese = value;
        }
    },
    compiled: function(){
      // $jq("#defaultData").empty().hide();
    }
});
var begin = {
    init: function (){
        this.first();
    },
    first: function (){
        var len = vueVm.titleList.length+1;
            vueVm.$children[0].isAnimating = false;
        for (var i = 1;i<len;i++) {
            vueVm.$children[i].isAnimating = true;
        }
        var player = $jq('#example_video1').length;
        if (player) {
          videoPlay = videojs("example_video1", {
              autoplay:false,
              controlBar: {
                  captionsButton: false,
                  chaptersButton : false,
                  liveDisplay:false,
                  subtitlesButton:false,
                  volumeMenuButton:true
            }
          }).ready(function(){

            var myPlayer = this;

              myPlayer.on('error',function (e) {
                myPlayer.error(null);
                myPlayer.reset();
              });

          });
        }
    },
    slide: function (index) {
        var len = vueVm.titleList.length+1;
        for (var i = 0;i<len;i++) {
            vueVm.$children[i].isAnimating = true;
        }
        vueVm.$children[index].isAnimating = false;
    }
};
var fsvs = $jq.fn.fsvs({
    bodyID : 'fsvs-body',
    selector : '> .slide',
    mouseSwipeDisance : 40,
    afterSlide : function(){},
    beforeSlide : function(index){
        vueVm.currentPage = index;
        if (index === 0) {
          videoPlay && videoPlay.play();
        } else {
          videoPlay && videoPlay.pause();
        }
        begin.slide(index);
    },
    endSlide : function(){},
    mouseWheelEvents : true,
    mouseDragEvents : true,
    touchEvents : true,
    arrowKeyEvents : true,
    pagination : true,
    nthClasses : false,
    detectHash : true
    });
$jq(document).ready( function() {
    begin.init();
});
