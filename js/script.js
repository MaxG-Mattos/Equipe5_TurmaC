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



    //Secção participar de fórum
    const adds = document.querySelectorAll(".adicionar");
    
    const adicionado = "img/verificar_menor.png";
    const desadicionado = "img/mais.png"; 

    adds.forEach(function(add, j) {
        const atual_a = localStorage.getItem(`addState_${j}`);
        
        if (atual_a === "adicionado") {
            add.src = adicionado;
        } else {
            add.src = desadicionado;
        }

        add.addEventListener("click", function() {
            if (add.src.includes(desadicionado)) {
                add.src = adicionado;
                localStorage.setItem(`addState_${j}`, "adicionado"); 
            } else {
                add.src = desadicionado;
                localStorage.setItem(`addState_${j}`, "desadicionado");
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
            localStorage.setItem("fotoSelecionada", img_click);            
    });
    });



    //Próxima
    const fotoPost = document.querySelector(".foto_post");
    if (fotoPost) {
        const foto = localStorage.getItem("fotoSelecionada");
        if (foto) {
            fotoPost.src = foto;
        }
    }

    //Tentei mas n foi de nenhum jeito
    // const inputTexto = document.querySelector('input[type="text"]');
    // if (inputTexto) {
    //     const textoLegenda = inputTexto.value;
    //     localStorage.setItem("textoLegenda", textoLegenda);
    // }

    // const main = document.querySelector("main_index"); // Seleciona a seção principal da página
    // if (main) {
    //     const fotopost = localStorage.getItem("fotoSelecionada");
    //     const legendapost = localStorage.getItem("textoLegenda");

    //     if (fotopost && legendapost) {
    //         const novaPostagem = document.createElement("article"); 
    //         novaPostagem.innerHTML = `
    //             <h2>Nova Postagem</h2>
    //             <img src="${fotopost}" alt="Imagem Escolhida" class="foto-escolhida">
    //             <p class="legenda">${legendapost}</p>
    //             <nav class="interact">
    //                 <img class="like" src="img/like.png" alt="like">
    //                 <img src="img/comentario-alt.png" alt="comentário">
    //             </nav>
    //         `;
    //         main.appendChild(novaPostagem); 
    //     }
    // }

});
//
//     <article>
//     <h2>Um dia na vida</h2>
//     <img src="img/barro.jpg" alt="video do trabalho" class="postIMG">
//     <p class="legenda">Um pouco do meu trabalho!</p>
//     <nav class="interact">
//         <img src="img/menu-pontos-vertical.png" alt="mais opções">
//         <img class= "like" src="img/like.png" alt="like">
//         <img src="img/comentario-alt.png" alt="comentario">
//     </nav>
// </article>