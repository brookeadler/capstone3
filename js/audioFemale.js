/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


var 
  SupremesBtn = document.getElementById('supremesbtn'),
  SupremesClip = document.getElementById('supremesclip'),
  LizzoBtn = document.getElementById('lizzobtn'), 
  LizzoClip = document.getElementById('lizzoclip'),
  MarthaBtn = document.getElementById('marthabtn'), 
  MarthaClip = document.getElementById('marthaclip'),
  WhitneyBtn = document.getElementById('whitneybtn'), 
  WhitneyClip = document.getElementById('whitneyclip'),
  PostmanBtn = document.getElementById('postmanbtn'), 
  PostmanClip = document.getElementById('postmanclip'),
  AmyBtn = document.getElementById('amybtn'), 
  AmyClip = document.getElementById('amyclip'),
  GeorgiaBtn = document.getElementById('georgiabtn'), 
  GeorgiaClip = document.getElementById('georgiaclip'),
  MileyBtn = document.getElementById('mileybtn'), 
  MileyClip = document.getElementById('mileyclip'),
  DianaBtn = document.getElementById('dianabtn'), 
  DianaClip = document.getElementById('dianaclip'),
  LaurynBtn = document.getElementById('laurynbtn'), 
  LaurynClip = document.getElementById('laurynclip'),
  audios = document.querySelectorAll('audio');
console.log(audios);

// SupremesBtn.addEventListener('mouseover', function() {
// [].forEach.call(audios, function(audio) {
//   // do whatever
//   audio.play();
//   SupremesClip.currentTime = 25;
// });
// }, false);

// SupremesBtn.addEventListener('mouseleave', function() {
//   SupremesClip.pause();
//   SupremesClip.currentTime = 0;
// }, false);


SupremesBtn.addEventListener('mouseover', function() {
    SupremesClip.play();
    SupremesClip.currentTime = 28;
}, false);

SupremesBtn.addEventListener('mouseleave', function() {
  SupremesClip.pause();
  SupremesClip.currentTime = 0;
}, false);




LizzoBtn.addEventListener('mouseover', function() {
    LizzoClip.play();
    LizzoClip.currentTime = 25;
}, false);

LizzoBtn.addEventListener('mouseleave', function() {
  LizzoClip.pause();
  LizzoClip.currentTime = 0;
}, false);



MarthaBtn.addEventListener('mouseover', function() {
    MarthaClip.play();
    MarthaClip.currentTime = 25;
}, false);

MarthaBtn.addEventListener('mouseleave', function() {
  MarthaClip.pause();
  MarthaClip.currentTime = 0;
}, false);


WhitneyBtn.addEventListener('mouseover', function() {
    WhitneyClip.play();
    WhitneyClip.currentTime = 25;
}, false);

WhitneyBtn.addEventListener('mouseleave', function() {
  WhitneyClip.pause();
  WhitneyClip.currentTime = 0;
}, false);


PostmanBtn.addEventListener('mouseover', function() {
    PostmanClip.play();
    PostmanClip.currentTime = 50;
}, false);

PostmanBtn.addEventListener('mouseleave', function() {
  PostmanClip.pause();
  PostmanClip.currentTime = 0;
}, false);


AmyBtn.addEventListener('mouseover', function() {
    AmyClip.play();
    AmyClip.currentTime = 25;
}, false);

AmyBtn.addEventListener('mouseleave', function() {
  AmyClip.pause();
  AmyClip.currentTime = 0;
}, false);


GeorgiaBtn.addEventListener('mouseover', function() {
    GeorgiaClip.play();
    GeorgiaClip.currentTime = 60;
}, false);

GeorgiaBtn.addEventListener('mouseleave', function() {
  GeorgiaClip.pause();
  GeorgiaClip.currentTime = 0;
}, false);


MileyBtn.addEventListener('mouseover', function() {
    MileyClip.play();
    MileyClip.currentTime = 25;
}, false);

MileyBtn.addEventListener('mouseleave', function() {
  MileyClip.pause();
  MileyClip.currentTime = 0;
}, false);



DianaBtn.addEventListener('mouseover', function() {
    DianaClip.play();
    DianaClip.currentTime = 52;
}, false);

DianaBtn.addEventListener('mouseleave', function() {
  DianaClip.pause();
  DianaClip.currentTime = 0;
}, false);


LaurynBtn.addEventListener('mouseover', function() {
    LaurynClip.play();
    LaurynClip.currentTime = 25;
}, false);

LaurynBtn.addEventListener('mouseleave', function() {
  LaurynClip.pause();
  LaurynClip.currentTime = 0;
}, false);







