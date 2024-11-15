document.addEventListener("DOMContentLoaded", () => {



    //Secção de curtidas
    const likes = document.querySelectorAll(".like");
    
    const curtida = "img/afirmativo.png";
    const descurtida = "img/like.png"; 

    likes.forEach(function(like, i) {
        const atual = localStorage.getItem(`likeState_${i}`); //esse likeState_(indique q a gnt quer) serve pra armazenar cada objeto separadamente, é tipo como  se fosse img[0], img[1] etc;
        
        if (atual === "curtido") {
            like.src = curtida;
        } else {
            like.src = descurtida;
        }

        like.addEventListener("click", function() {
            if (like.src.includes(descurtida)) {
                like.src = curtida;
                localStorage.setItem(`likeState_${i}`, "curtido"); //localStorage: //getItem: guardar //set: tipo ler
            } else {
                like.src = descurtida;
                localStorage.setItem(`likeState_${i}`, "descurtido");
            }
        });
    });




    //seleção de imagens galeria

    const imagens = document.querySelectorAll(".foto_galeria");
    const imagemselecionada = document.querySelector(".foto_escolhida");

    imagens.forEach(button => {
        button.addEventListener("click", function() {
            const img_click = this.querySelector("img").src;
            imagemselecionada.src = img_click;
            imagemselecionada.className = img_click.className; // não entendi pq n funcionou..
    });
    // imagens.forEach(function(imagem) {
    //     imagem.addEventListener("click", function() {
    //         imagemselecionada.src = imagem.src;
    //         imagemselecionada.className = imagem.className;
    // });
    });



    //Próxima
});