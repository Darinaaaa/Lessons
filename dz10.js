let btn = document.querySelector('button');
let cards = document.getElementsByClassName('card-body');
async function showPosts() {
    let response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    let posts = await response.json();
    addBlock(posts,cards);
}
showPosts();
btn.addEventListener('click', AddDbCard);

function AddDbCard() {
    $('#doubleCard').clone().appendTo('#block');
    showPosts();
}
function addBlock(data, card) {
    for( let i = 0; i < card.length; i++){
        card[i].innerHTML = data[i].title;
    }
}