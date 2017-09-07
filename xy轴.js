function BoyWalk(){

    var bWidth = $("#screem").width()
    var bHeight = $("#screem").height()
    var doorHeight = $(".door").height()
    var boyHeight = $("#boy").height()
    var boyHeight1 = $("#boy1").height()
    //太阳、云朵
    function sun(){
        $(".sun").css({
            'transition-timing-function':'linear',
            'transition-duration':'10000ms',
            'transform':'translate('+ -bHeight*1.2+'px'+','+bHeight*0.25+'px)',
            '-webkit-transition-timing-function':'linear',
            '-webkit-transition-duration':'10000ms',
            '-webkit-transform':'translate('+ -bHeight*1.2+'px'+','+bHeight*0.25+'px)',
            '-moz-transition-timing-function':'linear',
            '-moz-transition-duration':'10000ms',
            '-moz-transform':'translate('+ -bHeight*1.2+'px'+','+bHeight*0.25+'px)',
            '-ms-transition-timing-function':'linear',
            '-ms-transition-duration':'10000ms',
            '-ms-transform':'translate('+ -bHeight*1.2+'px'+','+bHeight*0.25+'px)',
            '-o-transition-timing-function':'linear',
            '-o-transition-duration':'10000ms',
            '-o-transform':'translate('+ -bHeight*1.2+'px'+','+bHeight*0.25+'px)'
        })
        $(".cloud1").css({
            'transition-timing-function':'linear',
            'transition-duration':'9820ms',
            'transform':'translate('+ bHeight*1.52+'px,0)',
            '-webkit-transition-timing-function':'linear',
            '-webkit-transition-duration':'9820ms',
            '-webkit-transform':'translate('+ bHeight*1.52+'px,0)',
            '-moz-transition-timing-function':'linear',
            '-moz-transition-duration':'9820ms',
            '-moz-transform':'translate('+ bHeight*1.52+'px,0)',
            '-ms-transition-timing-function':'linear',
            '-ms-transition-duration':'9820ms',
            '-ms-transform':'translate('+ bHeight*1.52+'px,0)',
            '-o-transition-timing-function':'linear',
            '-o-transition-duration':'9820ms',
            '-o-transform':'translate('+ bHeight*1.52+'px,0)'
        })
        $(".cloud2").css({
            'transition-timing-function':'linear',
            'transition-duration':'16000ms',
            'transform':'translate('+ -bHeight*1.52+'px,0)',
            '-webkit-transition-timing-function':'linear',
            '-webkit-transition-duration':'16000ms',
            '-webkit-transform':'translate('+ -bHeight*1.52+'px,0)',
            '-moz-transition-timing-function':'linear',
            '-moz-transition-duration':'16000ms',
            '-moz-transform':'translate('+ -bHeight*1.52+'px,0)',
            '-ms-transition-timing-function':'linear',
            '-ms-transition-duration':'16000ms',
            '-ms-transform':'translate('+ -bHeight*1.52+'px,0)',
            '-o-transition-timing-function':'linear',
            '-o-transition-duration':'16000ms',
            '-o-transform':'translate('+ -bHeight*1.52+'px,0)'
        })
    }
    //小鸟
    function bird(){
        $(".bird").css({
            'transform':'translate(-'+bHeight*1.7+'px,0)',
            'transition-timing-function':'linear',
            'transition-duration':'17000ms',
            '-webkit-transform':'translate(-'+bHeight*1.7+'px,0)',
            '-webkit-transition-timing-function':'linear',
            '-webkit-transition-duration':'17000ms',
            '-moz-transform':'translate(-'+bHeight*1.7+'px,0)',
            '-moz-transition-timing-function':'linear',
            '-moz-transition-duration':'17000ms',
            '-ms-transform':'translate(-'+bHeight*1.7+'px,0)',
            '-ms-transition-timing-function':'linear',
            '-ms-transition-duration':'17000ms',
            '-o-transform':'translate(-'+bHeight*1.7+'px,0)',
            '-o-transition-timing-function':'linear',
            '-o-transition-duration':'17000ms'

        })
    }
    function door(){
        $(".door1 img").css({
            'transform':'translate(-'+bHeight*0.1+'px,0)',
            'transition-timing-function':'ease-in-out',
            'transition-duration':'1000ms',
            '-webkit-transform':'translate(-'+bHeight*0.1+'px,0)',
            '-webkit-transition-timing-function':'ease-in-out',
            '-webkit-transition-duration':'1000ms',
            '-moz-transform':'translate(-'+bHeight*0.1+'px,0)',
            '-moz-transition-timing-function':'ease-in-out',
            '-moz-transition-duration':'1000ms',
            '-ms-transform':'translate(-'+bHeight*0.1+'px,0)',
            '-ms-transition-timing-function':'ease-in-out',
            '-ms-transition-duration':'1000ms',
            '-o-transform':'translate(-'+bHeight*0.1+'px,0)',
            '-o-transition-timing-function':'ease-in-out',
            '-o-transition-duration':'1000ms'
        })
        $(".door2 img").css({
            'transform':'translate('+bHeight*0.1+'px,0)',
            'transition-timing-function':'ease-in-out',
            'transition-duration':'1000ms',

            '-webkit-transform':'translate('+bHeight*0.1+'px,0)',
            '-webkit-transition-timing-function':'ease-in-out',
            '-webkit-transition-duration':'1000ms',
            '-moz-transform':'translate('+bHeight*0.1+'px,0)',
            '-moz-transition-timing-function':'ease-in-out',
            '-moz-transition-duration':'1000ms',
            '-ms-transform':'translate('+bHeight*0.1+'px,0)',
            '-ms-transition-timing-function':'ease-in-out',
            '-ms-transition-duration':'1000ms',
            '-o-transform':'translate('+bHeight*0.1+'px,0)',
            '-o-transition-timing-function':'ease-in-out',
            '-o-transition-duration':'1000ms'
        })
    }
    function closedoor(){
        $(".door1 img").css({
            'transform':'translate('+doorHeight*0.5+'px,0)',
            'transition-timing-function':'ease-in-out',
            'transition-duration':'1000ms',
            '-webkit-transform':'translate('+doorHeight*0.5+'px,0)',
            '-webkit-transition-timing-function':'ease-in-out',
            '-webkit-transition-duration':'1000ms',
            '-moz-transform':'translate('+doorHeight*0.5+'px,0)',
            '-moz-transition-timing-function':'ease-in-out',
            '-moz-transition-duration':'1000ms',
            '-ms-transform':'translate('+doorHeight*0.5+'px,0)',
            '-ms-transition-timing-function':'ease-in-out',
            '-ms-transition-duration':'1000ms',
            '-o-transform':'translate('+doorHeight*0.5+'px,0)',
            '-o-transition-timing-function':'ease-in-out',
            '-o-transition-duration':'1000ms'
        })
        $(".door2 img").css({
            'transform':'translate(-'+doorHeight*0.5+'px,0)',
            'transition-timing-function':'ease-in-out',
            'transition-duration':'1000ms',

            '-webkit-transform':'translate(-'+doorHeight*0.5+'px,0)',
            '-webkit-transition-timing-function':'ease-in-out',
            '-webkit-transition-duration':'1000ms',
            '-moz-transform':'translate(-'+doorHeight*0.5+'px,0)',
            '-moz-transition-timing-function':'ease-in-out',
            '-moz-transition-duration':'1000ms',
            '-ms-transform':'translate(-'+doorHeight*0.5+'px,0)',
            '-ms-transition-timing-function':'ease-in-out',
            '-ms-transition-duration':'1000ms',
            '-o-transform':'translate(-'+doorHeight*0.5+'px,0)',
            '-o-transition-timing-function':'ease-in-out',
            '-o-transition-duration':'1000ms'
        })
    }
    //进出商店
    function goshop(){
        $("#boy").css({
            'transform':'translate('+boyHeight*0.35+'px,'+ -boyHeight*0.25+'px) scale('+boyHeight*0.001+')',
            'transition-timing-function':'ease-in',
            'transition-duration':'1400ms',
            'transition-delay':'1300ms',
            'opacity':0,
            '-webkit-transform':'translate('+boyHeight*0.35+'px,'+ -boyHeight*0.25+'px) scale('+boyHeight*0.001+')',
            '-webkit-transition-timing-function':'ease-in',
            '-webkit-transition-duration':'1400ms',
            '-webkit-transition-delay':'1300ms',
            '-webkit-opacity':0,
            '-moz-transform':'translate('+boyHeight*0.35+'px,'+ -boyHeight*0.25+'px) scale('+boyHeight*0.001+')',
            '-moz-transition-timing-function':'ease-in',
            '-moz-transition-duration':'1400ms',
            '-moz-transition-delay':'1300ms',
            '-moz-opacity':0,
            '-ms-transform':'translate('+boyHeight*0.35+'px,'+ -boyHeight*0.25+'px) scale('+boyHeight*0.001+')',
            '-ms-transition-timing-function':'ease-in',
            '-ms-transition-duration':'1400ms',
            '-ms-transition-delay':'1300ms',
            '-ms-opacity':0,
            '-o-transform':'translate('+boyHeight*0.35+'px,'+ -boyHeight*0.25+'px) scale('+boyHeight*0.001+')',
            '-o-transition-timing-function':'ease-in',
            '-o-transition-duration':'1400ms',
            '-o-transition-delay':'1300ms',
            '-o-opacity':0
        })
    }
    //拿花
    function takeflower(){
        $("#boy img").attr("src","../qixi/images/原图/person/boy-flower.png")
    }
    
    function outshop(){
        $("#boy").css({
            'transform':'translate('+boyHeight*0.4+'px,'+boyHeight*0.004+'px) scale('+boyHeight*0.004+')',
            'transition-timing-function':'ease-out',
            'transition-duration':'2000ms',
            'opacity':1,
            '-webkit-transform':'translate('+boyHeight*0.4+'px,'+boyHeight*0.004+'px) scale('+boyHeight*0.004+')',
            '-webkit-transition-timing-function':'ease-out',
            '-webkit-transition-duration':'2000ms',
            '-webkit-opacity':1,
            '-moz-transform':'translate('+boyHeight*0.4+'px,'+boyHeight*0.004+'px) scale('+boyHeight*0.004+')',
            '-moz-transition-timing-function':'ease-out',
            '-moz-transition-duration':'2000ms',
            '-moz-opacity':1,
            '-ms-transform':'translate('+boyHeight*0.4+'px,'+boyHeight*0.004+'px) scale('+boyHeight*0.004+')',
            '-ms-transition-timing-function':'ease-out',
            '-ms-transition-duration':'2000ms',
            '-ms-opacity':1,
            '-o-transform':'translate('+boyHeight*0.4+'px,'+boyHeight*0.004+'px) scale('+boyHeight*0.004+')',
            '-o-transition-timing-function':'ease-out',
            '-o-transition-duration':'2000ms',
            '-o-opacity':1
        })
    }
    
    //商店灯
    function shoplight(){
        $(".tback").attr("src","../qixi/images/QixiB-bright.png")
    }
    function dlight(){
        $(".tback").attr("src","../qixi/images/QixiB-dark.png")
    }
    //减速走路
    function slowwalk(){
        $("#boy").css({
            'transform':'translate(-'+bHeight*0.36+'px,0)',
            'transition-duration':'3200ms',
            'transition-timing-function':'linear',
            '-webkit-transform':'translate(-'+bHeight*0.36+'px,0)',
            '-webkit-transition-duration':'3200ms',
            '-webkit-transition-timing-function':'linear',
            '-moz-transform':'translate(-'+bHeight*0.36+'px,0)',
            '-moz-transition-duration':'3200ms',
            '-moz-transition-timing-function':'linear',
            '-ms-transform':'translate(-'+bHeight*0.36+'px,0)',
            '-ms-transition-duration':'3200ms',
            '-ms-transition-timing-function':'linear',
            '-o-transform':'translate(-'+bHeight*0.36+'px,0)',
            '-o-transition-duration':'3200ms',
            '-o-transition-timing-function':'linear'
        })
    }
    //上桥
    function upbridge(){
        $("#boy").css({
            'transform':'translate(-'+bHeight*0.1+'px,'+ -boyHeight*0.45+'px)',
            'transition-delay':'0ms',
            'transition-timing-function':'linear',
            'transition-duration':'3000ms',
            '-webkit-transform':'translate(-'+bHeight*0.1+'px,'+ -boyHeight*0.45+'px)',
            '-webkit-transition-delay':'0ms',
            '-webkit-transition-timing-function':'linear',
            '-webkit-transition-duration':'3000ms',
            '-moz-transform':'translate(-'+bHeight*0.1+'px,'+ -boyHeight*0.45+'px)',
            '-moz-transition-delay':'0ms',
            '-moz-transition-timing-function':'linear',
            '-moz-transition-duration':'3000ms',
            '-ms-transform':'translate(-'+bHeight*0.1+'px,'+ -boyHeight*0.45+'px)',
            '-ms-transition-delay':'0ms',
            '-ms-transition-timing-function':'linear',
            '-ms-transition-duration':'3000ms',
            '-o-transform':'translate(-'+bHeight*0.1+'px,'+ -boyHeight*0.45+'px)',
            '-o-transition-delay':'0ms',
            '-o-transition-timing-function':'linear',
            '-o-transition-duration':'3000ms'
        })
    }   
    //小男孩走路切换
    function stopWalk(){
        // var bleft = $("#boy").css("left")
        // $("#boy").removeClass('boywalk')
        $("#boy img").css("animationPlayState","paused")
        // $("#boy").css("left",bleft)
    }
    function makewalk(){    
        $("#boy img").css("animationPlayState","running")
    }

    //小男孩移动切换
    function boywalk(){
        $("#boy").addClass('boywalk')
    }
    function boystopwalk(){
        $("#boy").removeClass('boywalk')
    }
    //送花、转身
    function turn(){
        $("#boy img").attr("src","../qixi/images/boy.png")
        $("#boy img").css({
            'transform':'translate(-'+boyHeight*1.5+'px,0)',
            '-webkit-transform':'translate(-'+boyHeight*1.5+'px,0)',
            '-moz-transform':'translate(-'+boyHeight*1.5+'px,0)',
            '-ms-transform':'translate(-'+boyHeight*1.5+'px,0)',
            '-o-transform':'translate(-'+boyHeight*1.5+'px,0)',
            // left:boyHeight* -3+"px",
            height:boyHeight*2+"px",
            top:-boyHeight*1+"px"
        })
        $("#boy").css("height",bHeight*0.28+"px")
    }
    function bturn(){
        makewalk()
        $("#boy img").css({
            animationIterationCount:"1",
            animationName:"bTurn",
            animationFillMode:"forwards",
        })
        $("#boy img").addClass("boyTurn")
        $("#girl img").addClass("girlTurn")
    }
    //花瓣
	var flowerURL = [
	    '../qixi/images/snowflake/snowflake1.png',
	    '../qixi/images/snowflake/snowflake2.png',
	    '../qixi/images/snowflake/snowflake3.png',
	    '../qixi/images/snowflake/snowflake4.png',
	    '../qixi/images/snowflake/snowflake5.png',
	    '../qixi/images/snowflake/snowflake6.png'
	]

    function flowerL(){
        //随机六个花瓣
        function randomFlower(){
            return flowerURL[Math.floor(Math.random()*6)]
        }
        // 创建一个雪花元素
        function createflower(){
            var url = randomFlower()
            return $('<div class="flowerbox" />').css({
                width:bHeight*0.05+"px",
                height:bHeight*0.05+"px",
                position:"absolute",
                backgroundSize:"cover",
                zIndex:10000,
                backgroundImage:"url("+url+")"
            }).addClass("flowerAni")
        }
        //开始飘花
        setInterval(function(){
            //运动轨迹
            var startLeft = Math.random()*bHeight*1.6,
                startOpacity = 1,
                endTop = bHeight*0.9,
                endLeft = startLeft + Math.random()*bHeight*0.5
                duration = bHeight*10+Math.random()*bHeight*5
                // 随机透明度，不小于0.5
                var randomStart = Math.random()
                randomStart = randomStart < 0.5 ? startOpacity:randomStart

                //创建一个花瓣
                var $flower = createflower()

                // 设计起点位置
                $flower.css({
                	left:startLeft,
                	opacity:randomStart
                })
                
                //加入到容器
                $(".flower").append($flower)

                //开始执行动画
                $flower.animate({
                	top:endTop,
                	left:endLeft,
                	opacity:0.7
                },{
                	duration:duration,
                	complete:function(){
                		$(this).remove()
                	}
                })
        },200)
    }
    //背景音乐
    var audioConfig = {
        enable:true,//是否开启音乐
        playURL:'../qixi/music/happy.wav',
        cycleURL:'../qixi/music/circulation.wav'
    }

    function Html5Audio(url,isloop){
        var audio = new Audio(url)
        audio.autoPlay = true
        audio.loop = isloop || false
        audio.play()
        return {
            end:function(callback){
                audio.addEventListener('ended',function(){
                    callback()
                },false)
            }
        }
    }

    //x、y轴的移动
    function moveAway(direction,proportion){
        return (direction == "x" ? 
            bHeight : bHeight)*proportion
    }

    //运动回调设置
    function startmove(x,y,walktime){
        var dfPlay = $.Deferred()
        //恢复走路
        makewalk()
        //运动属性
        $("#boy").animate({
            left:x.left,
            top:y.top,
        },{
            duration:walktime,
            easing:'linear',
            complete:function(){
                dfPlay.resolve()
            }
        })      
        return dfPlay
    }


    //开始运动
    function makein(time,dist,disY){
        time = time || 3000

        boystopwalk()
        var d1 = startmove(
            {'left':dist + 'px'},
            {'top':disY ? disY+'px' : undefined},
            time)
        return d1
    }

     return {
        walkTo:function(time,proportionX,proportionY){
            var distX = moveAway('x',proportionX)
            var distY = moveAway('y',proportionY)
            sun()
            return makein(time,distX,distY)
        },
        door:function(){
            door()
            bird()
        },
        goshop:function(){
            goshop()
            setTimeout(takeflower,5000)
            setTimeout(shoplight,1000)
            setTimeout(makewalk,1200)
        },
        outshop:function(){
            setTimeout(outshop,3500)
        },
        closedoor:function(){
            setTimeout(closedoor,5500)
            setTimeout(dlight,6000)
        },
        shoplight:function(){
            shoplight()
        },
        stopW:function(){
            stopWalk()
        },
        swalk:function(){
            slowwalk()
        },
        upbridge:function(){
            upbridge()
        },
        givef:function(){
            turn()
        },
        setColor:function(){
            $("#boy").css("background","red")
        },
        Bturn:function(){
            bturn()
        },
        flowerDown:function(){
        	flowerL()
        },
        music:function(){
            var audio1 = Html5Audio(audioConfig.playURL)
            audio1.end(function(){
                Html5Audio(audioConfig.cycleURL,true)
            })
        }      
     }   
}

$(".stop").on("click",function(){
    var bleft = $("#boy").css("left")
    $("#boy").removeClass('boywalk')
    $("#boy img").css("animationPlayState","paused")
    $("#boy").css("left",bleft)
})
// $(".stay").on("click",function(){
//  $("#boy").toggleClass('boywalk')
//  $("#boy img").css("animationPlayState","running")
//  $("#boy").css("left",$("#screem").width()-$("#boy").width()*2+"px")
// })
    // $("#boy").addClass('boywalk')
    // $("#boy").css("left",$("#screem").width()-$("#boy").width()*2+"px")
    // $("#boy img").css("animationPlayState","running")
