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

    const $track = $("#carousel-banner .carousel-track");
    const $indicators = $("#carousel-page");

    let currentIndex = 0;
    const total = images.length;

    function renderIndicators(index){
        $indicators.empty();
        $.each(images, function (i, src) {
            $indicators.append(i == index ? `<i class="fa fa-circle text-white banner-indicator" data-index="${i}"></i>` : `<i class="far fa-circle text-white banner-indicator" data-index="${i}"></i>`);
        });
    }

    // Fungsi update slide
    function updateCarousel(index) {
        $track.css("transform", `translateX(-${index * (100 / total)}%)`);

        renderIndicators(index)
    }

    // Tambahkan semua gambar
    $.each(images, function (i, src) {
        $track.append(`
            <img src="${src}" alt="Carousel ${i + 1}"  style="border-radius: 30px" >
        `);
    });

    renderIndicators(0);

    $(document).on("click", ".banner-indicator", function () {
        const index = $(this).data("index");
        currentIndex = index;
        updateCarousel(index);
    });

    // Set lebar track total agar bisa digeser
    $track.css("width", `${total * 100}%`);

    // Next & Prev
    $(".carousel-next").on("click", function () {
        currentIndex = (currentIndex + 1) % total;
        updateCarousel(currentIndex);
    });

    $(".carousel-prev").on("click", function () {
        currentIndex = (currentIndex - 1 + total) % total;
        updateCarousel(currentIndex);
    });

    // Auto-slide setiap 4 detik
    setInterval(function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel(currentIndex);
    }, 3000);
})