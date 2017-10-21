/**
 * Created by Administrator on 2017/10/19.
 */
    //导航栏面包屑点击隐藏出现方法
var logoShow=true;
$("#brand").on("click",function(){
    if(logoShow){
        $(".iconTitle").hide();
        $("#inLogo").hide();
        $(".left").animate({width:60},0.1*1000);
        $("#logo").animate({width:1},0.1*1000);
        logoShow=false;
    }
    else{
        $(".iconTitle").show();
        $("#inLogo").show();
        $(".left").animate({width:230},0.1*1000);
        $("#logo").animate({width:180},0.1*1000);
        logoShow=true;
    }
});
