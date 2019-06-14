function abrirJanela(tipo) {
	window.open("fogao" + tipo + ".html" , "fogaoForno" ,
		"width=380, height=500");  /* concatenação de strings com a url das paginas */

}

var produtos = [
["FogaoBrastemp4b", "730,00"],
["FogaoElectrolux4b", "1350,00"],
["FogaoBrastemp6b", "784,00"],
["FornoEletPhilco46L", "319,00"],
["FornoGasItajobi56L", "563,00"] ];

function trocarFoto(num) {
	var imagem = document.getElementById('foto'); 
	var valor =  document.getElementById('preco');


	 imagem.src = "../img/" + produtos[num][0] + ".jpg";  /* usado para mudar o caminho da foto buscando os nome no vetor*/
	 imagem.height = '300';   /* usado para abrir a altura da foto com 300px */
	 imagem.width = '300';   /* usado para abrir a largura da foto com 300px */
	 valor.innerHTML = "R$ " + produtos[num][1];    /* usado para mudar o valor dentro da id buscando os valores no vetor*/
}

function validar(campo, tamanho) {
    var numero = campo.value;  /* retorna o valor do campo digitado */
    var i, x;
    
    if (numero.length < tamanho)   /* retorna o tamnho da string e comparada com o tamnho definido*/
    {	alert("Telefone " + campo.name + " tem de ter " + tamanho + " dígitos!");
        return false;}

    for (i = 0; i<tamanho; i++)  /* laço para ler cada caracter do campo e retornar caso tenho algo diferente de caracteres númericos */
    {x = numero.charAt(i)
       if ( x < '0' || x > '9')
        { alert( "Telefone " + campo.name + " só pode ter dígitos,caracter " + x + " inválido!");
       return false;} 

    }
    return true;
}

var tipos = [
	    "Fogao",
	    "Forno" ];		

var pedidos = [
[0, "Brastemp 4 B. BFO4N", 730],
[0, "Brastemp 6 B. BFS6N", 784],
[0, "Electrolux 4 B. 50SBC", 1350],
[1, "Elétrico Philco 46L", 319],
[1, "Gás 56 Litros Itajobi", 563] ];

function Comprar(p) {

var total = (p.total.value > 0) ? parseFloat(p.total.value) : 0;  

var h = p.selecionarProd.selectedIndex - 1;
var t = pedidos[h][0]; 

p.lista.value += tipos[t] + " " + pedidos[h][1] + "\n";    /*concatenação de strings com o produto escolhido */
p.total.value = total + pedidos[h][2];  /* soma dos valores dos produtos escolhidos */
}

function tabela () {
            for (j = 0; j < tipos.length; j++) {    /* primeiro laço para criar as optgroups*/
                var u = document.getElementById("selecionarProd"); /* */
                var o = document.createElement("OPTGROUP");   /* criar elemento <optgroup>*/
                o.setAttribute("label", tipos[j]);   /* atribuir o nome à label */
                u.insertBefore(o, u.options[1]);   /* opção para definir onde inserir a optgroup*/
                if (document.getElementsByTagName("OPTGROUP")[0] = "fogao") {   /* if para adicionar o segundo optgroup*/
                     u.insertBefore(o, u.options[4]);  
                }
                for (z = 0; z < pedidos.length; z++) {    /* segundo laço parar criar as options*/
                    if (pedidos[z][0] == j) {
                    var q = document.createElement("OPTION");  /* criar elemento <option>*/
                    var w = document.createTextNode(pedidos[z][1]); /*atribuir texto do vetor à option */
                    q.appendChild(w);
                    document.getElementById("selecionarProd").appendChild(q);
                    }
                }
            }
}
function carregarFuncao() {
    window.onload = tabela();
}
    
carregarFuncao();