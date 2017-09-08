var images = new Array()
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preload.arguments[i]
	}
}
preload(
	"images/QixiA.png",
	"images/cloud1.png",
	"images/cloud2.png",
	"images/sun.png",
	"images/QixiB-dark.png",
	"images/door-left.png",
	"images/door-right.png",
	"images/bird.png",
	"images/QixiC.png",
	"images/原图/water1.png",
	"images/原图/water2.png",
	"images/原图/water3.png",
	"images/原图/water4.png",
	"images/stars.png",
	"images/stars.png",
	"images/stars.png",
	"images/stars.png",
	"images/stars.png",
	"images/stars.png",
	"images/girl.png",
	"images/原图/person/boy-walk.png",
	"images/原图/person/boy-flower.png",
	"images/QixiB-bright.png",
	"images/QixiB-dark.png",
	"images/boy.png",
	"images/snowflake/snowflake1.png",
	"images/snowflake/snowflake2.png",
	"images/snowflake/snowflake3.png",
	"images/snowflake/snowflake4.png",
	"images/snowflake/snowflake5.png",
	"images/snowflake/snowflake6.png"
)
