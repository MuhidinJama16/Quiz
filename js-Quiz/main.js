document.getElementById('submit').addEventListener('click', answerQuestion);
document.getElementById('submit2').addEventListener('click', answerQuestion2);
document.getElementById('submit3').addEventListener('click', answerQuestion3);
document.getElementById('submit4').addEventListener('click', answerQuestion4);

// Event Function
function answerQuestion() {
    //Get Input Value (What character to look for?)
    let answer = document.getElementById('input').value;
  // Test Input Varible and update the page
    if (answer == 'canada' || answer == 'Canada') {
        document.getElementById('results').innerHTML = 'Correct!'
 } 
 else {
    document.getElementById('results').innerHTML = 'Incorrect!'
 }
}

// Event Function
function answerQuestion2() {
    //Get Input Value (What character to look for?)
    let answer = document.getElementById('input').value;
  // Test Input Varible and update the page
    if (answer == 'Guardian Battle' || answer == 'guardian battle') {
        document.getElementById('results2').innerHTML = 'Correct!'
 } 
 else {
    document.getElementById('results2').innerHTML = 'Incorrect!'
 }
}

// Event Function
function answerQuestion3() {
    //Get Input Value (What character to look for?)
    let answer = document.getElementById('input3').value;
  // Test Input Varible and update the page
    if (answer == 'Po' || answer == 'po') {
        document.getElementById('results3').innerHTML = 'Correct!'
 } 
 else {
    document.getElementById('results3').innerHTML = 'Incorrect!'
 }
}

// Event Function
function answerQuestion4() {
    //Get Input Value (What character to look for?)
    let answer = document.getElementById('input4').value;
  // Test Input Varible and update the page
    if (answer == 'Bill gates and Paul Allen' || answer == 'bill gates and paul allen') {
        document.getElementById('results4').innerHTML = 'Correct!'
 } 
 else {
    document.getElementById('results4').innerHTML = 'Incorrect!'
 }
}