var timeOfStudent = document.getElementById('timeOfStudent')
let list = document.querySelector('select#adc')
var totalTime = []

function CheckEmplyCamp(n) {
  if (n == '') {
    return true
  } else {
    return false
  }
}

function SomatotalTime(n) {
  let soma = 0
  for (let pos in n) {
    soma += n[pos]
  }
  return soma
}

function adicionar() {
  if (!CheckEmplyCamp(timeOfStudent.value)) {
    totalTime.push(Number(timeOfStudent.value))
    let item = document.createElement('option')
    item.text = `Horário do aluno adicionado: ${timeOfStudent.value}`
    list.appendChild(item)
  } else {
    window.alert('Adicione um valor!')
  }
  timeOfStudent.value = ''
  timeOfStudent.focus()
}


function verificar(NumberOfStudents) {
  if (CheckEmplyCamp(totalTime.value)) {
    window.alert('Adicione ao menos um horário antes de verificar!')
  } else {
    var NumberOfStudents = parseFloat(prompt('Qual é o número mínimo de alunos?'))
    if (NumberOfStudents > totalTime.length || SomatotalTime(totalTime) > 0) {
      window.alert('Aula cancelada')
    } else {
      window.alert('Aula normal')
    }
  }
}
