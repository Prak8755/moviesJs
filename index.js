const btnOpenModal = document.querySelectorAll(".btn--open-modal");
const btnCloseModal = document.querySelector(".btnCloseModal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modalShow");



//working with opening form and closing form 
function openModal() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");

}

function closeModal() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}

btnOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});
btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape"&& !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// smooth scrolling
const btnScroll=document.querySelector('.btnScroll');
const section1=document.querySelector('#section-1');
const section2=document.querySelector('#section-2');
btnScroll.addEventListener('click',function(e){

const s1Coords=section1.getBoundingClientRect();
// console.log(s1Coords);

//for scrolling 
// const scroll=window.pageYOffset;
// console.log(scroll);

//for viewport height 
// const viewPortHeight=(document.documentElement.clientHeight);
// console.log(viewPortHeight);

//old school way of scrolling
// window.scrollTo(s1Coords.left,s1Coords.top+window.pageYOffset)

//modern way of scrolling
section2.scrollIntoView({behavior:'smooth'})
})


//clicking on navbar links and moving to different sections on page
const nav__links=document.querySelector('.nav__links');

nav__links.addEventListener('click',function(e){
  e.preventDefault();
  const id=(e.target.getAttribute('href'));
  console.log('cliked');
 if(id){
  const section=document.querySelector(id);
  section.scrollIntoView({behavior:'smooth'});
 }
 else return;
})


//for smaller screen sizes
const sm_nav__links=document.querySelector('.sm-nav__links')
sm_nav__links.addEventListener('click',function(e){
  e.preventDefault();
  const id=(e.target.getAttribute('href'));
  console.log('cliked');
 if(id){
  const section=document.querySelector(id);
  section.scrollIntoView({behavior:'smooth'});
 }
 else return;
})


//Tabbed Component

const btnContainer=document.querySelector('.movies-btns');
const btns=document.querySelectorAll('.btn-tab');
const moviesCard=document.querySelector('.movies-card');
const moviesContent=document.querySelectorAll('.movies-content')

btnContainer.addEventListener('click',function(e){
  if(e.target.classList.contains('btn-tab')){
    const dataSet=e.target.dataset.tab;
   
    btns.forEach(btn=>btn.classList.remove('btn-active'))
    e.target.classList.add('btn-active');

moviesContent.forEach(m=>m.classList.add('cards-inactive'));
const el=document.querySelector(`.movies-content-${dataSet}`);
el.classList.remove('cards-inactive')
  }
  else return null;
})


//working with navbar fade in links

const navBar=document.querySelector('.navBar');
const links=document.querySelectorAll('.nav-link');
const navBarLogo=document.querySelector('.navBarLogo');

function handleNav(e){
  const link=e.target;
 if(link.classList.contains('nav-link')){
links.forEach(e=>{if(e!==link){
  e.style.opacity=this
}})
navBarLogo.style.opacity=this;
 }
}

navBar.addEventListener('mouseover',handleNav.bind(0.5))
navBar.addEventListener('mouseout',handleNav.bind(1))

//Sticky navigation

// document.addEventListener('scroll',function(){
// const header=document.querySelector('.header');


// if(section2.getBoundingClientRect().top<0){
//   header.classList.add('sticky')
// }
// else{
//   header.classList.remove('sticky')
// }

// })

//Another way of scrolling event using intersection Api

const header=document.querySelector('.header');

function stickyNav(entries){
const [entry]=entries;

if(!entry.isIntersecting){
header.classList.add('sticky')
}
else{
  header.classList.remove('sticky')
}
}
const main=document.querySelector('.main');
const navHeight=navBar.getBoundingClientRect().height;


const headerObserver=new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`
})

headerObserver.observe(main);

//logic for revealing sections on scrolling
const allSections=document.querySelectorAll('.section');

function handleSections(enteries,observer){
  const [entry]=enteries;

  if(!entry.isIntersecting) return ;
 entry.target.classList.remove('section-hidden');
 observer.unobserve(entry.target)
}

const sectionsObserver=new IntersectionObserver(handleSections,{
  root:null,
  threshold:0.10,
})


allSections.forEach(section=>{
  sectionsObserver.observe(section);
section.classList.add('section-hidden')
})

//Toggle btn Functions 
const btnToggle=document.querySelector('.btnToggle');
const btnClose=document.querySelector('.btn--close-toggle')
const smNav=document.querySelector('.sm-nav');

btnToggle.addEventListener('click',function(e){
  smNav.classList.remove('hidden');

})
btnClose.addEventListener('click',function(){
  smNav.classList.add('hidden')
})


//working with Lazy loading images 
const lazyImg=document.querySelectorAll('img[data-src]');

function handleLazy(entries, observer){
const [entry]=entries;

if(!entry.isIntersecting) return ;
entry.target.src=entry.target.dataset.src;

entry.target.addEventListener('load',function(){
  entry.target.classList.remove('lazy-img')
})

observer.unobserve(entry.target)
}

const lazyObserve=new IntersectionObserver(handleLazy,{
  root:null,
  threshold:0,
  rootMargin:'200px'
});

lazyImg.forEach(img=>{
  lazyObserve.observe(img)
})






