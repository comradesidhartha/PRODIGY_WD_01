document.addEventListener("DOMContentLoaded",function()
{
    const nav=document.querySelector("nav");
    const menuToggle=document.getElementById("menu-toggle");
    const navLinks=document.querySelector(".nav-links");
    window.addEventListener("scroll",function() 
       {
        if(window.scrollY > 50)
        {
            nav.classList.add("scrolled");
        } 
        else 
        {
            nav.classList.remove("scrolled");
        }
      });
    menuToggle.addEventListener("click",function()
    {
        navLinks.classList.toggle("active");
    });
    navLinks.addEventListener("mouseover",function()
    {
        nav.classList.add("hovered");
    });
    navLinks.addEventListener("mouseleave",function()
    {
        nav.classList.remove("hovered");
    });
});
