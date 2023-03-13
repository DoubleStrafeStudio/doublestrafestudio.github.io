let proj1 = document.getElementById('project1');
let proj2 = document.getElementById('project2');
let proj3 = document.getElementById('project3');
let proj4 = document.getElementById('project4');
let projDisplay = document.getElementById('projectDisplay');

function displayProj1() {
    projDisplay.innerHTML = 'Thumbnail for Project 1';
    projDisplay.style.backgroundColor = "#B3E5FC";
}
function displayProj2() {
    projDisplay.innerHTML = 'Thumbnail for Project 2';
    projDisplay.style.backgroundColor = "#C8E6C9";
}
function displayProj3() {
    projDisplay.innerHTML = 'Thumbnail for Project 3';
    projDisplay.style.backgroundColor = "#F8BBD0";
}
function displayProj4() {
    projDisplay.innerHTML = 'Thumbnail for Project 4';
    projDisplay.style.backgroundColor = "#FFE082";
}

//projectName1.mouseover = displayProject1;

proj1.addEventListener('click', displayProj1);
proj2.addEventListener('click', displayProj2);
proj3.addEventListener('click', displayProj3);
proj4.addEventListener('click', displayProj4);

/*
<a href=./projects/keyboard-visualizer/keyboard-visualizer.html></a>
<a href=./projects/youth-games-database/youth-games-database.html></a>
<a href=./projects/monikers/monikers-online.html></a>
<a href=./projects/project-haven/project-haven.html></a>
*/