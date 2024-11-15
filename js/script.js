document.addEventListener("DOMContentLoaded", () => {
    const likes = document.querySelectorAll(".like");
    
    const curtida = "img/afirmativo.png";
    const descurtida = "img/like.png"; 

    likes.forEach(function(like, index) {
        const savedState = localStorage.getItem(`likeState_${index}`); //esse likeState_(indique q a gnt quer) serve pra armazenar cada objeto separadamente, é tipo como  se fosse img[0], img[1] etc;
        
        if (savedState === "curtido") {
            like.src = curtida;
        } else {
            like.src = descurtida;
        }

        like.addEventListener("click", function() {
            if (like.src.includes(descurtida)) {
                like.src = curtida;
                localStorage.setItem(`likeState_${index}`, "curtido"); //localStorage: guardar as infos
            } else {
                like.src = descurtida;
                localStorage.setItem(`likeState_${index}`, "descurtido");
            }
        });
    });
});