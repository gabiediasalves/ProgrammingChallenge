var timeOfStudent = document.getElementById('timeOfStudent')
var list = document.querySelector('select#adc')
var totalTime = []

const CheckEmplyCamp = (n) => {
  if (n == '') {
    return true
  } else {
    return false
  }
}

const SumAmount = (n) => {
  let sum = 0
  for (let pos in n) {
    sum += n[pos]
  }
  return sum
}

const Add = () => {
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

const Check = (NumberOfStudents) => {
  if (CheckEmplyCamp(totalTime.value)) {
    window.alert('Adicione ao menos um horário antes de verificar!')
  } else {
    var NumberOfStudents = parseFloat(prompt('Qual é o número mínimo de alunos?'))
    if (NumberOfStudents > totalTime.length || SumAmount(totalTime) > 0) {
      window.alert('Aula cancelada')
    } else {
      window.alert('Aula normal')
    }
  }
}
