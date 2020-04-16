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

let audio = { 
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
    for (let i = 0 ; i < Object.keys(audio).length;i++) {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerText= audio[i].artist+" - "+audio[i].musicName;
        let aud = document.createElement('audio');
        li.appendChild(aud);
        aud.setAttribute('src',audio[i].link);
        list.appendChild(li);
    }
    let song;
    let id;
    let curTime;
    let cur;
    for (let i = 0; i < list.childElementCount; i++) {
        let onPlay = 0;
        let li = document.querySelectorAll('li');
        li[i].onclick = function () {
            let aud = document.querySelectorAll('audio');
                document.getElementById('rotate').style.animation ='spin 5s linear 0s infinite';
            if(id != i && id !=null){
                song.pause();
                song.currentTime = 0;
                li[id].style.backgroundColor = 'white';
            }
            song = aud[i];
            li[i].style.backgroundColor = 'whitesmoke';
            onPlay = onPlay+1;
            if(onPlay%2 == 0){
               song.pause();
               document.getElementById('rotate').style.animation ='none';
               li[i].style.backgroundColor = 'white';
            }else{
                song.play();
                document.getElementById('rotate').style.animation ='spin 5s linear 0s infinite';
                li[i].style.backgroundColor = 'whitesmoke';
            }
            title.innerHTML = li[i].textContent;
            player.onclick=function(){
                song.play();
                document.getElementById('rotate').style.animation ='spin 5s linear 0s infinite';
                li[i].style.backgroundColor = 'whitesmoke';
            }
            pause.onclick = function(){
                song.pause();
                document.getElementById('rotate').style.animation ='none';
                li[i].style.backgroundColor = 'white';
            }
            next.addEventListener('click',nextSong);
            function nextSong(){
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
            previous.onclick = function(){
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

        function addTimer(){
            curTime = song.currentTime;
            cur = (song.currentTime*500)/audio[i].Time;
            time.innerText = parseInt(curTime/60)+":"+parseInt(curTime%60);
            progress.style.width = cur+'%';
            if(song.currentTime == audio[i].Time){
                document.getElementById('rotate').style.animation ='none';
            }
        }
        function rangeUp (event){
            progress.style.width = "0px";
            let newTime = (event.offsetX*audio[i].Time)/500;
            song.currentTime = newTime;
        }
    }
    input.onchange = function(){
        let val = input.value;
        console.log(val);
        let volume = val/100;
        song.volume = volume;
   }
}