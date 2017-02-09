/**
 * Created by richwilliams on 2/9/17.
 */
function CB(bg) {
    var url;
    if (bg == 'yourvalue1') {
        url = 'images/hero-five.jpg';
        document.getElementById('ecard').style.backgroundImage = 'url(' + url + ')';
        document.getElementById('slide-intro').style.display = 'block';
        document.getElementById('slide-2').style.display = 'none';
        document.getElementById('slide-3').style.display = 'none';
        document.getElementById('slide-4').style.display = 'none';
    } else if (bg == 'yourvalue2') {
        url = 'images/hero-two.jpg';
        document.getElementById('ecard').style.backgroundImage = 'url(' + url + ')';
        document.getElementById('slide-2').style.display = 'block';
        document.getElementById('slide-intro').style.display = 'none';
        document.getElementById('slide-3').style.display = 'none';
        document.getElementById('slide-4').style.display = 'none';
    } else if (bg == 'yourvalue3') {
        url = 'images/hero-three.jpg';
        document.getElementById('ecard').style.backgroundImage = 'url(' + url + ')';
        document.getElementById('slide-3').style.display = 'block';
        document.getElementById('slide-intro').style.display = 'none';
        document.getElementById('slide-4').style.display = 'none';
        document.getElementById('slide-2').style.display = 'none';
    } else if (bg == 'yourvalue4') {
        url = 'images/hero-four.jpg';
        document.getElementById('ecard').style.backgroundImage = 'url(' + url + ')';
        document.getElementById('slide-4').style.display = 'block';
        document.getElementById('slide-intro').style.display = 'none';
        document.getElementById('slide-2').style.display = 'none';
        document.getElementById('slide-3').style.display = 'none';
    }
}