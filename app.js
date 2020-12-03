const projects = document.querySelectorAll(".project");
const wrapper = document.querySelector("#wrapper");

projects.forEach(project => project.addEventListener("mouseover", (e) => displayIcons(e)));
projects.forEach(project => project.addEventListener("mouseout", (e) => hideIcons(e)));
function  displayIcons(e){
   e.target.children[0].classList.add("active");
}


function hideIcons (e){
    e.target.children[0].classList.remove("active");
}
// function hideIcons () {
//    document.querySelectorAll(".icons").forEach(setIcons => setIcons.classList.remove("active"));
// }
