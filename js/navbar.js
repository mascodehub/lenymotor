$(document).on('click', '#btnNavbar', function (e) {
    e.stopPropagation();
    $('#navbarmob, #overlay').toggleClass('show');
});

// Klik tombol "Tutup"
$(document).on('click', '#btnCloseMenubar', function (e) {
    e.stopPropagation();
    $('#navbarmob, #overlay').removeClass('show');
});

// Klik di luar area navbar = tutup
$(document).on('click', function (e) {
    const nav = $('#navbarmob');
    const overlay = $('#overlay');
    if (nav.hasClass('show') && !nav.is(e.target) && nav.has(e.target).length === 0) {
        nav.removeClass('show');
        overlay.removeClass('show');
    }
});