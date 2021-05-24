let machineActive = true;
    let pwd = 'cheese';

    let machineResult;
    let pwdResult;

if (machineActive) {
    machineResult = "The machine is switched on. Welcome!";
        if (pwd === "cheese") {
            pwdResult = "You have successfully logged in.";
        } else {
         pwdResult = "Incorrect password. Please try again.";
        }
} else {
    machineResult = "The machine is switched off.";
}

// note you can also write this using ternary operator
/*
if (machineActive) {
    machineResult = "The machine is switched on. Welcome!";
    pwdResult = pwd === "cheese" ? "You have successfully logged in." : "Incorrect password. Please try again.";
} else {
    machineResult = "The machine is switched off.";
}

*/
    const section = document.querySelector('section');

    let para1 = document.createElement('p');
    let para2 = document.createElement('p');

    para1.textContent = machineResult;
    para2.textContent = pwdResult;

    section.appendChild(para1);
    section.appendChild(para2);