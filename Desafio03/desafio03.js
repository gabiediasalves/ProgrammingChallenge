let n = 10
let v = [2, 3, 4]
ResultFinaly = []

const VerifyNumbers = (ArrayVazio, NumVetor) => {
  for (var i = 0; i < NumVetor.length; i++) {
    var vetor = ArrayVazio.map((r) => r)
    vetor.push(NumVetor[i])
    if (vetor.reduce((prev, curr) => prev + curr, 0) === n) {
      ResultFinaly.push(vetor)
    } else {
      VerifyEveryPossibility(vetor)
    }
  }
}

const VerifyEveryPossibility = (Array) => {
  if (Array.reduce((prev, curr) => prev + curr, 0) < n) {
    VerifyNumbers(Array, v)
  }
}

const ShowResult = () => {
  ResultFinaly = ResultFinaly.map((answer) => String(answer.sort()))
  var v1 = ResultFinaly[ResultFinaly.length-1]
  var v2 = ResultFinaly[ResultFinaly.length-2]

  res.innerHTML += `<p>Valor de N: ${n}</p>`
  res.innerHTML += `<p>Valor 01: ${v1}</p>`
  res.innerHTML += `<p>Valor 02: ${v2}</p>`
}

VerifyNumbers([], v)
ShowResult()
