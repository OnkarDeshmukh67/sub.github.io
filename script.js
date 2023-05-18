let navbar = document.getElementById('navbar');
let ul = document.getElementById('ul');


window.addEventListener('scroll', (e)=> {
  let height = window.scrollY;

  if (height > 50) {
    navbar.style.position = 'fixed';
    navbar.style.zIndex = '100';
    navbar.style.backgroundColor='white';
    navbar.style.color = 'black';

    ul.style.paddingBottom = '20px';
    ul.querySelectorAll('a').forEach(el => {
    el.style.color = 'black';

    document.getElementById('logim').src = 'images/logoblack.png';
    document.getElementById('logim').style.marginBottom = '20px';
    })

  } else if (height < 50){
    navbar.style.backgroundColor='rgba('+0+', '+0+', '+0+', 0)';
    navbar.style.position = 'relative';
    ul.querySelectorAll('a').forEach(el => {
    el.style.color = '';
    document.getElementById('logim').src = 'https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-3bf3184/app/uploads/2023/03/spinx-logo-white.png';
    })
  }
})


// Carousel Script Here

let slide_a = document.getElementById('slide-a');
let slide_b = document.getElementById('slide-b');
let slide_c = document.getElementById('slide-c');

let open_a = document.getElementById('wrap-text-a');
let open_b = document.getElementById('wrap-text-b');
let open_c = document.getElementById('wrap-text-c');

slide_a.addEventListener('click', (e) => {
  open_b.classList.toggle('hide')
  open_c.classList.toggle('hide')
  
  open_a.classList.toggle('show')
})

slide_b.addEventListener('click', (e) => {
  open_a.classList.toggle('hide')
  open_c.classList.toggle('hide')
  
  open_b.classList.toggle('show')
})

slide_c.addEventListener('click', (e) => {
  open_a.classList.toggle('hide')
  open_b.classList.toggle('hide')
  
  open_c.classList.toggle('show')
})



let rolla = document.getElementById('talk-box1-img')

window.addEventListener('scroll', (e) => {
  let h = rolla.offsetHeight;
  let scrollheight = window.scrollY;

  let dif = h - scrollheight + 800;
  // console.log(dif);

  // let sav = 10;

  rolla.style.top = dif + "px" ;
});

let rollb = document.getElementById('talk-box2-rimg')

window.addEventListener('scroll', (e) => {
  let h = rollb.offsetHeight;
  let scrollheight = window.scrollY;

  let dif = h - scrollheight + 1200;
  // console.log(dif);

  // let sav = 10;

  rollb.style.top = dif + "px" ;
});

let rollc = document.getElementById('talk-box2-limg')

window.addEventListener('scroll', (e) => {
  let h = rollc.offsetHeight;
  let scrollheight = window.scrollY;

  let dif = h - scrollheight + 1800;
  // console.log(h);

  // let sav = 10;

  rollc.style.top = dif + "px" ;
});


// let opend_a = document.getElementById('wrap-open-a');
// let opend_b = document.getElementById('wrap-open-b');
// let opend_c = document.getElementById('wrap-open-c');











let whiterow = document.getElementById('white-row');

window.addEventListener('scroll', (e) => {
  var WRa = whiterow.getBoundingClientRect().y;
  
  var ind = (WRa)/50;
  
  if(WRa < 700 && WRa > 0){
    whiterow.style.transform = "translateX(" + -(ind) + "%)";
  }
})

let blackrow = document.getElementById('black-row');

var yz = window.scrollY;


window.addEventListener('scroll', (e) => {
  var BRa = blackrow.getBoundingClientRect().y;
  
  var indb = (BRa)/50 - 20;
  
  if(BRa < 700 && BRa > 0){
    blackrow.style.transform = "translateX(" + (indb) + "%)";
  }
})

let whiterow2 = document.getElementById('white-row-2');

window.addEventListener('scroll', (e) => {
  var WRb = whiterow2.getBoundingClientRect().y;
  
  var ind = (WRb)/50;
  
  if(WRb < 700 && WRb > 0){
    whiterow2.style.transform = "translateX(" + -(ind) + "%)";
  }
})


let blackrow2 = document.getElementById('black-row-2');

window.addEventListener('scroll', (e) => {
  var BRb = blackrow2.getBoundingClientRect().y;
  
  var inde = (BRb)/50 - 25;
  
  if(BRb < 700 && BRb > 0){
    blackrow2.style.transform = "translateX(" + (inde) + "%)";
  }
})



















let dropa = document.getElementById('proj-1-text');

window.addEventListener('scroll', (e) => {
  var y = window.scrollY;

  if (y > 2890 && y < 3700) {
    var marg = (y - 2890)/15 - 2;
    dropa.style.marginTop = (marg) + '%';
  } 
})

let dropb = document.getElementById('proj-2-text');

window.addEventListener('scroll', (e) => {
  var z = window.scrollY;

  if (z > 4037 && z < 4700) {
    var marg = (z - 4037)/15 + 2;
    dropb.style.marginTop = (marg) + '%';
  } 
})

let dropc = document.getElementById('proj-3-text');

window.addEventListener('scroll', (e) => {
  var zz = window.scrollY;

  if (zz > 5032 && zz < 5700) {
    var marg = (zz - 5032)/15 - 3;
    dropc.style.marginTop = (marg) + '%';
  } 
})

