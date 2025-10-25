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
})