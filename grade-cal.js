// student score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (stScore, totScore) {
    let score = (stScore / totScore) * 100
    let mark = ''
    if (score >= 90) {
        mark = 'A'
    } else if (score >= 80) {
        mark = 'B'
    } else if (score >= 70) {
        mark = 'C'
    } else if (score >= 60) {
        mark = 'D'
    } else {
        mark = 'F'
    } 
    return `You got a ${mark} (${score}%)!`
}

let result = gradeCalc(9, 20)
console.log(result)