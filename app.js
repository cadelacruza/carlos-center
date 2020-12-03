const projects = document.querySelectorAll(".wrapp")

projects.forEach(project => project.addEventListener("mouseover", () =>{
    document.querySelector(".icons").classList.add("active");
}))