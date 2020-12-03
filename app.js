const projects = document.querySelectorAll(".project");

projects.forEach(project => project.addEventListener("mouseover", (e) => displayIcons(e)));

function  displayIcons(e){
   // console.log(e.target.children[0].classList.add("active"));
   e.target.children[0].classList.add("active")
}