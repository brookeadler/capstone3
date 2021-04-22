/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


var TopsBtn = document.getElementById('fourtopsbtn'),
    BackstreetBtn = document.getElementById('backstreetbtn'),
    TopsClip = document.getElementById('4TopsClip'),
  BackstreetClip = document.getElementById('BackstreetClip'),
  SmokeyBtn = document.getElementById('smokeybtn'),
  SmokeyClip = document.getElementById('SmokeyClip'),
  NsyncBtn = document.getElementById('nsyncbtn'),
  NsyncClip = document.getElementById('NsyncClip'),
  TemptsBtn = document.getElementById('temptsbtn'),
  TemptsClip = document.getElementById('TemptsClip'),
  BoyzBtn = document.getElementById('boyzbtn'), 
  BoyzClip = document.getElementById('BoyzClip'),
  JacksonBtn = document.getElementById('jacksonbtn'), 
  JacksonClip = document.getElementById('JacksonClip'),
  OneDBtn = document.getElementById('1Dbtn'), 
  OneDClip = document.getElementById('1DClip'),
  Jackson2Btn = document.getElementById('jackson2btn'), 
  Jackson2Clip = document.getElementById('Jackson2Clip'),
  JonasBtn = document.getElementById('jonasbtn'), 
  JonasClip = document.getElementById('JonasClip'),
  SupremesBtn = document.getElementById('supremesbtn'),
  SupremesClip = document.getElementById('supremesclip'),
  LizzoBtn = document.getElementById('lizzobtn'), 
  LizzoClip = document.getElementById('lizzoclip'),
  audios = document.querySelectorAll('audio');
console.log(audios);

// TopsBtn.addEventListener('mouseover', function() {
// [].forEach.call(audios, function(audio) {
//   // do whatever
//   audio.play();
//   TopsClip.currentTime = 25;
// });
// }, false);

// TopsBtn.addEventListener('mouseleave', function() {
//   TopsClip.pause();
//   TopsClip.currentTime = 0;
// }, false);

BackstreetBtn.addEventListener('mouseover', function() {
    BackstreetClip.play();
    BackstreetClip.currentTime = 51;
}, false);

BackstreetBtn.addEventListener('mouseleave', function() {
  BackstreetClip.pause();
  BackstreetClip.currentTime = 0;
}, false);

TopsBtn.addEventListener('mouseover', function() {
    TopsClip.play();
    TopsClip.currentTime = 75;
}, false);

TopsBtn.addEventListener('mouseleave', function() {
  TopsClip.pause();
  TopsClip.currentTime = 0;
}, false);


SmokeyBtn.addEventListener('mouseover', function() {
    SmokeyClip.play();
    SmokeyClip.currentTime = 25;
}, false);

SmokeyBtn.addEventListener('mouseleave', function() {
  SmokeyClip.pause();
  SmokeyClip.currentTime = 0;
}, false);

NsyncBtn.addEventListener('mouseover', function() {
    NsyncClip.play();
    NsyncClip.currentTime = 25;
}, false);

NsyncBtn.addEventListener('mouseleave', function() {
  NsyncClip.pause();
  NsyncClip.currentTime = 0;
}, false);


TemptsBtn.addEventListener('mouseover', function() {
    TemptsClip.play();
    TemptsClip.currentTime = 29;
}, false);

TemptsBtn.addEventListener('mouseleave', function() {
  TemptsClip.pause();
  TemptsClip.currentTime = 0;
}, false);


BoyzBtn.addEventListener('mouseover', function() {
    BoyzClip.play();
    BoyzClip.currentTime = 80;
}, false);

BoyzBtn.addEventListener('mouseleave', function() {
  BoyzClip.pause();
  BoyzClip.currentTime = 0;
}, false);


JacksonBtn.addEventListener('mouseover', function() {
    JacksonClip.play();
    JacksonClip.currentTime = 30;
}, false);

JacksonBtn.addEventListener('mouseleave', function() {
  JacksonClip.pause();
  JacksonClip.currentTime = 0;
}, false);

OneDBtn.addEventListener('mouseover', function() {
    OneDClip.play();
    OneDClip.currentTime = 31;
}, false);

OneDBtn.addEventListener('mouseleave', function() {
  OneDClip.pause();
  OneDClip.currentTime = 0;
}, false);

Jackson2Btn.addEventListener('mouseover', function() {
    Jackson2Clip.play();
    Jackson2Clip.currentTime = 25;
}, false);

Jackson2Btn.addEventListener('mouseleave', function() {
  Jackson2Clip.pause();
  Jackson2Clip.currentTime = 0;
}, false);

JonasBtn.addEventListener('mouseover', function() {
    JonasClip.play();
    JonasClip.currentTime = 25;
}, false);

JonasBtn.addEventListener('mouseleave', function() {
  JonasClip.pause();
  JonasClip.currentTime = 0;
}, false);


SupremesBtn.addEventListener('mouseover', function() {
    TopsClip.play();
    TopsClip.currentTime = 25;
}, false);

SupremesBtn.addEventListener('mouseleave', function() {
  TopsClip.pause();
  TopsClip.currentTime = 0;
}, false);


LizzoBtn.addEventListener('mouseover', function() {
    LizzoClip.play();
    LizzoClip.currentTime = 25;
}, false);

LizzoBtn.addEventListener('mouseleave', function() {
  LizzoClip.pause();
  LizzoClip.currentTime = 0;
}, false);




