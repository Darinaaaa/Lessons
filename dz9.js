$.get( "https://jsonplaceholder.typicode.com/todos", function( data ) {
    console.log(data);
    let dbCard = document.getElementById('doubleCard');
    let btn = document.querySelector('button');
    let cards = document.getElementsByClassName('card-body');
    console.log(data.length);
    for(const key in data){
        if (data.hasOwnProperty(key)) {
            addBlock(data, cards);
        }
    }
    btn.addEventListener('click', AddDbCard);
    function AddDbCard() {
    $(dbCard).clone().appendTo('#block');
    addBlock(data, cards);
}
})

function addBlock(data, cards) {
    for( let i = 0; i < cards.length; i++){
        cards[i].innerHTML = data[i].title;
    }
}