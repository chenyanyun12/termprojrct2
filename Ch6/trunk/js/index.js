/**
 * 乐购商城首页js
 * 2021-10-27 by 陈彦沄
 */
//当页面加载完毕
$(function(){
    /*首页大图轮播*/
   $("#bannerInner").tyslide({
        boxh:460,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });
    /*图书电子书小轮播*/
    $("#ebooks-banner").tyslide({
        boxh:223,//盒子的高度
        w:332,//盒子的宽度
        h:223,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
       
    });
    /*电子书tab切换*/
    $('.ebooks-nav > li').mouseenter(function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        var index = $(this).index();
        $('.ebooks-list').eq(index).show().siblings('.ebooks-list').hide();
    })
   /*新书列表手风琴效果*/
   $('.ebooks .right-box ul > li').mouseenter(function(){
       //所有兄弟：隐藏详情 显示标题
       $(this).siblings().find('.desc').hide();
       $(this).siblings().find('.ebooks-title').show();
      //当前： 隐藏标题 显示详情
      $(this).find('.ebooks-title').hide();
      $(this).find('.desc').show();
   })
    
    /* 服装小轮播 */
    $("#clothes-banner").tyslide({
        boxh:352,//盒子的高度
        w:472,//盒子的宽度
        h:352,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:4,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#f60000",//当前控制按钮的颜色
    });
    /* 运动小轮播 */ 
    $("#sport-banner").tyslide({
        boxh:352,//盒子的高度
        w:472,//盒子的宽度
        h:352,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:4,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#f60000",//当前控制按钮的颜色
    });
    /* 童装小轮播 */
    $("#childeren-banner").tyslide({
        boxh:352,//盒子的高度
        w:472,//盒子的宽度
        h:352,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:4,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#f60000",//当前控制按钮的颜色
    });

      /* 推广商品切换 */
      $('.promotion .promotion-title ul li').mouseenter(function(){
        // 导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')
        // 内容切换
        // 获取对应的索引
        console.log(index)
        console.log($('.promotion .promotion-content .inner-box'))
        var index = $(this).index(); // 0 => left:0*1170, 1 => left:-1*1170, 3 =>left:-2*1170
        //左右移动
        $('.promotion .promotion-content .inner-box').animate({
            'left':-index*1170
        },300)
    })
    
})