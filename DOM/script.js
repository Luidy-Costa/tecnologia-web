//QuerySelector

document.querySelector("#querySelectorChangeColor").addEventListener("click", function(){ this.style.backgroundColor = "lighblue"; 

});

document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", function(){
        this.style.backgroundColor = "lightcoral";
    });
});

window.onload = function(){
 alert("Sua página foi carregada com sucesso!")
};

document.getElementById("scrollToTop").addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: "smooth"});
})

document.getElementById("eventListenerBox").addEventListener("mouseover", function(){
    this.textContent = "O mouse passou por aqui :)"
});

document.getElementById("createElementBtn").