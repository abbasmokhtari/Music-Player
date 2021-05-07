const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//song titles
const songs = ['hey', 'summer', 'ukulele']

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

function playSong() {
  //when played we need to add play class
  musicContainer.classList.add('play')
  // we need to change the icon
  playBtn.querySelector('i').classList.remove('fa-play')
  playBtn.querySelector('i').classList.add('fa-pause')

  audio.play()
}

function pauseSong() {
  //when paused we need to remove play class
  musicContainer.classList.remove('play')
  // icon is changed back to play
  playBtn.querySelector('i').classList.add('fa-play')
  playBtn.querySelector('i').classList.remove('fa-pause')

  audio.pause()
}

function prevSong() {
  // we need to decrease songIndex by 1
  songIndex--
  if (songIndex < 0) {
    songIndex = songs.length - 1
  }
    loadSong(songs[songIndex])
    audio.play()
}

function nextSong() {
  // we need to increase songIndex by 1
    songIndex++
    if (songIndex === songs.length) {
        songIndex = 0
    }
    loadSong(songs[songIndex])
    audio.play()
}
//event listeners

playBtn.addEventListener('click', () => {
  //we want to check and see if a song is playin
  const isPlaying = musicContainer.classList.contains('play')

  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})

// change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
