function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto/100));
}
function aplicarJuros(valor, juros){
    return valor + (valor * (juros/100));
}

let precoEtiqueta = 100.00;
let condicaoPagamento = 4;

if(condicaoPagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta,10));
}else if(condicaoPagamento === 2){
    console.log(aplicarDesconto(prnbecoEtiqueta,15));

}else if(condicaoPagamento === 3){
    console.log(precoEtiqueta);

}else if(condicaoPagamento === 4){
    console.log(aplicarJuros(precoEtiqueta,10));

}