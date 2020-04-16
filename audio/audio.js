let player = document.getElementById('play');
let pause = document.getElementById('pause');
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let list = document.querySelector('.list-group');
let title = document.getElementById('title');
let input = document.querySelector('#volume');
let time = document.querySelector('.time');
let progress = document.querySelector('.progress');
let range = document.querySelector('.range');

let audio = {  //объект с треками
    0:{
        id: 1,
        musicName: "Sundress",
        artist:"A$AP Rocky ft. Tame Impala",
        link: "music/song1.mp3",
        Time: "153.6"
        
    },
    1: {
        id: 2,
        musicName: "Breathe Deeper",
        artist:"Tame Impala",
        link: "music/song2.mp3",
        Time: "367.8"
    },
    2: {
        id: 3,
        musicName: "Feels Like We Only Go Backwards",
        artist:"Tame Impala; ",
        link: "music/song3.mp3",
        Time: "187.8"
        
    },
    3: {
        id: 4,
        musicName: "Let It Happen",
        artist:"Tame Impala",
        link: "music/song4.mp3",
        Time: "200.4"
    },
    4: {
        id: 5,
        musicName: "Lucidity",
        artist:"Tame Impala",
        link: "music/song5.mp3",
        Time: "258.6"
    }
}
    for (let i = 0 ; i < Object.keys(audio).length;i++) { //отдельный пункт для каждого аудио
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerText= audio[i].artist+" - "+audio[i].musicName;
        let aud = document.createElement('audio');
        li.appendChild(aud);
        aud.setAttribute('src',audio[i].link);
        list.appendChild(li);
    }
    let song; // переменная для текущего трека
    let id; // для сопоставление текущего трека и предыдущего
    let curTime;// текущее время трека
    let cur; // процент заполнения перемотки
    for (let i = 0; i < list.childElementCount; i++) {
        let onPlay = 0;// трек вкл
        let li = document.querySelectorAll('li');
        li[i].onclick = function () {
            let aud = document.querySelectorAll('audio');
            document.getElementById('rotate').style.animation ='spin 5s linear 0s infinite'; //пластинка крутится 
            if(id != i && id !=null){// соответствие предыдущего трека и нынешнего
                song.pause();
                song.currentTime = 0;
                li[id].style.backgroundColor = 'white';
            }
            song = aud[i];
            li[i].style.backgroundColor = 'whitesmoke'; //текущий пункт выделяется цвето
            onPlay = onPlay+1; // нажатие на пункт
            if(onPlay%2 == 0){ // вкл\выкл при нажатии на пункт
               song.pause();
               document.getElementById('rotate').style.animation ='none';
               li[i].style.backgroundColor = 'white';
            }else{
                song.play();
                document.getElementById('rotate').style.animation ='spin 5s linear 0s infinite';
                li[i].style.backgroundColor = 'whitesmoke';
            }
            title.innerHTML = li[i].textContent; // название текущего трека
            player.onclick=function(){ //кнопка play
                song.play();
                document.getElementById('rotate').style.animation ='spin 5s linear 0s infinite';
                li[i].style.backgroundColor = 'whitesmoke';
            }
            pause.onclick = function(){//кнопка pause
                song.pause();
                document.getElementById('rotate').style.animation ='none';
                li[i].style.backgroundColor = 'white';
            }
            next.onclick = function (){//кнопка next
                li[i].style.backgroundColor = 'white';
                song.pause();
                song.currentTime = 0;
                document.getElementById('rotate').style.animation ='none';
                i = i+1;
                if(i%(list.childElementCount-1) == 1 && i !=1){
                    i = 0;
                }
                song = aud[i];
                song.play();
                title.innerHTML = li[i].textContent;
                song.addEventListener('timeupdate', addTimer);
                document.getElementById('rotate').style.animation ='spin 5s linear 0s infinite';
                li[i].style.backgroundColor = 'whitesmoke';
            }
            previous.onclick = function(){ //кнопка previous
                li[i].style.backgroundColor = 'white';
                song.pause();
                song.currentTime = 0;
                document.getElementById('rotate').style.animation ='none';
                i = i-1;
                if(i == -1){
                    i = list.childElementCount-1;
                }
                song = aud[i];
                song.play();
                title.innerHTML = li[i].textContent;
                song.addEventListener('timeupdate', addTimer);
                document.getElementById('rotate').style.animation ='spin 5s linear 0s infinite';
                li[i].style.backgroundColor = 'whitesmoke';
            }
            id = i;
            song.addEventListener('timeupdate', addTimer);
            range.addEventListener('click', rangeUp);

        function addTimer(){//обновление поточного времени трека
            curTime = song.currentTime;
            cur = (song.currentTime*100)/audio[i].Time;
            time.innerText = parseInt(curTime/60)+":"+parseInt(curTime%60);
            progress.style.width = cur+'%';
            if(song.currentTime == audio[i].Time){
                document.getElementById('rotate').style.animation ='none';
            }
        }
        function rangeUp (event){//прокрутка трека при нажатии на полосу
            progress.style.width = "0px";
            let newTime = (event.offsetX*audio[i].Time)/500;
            song.currentTime = newTime;
        }
    }
    input.onchange = function(){ //громкость звука
        let val = input.value;
        console.log(val);
        let volume = val/100;
        song.volume = volume;
   }
}