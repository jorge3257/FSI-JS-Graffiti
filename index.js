let header = document.querySelector('#page-header')
header.style.textAlign = "left"


let dogpic = document.querySelectorAll('.dog-image')
for (let i=0; i<dogpic.length; i++){
dogpic[i].style.borderStyle = 'solid';
dogpic[i].style.borderRadius = '4px';
dogpic[i].style.borderColor = 'black';
}


let doginfo = document.querySelectorAll('.dog-description');
for (let i=0; i<doginfo.length; i++){
    doginfo[i].style.fontFamily = 'Georgia'
    }

let dogn = document.querySelectorAll('.dog-name');
for (let i=0; i<dogn.length; i++){
    dogn[i].style.textAlign  = 'left';
    }

let foot = document.querySelector('.footer');
foot.style.Color = 'red';

// Select some elements...