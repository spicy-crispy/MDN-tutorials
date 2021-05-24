let season = 'summer';
    let response;

 
    let summerSearch = season.search('summer');
    let winterSearch = season.search('winter');
    if (summerSearch !== -1) {
        response = "Live in the sunshine!";
    } else if (winterSearch !== -1) {
        response = "Winter is coming!";
    } else {
        response = "I don't know what season it is";
    }
    

    const section = document.querySelector('section');

    let para1 = document.createElement('p');
    para1.textContent = response;
    section.appendChild(para1);