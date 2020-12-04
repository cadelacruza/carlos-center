const projects = document.querySelectorAll(".icons");
const wrapper = document.querySelector("#wrapper");

projects.forEach(project => project.addEventListener("mousemove", (e) =>{
    e.target.classList.add("active");
}
));


projects.forEach(project => project.addEventListener("mouseout", (e) => e.target.classList.remove("active")));


function  displayIcons(e){
   e.target.children[0].classList.add("active");
}


function hideIcons (e){
    e.target.children[0].classList.remove("active");
}

