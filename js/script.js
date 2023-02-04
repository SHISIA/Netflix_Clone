const btn = document.getElementById("authButton");
const options=document.getElementById("list");
const navBar=document.getElementById("navBar");
const bars=document.getElementById("bars");

let state=1;

let data =  `
<ul>
  <li><i id="bars" class="fa fa-bars" style="font-size:36px; color:red;   padding-right:40px;"></i></li>
</ul>
`

const loadNav = () => {
  navBar.innerHTML=data;

}


const untoggleOptions = () => {
  navBar.innerHTML+=
  `
  <ul>
   <li><a href="#landingSection">Home</a></li>
   <li><a href="#news">News</a></li>
   <li><a href="#contact">Contact</a></li>
   <li><a href="#about">About</a></li>
  </ul>
</ul>
  `
} 

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("myImage").src="/img/post.jpg";
  } else {
    document.getElementById("myImage").src="/img/poster.jpg";
  }
}

var x = window.matchMedia("(min-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)


window.onload =untoggleOptions();
