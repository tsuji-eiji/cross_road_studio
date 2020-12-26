'use strict';

function goToContact(id) {
    const room = document.getElementById(id).value;
    location.href = 'contact.html' + '?id=' + room;
}

