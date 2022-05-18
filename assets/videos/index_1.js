let Videos_1 = document.querySelectorAll(".clip_1");
let Videos_2 = document.querySelectorAll(".clip_2");
let Videos_3 = document.querySelectorAll(".clip_3");
let Videos_4 = document.querySelectorAll(".clip_4");
let Videos_5 = document.querySelectorAll(".clip_5");

let Play = document.querySelectorAll("iframe");

let arrows = document.querySelectorAll(".arr_1");

let dashs_1 = document.querySelectorAll(".dash_1");
let dashs_2 = document.querySelectorAll(".dash_2");
let dashs_3 = document.querySelectorAll(".dash_3");
let dashs_4 = document.querySelectorAll(".dash_4");
let dashs_5 = document.querySelectorAll(".dash_5");

let title = document.querySelector("#titleOfvideo");
let btn = document.querySelector("#ResetBtn");

//--------------src---------------
let src_1 = [
    "https://www.youtube.com/embed/UGqYxERL0Qg",
    "https://www.youtube.com/embed/yZImlFPZS48",
    "https://www.youtube.com/embed/p5ysc4ImrKo",
    "https://www.youtube.com/embed/Ot0B4QoyjOE"
];
let src_2 = [
    "https://www.youtube.com/embed/4z4MCGqluKQ",
    "https://www.youtube.com/embed/A8P4vfJ_ynU",
    "https://www.youtube.com/embed/guzwmm0yRL4",
    "https://www.youtube.com/embed/4rPPgcyPOQQ"
];
let src_3 = [
    "https://www.youtube.com/embed/G_A9Jf9msWs",
    "https://www.youtube.com/embed/eiAkk5s2LHM",
    "https://www.youtube.com/embed/KOSQxtytoPs"
];
let src_4 = [
    "https://www.youtube.com/embed/9Srjq2sGrMc",
    "https://www.youtube.com/embed/Ej9M-U1EiGY",
    "https://www.youtube.com/embed/PS5lDyaIEBg",
    "https://www.youtube.com/embed/BfqMEIo7pMw",
    "https://www.youtube.com/embed/u4RhkxTjLFs"
];
let src_5 = [
    "https://www.youtube.com/embed/flecCNe8yCA",
    "https://www.youtube.com/embed/nYOQH_byLCM",
    "https://www.youtube.com/embed/TYlN9PglGjI",
    "https://www.youtube.com/embed/zU3jAFI245I",
    "https://www.youtube.com/embed/AAGLNANtikc"
];



let Videos = Videos_1;
let dashs = dashs_1;

var choice = document.querySelector("#choice");
var option = choice.options[choice.selectedIndex];

title.innerHTML = option.innerText;

function updateBySel() {
    var choice = document.querySelector("#choice");
    var option = choice.options[choice.selectedIndex];

    title.innerHTML = option.innerText;
    console.log(option)

    if (choice.selectedIndex === 0) {
        dothis();
        Videos_1.forEach((el, index) => {
            el.classList.remove("hideMe");
            el.firstElementChild.firstElementChild.setAttribute("src", src_1[index]);
        })
        dashs_1.forEach((el) => {
            el.classList.remove("hideMe");
        })
        dashs = dashs_1;
        Videos = Videos_1;
    } else if (choice.selectedIndex === 1) {
        dothis();
        Videos_2.forEach((el, index) => {
            el.classList.remove("hideMe");
            el.firstElementChild.firstElementChild.setAttribute("src", src_2[index]);
        })
        dashs_2.forEach((el) => {
            el.classList.remove("hideMe");
        })
        dashs = dashs_2;
        Videos = Videos_2;
    } else if (choice.selectedIndex === 2) {
        dothis();
        Videos_3.forEach((el, index) => {
            el.classList.remove("hideMe");
            el.firstElementChild.firstElementChild.setAttribute("src", src_3[index]);
        })
        dashs_3.forEach((el) => {
            el.classList.remove("hideMe");
        })
        dashs = dashs_3;
        Videos = Videos_3;
    } else if (choice.selectedIndex === 3) {
        dothis();
        Videos_4.forEach((el, index) => {
            el.classList.remove("hideMe");
            el.firstElementChild.firstElementChild.setAttribute("src", src_4[index]);
        })
        dashs_4.forEach((el) => {
            el.classList.remove("hideMe");
        })
        dashs = dashs_4;
        Videos = Videos_4;
    } else {
        dothis();
        Videos_5.forEach((el, index) => {
            el.classList.remove("hideMe");
            el.firstElementChild.firstElementChild.setAttribute("src", src_5[index]);
        })
        dashs_5.forEach((el) => {
            el.classList.remove("hideMe");
        })
        dashs = dashs_5;
        Videos = Videos_5;
    }
    Update(0);
    // ==============================================
    Videos.forEach((el, index) => {
        el.addEventListener("click", (event) => {
            Update(index);
            currentpos = index;
        })
    });
    dashs.forEach((el, index) => {
        el.addEventListener("click", (event) => {
            Update(index);
            currentpos = index;
        })
    })
}


