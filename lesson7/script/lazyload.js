const images= document.querySelectorAll("[data-src]");
function preloadImage(img){
    const src=img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src=src;
}
const imgOb= new IntersectionObserver((entries, imgOb) => {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        } else{
            preloadImage(entry.target);
            imgOb.unobserve(entry.target);
        }
    })
}, imgOb);


images.forEach(image => {image.observer.observe(image);
});