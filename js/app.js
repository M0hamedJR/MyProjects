/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/*start global variables*/
const intialTime= performance.now();

const newbtn=document.querySelector('#addsec');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


//the following code for adding sections in (main element) 

let i=0;
function addsection(){
  i++;
const bdy=document.querySelector("main");
const myPara = document.createElement('section');

myPara.innerHTML = `<section id="section${i}"  data-nav="Section ${i}" class="your-active-class">
<div class="landing__container">
  <h2>Section ${i}</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

  <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>
</section>`;
addnavele();
bdy.appendChild(myPara);
}
//newbtn.addEventListener('click',addsection,true);


//the folllowing code to scroll to the top of the page
const mybtn=document.getElementById('mybtn');
mybtn.onclick= function(){
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
};

//the folllowing code add section links in navbar 

const list=document.getElementById("navbar__list");
function addnavele(){
  const addlink=document.createElement('li');
  addlink.innerHTML=`<a href="#section${i}"> section ${i}</a>`
  list.appendChild(addlink);
  }

 
  addsection();
  addsection();
  addsection();
  addsection();
  addsection();
  
  
 //to the following code add the active class to links
 function adac(){
   document.querySelectorAll(`a[href*="#"]`).forEach((active) => {
      if (!active.classList.contains('active')) 
         {active.classList.add('active');}
    else {active.classList.remove('active');}
    });
  };


 //the following code add the active class to sections
window.onscroll= function(){
  
  document.querySelectorAll('section').forEach((activeclass ) => {
        // Add class 'active' to section when near top of viewport
    if (activeclass.getBoundingClientRect().bottom >= 300 && activeclass.getBoundingClientRect().top <= 200) 
    //add active section

    {  
      activeclass.classList.add('your-active-class');
  }
    //to remove active section
    else { 
      activeclass.classList.remove('your-active-class');}

  });
}


//to scroll to section when click on anchor link from nav bar
document.querySelectorAll('a[href*="#"]').forEach(anchor =>{
  anchor.addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:"smooth"
    });
 adac() });
});

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
const endingTime = performance.now();
console.log('This code took ' + (endingTime - intialTime) + ' milliseconds.');
