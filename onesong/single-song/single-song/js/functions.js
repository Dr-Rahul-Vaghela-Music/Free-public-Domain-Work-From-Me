Amplitude.init({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "songs": [{
        "name": "Magical Sand Particles",
        "artist": "Dr Rahul Vaghela",
        "album": "Music Samples",
        "url": "../songs/Magical Sand Particles.ogg",
        "cover_art_url": "../album-art/LogoArtwork1920.jpg"
    }]
});

window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function(e) {
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
});