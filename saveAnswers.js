function saveAnswers() {
    table = document.getElementsByClassName('gridv')[0]
    rows = table.rows
    answers = {}
    var i = 0;
    while (i < rows.length && rows[i].cells[1].textContent.trim() !== 'BTECH E')
        i += 1;
    for (; i < rows.length; ++i) {
        qid = rows[i].cells[3].textContent.trim();
        answer = rows[i].cells[4].textContent.trim();
        answers[qid] = answer
    }
    return answers;
}