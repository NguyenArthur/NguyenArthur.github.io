const txt = document.getElementById('animeText');

new Typewriter(txt, {
    deleteSpeed: 20
})
    .changeDelay(30)
    .typeString('Hello! I\'m Arthur,')
    .pauseFor(300)
    .typeString('<strong> Efrei Student</strong>')
    .pauseFor(1000)
    .deleteChars(13)
    .typeString('<strong> Software Engineer!</strong>')
    .pauseFor(1000)
    .start()