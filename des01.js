NumInversValid = []
NumCrescValid = []
VerifMult = []
var numOrdCresc = 0
var l = 0

function RemoveEMult() {
  for (let i = 1; i <= 1000; i++) {
    n = parseFloat(i.toString().split('').reverse().join(''))
    numOrdCresc = i
    l++

    if (l == 10) {
      n = ''
      numOrdCresc = ''
      l = 0
    }

    MultNumbers = n + numOrdCresc
    if (n < 10 || MultNumbers % 2 == 0) {
      false
    } else {
      VerifMult.push(MultNumbers)
      NumInversValid.push(n)
      NumCrescValid.push(numOrdCresc)
      
      
    }
  }}
  function filterArray(VerifMult){
    RemoveEMult()
    var found ={}
    var out = VerifMult.filter(function(element){
      return found.hasOwnProperty(element)? false : (found[element]=true)
    })
    teste.push(VerifMult)
    return out
}

const outputArray = filterArray(VerifMult)
console.log("Filtered Array",outputArray)
