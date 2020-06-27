//incrementa
var botaoIncrementa = document.querySelectorAll(".btn-incrementa");

for(let botao of botaoIncrementa)
{
    botao.addEventListener('click', Incrementa);

    function Incrementa()
    {
        //closest busca o elemento mais proximo que contem a classe item
        var item = botao.closest('.item');
    
        var input = item.querySelector('.quantidade');
        input.value++;  
       
        var preco = pegaPrecoItem(item);
        adicionaAoTotal(preco);
    }
}

//Decrementa

var botaoDecrementa = document.querySelectorAll(".btn-decrementa");

for(let botao of botaoDecrementa)
{
    botao.addEventListener('click', Decrementa);

    function Decrementa()
    {
        //closest busca o elemento mais proximo que contem a classe item
        var item = botao.closest('.item');
    
        var input = item.querySelector('.quantidade');
    
        if (input.value >0)
        {
            input.value--;
            var preco = pegaPrecoItem(item);
            adicionaAoTotal(-preco);
        }
    }
}

var formPedido = document.forms.pedido;

//Funcao Anonima
formPedido.addEventListener('submit', function(event){
    var contador = 0;

    var inputs = formPedido.querySelectorAll('input.quantidade');

    for(let input of inputs)
    {
        if(input.value > 0)
        {
            contador++;
        }
    }

    if(contador == 0)
    {
        alert("Pedido Inválido");
        //Nao envia o formulario
        event.preventDefault();
    }
});

//Funcoes Auxiliares
function pegaPrecoItem(item)
{
    var precoItem = item.querySelector('.preco-item');
    return Number(precoItem.textContent);
}

function adicionaAoTotal(valor)
{
    var elementoTotal = document.querySelector('#total');
    elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}