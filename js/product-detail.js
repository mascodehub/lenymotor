$(document).ready(async function () {
    $("#navbar").load("../components/navbar.html");
    $("#footbar").load("../components/footbar.html");

    const images = [
        "../assets/carousel-1.png",
        "../assets/carousel-1.png",
        "../assets/carousel-1.png",
        "../assets/carousel-1.png",
        "../assets/carousel-1.png"
    ];

    let card_scroll = $('.card-scroll');
    let isDown = false;
    let startX, scrollLeft;

    card_scroll.on("mousedown", function (e) {
        isDown = true;
        startX = e.pageX;
        scrollLeft = card_scroll.scrollLeft();
        e.preventDefault(); // cegah block teks
    });

    $(window).on("mouseup", function () {
        isDown = false;
    });

    card_scroll.on("mousemove", function (e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX); // seberapa jauh mouse digeser
        card_scroll.scrollLeft(scrollLeft - walk);
    });

    let text = `
        ** Harap dibaca sampai selesai ** 

        PUSAT MOTOR SEKEN BERKUALITAS
        Cash credit Honda Stylo Cbs 2024 
        Motor sangat bagus gress banget 
        Mesin garansi ori 100%. 
        Uang kembali klu tdk ori.

        Body mulus dijamin tdk bekas crash. Surat2 lengkap (BPKB FAKTUR STNK) 

        dp mulai rp 2jt 

        Otr kredit 24.5jt hrg
        cash 26.5jt 
        Info jelas silahkan WA 

        KTP daerah & rmh ngontrak, BI Cheking jelek bisa dibantu kredit ( dp menyesuaikan) 
        Persyaratan mudah tdk ribet. 
        Menerima tukar tambah dgn semua merk dan kondisi motor 

        Silahkan klik foto profile kami utk cek stok mtr lain 
        Kunjungi showroom kami 
        LENY MOTOR
    `;

    $('#product-description pre').append(text)
})