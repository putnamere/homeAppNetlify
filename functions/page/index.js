$(document).ready(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('show')
            } else {
                //e.target.classList.remove('show')
            }
        })
    })
    const loadOnScrollElements = document.querySelectorAll(".section")
    loadOnScrollElements.forEach(e => observer.observe(e))
    let counter = 0
    $(".switch").click(() => {
        counter++
        if (counter % 2 != 0) return
        console.log('thingy')
        document.body.classList.toggle("dark-theme")
    })

    $(document).mousemove((e) => {
        if (e.clientY < 65) {
            $(".topBar").css({"top": "0"})
            $(".switch").css({"top": "0"})
            $(".pageProgress").css({"top": "60px"})
        } else if ($(document).scrollTop() > 4) {
            $(".topBar").css({"top": "-60px"})
            $(".switch").css({"top": "-60px"})
            $(".pageProgress").css({"top": "0"})
        }
    })
    $(document).scroll((e) => {
        if ($(document).scrollTop() < 4) {
            $(".topBar").css({"top": "0"})
            $(".switch").css({"top": "0"})
            $(".pageProgress").css({"top": "60px"})
        } else {
            $(".topBar").css({"top": "-60px"})
            $(".switch").css({"top": "-60px"})
            $(".pageProgress").css({"top": "0"})
        }
        $(".progress").css({"width": `${($(document).scrollTop() / ($(document).height() - 1000))*100}%`})
    })
})