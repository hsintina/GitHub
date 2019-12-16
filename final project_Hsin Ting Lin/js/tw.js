// var controller = new ScrollMagic.Controller();
// // Parallax background
// new ScrollMagic.Scene({
//     triggerElement: "#TWtitle",
//     triggerHook: "onCenter",
// })
// .duration('200%')
// .setTween("#bg1", {
//     backgroundPosition: "0% 100%",
//     ease: Linear.easeNone
// })
// .addIndicators() // for debugging purposes
// .addTo(controller);

// init controller
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

// build scenes
new ScrollMagic.Scene({triggerElement: "#p1})
	.setTween("#bg1", {y: "0% 100%", ease: Linear.easeNone})
	.addIndicators()
	.addTo(controller);