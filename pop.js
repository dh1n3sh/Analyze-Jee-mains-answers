
let getAnswers = document.getElementById('getAnswers');
let inj = document.getElementById('inject');
if (local.get('answers') === false) {
    document.getElementById('key_message').innerHTML = "Answers not saved yet!";
} else {
    document.getElementById('key_message').innerHTML = "Answer key already saved!";
}
getAnswers.onclick = function (event) {
    chrome.tabs.executeScript({
        code: `(${saveAnswers})(${JSON.stringify({ foo: 'bar' })})`
    }, ([result] = []) => {
        if (!chrome.runtime.lastError) {
            local.set('answers', result);
            console.log(result); // shown in devtools of the popup window
        }
    });
    // local.set('key', 1);
    document.getElementById('key_message').innerHTML = "Answer key already saved!";

}

inj.onclick = function (event) {
    var answers = local.get('answers')
    chrome.tabs.executeScript({
        code: `(${inject})(${JSON.stringify(answers)})`
    }, ([result] = []) => {
        if (!chrome.runtime.lastError) {
            // local.set('answers', result);
            console.log(result); // shown in devtools of the popup window
        }
    });
    document.getElementById('inject_message').innerHTML = "Analysis Completed!";
}
