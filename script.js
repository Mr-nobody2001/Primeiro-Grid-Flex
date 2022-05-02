let screenS = innerWidth

let varMenuV = document.querySelector("#idMenu")

let varMenuI = document.querySelector("#iMenu")

let varClose = document.querySelector("#idClose")

let varImages = document.querySelectorAll("figure > img")

let varNomes = document.querySelectorAll(".div_4  article")

let varHeader = document.querySelector("header")

let varDiv = document.getElementsByClassName("div2")

let varArt = document.getElementsByClassName("art1")

function funScreenS() {

    screenS = innerWidth

    varHeader.style.paddingLeft = "30px"
    
    varMenuI.addEventListener("touchstart", function () {
    varMenuV.setAttribute("class", "mv")
    })

    varClose.addEventListener("touchstart", function () {
        varMenuV.setAttribute("class", "mi")
    })

    for (let i = 0; i < varBut.length; i++) {

        varBut[i].addEventListener("touchstart", function () {
            window.location.href = "https://github.com/Mr-nobody2001"
        })

    }

    varImages[0].src = "logo.svg"

    varImages[3].src = "image-interactive.jpg"

    varImages[4].src = "image-deep-earth.jpg"

    varImages[5].src = "image-night-arcade.jpg"

    varImages[6].src = "image-soccer-team.jpg"

    varImages[7].src = "image-grid.jpg"

    varImages[8].src = "image-from-above.jpg"

    varImages[9].src = "image-pocket-borealis.jpg"

    varImages[10].src = "image-curiosity.jpg"

    varImages[11].src = "image-fisheye.jpg"


    if (screenS >= 500) {
        
        for (let i = 0; i < varBut.length; i++) {

            varBut[i].addEventListener("click", function () {
                window.location.href = "https://github.com/Mr-nobody2001"
            })
    
        }

        varImages[0].src = "logo.svg"

        varImages[3].src = "image-interactive-d.jpg"

        varImages[4].src = "image-deep-earth-d.jpg"

        varImages[5].src = "image-night-arcade-d.jpg"

        varImages[6].src = "image-soccer-team-d.jpg"

        varImages[7].src = "image-grid-d.jpg"

        varImages[8].src = "image-from-above-d.jpg"

        varImages[9].src = "image-pocket-borealis-d.jpg"

        varImages[10].src = "image-curiosity-d.jpg"

        varImages[11].src = "image-fisheye-d.jpg"

        for (let i = 4; i < 12; i++) {

            varImages[i].addEventListener("mouseover", function () {

                varNomes[i - 4].style.color = "hsl(0, 0%, 0%)"

            })

            varImages[i].addEventListener("mouseout", function () {

                varNomes[i - 4].style.color = "hsl(0, 0%, 100%)"

            })

        }

    }

}

window.addEventListener("load", funScreenS)

window.addEventListener("resize", funScreenS)
