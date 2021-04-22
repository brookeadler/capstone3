/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


var 
  StarrBtn = document.getElementById('starrbtn'),
  StarrClip = document.getElementById('starrclip'),
  BlackParadeBtn = document.getElementById('blackparadebtn'),
  BlackParadeClip = document.getElementById('blackparadeclip'),
  RollingStoneBtn = document.getElementById('rollingstonebtn'),
  RollingStoneClip = document.getElementById('rollingstoneclip'),
  KendrickBtn = document.getElementById('kendrickbtn'),
  KendrickClip = document.getElementById('kendrickclip'),
  CityBtn = document.getElementById('citybtn'),
  CityClip = document.getElementById('cityclip'),
  HerBtn = document.getElementById('herbtn'),
  HerClip = document.getElementById('herclip'),
  TrainBtn = document.getElementById('trainbtn'),
  TrainClip = document.getElementById('trainclip'),
  BabyBtn = document.getElementById('babybtn'),
  BabyClip = document.getElementById('babyclip'),
  GoingBtn = document.getElementById('goingonbtn'),
  GoingClip = document.getElementById('goingonclip'),
  TylerBtn = document.getElementById('tylerbtn'),
  TylerClip = document.getElementById('tylerclip'),
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


StarrBtn.addEventListener('mouseover', function() {
    StarrClip.play();
    StarrClip.currentTime = 25;
}, false);

StarrBtn.addEventListener('mouseleave', function() {
  StarrClip.pause();
  StarrClip.currentTime = 0;
}, false);



BlackParadeBtn.addEventListener('mouseover', function() {
    BlackParadeClip.play();
    BlackParadeClip.currentTime = 25;
}, false);

BlackParadeBtn.addEventListener('mouseleave', function() {
  BlackParadeClip.pause();
  BlackParadeClip.currentTime = 0;
}, false);



RollingStoneBtn.addEventListener('mouseover', function() {
RollingStoneClip.play();
RollingStoneClip.currentTime = 270;
}, false);

RollingStoneBtn.addEventListener('mouseleave', function() {
RollingStoneClip.pause();
RollingStoneClip.currentTime = 0;
}, false);



KendrickBtn.addEventListener('mouseover', function() {
KendrickClip.play();
KendrickClip.currentTime = 25;
}, false);

KendrickBtn.addEventListener('mouseleave', function() {
KendrickClip.pause();
KendrickClip.currentTime = 0;
}, false);



CityBtn.addEventListener('mouseover', function() {
CityClip.play();
CityClip.currentTime = 25;
}, false);

CityBtn.addEventListener('mouseleave', function() {
CityClip.pause();  
CityClip.currentTime = 0;
}, false);




HerBtn.addEventListener('mouseover', function() {
HerClip.play();
HerClip.currentTime = 25;
}, false);

HerBtn.addEventListener('mouseleave', function() {
HerClip.pause();  
HerClip.currentTime = 0;
}, false);




TrainBtn.addEventListener('mouseover', function() {
TrainClip.play();
TrainClip.currentTime = 40;
}, false);

TrainBtn.addEventListener('mouseleave', function() {
TrainClip.pause();  
TrainClip.currentTime = 0;
}, false);


BabyBtn.addEventListener('mouseover', function() {
BabyClip.play();
BabyClip.currentTime = 25;
}, false);

BabyBtn.addEventListener('mouseleave', function() {
BabyClip.pause();  
BabyClip.currentTime = 0;
}, false);


GoingBtn.addEventListener('mouseover', function() {
GoingClip.play();
GoingClip.currentTime = 90;
}, false);

GoingBtn.addEventListener('mouseleave', function() {
GoingClip.pause();  
GoingClip.currentTime = 0;
}, false);


TylerBtn.addEventListener('mouseover', function() {
TylerClip.play();
TylerClip.currentTime = 25;
}, false);

TylerBtn.addEventListener('mouseleave', function() {
TylerClip.pause();  
TylerClip.currentTime = 0;
}, false);





