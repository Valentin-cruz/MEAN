document.addEventListener('DOMContentLoaded', function () {

    LottieInteractivity.create({
        mode:"cursor",
        player: "#eightthLottie",
        actions: [
            {
                position: { x: [0, 1], y: [0, 1] },
                type: "loop",
                frames: [0, 155]
            }
        ]
    });

});