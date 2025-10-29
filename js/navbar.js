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

const path = window.location.pathname;
const filename = path.substring(path.lastIndexOf('/') + 1);
const page = filename.split('.')[0];

const urlParams = new URLSearchParams(window.location.search);
let category = urlParams.get('category');

category = category != null ? category : '';

$(`.${page}${category}Page`).css('border-top', '2px solid red');
$(`.${page}${category}Page`).css('padding-top', '28px');

$('.dropdown > a').on('click', function (e) {
    e.preventDefault();
    const $menu = $(this).next('.dropdown-content');
    // tutup dropdown lain jika ada
    $('.dropdown-content').not($menu).removeClass('show');
    // toggle dropdown yang diklik
    $menu.toggleClass('show');
});

// klik di luar dropdown → tutup semua
$(document).on('click', function (e) {
    if (!$(e.target).closest('.dropdown').length) {
        $('.dropdown-content').removeClass('show');
    }
});
