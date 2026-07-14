/* ==========================================================
   LowC Bio
   script.js (1/5)
========================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);

});

/* ============================================
   CLOCK
============================================ */

function updateClock() {

    const now = new Date();

    const h = String(now.getHours()).padStart(2, "0");

    const m = String(now.getMinutes()).padStart(2, "0");

    const clock = document.getElementById("clock");

    if (clock)

        clock.innerHTML = h + ":" + m;

}

setInterval(updateClock, 1000);

updateClock();

/* ============================================
   TYPING EFFECT
============================================ */

const typing = document.getElementById("typing");

const texts = [

    "Professional Roblox Trader",

    "Grow A Garden",

    "Steal Brainrot",

    "Trusted Auction",

    "LowC🕷️"

];

let textIndex = 0;

let charIndex = 0;

let deleting = false;

function typingEffect() {

    if (!typing) return;

    const current = texts[textIndex];

    if (!deleting) {

        typing.innerHTML = current.substring(0, charIndex);

        charIndex++;

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typingEffect, 1200);

            return;

        }

    } else {

        typing.innerHTML = current.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length)

                textIndex = 0;

        }

    }

    setTimeout(typingEffect, deleting ? 35 : 80);

}

typingEffect();

/* ============================================
   MUSIC
============================================ */

const music = document.getElementById("music");

const musicButton = document.getElementById("musicButton");

let playing = false;

if (musicButton) {

    musicButton.onclick = () => {

        if (!playing) {

            music.play();

            musicButton.innerHTML = "❚❚";

            playing = true;

        } else {

            music.pause();

            musicButton.innerHTML = "♫";

            playing = false;

        }

    }

}

/* ============================================
   CURSOR
============================================ */

const dot = document.getElementById("cursor-dot");

const ring = document.getElementById("cursor-ring");

window.addEventListener("mousemove", (e) => {

    if (dot) {

        dot.style.left = e.clientX + "px";

        dot.style.top = e.clientY + "px";

    }

    if (ring) {

        ring.style.left = e.clientX + "px";

        ring.style.top = e.clientY + "px";

    }

});/* ==========================================================
   script.js (2/5)
   Day & Night + Card Tilt + Cursor Hover
==========================================================*/

/* ============================================
   DAY / NIGHT
============================================ */

const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const stars = document.querySelector(".stars");
const overlay = document.querySelector(".overlay");

let time = 0;

setInterval(() => {

    time += 0.002;

    if (time >= 1)
        time = 0;

    // ban ngày
    if (time < 0.5) {

        const t = time * 2;

        if (sun)
            sun.style.opacity = 1;

        if (moon)
            moon.style.opacity = 0;

        if (stars)
            stars.style.opacity = 0;

        if (overlay)
            overlay.style.background =
                `rgba(0,0,0,${0.15 + t * 0.15})`;

    }

    // ban đêm
    else {

        const t = (time - 0.5) * 2;

        if (sun)
            sun.style.opacity = 1 - t;

        if (moon)
            moon.style.opacity = t;

        if (stars)
            stars.style.opacity = t * .65;

        if (overlay)
            overlay.style.background =
                `rgba(0,0,0,${0.35 + t * .3})`;

    }

},40);

/* ============================================
   CARD TILT
============================================ */

const card = document.querySelector(".card");

window.addEventListener("mousemove",(e)=>{

    if(!card) return;

    const x =
        (e.clientX/window.innerWidth-.5)*16;

    const y =
        (e.clientY/window.innerHeight-.5)*16;

    card.style.transform =
        `translate(-50%,-50%)
        rotateX(${-y}deg)
        rotateY(${x}deg)`;

});

/* ============================================
   BUTTON HOVER
============================================ */

document
.querySelectorAll(".socials a")
.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        if(ring){

            ring.style.width="70px";
            ring.style.height="70px";
            ring.style.border="2px solid white";

        }

    });

    btn.addEventListener("mouseleave",()=>{

        if(ring){

            ring.style.width="45px";
            ring.style.height="45px";

            ring.style.border=
            "2px solid rgba(255,255,255,.45)";

        }

    });

});

/* ============================================
   PARALLAX BACKGROUND
============================================ */

const video =
document.getElementById("background-video");

window.addEventListener("mousemove",(e)=>{

    if(!video) return;

    const x =
    (e.clientX/window.innerWidth-.5)*8;

    const y =
    (e.clientY/window.innerHeight-.5)*8;

    video.style.transform =
    `translate(${x}px,${y}px)
     scale(1.08)`;

});

/* ============================================
   FPS
============================================ */

const fps =
document.getElementById("fps");

let last = performance.now();

let frames = 0;

function countFPS(){

    frames++;

    const now = performance.now();

    if(now-last>=1000){

        if(fps)

        fps.innerHTML=
        frames+" FPS";

        frames=0;

        last=now;

    }

    requestAnimationFrame(countFPS);

}

countFPS();/* ==========================================================
   script.js (3/5)
   Leaves • Fireflies • Stars • Floating Lights
==========================================================*/

/* ============================================
   LEAVES
============================================ */

