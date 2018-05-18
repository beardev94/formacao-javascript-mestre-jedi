//Item 6
//Segunda Missão Estelar JS

//Item 7
/*Apertem os cintos para adentramos ao hiper-espaço
 rumo a uma nova Missão Estelar JS!:)*/

//Item 8
 var missao = 'Segunda Missão Estelar JS';
 console.log("Tipo: "+ typeof missao,  " - var missao= " + missao);

//Item 9
var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");
console.log("Tipo: "+ typeof hiperespaco,  " - var hiperespaco= " + hiperespaco);

//Item 10
var nomeCliente = "João Paulo";
var renda = 2700.00; 
var dataNascimento = new Date("1991-03-27"); 
var ativo = true;

function exibirDadosClienteVariaveis(){
    console.log("Nome cliente: ", nomeCliente);
    console.log("Renda: R$", renda);
    console.log("Data nascimento: ", dataNascimento);
    console.log("Ativo: ", ativo == true ? "SIM" : "NÃO");
}

exibirDadosClienteVariaveis();

//Item 11
var clienteArray = [['Nome cliente: ','Roberta'], ['Renda: R$',3200.00], 
['Data de nascimento: ',new Date("1987-03-27")], ['Ativo: ', true]];

function exibirDadosClienteArray(){
    for(var array of clienteArray){
        if (array[0] == 'Ativo: ') {
            console.log(array[0], array[1] == true ? "SIM":"NÃO");
        } else {
            console.log(array[0], array[1]);
        }
        
    }
}

exibirDadosClienteArray();

//Item 12
var clienteObject = {nomeCliente: "João", renda: 1700.23, dataNascimento: new Date(1989,4,17), ativo: false};
//for in, switch e if...else

function exibirDadosClienteObjeto(){
    for(var item in clienteObject){
        switch (item) {
            case "nomeCliente":
                console.log("Nome cliente: ", clienteObject[item]);
                break;
            case "renda":
            console.log("Renda: R$", clienteObject[item].toString().replace(".",","));
                break;
            case "dataNascimento":
            console.log("Data de nascimento: ", clienteObject[item]);
                break;
            case "ativo":
            console.log("Ativo: ", clienteObject[item] == true ? "SIM" : "NÃO");
                break;    
            default:
                console.log(item + " :", clienteObject[item]);
                break;
        }
    }
}
exibirDadosClienteObjeto();

//Item 13
function retornaDataAtualFormatada(){
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1;
    var ano = dataAtual.getFullYear();
    var dataFormatada = "";

    if (dia.toString().length == 1) {
        dataFormatada += "0" + dia.toString();
    } else {
        dataFormatada += dia.toString();
    }

    if (mes.toString().length == 1) {
        dataFormatada += "/0" + mes.toString();
    } else {
        dataFormatada += "/" + mes.toString();
    }

    dataFormatada += "/" + ano.toString();

    return dataFormatada;
}

console.log("Data atual: ", retornaDataAtualFormatada());

//Item 14
var hiperEspacoRegExp = new RegExp(/Estelar/);
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";
console.log("Teste: ", hiperEspacoRegExp.test(textoMissao));
console.log("Pesquisa: ", hiperEspacoRegExp.exec(textoMissao));


//Item 15
try {
    for (var i = 30, c = 0; i >= 0; i--, c++) {
        console.log(i, " - "+ c);
        if(c == 29){
            throw new Error("Ocorreu um erro na iteração: "+c);
        }
    }
} catch (error) {
    console.log(error.nome);
    console.log(error.message);
    console.log(error.stack);
} finally{
    console.log("Chegou no bloco finally, sempre será executado.");
}

//Item 16

function recebeDadosFormBoot(objFormElementos){
    console.log("Tipo de objeto: ", Object.prototype.toString.call(objFormElementos))

    var objDadosForm = new Object();
    console.log("nomeBoot", objFormElementos.nomeBoot.value);
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;

    console.log("emailBoot", objFormElementos.emailBoot.value);
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;

    console.log("emailPromocionalCheckBoot", objFormElementos.emailPromocionalCheckBoot.checked);
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;

    console.log("formaContatoTelefoneRadioBoot", objFormElementos.formaContatoTelefoneRadioBoot.checked);
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;

    console.log("formaContatoEmailRadioBoot", objFormElementos.formaContatoEmailRadioBoot.checked);
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;

    console.log("estadoSelectBoot", objFormElementos.estadoSelectBoot.value);
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    console.log(objDadosForm);
    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDados){
    var formHtml = document.querySelector("#formHtml");
    console.log(formHtml);

    formHtml.nomeHtml.value = objDados.nomeBoot;
    formHtml.emailHtml.value = objDados.emailBoot;
    formHtml.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
    formHtml.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot;
    formHtml.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;
    formHtml.estadoSelectHtml.value = objDados.estadoSelectBoot;
}
