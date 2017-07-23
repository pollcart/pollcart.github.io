/**
 * Created by richwilliams on 7/23/17.
 */
window.onload = function() {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.type = 'text/css';
    link.href = 'css/pc.css';
    document.head.appendChild(link);
    setTimeout(function() {
        var divx = document.createElement("div"); // Create a <button> element
     //   divx.location.href='http://google.com'; // Add link to form
        var t = document.createTextNode(""); // Option add text to div / Create a text node
        divx.appendChild(t); // Append the text to <button>
        divx.className += " contact-bank-8675309";
        document.body.appendChild(divx); // Append <button> to <body>

        var btn = document.createElement("button"); // Create a <button> element
        var v = document.createTextNode(""); // Option to add text to button / Create a text node
        btn.appendChild(v); // Append the text to <button>
        btn.className += " contact-bank-8675309-button";
        divx.appendChild(btn); // Append <button> to <body>

        var aclose = document.createElement("a"); // Create a <button> element
        // var w = document.createTextNode("Contact the bank"); // Create a text node
        // btn.appendChild(w); // Append the text to <button>
        aclose.className += " leadinModal-close";
        divx.appendChild(aclose); // Append <button> to <body>

        setTimeout(function() {
            divx.className += " contact-bank-8675309-visible";
        }, 2000);
    }, 2000);

};
