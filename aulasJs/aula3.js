let precoEtiqueta = 100.00;
let condicaoPagamento = 3;

if(condicaoPagamento === 1){
    let valorTotal = precoEtiqueta-(precoEtiqueta*0.10);
    console.log(valorTotal);
}else if(condicaoPagamento === 2){
    let valorTotal = precoEtiqueta-(precoEtiqueta*0.15);
    console.log(valorTotal);
}else if(condicaoPagamento === 3){
    let valorTotal = precoEtiqueta;
    console.log(valorTotal);
}else if(condicaoPagamento === 4){
    let valorTotal = precoEtiqueta+(precoEtiqueta*0.10);
    console.log(valorTotal);
}