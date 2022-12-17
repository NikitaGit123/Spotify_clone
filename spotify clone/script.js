console.log("welcome to spotify")

//Initialize variable
let songIndex=0;
let audioElemet = new Audio("songs/3.mp3");
let masterPlay=document.getElementById("masterPlay")
let myProgressbar=document.getElementById('myProgressbar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songitem')) ;

let songs=[
    {songname:"love me like",filepath:"songs/2.mp3",coverPath:"covers/1.jpg"},
    {songname:"Hang over",filepath:"songs/3.mp3",coverPath:"covers/2.jpg"},
    {songname:"Dil na laga",filepath:"songs/4.mp3",coverPath:"covers/3.jpg"},
    {songname:"Baby pull closer",filepath:"songs/5.mp3",coverPath:"covers/4.jpg"},
    {songname:"Heart say Thank",filepath:"songs/6.mp3",coverPath:"covers/5.jpg"},
    {songname:"love me like",filepath:"songs/7.mp3",coverPath:"covers/6.jpg"},
    // {songname:"love me like",filepath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    // {songname:"love me like",filepath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    // {songname:"love me like",filepath:"songs/9.mp3",coverPath:"covers/9.jpg"}
]

songItems.forEach((ele,i)=>{
    ele.getElementsByTagName('img')[0].src=songs[i].coverPath;
    ele.getElementsByClassName('songName')[0].innerText=songs[i].songname;
})
// audioElemets.play(
                                                                            
                                    

//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElemet.paused  || audioElemet.currentTime<=0 )
    {
        audioElemet.play();
        masterPlay.classList.remove('fa-circle-play')     
        masterPlay.classList.add('fa-pause')
        gif.style.opacity=1;
    }
    else{
        audioElemet.pause();
        masterPlay.classList.remove('fa-pause')     
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0;

    }
})


audioElemet.addEventListener('timeupdate',()=>{
    // console.log("time update")
    //update seekbar
    let progress=parseInt((audioElemet.currentTime/audioElemet.duration)*100);
    // console.log(progress) 
    myProgressbar.value=progress
})
myProgressbar.addEventListener('change',()=>{
     audioElemet.currentTime=myProgressbar.value*audioElemet.duration/100;
})

const makeALlPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-circle-play')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeALlPlay();
      songIndex=parseInt(e.target.id)
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-pause');
      audioElemet.src=`songs/${songIndex+1}.mp3`;
      masterSongName.innerText=songs[songIndex].songname;
      audioElemet.currentTime=0;
      audioElemet.play();
      gif.style.opacity=1;
      masterPlay.classList.remove('fa-circle-play')     
      masterPlay.classList.add('fa-pause')

    }) 
})

document.getElementById('forw').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    
    }
    else{
        songIndex+=1;
    }
    audioElemet.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname;
    audioElemet.currentTime=0;
    audioElemet.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play')     
    masterPlay.classList.add('fa-pause')
    
})
document.getElementById('prev').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    
    }
    else{
        songIndex-=1;
    }
    audioElemet.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname;
      audioElemet.currentTime=0;
      audioElemet.play();
      gif.style.opacity=1;
      masterPlay.classList.remove('fa-circle-play')     
      masterPlay.classList.add('fa-pause')

})