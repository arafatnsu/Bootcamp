let studentGrade = function(scoredGrade = 0, totalscore = 100) {
    return (scoredGrade / totalscore) * 100
}

let finalScore = studentGrade(8, 80)

if (finalScore <= 100 && finalScore >= 90) {
    console.log(`You got an A (${finalScore}%)`)
} else if (finalScore <= 89 && finalScore >= 80) {
    console.log(`You got a B (${finalScore}%)`)
} else if (finalScore <= 79 && finalScore >= 70) {
    console.log(`You got a C (${finalScore}%)`)
} else if (finalScore <= 69 && finalScore >= 60) {
    console.log(`You got a D (${finalScore}%)`)
} else {
    console.log(`You got a F (${finalScore}%)`)
}