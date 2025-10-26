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

    const carouselTrack = $("#carousel-banner .carousel-track");
    const indicators = $("#carousel-page");

    let currentIndex = 0;
    const total = images.length;

    function renderIndicators(index) {
        indicators.empty();
        $.each(images, function (i, src) {
            indicators.append(i == index ? `<i class="fa fa-circle text-white banner-indicator" data-index="${i}"></i>` : `<i class="far fa-circle text-white banner-indicator" data-index="${i}"></i>`);
        });
    }

    // Fungsi update slide
    function updateCarousel(index) {
        carouselTrack.css("transform", `translateX(-${index * (100 / total)}%)`);

        renderIndicators(index)
    }

    // Tambahkan semua gambar
    $.each(images, function (i, src) {
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
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel(currentIndex);
    }, 3000);

    const sliderPriceMin = $('#slider-price-min');
    const sliderPriceMax = $('#slider-price-max');
    const rangePriceMin = $('#range-price-min');
    const rangePriceMax = $('#range-price-max');
    const trackPrice = $('#slider-price-track');
    const minPriceGap = parseInt(sliderPriceMin.attr('step'));

    function formatRupiah(num) {
        return 'Rp ' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function fillTrackPrice() {
        const minVal = parseInt(sliderPriceMin.val(), 10);
        const maxVal = parseInt(sliderPriceMax.val(), 10);
        const minAllowed = parseInt(sliderPriceMin.attr('min'), 10);
        const maxAllowed = parseInt(sliderPriceMin.attr('max'), 10);
        const range = maxAllowed - minAllowed || 1;

        let percent1 = ((minVal - minAllowed) / range) * 100;
        let percent2 = ((maxVal - minAllowed) / range) * 100;

        percent1 = Math.max(0, Math.min(100, percent1));
        percent2 = Math.max(0, Math.min(100, percent2));

        trackPrice.css('background',
            `linear-gradient(to right, #ccc ${percent1}%, #d40000 ${percent1}%, #d40000 ${percent2}%, #ccc ${percent2}%)`
        );
    }

    function updatePriceValues() {
        let minVal = parseInt(sliderPriceMin.val());
        let maxVal = parseInt(sliderPriceMax.val());

        if (maxVal - minVal <= minPriceGap) {
            if (this.id === 'slider-price-min') {
                sliderPriceMin.val(maxVal - minPriceGap);
                minVal = maxVal - minPriceGap;
            } else {
                sliderPriceMax.val(minVal + minPriceGap);
                maxVal = minVal + minPriceGap;
            }
        }

        rangePriceMin.text(formatRupiah(minVal));
        rangePriceMax.text(formatRupiah(maxVal));
        fillTrackPrice();
    }

    updatePriceValues.call(sliderPriceMin[0]);
    updatePriceValues.call(sliderPriceMax[0]);

    sliderPriceMin.on('input', updatePriceValues);
    sliderPriceMax.on('input', updatePriceValues);

    const sliderYearMin = $('#slider-year-min');
    const sliderYearMax = $('#slider-year-max');
    const rangeYearMin = $('#range-year-min');
    const rangeYearMax = $('#range-year-max');
    const trackYear = $('#slider-year-track');
    const minYearGap = parseInt(sliderYearMin.attr('step'));

    function fillTrackYear() {
        const minVal = parseInt(sliderYearMin.val(), 10);
        const maxVal = parseInt(sliderYearMax.val(), 10);
        const minAllowed = parseInt(sliderYearMin.attr('min'), 10);
        const maxAllowed = parseInt(sliderYearMin.attr('max'), 10);
        const range = maxAllowed - minAllowed || 1;

        let percent1 = ((minVal - minAllowed) / range) * 100;
        let percent2 = ((maxVal - minAllowed) / range) * 100;

        percent1 = Math.max(0, Math.min(100, percent1));
        percent2 = Math.max(0, Math.min(100, percent2));

        console.log(trackYear);


        trackYear.css('background',
            `linear-gradient(to right, #ccc ${percent1}%, #d40000 ${percent1}%, #d40000 ${percent2}%, #ccc ${percent2}%)`
        );
    }

    function updateYearValues() {
        let minVal = parseInt(sliderYearMin.val());
        let maxVal = parseInt(sliderYearMax.val());

        if (maxVal - minVal <= minYearGap) {
            if (this.id === 'slider-year-min') {
                sliderYearMin.val(maxVal - minYearGap);
                minVal = maxVal - minYearGap;
            } else {
                sliderYearMax.val(minVal + minYearGap);
                maxVal = minVal + minYearGap;
            }
        }

        rangeYearMin.text((minVal));
        rangeYearMax.text((maxVal));
        fillTrackYear();
    }

    updateYearValues.call(sliderYearMin[0]);
    updateYearValues.call(sliderYearMax[0]);

    sliderYearMin.on('input', updateYearValues);
    sliderYearMax.on('input', updateYearValues);

    const motor_products = [
        {
            id: "1dce60c2-0191-4f2e-b5b0-b8d8b7d6d3a1",
            img: "../assets/Product-1.png",
            price: "Rp. 18,000,000",
            name: "Honda PCX 150",
            location: "LENY NGASEM",
            year: "2020",
            km: "12.500 KM",
            transmission: "Matic",
            color: "Hitam",
            cicilan: "Rp 700rb / Bulan"
        },
        {
            id: "b2f642a3-1b57-44e5-9cb8-bb4f3db46e0c",
            img: "../assets/Product-1.png",
            price: "Rp. 15,500,000",
            name: "Yamaha NMAX 155",
            location: "LENY NGASEM",
            year: "2019",
            km: "10.000 KM",
            transmission: "Matic",
            color: "Putih",
            cicilan: "Rp 650rb / Bulan"
        },
        {
            id: "f5ae7a0f-91d1-4d63-93dc-50ce02b07d1e",
            img: "../assets/Product-1.png",
            price: "Rp. 13,000,000",
            name: "Honda Vario 150",
            location: "LENY NGASEM",
            year: "2018",
            km: "15.000 KM",
            transmission: "Matic",
            color: "Merah",
            cicilan: "Rp 550rb / Bulan"
        },
        {
            id: "c2d8a15a-14b3-4d05-bd25-ecf5d8a1d38b",
            img: "../assets/Product-1.png",
            price: "Rp. 9,800,000",
            name: "Yamaha Mio M3",
            location: "LENY NGASEM",
            year: "2017",
            km: "20.000 KM",
            transmission: "Matic",
            color: "Biru",
            cicilan: "Rp 400rb / Bulan"
        },
        {
            id: "2aaf9439-2c36-48d7-b84a-8ccfd29e4f4b",
            img: "../assets/Product-1.png",
            price: "Rp. 18,000,000",
            name: "Honda PCX 150",
            location: "LENY NGASEM",
            year: "2020",
            km: "12.500 KM",
            transmission: "Matic",
            color: "Hitam",
            cicilan: "Rp 700rb / Bulan"
        },
        {
            id: "c6c1ff4f-8498-4f5f-95cc-0999e6af0cb3",
            img: "../assets/Product-1.png",
            price: "Rp. 15,500,000",
            name: "Yamaha NMAX 155",
            location: "LENY NGASEM",
            year: "2019",
            km: "10.000 KM",
            transmission: "Matic",
            color: "Putih",
            cicilan: "Rp 650rb / Bulan"
        },
        {
            id: "fcb2b2cb-3b3b-4b89-b853-37db5c89b35d",
            img: "../assets/Product-1.png",
            price: "Rp. 13,000,000",
            name: "Honda Vario 150",
            location: "LENY NGASEM",
            year: "2018",
            km: "15.000 KM",
            transmission: "Matic",
            color: "Merah",
            cicilan: "Rp 550rb / Bulan"
        },
        {
            id: "0dd08aef-1a5a-4a6f-bd7f-bf38a74d3ef6",
            img: "../assets/Product-1.png",
            price: "Rp. 9,800,000",
            name: "Yamaha Mio M3",
            location: "LENY NGASEM",
            year: "2017",
            km: "20.000 KM",
            transmission: "Matic",
            color: "Biru",
            cicilan: "Rp 400rb / Bulan"
        },
        {
            id: "40e1db12-83cb-4a7f-b7f8-26c2e65a4b42",
            img: "../assets/Product-1.png",
            price: "Rp. 9,800,000",
            name: "Yamaha Mio M3",
            location: "LENY NGASEM",
            year: "2017",
            km: "20.000 KM",
            transmission: "Matic",
            color: "Biru",
            cicilan: "Rp 400rb / Bulan"
        },
        {
            id: "6c1d7a2c-0c13-4e55-94d3-318f94f799e2",
            img: "../assets/Product-1.png",
            price: "Rp. 18,000,000",
            name: "Honda PCX 150",
            location: "LENY NGASEM",
            year: "2020",
            km: "12.500 KM",
            transmission: "Matic",
            color: "Hitam",
            cicilan: "Rp 700rb / Bulan"
        },
        {
            id: "bba6b9f8-063a-44d7-8b10-70b6b79b9c4f",
            img: "../assets/Product-1.png",
            price: "Rp. 15,500,000",
            name: "Yamaha NMAX 155",
            location: "LENY NGASEM",
            year: "2019",
            km: "10.000 KM",
            transmission: "Matic",
            color: "Putih",
            cicilan: "Rp 650rb / Bulan"
        },
        {
            id: "9d47e7a8-7ff3-47e9-b283-427fb23907ad",
            img: "../assets/Product-1.png",
            price: "Rp. 13,000,000",
            name: "Honda Vario 150",
            location: "LENY NGASEM",
            year: "2018",
            km: "15.000 KM",
            transmission: "Matic",
            color: "Merah",
            cicilan: "Rp 550rb / Bulan"
        },
        {
            id: "0b4d24f8-67cf-4c9f-96c0-219f58d6a4d0",
            img: "../assets/Product-1.png",
            price: "Rp. 9,800,000",
            name: "Yamaha Mio M3",
            location: "LENY NGASEM",
            year: "2017",
            km: "20.000 KM",
            transmission: "Matic",
            color: "Biru",
            cicilan: "Rp 400rb / Bulan"
        },
        {
            id: "f4a92c32-1691-4b5c-a18c-72ff7c230d6c",
            img: "../assets/Product-1.png",
            price: "Rp. 18,000,000",
            name: "Honda PCX 150",
            location: "LENY NGASEM",
            year: "2020",
            km: "12.500 KM",
            transmission: "Matic",
            color: "Hitam",
            cicilan: "Rp 700rb / Bulan"
        },
        {
            id: "3a174a04-fc3d-46da-b0e5-b9d7a08d4ed1",
            img: "../assets/Product-1.png",
            price: "Rp. 15,500,000",
            name: "Yamaha NMAX 155",
            location: "LENY NGASEM",
            year: "2019",
            km: "10.000 KM",
            transmission: "Matic",
            color: "Putih",
            cicilan: "Rp 650rb / Bulan"
        },
        {
            id: "df43df7e-bb5a-4031-a6b5-7c40a30c6ee8",
            img: "../assets/Product-1.png",
            price: "Rp. 13,000,000",
            name: "Honda Vario 150",
            location: "LENY NGASEM",
            year: "2018",
            km: "15.000 KM",
            transmission: "Matic",
            color: "Merah",
            cicilan: "Rp 550rb / Bulan"
        },
        {
            id: "1b9fd894-11b2-41db-8b77-9cb1d0d3ad73",
            img: "../assets/Product-1.png",
            price: "Rp. 9,800,000",
            name: "Yamaha Mio M3",
            location: "LENY NGASEM",
            year: "2017",
            km: "20.000 KM",
            transmission: "Matic",
            color: "Biru",
            cicilan: "Rp 400rb / Bulan"
        },
        {
            id: "4a6a37ff-18b7-4b7d-8610-27cc98ee825e",
            img: "../assets/Product-1.png",
            price: "Rp. 9,400,000",
            name: "Yamaha Mio M3",
            location: "LENY NGASEM",
            year: "2017",
            km: "20.000 KM",
            transmission: "Matic",
            color: "Biru",
            cicilan: "Rp 400rb / Bulan"
        }
    ];


    $('#spanFilterProduct').text(`Menampilkan ${motor_products.length} Motor`);

    let totalPages = motor_products.length / 9;
    let currentPage = 1;

    function renderData() {
        const startIndex = (currentPage - 1) * 9;
        const endIndex = startIndex + 9;
        const currentData = motor_products.slice(startIndex, endIndex);

        $("#cardProduct").html("");
        currentData.forEach((p) => {
            const card = `
                <div class="col-4">
                    <a href="product-detail.html?category=motor&product=${p.id}" style="text-decoration: none;color: black;cursor:default">
                        <div class="card position-relative" style="border-radius: 25px;margin:0 0 30px 0">
                            <img src="${p.img}" class="card-img-top" alt="..." style="border-top-left-radius: 5.5%;border-top-right-radius: 5.5%; object-fit: cover;">
                            <div class="card-body">
                                <h5 class="card-title section-price" style="font-size: 24px;color: #D40000;">
                                    Rp. ${p.price}</h5>
                                <div class="card-text">
                                    <span class="d-block" style="margin: 5px 0px;">${p.name}</span>
                                    <span class="d-block" style="margin: 5px 0px;">${p.location}</span>
                                    <div class="card-detail mb-3" style="border: 2px solid #EFEFEF;border-radius: 10px;padding: 20px 0px;">
                                        <table style="width: 100%;font-size: 10pt;">
                                            <tr class="text-center">
                                                <td>
                                                    <span
                                                        class="d-flex align-items-center justify-content-center text-center">
                                                        <img src="../assets/icon/date.png" style="width: 20px;height: 20px;">&nbsp;${p.year}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span
                                                        class="d-flex align-items-center justify-content-center text-center">
                                                        <img src="../assets/icon/road.png" style="width: 20px;height: 20px;">&nbsp;${p.km}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span
                                                        class="d-flex align-items-center justify-content-center text-center">
                                                        <img src="../assets/icon/transmission.png" style="width: 20px;height: 20px;">&nbsp;${p.transmission}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span
                                                        class="d-flex align-items-center justify-content-center text-center">
                                                        <i class="fa fa-circle" style="color: #D40000;"></i>&nbsp;${p.color}
                                                    </span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <span class="d-block foot-card" style="border: 2px solid #EFEFEF;border-radius: 30px;padding: 5px 20px;background-color: #EFEFEF;">
                                        <div class="row">
                                            <div class="col">
                                                <i class="fa fa-info-circle"></i> Cicilan Mulai
                                            </div>
                                            <div class="col" style="text-align: right;">
                                                ${p.cicilan}
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div class="position-absolute top-0 start-100 translate-middle shadow" style="background-color: white;border-radius: 100%; padding: 5px 10px;font-size: 18pt;margin-left: -40px;margin-top: 40px;cursor: pointer;z-index:2">
                                <i class="far fa-star text-dark"></i>
                            </div>
                        </div>
                    </a>
                </div>
            `;

            $('#cardProduct').append(card);
        });

        $(document).on('click', '.fa-star', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const icon = $(this);

            if (icon.hasClass('far')) {
                icon.removeClass('far text-dark').addClass('fas text-danger');
            } else {
                icon.removeClass('fas text-danger').addClass('far text-dark');
            }
        });
    }

    function renderPagination() {
        const pagination = $(".pagination");
        pagination.empty();

        let pages = [];

        if (totalPages <= 9) {
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
})