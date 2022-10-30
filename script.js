let tam = 25;

function carregar() {

    for(let i = 2; i < 25 ; i++) {

        $('#qtdminas').append($('<option>', {
            value: i,
            text: i
        }));

}
}

function valor() {

    $('div#pecas > img').remove()
    $('div#pecas > br').remove()

    tabuleiro = Array(25).fill(0);

    let value = document.querySelector("#qtdminas");
    value = value['value'];
    /* console.log(value); */

    let cont = 0;

    while (cont < value) {

        posicao = Math.floor(Math.random()*25);

        if(tabuleiro[posicao] == 0){

            tabuleiro[posicao] = 1;
            cont++;

        }

    }

    console.log(tabuleiro)

    cont = 1;

    for(let i of tabuleiro) {

        /* console.log(i) */

        $("<img>")
            .attr("src",`images/stone.png`)
            .appendTo("#pecas")
            .data("nome",i)
            .on("click",clickImagem)
        
        ;



        if(cont%5==0){
            $("<br>")
                .appendTo("#pecas")
        }

        cont+=1;
    }


}

function clickImagem(){

    let elemento = $(this)

    let valordata = elemento.data("nome");
    
    if (valordata == 1) {

        elemento.attr("src","images/dinamite.png");

        mostrarTudo();

        setTimeout(function(){
            alert('Você perdeu!')
        },200);


    }

    else {

        elemento.attr("src","images/diamond.png");
    }

    
}

function mostrarTudo() {

    $('div#pecas > img').remove()
    $('div#pecas > br').remove()

    cont = 1;

    for(let i of tabuleiro) {

        if (i == 1){
            i = "dinamite.png";
        }
        else{
            i = "diamond.png";
        }

        $("<img>")
            .attr("src",`images/${i}`)
            .appendTo("#pecas")

        ;

        if(cont%5==0){
            $("<br>")
                .appendTo("#pecas")
        }

        cont+=1;
    }

    setTimeout(function(){
        valor();
    },2000);
    

}
