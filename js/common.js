'use strict';

$(document).ready(function () {
    $('#menu').on('click', function () {
        $('nav').toggleClass('nav');
        const btn = document.getElementById('menu');
        const menu = btn.firstElementChild.textContent;
        if (menu === 'MENU') {
            //MENUをCLOSEに
            btn.innerHTML = '<h2>CLOSE</h2>';
        } else if (menu === 'CLOSE') {
            //CLOSEをMENUに
            btn.innerHTML = '<h2>MENU</h2>';
        }
    });
});
