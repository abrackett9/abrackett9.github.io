
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".img");
    const page = document.documentElement;
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            const modalImg = document.createElement("img");
            modalImg.src = this.src;
            modalImg.style.display = "block";
            modalImg.style.zindex = "2";
            modal.style.display = "fixed";
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            console.log(modal);
            modal.addEventListener("click", function() {
                document.body.removeChild(modal);
            })
        })
    })
})