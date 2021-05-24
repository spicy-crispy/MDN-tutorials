//In this task you need to take the code you wrote for the second task, and rewrite the inner if...else if...else to use a switch statement instead.

let response;
let score = 40;
let machineActive = true;
 
if (machineActive) { //first check if machine is active
    switch (true) { //possible scores and response
        case (score < 0 || score > 100):
        response = "This is not possible, an error has occured.";
        break;

        case (score >= 0 && score <= 19):
        response = "That was a terrible score — total fail!";
        break;

        case (score >= 20 && score <= 39):
        response = "You know some things, but it\'s a pretty bad score. Needs improvement.";
        break;

        case (score >= 40 && score <= 69):
        response = "You did a passable job, not bad!";
        break;

        case (score >= 70 && score <= 89):
        response = "That\'s a great score, you really know your stuff.";
        break;

        case(score >= 90 && score <= 100):
        response = "What an amazing score! Did you cheat? Are you for real?";
        break;
    }
} else {
    response = "Turn on the machine.";
}
    
   

    const section = document.querySelector('section');

    let para1 = document.createElement('p');
    let para2 = document.createElement('p');

    para1.textContent = `Your score is ${ score }`;
    para2.textContent = response;

    section.appendChild(para1);
    section.appendChild(para2);