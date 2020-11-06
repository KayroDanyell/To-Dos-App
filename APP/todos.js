var lista = document.querySelector('#app ul')
var entrada = document.querySelector('#app input')
var botao = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('lista_todos')) || []



function ShowTodos() {
    lista.innerHTML=''
    for (todo of todos) {
        var elementoTodo = document.createElement('li');
        var texto = document.createTextNode(todo)
        
        

       
        elementoTodo.appendChild(texto)
        lista .appendChild(elementoTodo)
        

         var excluir = document.createElement('a')
        excluir.setAttribute('href', '#')
        var linkText = document.createTextNode('Excluir')
        excluir.appendChild(linkText)

        var pos = todos.indexOf(todo)
        excluir.setAttribute('onclick', 'deletetodos('+pos+')')
        
        elementoTodo .appendChild(excluir)
    }
}

function addtodos() {
    var texto = entrada.value
    todos.push(texto)
    ShowTodos()
    Save()
}

function deletetodos(pos){
todos.splice(pos,1)
ShowTodos()
Save()
}

function Save(){
    localStorage.setItem('lista_todos',JSON.stringify(todos))
}

botao.onclick = function(){addtodos()}
ShowTodos()