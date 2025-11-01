let CAROUSEL_IMAGES, PRODUCT_IMAGES, PRODUCT_FILTER;

function initData() {
    return $.getJSON('../data/product.json', function (data) {
        CAROUSEL_IMAGES = data.carousel_images;
        PRODUCT_IMAGES = data.product_images;
        PRODUCT_FILTER = data.product_filter;
    });
}

$(document).ready(async function () {
    await initData();

    $("#navbar").load("../components/navbar.html");
    $("#footbar").load("../components/footbar.html");

    const carouselTrack = $("#carousel-banner .carousel-track");
    const indicators = $("#carousel-page");

    let currentIndex = 0;
    const total = CAROUSEL_IMAGES.length;

    function renderIndicators(index) {
        indicators.empty();
        $.each(CAROUSEL_IMAGES, function (i, src) {
            indicators.append(i == index ? `<i class="fa fa-circle text-white banner-indicator" data-index="${i}"></i>` : `<i class="far fa-circle text-white banner-indicator" data-index="${i}"></i>`);
        });
    }

    // Fungsi update slide
    function updateCarousel(index) {
        carouselTrack.css("transform", `translateX(-${index * (100 / total)}%)`);

        renderIndicators(index)
    }

    // Tambahkan semua gambar
    $.each(CAROUSEL_IMAGES, function (i, src) {
        carouselTrack.append(`
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
    carouselTrack.css("width", `${total * 100}%`);

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
        currentIndex = (currentIndex + 1) % CAROUSEL_IMAGES.length;
        updateCarousel(currentIndex);
    }, 3000);

    let totalPages = PRODUCT_IMAGES.length / 12;
    let currentPage = 1;

    function renderData() {
        const startIndex = (currentPage - 1) * 12;
        const endIndex = startIndex + 12;
        const currentData = PRODUCT_IMAGES.slice(startIndex, endIndex);

        $("#card-promo").html("");
        currentData.forEach((p) => {
            let card = `
                <div class="col-6 col-md-4">
                    <a href="#" style="text-decoration: none;color: black;cursor:default">
                        <div class="card position-relative"
                            style="border-radius: 25px;margin:0 0 30px 0">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-center visual-promo"
                                    style="border-radius: 10px;min-height: 13vh;background-color: #d40000;color: white;">
                                    Visual Promo
                                </div>
                                <span class="d-block mb-3 mt-3" style="font-size: 12pt;font-weight: bold;">
                                    Promo Jumat Berkah, Transaksi dengan pembelian tertentu Diskon
                                    hingga 20%
                                </span>
                                <span class="d-block mb-3" style="font-size: 10pt;">
                                    Klik untuk melihat produk dengan promo ini
                                </span>
                                <span class="d-block" style="font-size: 10pt;color: #c5c5c5;">
                                    Berlaku Hingga 25 Oktober 2025
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            `;
            $('#card-promo').append(card);
        });
    }

    function renderPagination() {
        const pagination = $(".pagination");
        pagination.empty();

        let pages = [];

        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 4) {
                pages = [1, 2, 3, 4, 5, "...", totalPages];
            } else if (currentPage >= totalPages - 3) {
                pages = [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
            }
        }

        pages.forEach(p => {
            if (p === "...") {
                pagination.append(`<li class="dots">...</li>`);
            } else {
                pagination.append(`<li class="${p === currentPage ? 'active' : ''}">${p}</li>`);
            }
        });

        $(".prev").prop("disabled", currentPage === 1);
        $(".next").prop("disabled", currentPage === totalPages);

        renderData();
    }

    renderPagination();

    $(document).on("click", ".pagination li", function () {
        const text = $(this).text();
        if (text === "..." || parseInt(text) === currentPage) return;
        currentPage = parseInt(text);
        renderPagination();

    });

    $(".prev").click(function () {
        if (currentPage > 1) {
            currentPage--;
            renderPagination();
        }
    });

    $(".next").click(function () {
        if (currentPage < totalPages) {
            currentPage++;
            renderPagination();
        }
    });

    $('#mobile-reset-sort').click(function () {
        $('#mobile-list-sort input[type="checkbox"]').prop('checked', false);
    })

    $("#btn-sort-mob").click(function (e) {
        e.stopPropagation();
        $('body').toggleClass('no-scroll'); // ketika form muncul
        $('#btn-sort-promo, #overlay-promo').toggleClass('show');
    })

    $(document).on('click', function (e) {
        if ($(e.target).is('input[type="checkbox"], label')) return;
        const nav = $('#btn-sort-promo');
        const overlay = $('#overlay-promo');
        if (nav.hasClass('show') && !nav.is(e.target) && nav.has(e.target).length === 0) {
            nav.removeClass('show');
            overlay.removeClass('show');
            $('body').removeClass('no-scroll'); // ketika form ditutup
        }
    });
})