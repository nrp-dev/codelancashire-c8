//Post stats Counter

let likeStat = document.getElementById('like-stat');
let dislikeStat = document.getElementById('dislike-stat');

function getRandom(min, max) {
    return Math.random()  * (max - min) + min;;
  }

likeStat.value = Number.parseInt(getRandom(1,200));
dislikeStat.value = Number.parseInt(getRandom(1,10));


let likeIcon = document.getElementById("like-icon");
let dislikeIcon = document.getElementById("dislike-icon");

likeIcon.addEventListener('click', (event) =>{

    event.preventDefault;

    likeStat.value = Number.parseInt(likeStat.value)+1;
})

dislikeIcon.addEventListener('click', (event) =>{

    event.preventDefault;

    dislikeStat.value = Number.parseInt(dislikeStat.value)+1;
})

