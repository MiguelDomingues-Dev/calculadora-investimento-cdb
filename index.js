const resultado = document.querySelector("#resultado");
const porcentagem = document.querySelector("#porcentagem");

document.querySelector("#calcular").addEventListener('click', function () {
    const redimento = parseFloat(document.querySelector("#rendN").value);
    const cdi = parseFloat(document.querySelector("#taxaCdiHj").value);

    const porteMensal = parseInt(document.querySelector("#porteMensal").value);
    const meses = parseInt(document.querySelector("#quantMensal").value);
    console.log(meses);

    const cdiDecimal = cdi / 100;
    const redimentoDecimal = redimento / 100;
    
    //Taxa anual ajustada para % do CDI
    const taxaAnual = cdiDecimal * redimentoDecimal;
    const taxaMensal = (1 + taxaAnual) ** (1 / 12) - 1;

    //Calculando o montante
    const montanteCdi = porteMensal * (((1 + taxaMensal) ** meses - 1) / taxaMensal) * (1 + taxaMensal);
    console.log(montanteCdi);
    porcentagem.innerHTML = redimento;
    resultado.innerHTML = montanteCdi.toFixed(2);
})