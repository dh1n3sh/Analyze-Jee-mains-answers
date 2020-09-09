function inject(answers) {
    if (answers === false) {
        alert("Save the answer key first!")
        return
    }
    function addRow(text, c = 'black') {
        var textnode = document.createTextNode(text)
        let newRow = a.getElementsByClassName("questionRowTbl")[0].insertRow(-1);
        let newCell = newRow.insertCell(0);
        newRow.insertCell(0);
        newCell.style.fontSize = "20px"
        newCell.style.color = c
        newCell.appendChild(textnode)
    }
    function addDetails(text1, text2, c = 'black') {
        var textnode = document.createTextNode(text2)
        let newRow = document.getElementsByClassName('main-info-pnl')[0].getElementsByTagName('table')[0].insertRow(-1);
        let newCell = newRow.insertCell(0);
        newCell.style.fontSize = "20px"
        newCell.style.color = c
        newCell.appendChild(textnode)
        textnode = document.createTextNode(text1)
        newCell = newRow.insertCell(0);
        newCell.style.fontSize = "20px"
        newCell.style.color = c
        newCell.appendChild(textnode)
    }
    var score = 0, attempted = 0, correct = 0, incorrectmcq = 0, incorrectsa = 0;
    var maths = 0, physics = 0, chem = 0;
    var ct = 0, imt = 0, ist = 0;
    questions = document.getElementsByClassName('questionPnlTbl')
    addDetails('-', '-')
    for (var q = 0; q < questions.length; ++q) {

        // console.log(q)
        a = questions[q].tBodies[0]
        rows = a.getElementsByClassName('menu-tbl')[0].tBodies[0].rows
        // console.log(questions[q])
        // rows = questions[q].tBodies[0].rows
        // console.log(rows[0].cells[1].textContent)

        if (rows[0].cells[1].textContent == 'MCQ') {
            // console.log('mcq')
            qid = rows[1].cells[1].textContent

            options = {}
            // class="questionRowTbl"
            for (var i = 2; i < rows.length - 2; ++i) {
                options[rows[i].cells[1].textContent] = i - 1;
            }
            var yourAnswer = rows[7].cells[1].textContent
            var correctAnswer = options[answers[qid]]
            addRow('Correct Answer : ' + correctAnswer)
            addRow('Your Answer : ' + yourAnswer)
            if (correctAnswer == yourAnswer) {

                addRow('Correct', 'green');
                score += 4
                attempted += 1
                correct += 1
            }
            else if (yourAnswer == ' -- ') {
                addRow('Not Attempted')
            }
            else {
                addRow('Incorrect', 'red');
                score -= 1;
                attempted += 1;
                incorrectmcq += 1;
            }

        }
        else if (rows[0].cells[1].textContent == 'SA') {
            qid = rows[1].cells[1].textContent
            // q = rows[0].parentElement.parentElement.parentElement
            b = a.getElementsByClassName('questionRowTbl')[0].rows
            var yourAnswer = b[b.length - 1].cells[1].textContent
            // answers[qid] = b
            // console.log('sa')
            var correctAnswer = answers[qid]
            addRow('Correct Answer : ' + correctAnswer)
            addRow('Your Answer : ' + yourAnswer)
            if (correctAnswer == yourAnswer) {

                addRow('Correct', 'green');
                score += 4
                attempted += 1
                correct += 1
            }
            else if (yourAnswer == ' -- ') {
                addRow('Not Attempted')
            }
            else {
                addRow('Incorrect', 'red');
                attempted += 1;
                incorrectsa += 1;
            }


        }
        if (q == 24) {
            physics = score
            ct = correct
            addDetails('Physics marks', physics)
            addDetails('Physics Correct', correct, 'green')
            addDetails('Physics incorrect Mcq', incorrectmcq - imt, 'red')
            imt = incorrectmcq
            addDetails('Physics incorrect SA', incorrectmcq - ist, 'red')
            ist = incorrectsa
            addDetails('-', '-')
        }
        if (q == 49) {
            chem = score - physics
            addDetails('Chemistry marks', chem)
            addDetails('Chemistry Correct', correct - ct, 'green')
            ct = correct
            addDetails('Chemistry incorrect Mcq', incorrectmcq - imt, 'red')
            imt = incorrectmcq
            addDetails('Chemistryincorrect SA', incorrectmcq - ist, 'red')
            ist = incorrectsa
            addDetails('-', '-')
        }
        if (q == 74) {
            maths = score - physics - chem
            addDetails('Maths marks', maths)
            addDetails('Maths Correct', correct - ct, 'green')
            ct = correct
            addDetails('Maths incorrect Mcq', incorrectmcq - imt, 'red')
            imt = incorrectmcq
            addDetails('Maths incorrect SA', incorrectmcq - ist, 'red')
            ist = incorrectsa
            addDetails('-', '-')
        }
        // console.log(correctAnswer, yourAnswer)
        // var text;

        // a.getElementsByClassName('menu-tbl')[0].remove()

    }
    addDetails('Total Marks', score)
    addDetails('Total Attempted', attempted)
    addDetails('Correct', correct, 'green')
    addDetails('Incorrect MCQ', incorrectmcq, 'red')
    addDetails('Incorrect SA', incorrectsa, 'red')
}