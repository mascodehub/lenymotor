let PRODUCT_DETAIL, PRODUCT_IMAGES, PRODUCT_CATEGORY, PRODUCT_ID;

function initData() {
  const urlParams = new URLSearchParams(window.location.search);

  PRODUCT_CATEGORY = urlParams.get("category");
  PRODUCT_ID = urlParams.get("product");

  return $.getJSON("../data/product-detail.json", function (data) {
    PRODUCT_DETAIL =
      PRODUCT_CATEGORY == "motor" ? data.motor_products : data.car_products;
    PRODUCT_IMAGES =
      PRODUCT_CATEGORY == "motor"
        ? data.product_images
        : data.car_product_images;
  });
}

$(document).ready(async function () {
  await initData();

  $("#navbar").load("../components/navbar.html");
  $("#footbar").load("../components/footbar.html");

  $('.slug-product-type').html(`Beranda > ${PRODUCT_CATEGORY[0].toUpperCase() + PRODUCT_CATEGORY.slice(1)} Bekas > <b>${PRODUCT_DETAIL.find((u) => u.id === PRODUCT_ID).name} / ${PRODUCT_DETAIL.find((u) => u.id === PRODUCT_ID).location}</b>`)

  $('#btn-show-product').click(function(){
    window.location.href = `product.html?category=${PRODUCT_CATEGORY}`;
  })

  let card_scroll = $(".card-scroll");
  let isDown = false;
  let startX = 0;
  let startScrollLeft = 0;
  let currentScroll = 0;
  let targetScroll = 0;
  let isAnimating = false;
  const ease = 0.25;

  card_scroll.on("mousedown", function (e) {
    isDown = true;
    startX = e.pageX;
    startScrollLeft = $(this).scrollLeft();
    currentScroll = startScrollLeft;
    targetScroll = startScrollLeft;
    e.preventDefault();

    if (!isAnimating) {
      isAnimating = true;
    }
  });

  $(window).on("mouseup", function () {
    isDown = false;
  });

  card_scroll.on("mousemove", function (e) {
    if (!isDown) return;
    e.preventDefault();
    const dx = e.pageX - startX;
    targetScroll = startScrollLeft - dx * 1.5; // faktor kecepatan

    // batasi agar tidak keluar batas
    const maxScroll = $(this)[0].scrollWidth - $(this).outerWidth();
    if (targetScroll < 0) targetScroll = 0;
    if (targetScroll > maxScroll) targetScroll = maxScroll;

    // langsung update sedikit agar terasa responsif di awal
    currentScroll = currentScroll + (targetScroll - currentScroll) * 0.7;
    $(this).scrollLeft(currentScroll);

    if (!isAnimating) {
      isAnimating = true;
    }
  });

  function renderIndicators(index) {
    $(".carousel-indicator").empty();
    $.each(PRODUCT_IMAGES, function (i, src) {
      $(".carousel-indicator").append(
        i == index
          ? `<i class="fa fa-circle text-white banner-indicator" style="font-size: 8pt" data-index="${i}"></i>`
          : `<i class="far fa-circle text-white banner-indicator" style="font-size: 8pt" data-index="${i}"></i>`
      );
    });
  }

  renderIndicators(0);

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

  $("#product-description pre").append(text);

  let idxProduct = 0;

  function renderProductImg(mode = "main") {
    if (mode == "mobile") {
      $("#product-img-mob #show-product").html(`
                <img src="${PRODUCT_IMAGES[idxProduct]}" class="card-img-top" alt="..." style="object-fit: contain;">    
            `);

      $("#show-product").html(`
                <img src="${PRODUCT_IMAGES[idxProduct]}" class="card-img-top" alt="..." style="object-fit: contain;">    
            `);

      $("#product-img-mob #product-list-img").html("");
      $.each(PRODUCT_IMAGES, function (idx, val) {
        let active = idxProduct == idx ? "border: 3px solid red;" : "";
        $("#product-img-mob #product-list-img").append(`
                    <div class="product-img" data-id="${idx}">
                        <img src="${val}" class="card-img-top" alt="..."
                            style="width: 100%; height: 100%;${active}">
                    </div>            
                `);
      });
    } else {
      $("#show-product").html(`
                <img src="${PRODUCT_IMAGES[idxProduct]}" class="card-img-top" alt="..." style="object-fit: contain;">    
            `);

      $("#product-list-img").html("");
      $.each(PRODUCT_IMAGES, function (idx, val) {
        let active = idxProduct == idx ? "border: 3px solid red;" : "";
        $("#product-list-img").append(`
                    <div class="product-img" data-id="${idx}" style="cursor: pointer">
                        <img src="${val}" class="card-img-top" alt="..."
                            style="width: 100%; height: 100%;${active}">
                    </div>            
                `);
      });
    }
  }

  renderProductImg();
  renderProductImg("mobile");

  $("#product_name").html(PRODUCT_DETAIL.find((u) => u.id === PRODUCT_ID).name);
  $("#product_price").html(
    PRODUCT_DETAIL.find((u) => u.id === PRODUCT_ID).price
  );
  $("#product_branch").html(
    PRODUCT_DETAIL.find((u) => u.id === PRODUCT_ID).location
  );
  $("#product_year").html(PRODUCT_DETAIL.find((u) => u.id === PRODUCT_ID).year);
  $("#product_km").html(PRODUCT_DETAIL.find((u) => u.id === PRODUCT_ID).km);
  $("#product_transmission").html(
    PRODUCT_DETAIL.find((u) => u.id === PRODUCT_ID).transmission
  );
  $("#product_color").html(
    PRODUCT_DETAIL.find((u) => u.id === PRODUCT_ID).color
  );

  $(document).on(
    "click",
    "#product-img-mob #product-list-img .product-img",
    function (e) {
      e.stopPropagation();
      $("body").addClass("no-scroll");
      idxProduct = $(this).data("id");
      renderIndicators(idxProduct);
      renderProductImg("mobile");
    }
  );

  $(document).on(
    "click",
    ".main-img#product-list-img .product-img",
    function (e) {
      e.stopPropagation();
      idxProduct = $(this).data("id");
      renderIndicators(idxProduct);
      renderProductImg();
    }
  );

  $("#btn-prev-product").click(function () {
    if (idxProduct <= 0)
      card_scroll.animate(
        { scrollLeft: `+=${200 * (PRODUCT_IMAGES.length - 1)}` },
        300
      );
    else card_scroll.animate({ scrollLeft: "-=200" }, 300);

    idxProduct = idxProduct <= 0 ? PRODUCT_IMAGES.length - 1 : idxProduct - 1;
    renderProductImg();
  });

  $("#btn-next-product").click(function () {
    if (idxProduct >= PRODUCT_IMAGES.length - 1)
      card_scroll.animate(
        { scrollLeft: `-=${200 * (PRODUCT_IMAGES.length - 1)}` },
        300
      );
    else card_scroll.animate({ scrollLeft: "+=200" }, 300);

    idxProduct = idxProduct >= PRODUCT_IMAGES.length - 1 ? 0 : idxProduct + 1;
    renderProductImg();
  });

  let touchStartX = 0;
  let touchEndX = 0;

  function handleGesture() {
    const diff = touchEndX - touchStartX;

    if (Math.abs(diff) < 50) {
      return; // jarak terlalu kecil → bukan swipe
    }

    if (diff > 0) {
      idxProduct = idxProduct <= 0 ? PRODUCT_IMAGES.length - 1 : idxProduct - 1;
      renderIndicators(idxProduct);
      renderProductImg("mobile");
    } else {
      idxProduct = idxProduct >= PRODUCT_IMAGES.length - 1 ? 0 : idxProduct + 1;
      renderIndicators(idxProduct);
      renderProductImg("mobile");
    }
  }

  $("#show-product").on("touchstart", function (e) {
    touchStartX = e.originalEvent.changedTouches[0].screenX;
  });

  $("#show-product").on("touchend", function (e) {
    touchEndX = e.originalEvent.changedTouches[0].screenX;
    handleGesture();
  });

  $("#other-product").html("");
  $.each(PRODUCT_DETAIL, function (idx, p) {
    $("#other-product").append(`
            <div class="col-8 col-md-3 product-card">
                <a href="product-detail.html?category=motor&product=${p.id}" style="text-decoration: none;color: black;cursor:default">
                        <div class="card position-relative" style="border-radius: 20px;margin:0 0 30px 0">
                            <img src="${p.img}" class="card-img-top" alt="..." style="border-top-left-radius: 5.5%;border-top-right-radius: 5.5%; object-fit: cover;">
                            <div class="card-body">
                                <h5 class="card-title section-price" style="color: #D40000;">
                                    ${p.price}
                                </h5>
                                <div class="card-text">
                                  <div id="product-card-title">
                                    <span class="d-block fw-bold" style="margin: 5px 0px;font-size:small;">${p.name} ${p.year}</span>
                                    <span class="d-block" style="margin: 5px 0px;">${p.location}</span>
                                  </div>
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
        `);
  });

  $(document).on("click", ".btnFavorite", function (e) {
    e.preventDefault();
    e.stopPropagation();

    let toggle = parseInt($(this).attr("data-toggle")) || 0;
    toggle = toggle == 0 ? 1 : 0;

    $(this).attr("data-toggle", toggle);

    if (toggle == 0) {
      $(this).html('<i class="far fa-star text-dark"></i>');
    } else {
      $(this).html('<i class="fas fa-star text-danger"></i>');
    }
  });

  $(".main-img #show-product img").click(function (e) {
    e.stopPropagation();
    $("#product-img-mob").toggleClass("show");
    $("#overlay-product-detail").toggleClass("show");
    $("body").addClass("no-scroll"); // ketika form muncul
  });

  $(document).on("click", function (e) {
    const productImg = $("#product-img-mob");
    const overlay = $("#overlay-product-detail");

    if (
      productImg.hasClass("show") &&
      !productImg.is(e.target) &&
      productImg.has(e.target).length === 0
    ) {
      productImg.removeClass("show");
      overlay.removeClass("show");
      $("body").removeClass("no-scroll"); // ketika form muncul
    }
  });

  $("#btn-close-product-img-mob").click(function () {
    const productImg = $("#product-img-mob");
    const overlay = $("#overlay-product-detail");

    productImg.removeClass("show");
    overlay.removeClass("show");
    $("body").removeClass("no-scroll"); // ketika form muncul
  });
});
