var ContNum = 0
var i = 12
var ReverseNum = 0

const ShowResult = (soma) => {
  if (soma % 2 !== 0) {
    ContNum++
    console.log(`${ContNum}° - ${i} + ${ReverseNum} = ${soma}`)
  }
}

function CheckAndMultNumbers() {
  for (i; i < 1000000; i++) {
    var numConverte = i.toString().split("").reverse()
    var number = parseInt(numConverte)
    if (number == 0) {
      false
    } else {
      ReverseNum = parseInt(numConverte.join(""))
      var soma = i + ReverseNum
      ShowResult(soma)
    }
  }
}

CheckAndMultNumbers()