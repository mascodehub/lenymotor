let CAROUSEL_IMAGES, PRODUCT_IMAGES, PRODUCT_FILTER, CAR_PRODUCT_IMAGES, BRAND_FILTER, PRODUCT_CATEGORY;

function initData() {
  const urlParams = new URLSearchParams(window.location.search);

  PRODUCT_CATEGORY = urlParams.get("category");

  return $.getJSON("../data/product.json", function (data) {
    CAROUSEL_IMAGES = data.carousel_images;
    PRODUCT_IMAGES = PRODUCT_CATEGORY == 'motor' ? data.product_images : data.car_product_images;
    PRODUCT_FILTER = data.product_filter;
    BRAND_FILTER = PRODUCT_CATEGORY == 'motor' ? data.motor_brand_filter : data.car_brand_filter;
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
      indicators.append(
        i == index
          ? `<i class="fa fa-circle text-white banner-indicator" data-index="${i}"></i>`
          : `<i class="far fa-circle text-white banner-indicator" data-index="${i}"></i>`
      );
    });
  }

  // Fungsi update slide
  function updateCarousel(index) {
    carouselTrack.css("transform", `translateX(-${index * (100 / total)}%)`);

    renderIndicators(index);
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

  $('#form-filter-merk').html('');
  let content = '';
  $.each(BRAND_FILTER, function (idx, val) {

    content += `
      <div class="row">
        <div class="col">
          <ul style="list-style-type: none">
            <li class="mb-1" style="margin-left: -32px">
              <input
                type="checkbox"
                name="txtCheckbox"
                id="txtCheckbox"
              />
                ${val.brand_name}
              <i class="fa fa-angle-up text-dark"></i>
            </li>
            <li>
    `;

    $.each(val.brand_sub, function (idx_sub, val_sub) {
      content += `
              <ul style="list-style-type: none">
                <li class="mb-1" style="margin-left: -45px">
                  <input
                    type="checkbox"
                    name="txtCheckbox"
                    id="txtCheckbox"
                  />
                  ${val_sub.sub_name}
                </li>
              </ul>
      `;
    })

    content += `
            </li>
          </ul>
        </div>
      </div>
    `;

  })

  $('#form-filter-merk, #form-filter-merk-mob').append(content);
  $('#form-filter-merk, #form-filter-merk-mob').append('<span style="color: red">Lihat Semua</span>');

  $("#filter-location").click(function () {
    $("#form-filter-location").toggle();
    $("#icon-filter-location").toggleClass("fa-angle-up fa-angle-down");
  });

  $("#filter-merk").click(function () {
    $("#form-filter-merk").toggle();
    $("#icon-filter-merk").toggleClass("fa-angle-up fa-angle-down");
  });

  $("#filter-price").click(function () {
    $("#form-filter-price").toggle();
    $("#icon-filter-price").toggleClass("fa-angle-up fa-angle-down");
  });

  $("#filter-transmission").click(function () {
    $("#form-filter-transmission").toggle();
    $("#icon-filter-transmission").toggleClass("fa-angle-up fa-angle-down");
  });

  $("#filter-fuel").click(function () {
    $("#form-filter-fuel").toggle();
    $("#icon-filter-fuel").toggleClass("fa-angle-up fa-angle-down");
  });

  $("#filter-year").click(function () {
    $("#form-filter-year").toggle();
    $("#icon-filter-year").toggleClass("fa-angle-up fa-angle-down");
  });

  function renderFilter() {
    $("#product-filter").html("");
    $.each(PRODUCT_FILTER, function (idx, val) {
      $("#product-filter").append(`
                <span style="border: 1px solid black;padding: 5px 20px;margin:0 10px;border-radius: 20px;">
                    ${val} <i class="fa fa-times ms-2"></i>
                </span>    
            `);
    });
  }

  renderFilter();

  function formatRupiah(num) {
    return "Rp " + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function renderSliderPrice(form_id) {
    const sliderPriceMin = $(`${form_id} #slider-price-min`);
    const sliderPriceMax = $(`${form_id} #slider-price-max`);
    const rangePriceMin = $(`${form_id} #range-price-min`);
    const rangePriceMax = $(`${form_id} #range-price-max`);
    const trackPrice = $(`${form_id} #slider-price-track`);
    const minPriceGap = parseInt(sliderPriceMin.attr("step"));

    function fillTrackPrice() {
      const minVal = parseInt(sliderPriceMin.val(), 10);
      const maxVal = parseInt(sliderPriceMax.val(), 10);
      const minAllowed = parseInt(sliderPriceMin.attr("min"), 10);
      const maxAllowed = parseInt(sliderPriceMin.attr("max"), 10);
      const range = maxAllowed - minAllowed || 1;

      let percent1 = ((minVal - minAllowed) / range) * 100;
      let percent2 = ((maxVal - minAllowed) / range) * 100;

      percent1 = Math.max(0, Math.min(100, percent1));
      percent2 = Math.max(0, Math.min(100, percent2));

      trackPrice.css(
        "background",
        `linear-gradient(to right, #ccc ${percent1}%, #d40000 ${percent1}%, #d40000 ${percent2}%, #ccc ${percent2}%)`
      );
    }

    function updatePriceValues() {
      let minVal = parseInt(sliderPriceMin.val());
      let maxVal = parseInt(sliderPriceMax.val());

      if (maxVal - minVal <= minPriceGap) {
        if (this.id === "slider-price-min") {
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

    sliderPriceMin.on("input", updatePriceValues);
    sliderPriceMax.on("input", updatePriceValues);
  }

  renderSliderPrice("#form-filter-price");
  renderSliderPrice("#form-filter-price-mob");

  function renderSliderYear(form_id) {
    const sliderYearMin = $(`${form_id} #slider-year-min`);
    const sliderYearMax = $(`${form_id} #slider-year-max`);
    const rangeYearMin = $(`${form_id} #range-year-min`);
    const rangeYearMax = $(`${form_id} #range-year-max`);
    const trackYear = $(`${form_id} #slider-year-track`);
    const minYearGap = parseInt(sliderYearMin.attr("step"));

    function fillTrackYear() {
      const minVal = parseInt(sliderYearMin.val(), 10);
      const maxVal = parseInt(sliderYearMax.val(), 10);
      const minAllowed = parseInt(sliderYearMin.attr("min"), 10);
      const maxAllowed = parseInt(sliderYearMin.attr("max"), 10);
      const range = maxAllowed - minAllowed || 1;

      let percent1 = ((minVal - minAllowed) / range) * 100;
      let percent2 = ((maxVal - minAllowed) / range) * 100;

      percent1 = Math.max(0, Math.min(100, percent1));
      percent2 = Math.max(0, Math.min(100, percent2));

      trackYear.css(
        "background",
        `linear-gradient(to right, #ccc ${percent1}%, #d40000 ${percent1}%, #d40000 ${percent2}%, #ccc ${percent2}%)`
      );
    }

    function updateYearValues() {
      let minVal = parseInt(sliderYearMin.val());
      let maxVal = parseInt(sliderYearMax.val());

      if (maxVal - minVal <= minYearGap) {
        if (this.id === "slider-year-min") {
          sliderYearMin.val(maxVal - minYearGap);
          minVal = maxVal - minYearGap;
        } else {
          sliderYearMax.val(minVal + minYearGap);
          maxVal = minVal + minYearGap;
        }
      }

      rangeYearMin.text(minVal);
      rangeYearMax.text(maxVal);
      fillTrackYear();
    }

    updateYearValues.call(sliderYearMin[0]);
    updateYearValues.call(sliderYearMax[0]);

    sliderYearMin.on("input", updateYearValues);
    sliderYearMax.on("input", updateYearValues);
  }

  renderSliderYear("#form-filter-year");
  renderSliderYear("#form-filter-year-mob");

  $("#spanFilterProduct").text(`Menampilkan ${PRODUCT_IMAGES.length} Motor`);

  let totalPages = PRODUCT_IMAGES.length / 12;
  let currentPage = 1;

  function renderData() {
    const startIndex = (currentPage - 1) * 12;
    const endIndex = startIndex + 12;
    const currentData = PRODUCT_IMAGES.slice(startIndex, endIndex);

    $("#cardProduct").html("");
    currentData.forEach((p) => {
      const card = `
                <div class="col-6 col-md-4 product-card">
                    <a href="product-detail.html?category=${PRODUCT_CATEGORY}&product=${p.id}" style="text-decoration: none;color: black;cursor:default">
                        <div class="card position-relative" style="border-radius: 20px;margin:0 0 30px 0">
                            <img src="${p.img}" class="card-img-top" alt="..." style="border-top-left-radius: 5.5%;border-top-right-radius: 5.5%; object-fit: cover;">
                            <div class="card-body">
                                <h5 class="card-title section-price d-none d-md-block" style="color: #D40000;">
                                    ${p.price}
                                </h5>
                                <h5 class="card-title section-price d-block d-md-none" style="color: #D40000;font-size:16px">
                                    ${p.price}
                                </h5>
                                <div class="card-text">
                                    <span class="d-block fw-bold" style="margin: 5px 0px;font-size:small;">${p.name} ${p.year}</span>
                                    <span class="d-block" style="margin: 5px 0px;">${p.location}</span>
                                    <div class="card-detail mb-1" style="border: 2px solid #EFEFEF;border-radius: 10px;padding: 20px 0px;">
                                            <div class="row g-2 w-100 d-flex justify-content-center">
                                                <div class="col-6 col-md-auto">
                                                    <span
                                                        class="d-flex align-items-center ms-1 ">
                                                        <img src="../assets/icon/date.png" style="width: 20px;height: 20px;">&nbsp;${p.year}
                                                    </span>
                                                </div>
                                                <div class="col-6 col-md-auto">
                                                    <span
                                                        class="d-flex align-items-center ms-1 ">
                                                        <img src="../assets/icon/road.png" style="width: 20px;height: 20px;">&nbsp;${p.km}
                                                    </span>
                                                </div>
                                                <div class="col-6 col-md-auto">
                                                    <span
                                                        class="d-flex align-items-center ms-1 ">
                                                        <img src="../assets/icon/transmission.png" style="width: 20px;height: 20px;">&nbsp;${p.transmission}
                                                    </span>
                                                </div>
                                                <div class="col-6 col-md-auto">
                                                    <span
                                                        class="d-flex align-items-center ms-1 ">
                                                        <i class="fa fa-circle" style="color: #D40000;"></i>&nbsp;${p.color}
                                                    </span>
                                                </div>
                                            </div>
                                    </div>
                                    <span class="d-block foot-card" style="border: 2px solid #EFEFEF;border-radius: 30px;padding: 5px 20px;background-color: #EFEFEF;">
                                        <div class="row g-0">
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
                            <div class="position-absolute top-0 start-100 translate-middle shadow btnFavorite" data-toggle=0 style="background-color: white;border-radius: 100%; padding: 5px 8px;margin-left: -20px;margin-top: 20px;cursor: pointer;z-index:2">
                                <i class="far fa-star text-dark"></i>
                            </div>
                        </div>
                    </a>
                </div>
            `;

      $("#cardProduct").append(card);
    });
  }

  $('.slug-product-type').html(PRODUCT_CATEGORY[0].toUpperCase() + PRODUCT_CATEGORY.slice(1) )

  $(document).on("click", ".btnFavorite", function (e) {
    e.preventDefault();
    e.stopPropagation();

    let toggle = parseInt($(this).attr("data-toggle")) || 0;
    toggle = toggle == 0 ? 1 : 0;

    $(this).attr("data-toggle", toggle);
    console.log("attr data-toggle:", toggle);

    if (toggle == 0) {
      $(this).html('<i class="far fa-star text-dark"></i>');
    } else {
      $(this).html('<i class="fas fa-star text-danger"></i>');
    }
  });

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
        pages = [
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }

    pages.forEach((p) => {
      if (p === "...") {
        pagination.append(`<li class="dots">...</li>`);
      } else {
        pagination.append(
          `<li class="${p === currentPage ? "active" : ""}">${p}</li>`
        );
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

  $("#btn-filter-mob").click(function (e) {
    e.stopPropagation();
    $("body").toggleClass("no-scroll"); // ketika form muncul
    $("#form-filter-mob, #overlay-product").toggleClass("show");
  });

  // $("#btn-filter-mob").click()

  $("#btn-sort-mob").click(function (e) {
    e.stopPropagation();
    $("body").toggleClass("no-scroll"); // ketika form muncul
    $("#form-sort-mob, #overlay-product").toggleClass("show");
  });

  $(document).on("click", function (e) {
    if ($(e.target).is('input[type="checkbox"], label')) return;
    const nav = $("#form-filter-mob, #form-sort-mob");
    const overlay = $("#overlay-product");
    if (
      nav.hasClass("show") &&
      !nav.is(e.target) &&
      nav.has(e.target).length === 0
    ) {
      nav.removeClass("show");
      overlay.removeClass("show");
      $("body").removeClass("no-scroll"); // ketika form ditutup
    }
  });
});
