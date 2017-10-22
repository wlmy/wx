function changeTab(num) {
    if (num === 0) {
        $('#tab-chat').addClass('current');
        $('#tab-desc').removeClass('current');

        $('.wrap').show();
        $('.live-desc-section').hide();
    }
    if (num === 1) {
        $('#tab-chat').removeClass('current');
        $('#tab-desc').addClass('current');

        $('.wrap').hide();
        $('.live-desc-section').show();
    }
}
$(function () {
    //初始化高度
    $('.scroll-talk').css({height:window.innerHeight-320- 51,overflow:'auto','margin-bottom':0});
    $('.wrap').css({height:window.innerHeight-320,overflow:'auto',});
    $('.live-desc-section').css({height:window.innerHeight-320,overflow:'auto',});

    //点击后高度
    $('.face-icon img').click(function () {
        var preshow = $('#emotions').css('display');
        if(preshow==='block'){
            $(".face-icon img").attr('src','http://livestatic.videocc.net/assets/wimages/icon-emotion.png');
            $('.emotions').hide();
            $("#publish-box").css("height","51px");
            $('.scroll-talk').css({height:window.innerHeight-320-51,overflow:'auto','margin-bottom':0});
        }else if(preshow==='none'){
            $(".face-icon img").attr('src','http://livestatic.videocc.net/assets/wimages/icon-keyboard.png');
            $('.emotions').show();
            $('.wrap').scrollTop($('.wrap').outerHeight());
            $("#publish-box").css("height","151px");
            $('.scroll-talk').css({height:window.innerHeight-320-151,overflow:'auto','margin-bottom':0});
        }
    });
});

var _start_time = "<?php echo date('Y/m/d H:i',$info['start_time'])?>";
var NowTime = new Date();
var EndTime = new Date(_start_time); //截止时间 {$info.start_time}//
var t = EndTime.getTime() - NowTime.getTime();
if(t > 0) setInterval(getRTime, 1000);
else $('.time_down').hide();

function getRTime() {
    var NowTime = new Date();
    var EndTime = new Date(_start_time); //截止时间 {$info.start_time}//
    var t = EndTime.getTime() - NowTime.getTime();
    var d = Math.floor(t / 1000 / 24 / 60 / 60 );
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    var m = Math.floor(t / 1000 / 60 % 60);
    var s = Math.floor(t / 1000 % 60);

    if( d == 0 && h == 0  && m == 0 && s == 0 ){
        location.reload();
    }else{
        $('.day').html(d + '天');
        $('.hour').html(h + '时');
        $('.minute').html(m + '分');
        $('.second').html(s + '秒');
    }
}

/*if( _start_time ) setInterval(getRTime, 1000);
else $('.time_down').hide();*/