/**
 * Created by richwilliams on 2/9/17.
 */
function CB(bg) {
    var url;
    if (bg == 'yourvalue1') {
        url = 'src="https://res.cloudinary.com/pollcart/image/fetch/q_auto,f_auto/https://pollcart.github.io/images/hero-five.jpg';
        document.getElementById('ecard').style.backgroundImage = 'url(' + url + ')';
        document.getElementById('slide-intro').style.display = 'block';
        document.getElementById('slide-2').style.display = 'none';
        document.getElementById('slide-3').style.display = 'none';
        document.getElementById('slide-4').style.display = 'none';
    } else if (bg == 'yourvalue2') {
        url = 'src="https://res.cloudinary.com/pollcart/image/fetch/q_auto,f_auto/https://pollcart.github.io/images/hero-two.jpg';
        document.getElementById('ecard').style.backgroundImage = 'url(' + url + ')';
        document.getElementById('slide-2').style.display = 'block';
        document.getElementById('slide-intro').style.display = 'none';
        document.getElementById('slide-3').style.display = 'none';
        document.getElementById('slide-4').style.display = 'none';
    } else if (bg == 'yourvalue3') {
        url = 'src="https://res.cloudinary.com/pollcart/image/fetch/q_auto,f_auto/https://pollcart.github.io/images/hero-three.jpg';
        document.getElementById('ecard').style.backgroundImage = 'url(' + url + ')';
        document.getElementById('slide-3').style.display = 'block';
        document.getElementById('slide-intro').style.display = 'none';
        document.getElementById('slide-4').style.display = 'none';
        document.getElementById('slide-2').style.display = 'none';
    } else if (bg == 'yourvalue4') {
        url = 'src="https://res.cloudinary.com/pollcart/image/fetch/q_auto,f_auto/https://pollcart.github.io/images/hero-four.jpg';
        document.getElementById('ecard').style.backgroundImage = 'url(' + url + ')';
        document.getElementById('slide-4').style.display = 'block';
        document.getElementById('slide-intro').style.display = 'none';
        document.getElementById('slide-2').style.display = 'none';
        document.getElementById('slide-3').style.display = 'none';
    }
}