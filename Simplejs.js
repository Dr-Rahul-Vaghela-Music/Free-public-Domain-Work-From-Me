document.getElementById('Acceptcookie').addEventListener('click',
    function() {
        document.querySelector('.CookiePolicypagepop').style.display = "none";
        const date = new Date();
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
        document.AcceptButtncooki.expires = '7Minutes';
    });
document.getElementById('cokkieclose').addEventListener('click', function() {
    document.querySelector('.CookiePolicypagepop').style.display = "none";
});

