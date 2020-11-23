$(document).ready(function(){
    $("button").click(function(){
        let tl = gsap.timeline({
            onComplete: "Animation ist fertig"
        });

    tl.to("#left_eye, #right_eye", 0, {
        transformOrigin: "center center",
        y: 5,
        fill:"darkred",
        scaleY: 0.1,
        duration: 0.5,
    })

    .to("#left_pupil, #right_pupil", 0, {
        transformOrigin: "center center",
        y: 5,
        scale: 0,
        duration: 0.20,
    })

    tl.to("#left_eyebrow, #right_eyebrow", {
        transformOrigin: "center center",
        y: -5
    })

    tl.to("#mouth, #tongue", {
        transformOrigin: "center center",
        scale: 1.5,
        duration: 2.5
    })
    tl.to("#left_eye, #right_eye", 0, {
        transformOrigin: "center center",
        y: 0,
        fill:"white",
        scaleY: 1,
        duration: 1,
    })
    .to("#left_pupil, #right_pupil", 0, {
        transformOrigin: "center center",
        y: 0,
        scale: 1,
        duration: 0.5,
    })
    tl.to("#mouth, #tongue", {
        scale: 1,
        duration: 0.75
    })
    })
});