function createLeaf(){

    const leaf = document.createElement("div");

    leaf.className = "leaf";

    leaf.style.left = Math.random()*window.innerWidth+"px";

    leaf.style.animationDuration =
        (6+Math.random()*5)+"s";

    leaf.style.opacity =
        .4+Math.random()*.6;

    leaf.style.transform =
        "rotate("+Math.random()*360+"deg)";

    document.body.appendChild(leaf);

    setTimeout(()=>{

        leaf.remove();

    },12000);

}

setInterval(createLeaf,900);

/* ============================================
   FIREFLIES
============================================ */

function createFirefly(){

    if(time < .5) return;

    const firefly =
        document.createElement("div");

    firefly.className="firefly";

    firefly.style.left =
        Math.random()*window.innerWidth+"px";

    firefly.style.top =
        (window.innerHeight-100)+
        Math.random()*150+"px";

    firefly.style.animationDuration =
        (8+Math.random()*5)+"s";

    document.body.appendChild(firefly);

    setTimeout(()=>{

        firefly.remove();

    },13000);

}

setInterval(createFirefly,700);

/* ============================================
   STARS
============================================ */

function createStar(){

    if(time < .5) return;

    const star =
        document.createElement("div");

    star.className="star";

    star.style.left =
        Math.random()*window.innerWidth+"px";

    star.style.top =
        Math.random()*250+"px";

    star.style.animationDelay =
        Math.random()*2+"s";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },7000);

}

setInterval(createStar,350);

/* ============================================
   FLOATING LIGHTS
============================================ */

function createLight(){

    const light =
        document.createElement("div");

    light.className="light";

    light.style.left =
        Math.random()*window.innerWidth+"px";

    light.style.top =
        window.innerHeight+"px";

    light.style.width =
        (4+Math.random()*8)+"px";

    light.style.height =
        light.style.width;

    light.style.opacity =
        .2+Math.random()*.6;

    light.style.animationDuration =
        (7+Math.random()*5)+"s";

    document.body.appendChild(light);

    setTimeout(()=>{

        light.remove();

    },12000);

}

setInterval(createLight,450);

/* ============================================
   AVATAR GLOW
============================================ */

const avatar =
document.querySelector(".avatar");

if(avatar){

    avatar.addEventListener("mouseenter",()=>{

        avatar.style.filter=
        "drop-shadow(0 0 35px white)";

    });

    avatar.addEventListener("mouseleave",()=>{

        avatar.style.filter="none";

    });

}

/* ============================================
   SOCIAL RIPPLE
============================================ */

document
.querySelectorAll(".socials a")
.forEach(button=>{

    button.addEventListener("click",(e)=>{

        const ripple =
        document.createElement("span");

        ripple.style.position="absolute";

        ripple.style.width="15px";

        ripple.style.height="15px";

        ripple.style.borderRadius="50%";

        ripple.style.background=
        "rgba(255,255,255,.6)";

        ripple.style.left=
        e.offsetX+"px";

        ripple.style.top=
        e.offsetY+"px";

        ripple.style.pointerEvents="none";

        ripple.animate([

            {

                transform:"scale(0)",

                opacity:1

            },

            {

                transform:"scale(14)",

                opacity:0

            }

        ],{

            duration:700

        });

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },700);

    });

});/* ==========================================================
   script.js (4/5)
   Weather • Aurora • Rain • Lightning • 3D Card
========================================================== */

/* ============================================
   WEATHER SYSTEM
============================================ */

let weather = "sun";

const weatherList = [

    "sun",

    "rain",

    "clear"

];

setInterval(()=>{

    weather = weatherList[
        Math.floor(Math.random()*weatherList.length)
    ];

},30000);

/* ============================================
   RAIN
============================================ */

function createRain(){

    if(weather!="rain") return;

    const rain = document.createElement("div");

    rain.className="rain";

    rain.style.left =
    Math.random()*window.innerWidth+"px";

    rain.style.animationDuration =
    (.4+Math.random()*.3)+"s";

    document.body.appendChild(rain);

    setTimeout(()=>{

        rain.remove();

    },1000);

}

setInterval(createRain,25);

/* ============================================
   LIGHTNING
============================================ */

function lightning(){

    if(weather!="rain") return;

    if(Math.random()>.985){

        document.body.animate([

            {

                filter:"brightness(2)"

            },

            {

                filter:"brightness(1)"

            }

        ],{

            duration:180

        });

    }

}

setInterval(lightning,200);

/* ============================================
   FLOATING ORBS
============================================ */

function orb(){

    const o=document.createElement("div");

    o.className="orb";

    o.style.left=
    Math.random()*window.innerWidth+"px";

    o.style.top=
    Math.random()*window.innerHeight+"px";

    o.style.width=
    20+Math.random()*70+"px";

    o.style.height=
    o.style.width;

    document.body.appendChild(o);

    setTimeout(()=>{

        o.remove();

    },15000);

}

setInterval(orb,2500);

/* ============================================
   CARD FLOAT
============================================ */

let floatTime=0;

