$.get( "lib.json", function( data ) {
    console.log(data);
    let obj = JSON.parse(data);
    console.log(data.bookName);
        document.querySelector('.form-control').oninput = function(){
        document.querySelector('ul').innerHTML = '';
            let val = this.value.trim().toLowerCase();
            if (val != ''){
            for (let i = 0; i < obj.length; i++) {
            if(obj[i].bookName.toLowerCase().includes(val) == 1){
            let li = document.createElement('li');
            li.innerText = obj[i].bookName+", "+obj[i].autorName+" "+obj[i].autorSurname;
            li.className = 'list-group-item';
            li.style.display = 'block';
            document.querySelector('ul').appendChild(li); 
                    }
                }  
            }
        }
    }
)