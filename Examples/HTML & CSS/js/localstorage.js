function set_by_key(key) {
    var value = document.getElementById(key).value;
    if (value !== '') {
        localStorage.setItem(key, value);
    } else {
        alert(key + ' heeft geen waarde');
    }
}

function get_by_key(key) {
    var value = localStorage.getItem(key);
    if (value !== null) {
        alert(key + ': ' + value);
    } else {
        alert(key + ' niet gevonden');
    }
}

function render_localstorage_content() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        document.getElementById(key).value = localStorage.getItem(key);
    }
}
render_localstorage_content();