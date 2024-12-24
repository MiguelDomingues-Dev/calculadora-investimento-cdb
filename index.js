const resultado = document.querySelector("#resultado");
const porcentagem = document.querySelector("#porcentagem");

const mesesTotal = document.querySelector("#meses");
const ganho = document.querySelector("#realInvest");

const ganhoSemAporteTotal = document.querySelector("#totalGanhoSemAporte");
const ganhoComAporteTotal = document.querySelector("#totalGanhoComAporte");

document.querySelector("#calcular").addEventListener('click', function () {
    const redimento = parseFloat(document.querySelector("#rendN").value);
    const cdi = parseFloat(document.querySelector("#taxaCdiHj").value);

    const porteMensal = parseInt(document.querySelector("#porteMensal").value);
    const meses = parseInt(document.querySelector("#quantMensal").value);
    console.log(meses);

    //Transformando % em Decimal
    const cdiDecimal = cdi / 100;
    const redimentoDecimal = redimento / 100;

    //Taxa anual ajustada para % do CDI
    const taxaAnual = cdiDecimal * redimentoDecimal;
    const taxaMensal = (1 + taxaAnual) ** (1 / 12) - 1;

    const montanteSemPorte = porteMensal * (1 + taxaMensal) ** meses;

    const totalSemAporte = montanteSemPorte - porteMensal;


    //Calculando o montante
    const montanteCdi = porteMensal * (((1 + taxaMensal) ** meses - 1) / taxaMensal) * (1 + taxaMensal);
    
    const totalComAporte = montanteCdi - porteMensal;

    //Resultado
    porcentagem.innerHTML = redimento;
    resultado.innerHTML = montanteCdi.toFixed(2);

    mesesTotal.innerHTML = meses;
    ganho.innerHTML = montanteSemPorte.toFixed(2);

    ganhoSemAporteTotal.innerHTML = totalSemAporte.toFixed(2);
    ganhoComAporteTotal.innerHTML = totalComAporte.toFixed(2);
})