setInterval(()=>{

    if(!card) return;

    floatTime+=0.04;

    const y=Math.sin(floatTime)*8;

    card.style.marginTop=y+"px";

},20);

/* ============================================
   PARALLAX CLOUD
============================================ */

const clouds=
document.querySelectorAll(".cloud");

window.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*25;

    clouds.forEach((c,index)=>{

        c.style.marginLeft=
        x*(index+1)*.25+"px";

    });

});

/* ============================================
   PARTICLE CLICK
============================================ */

window.addEventListener("click",(e)=>{

    for(let i=0;i<18;i++){

        const p=document.createElement("div");

        p.className="clickParticle";

        p.style.left=e.clientX+"px";

        p.style.top=e.clientY+"px";

        const angle=Math.random()*360;

        const dist=40+Math.random()*80;

        p.animate([

            {

                transform:"translate(0,0) scale(1)",

                opacity:1

            },

            {

                transform:

                `translate(${Math.cos(angle)*dist}px,

                ${Math.sin(angle)*dist}px)

                scale(0)`,

                opacity:0

            }

        ],{

            duration:700

        });

        document.body.appendChild(p);

        setTimeout(()=>{

            p.remove();

        },700);

    }

});

/* ============================================
   MUSIC VISUALIZER
============================================ */

if(music){

music.volume=.4;

music.addEventListener("play",()=>{

musicButton.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.2)"

},

{

transform:"scale(1)"

}

],{

duration:900,

iterations:Infinity

});

});

}

/* ============================================
   AURORA COLOR
============================================ */

let hue=180;

setInterval(()=>{

    hue++;

    document.documentElement.style.setProperty(

        "--blue",

        `hsl(${hue},90%,70%)`

    );

},60);/* ==========================================================
   script.js (5/5)
   Final Version
========================================================== */

/* ===============================
   SAVE MUSIC STATE
================================ */

const savedMusic = localStorage.getItem("music");

if(savedMusic==="play"){

    music.play().catch(()=>{});

    playing=true;

    if(musicButton)
        musicButton.innerHTML="❚❚";

}

if(musicButton){

musicButton.addEventListener("click",()=>{

    localStorage.setItem(

        "music",

        playing ? "play" : "pause"

    );

});

}

/* ===============================
   CARD BREATH
================================ */

let breathe=0;

setInterval(()=>{

    breathe+=0.03;

    if(!card) return;

    card.style.boxShadow=

    `0 25px 70px rgba(0,0,0,.45),

    0 0 ${25+Math.sin(breathe)*10}px

    rgba(111,214,255,.25)`;

},20);

/* ===============================
   FPS LIMIT
================================ */

let fpsCounter=0;

let fpsTime=performance.now();

function fpsLoop(){

    fpsCounter++;

    let now=performance.now();

    if(now-fpsTime>=1000){

        if(fps)

        fps.innerHTML=fpsCounter+" FPS";

        fpsCounter=0;

        fpsTime=now;

    }

    requestAnimationFrame(fpsLoop);

}

fpsLoop();

/* ===============================
   RANDOM CLOUD SPEED
================================ */

setInterval(()=>{

    document

    .querySelectorAll(".cloud")

    .forEach(c=>{

        c.style.animationDuration=

        (60+Math.random()*40)+"s";

    });

},12000);

/* ===============================
   AUTO HIDE CURSOR
================================ */

let cursorTimeout;

window.addEventListener("mousemove",()=>{

    if(dot) dot.style.opacity=1;

    if(ring) ring.style.opacity=1;

    clearTimeout(cursorTimeout);

    cursorTimeout=setTimeout(()=>{

        if(dot) dot.style.opacity=.2;

        if(ring) ring.style.opacity=.15;

    },2000);

});

/* ===============================
   BUTTON SOUND EFFECT
================================ */

document

.querySelectorAll(".socials a")

.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-4px)"

},

{

transform:"translateY(0)"

}

],{

duration:250

});

});

});

/* ===============================
   BACKGROUND SCALE
================================ */

let bgScale=1.05;

setInterval(()=>{

    bgScale+=0.0004;

    if(bgScale>=1.1)

        bgScale=1.05;

    if(video)

    video.style.transform=

    `scale(${bgScale})`;

},30);

/* ===============================
   RANDOM QUOTES
================================ */

const quotes=[

"Welcome to LowC",

"Trusted Auctions",

"Fast & Safe Trades",

"Grow A Garden",

"Roblox Trading",

"Professional Seller"

];

setInterval(()=>{

    if(!typing) return;

    typing.innerHTML=

    quotes[

    Math.floor(

    Math.random()*quotes.length

    )];

},9000);

/* ===============================
   CARD CLICK EFFECT
================================ */

if(card){

card.addEventListener("click",()=>{

card.animate([

{

transform:

"translate(-50%,-50%) scale(1)"

},

{

transform:

"translate(-50%,-50%) scale(.98)"

},

{

transform:

"translate(-50%,-50%) scale(1)"

}

],{

duration:180

});

});

}

/* ===============================
   END
================================ */

console.log(
"%c LowC Bio Loaded ✔",
"color:#6fd6ff;font-size:18px;font-weight:bold;"
);