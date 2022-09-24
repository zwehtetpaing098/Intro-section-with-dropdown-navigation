let toggleBtn = document.querySelector('.toggle');
let closeBtn = document.querySelector('.close');
let sidebar = document.querySelector('.sidebar');

let Features = document.querySelector('.Features');
let features = document.querySelector('.features');

let Company = document.querySelector('.Company');
let company = document.querySelector('.company');

let back = document.querySelector('.back');



let x = 0;
Features.onclick = function() {
    features.style.display = 'block';
    x++;
    console.log(x);
    if (x === 2){
        features.style.display = 'none';
        x = 0;
    }
}

let y = 0;
Company.onclick = function() {
    company.style.display = 'block';
    y++;
    console.log(x);
    if (y === 2){
        company.style.display = 'none';
        y = 0;
    }
}

toggleBtn.onclick = function() {
    sidebar.style.display = 'block';
    sidebar.classList.toggle('active');
    back.style.display = 'block';
}

closeBtn.onclick = function() {
    sidebar.style.display = 'none';
    sidebar.classList.remove('active');
    back.style.display = 'none';
}