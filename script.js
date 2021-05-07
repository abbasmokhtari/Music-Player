const musicContainer = document.querySelector('.music-contianer')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')


//song titles
const songs =['hey', 'summer', 'ukulele']

//keep track of songs
let songIndex = 2


// initially load songs into DOM - we create a function that takes songs array with song index
loadSong(songs[songIndex])


// Update song details
function loadSong(song) {
    //here we change the title
    title.innerText = song
    // here we change the song and format should be mp3 we give the address to the song
    audio.src = `music/${song}.mp3`
    //here we change the cover
    cover.src = `images/${song}.jpg`

}