function dothis() {
    Videos_1.forEach((el) => {
        el.classList.add("hideMe");
        el.classList.remove("level");
        el.classList.remove("active");
    })
    Videos_2.forEach((el) => {
        el.classList.add("hideMe");
        el.classList.remove("level");
        el.classList.remove("active");

    })
    Videos_3.forEach((el) => {
        el.classList.add("hideMe");
        el.classList.remove("level");
        el.classList.remove("active");
    })
    Videos_4.forEach((el) => {
        el.classList.add("hideMe");
        el.classList.remove("level");
        el.classList.remove("active");
    })
    Videos_5.forEach((el) => {
        el.classList.add("hideMe");
        el.classList.remove("level");
        el.classList.remove("active");
    })
    dashs_1.forEach((el) => {
        el.classList.add("hideMe");
        el.classList.remove("active");
    })
    dashs_2.forEach((el) => {
        el.classList.add("hideMe");
        el.classList.remove("active");
    })
    dashs_3.forEach((el) => {
        el.classList.add("hideMe");
        el.classList.remove("active");
    })
    dashs_4.forEach((el) => {
        el.classList.add("hideMe");
        el.classList.remove("active");
    })
    dashs_5.forEach((el) => {
        el.classList.add("hideMe");
        el.classList.remove("active");
    })
}

// updateBySel();

btn.onclick = () => {
    updateBySel();
    nbr_Videos = Videos.length;
    currentpos = 0;
}






var nbr_Videos = Videos.length;
var currentpos = 0;

Videos.forEach((el, index) => {
    el.addEventListener("click", (event) => {
        Update(index);
        currentpos = index;
    })
});
dashs.forEach((el, index) => {
    el.addEventListener("click", (event) => {
        Update(index);
        currentpos = index;
    })
})


arrows[1].addEventListener("click", (event) => {
    currentpos++;
    //console.log("right clisk  " + currentpos);
    if (currentpos === nbr_Videos - 1) {
        arrows[1].classList.remove("active");
    }
    arrows[0].classList.add("active");
    Update(currentpos);
});
arrows[0].addEventListener("click", (event) => {
    //console.log("left clisk  " + currentpos);
    currentpos--;
    if (currentpos === 0) {
        arrows[0].classList.remove("active");
    }
    arrows[1].classList.add("active");
    Update(currentpos);
});

function Update(arg) {
    Videos.forEach((el) => {
        el.classList.remove("active");
        el.classList.remove("level");
        el.style.margin = "0px 39px";
    });
    dashs.forEach((el) => {
        el.classList.remove("active");
    })

    dashs[arg].classList.add("active");
    Videos[arg].classList.add("active");
    let dim = document.documentElement.clientWidth;

    if (arg === 0) {
        Videos[arg + 1].classList.add("level");
        Videos[arg + 2].classList.add("level");
        if (dim > 769)
            Videos[arg].style.marginLeft = "60%";
    }
    if (arg === nbr_Videos - 1) {
        Videos[arg - 1].classList.add("level");
        Videos[arg - 2].classList.add("level");
        if (dim > 769)
            Videos[arg].style.marginRight = "60%";
    }
    if (arg > 0 && arg < nbr_Videos - 1) {
        Videos[arg - 1].classList.add("level");
        Videos[arg + 1].classList.add("level");
        Videos[arg].style.margin = "0px 56px";
    }

    // title.innerHTML = Videos[arg].getAttribute('value');
    if (arg === 0) {
        arrows[0].classList.remove("active");
    } else {
        arrows[0].classList.add("active");
    }
    if (arg === nbr_Videos - 1) {
        arrows[1].classList.remove("active");
    } else {
        arrows[1].classList.add("active");
    }
}