function chamarOiMundo(){
    console.log("Oi mundo!")    
}

const modal = document.getElementById("modal")
const formulario = document.getElementById("study-form")

// inputs
const materiaInput = document.getElementById("materia")
const dataInput = document.getElementById("data")
const corInput = document.getElementById("cor")

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];



function abrirModal() {
    modal.classList.add('open');
}

function fecharModal() {
    modal.classList.remove('open');
}

function salvar() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

// arrow function
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const novaTarefa = {
        materia: materiaInput.value,
        data: dataInput.value,
        cor: corInput.value
    }

    tarefas.push(novaTarefa);
    salvar()
    


})
console.log(tarefas)

const taskContainer = document.getElementById('task-container');

taskContainer.innerHTML = '';
tarefas.forEach(tarefa => {
    const template = document.getElementById('task-template');
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector('.task-card');
    const colorIndicator = clone.querySelector('.task-color-indicator');
    colorIndicator.style.backgroundColor =  tarefa.cor

    clone.querySelector('.task-materia').textContent = tarefa.materia;

    const [ano, mes, dia] = tarefa.data.split('-');

    const data = new Date(ano, mes - 1, dia);

    clone.querySelector('.task-data').textContent =
    data.toLocaleDateString('pt-BR', {
        weekday: "long",
        day: "2-digit",
        month: "long"
    })

    console.log(data)
    taskContainer.appendChild(clone)   
});
