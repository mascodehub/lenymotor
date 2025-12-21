$(document).ready(function () {
  $("#navbar").load("../components/navbar.html");
  $("#footbar").load("../components/footbar.html");

  // =====================
  // DATA TESTIMONIALS
  // =====================
  const testimonials = [
    {
      rating: 5.0,
      message:
        "Pelayanan ramah, proses cepat! Rekomendasi terbaik untuk mencari kendaraan second. Good job, puas banget!",
      product: "HONDA PCX 150 2022",
      date: "17/08/2025",
      image: "../assets/mobil.png",
    },
    {
      rating: 4.8,
      message:
        "Unit sesuai deskripsi, penjual jujur dan fast respon. Sangat puas!",
      product: "YAMAHA NMAX 2021",
      date: "10/07/2025",
      image: "../assets/mobil.png",
    },
    {
      rating: 4.9,
      message: "Motor masih sangat bagus, pelayanan terbaik dari LENY MOTOR!",
      product: "HONDA VARIO 160 2023",
      date: "05/05/2025",
      image: "../assets/mobil.png",
    },
    {
      rating: 4.9,
      message: "Motor masih sangat bagus, pelayanan terbaik dari LENY MOTOR!",
      product: "HONDA VARIO 160 2023",
      date: "05/05/2025",
      image: "../assets/mobil.png",
    },
    {
      rating: 5.0,
      message: "Transaksi cepat dan mudah, sangat direkomendasikan!",
      product: "HONDA BEAT 2020",
      date: "02/08/2025",
      image: "../assets/mobil.png",
    },
    {
      rating: 4.7,
      message: "Pelayanan bagus, motor sesuai harapan!",
      product: "YAMAHA AEROX 155 2021",
      date: "20/06/2025",
      image: "../assets/mobil.png",
    },
    {
      rating: 4.9,
      message: "Sangat puas dengan pelayanan Leny Motor, motor berkualitas!",
      product: "HONDA SCOOPY 2022",
      date: "11/07/2025",
      image: "../assets/mobil.png",
    },
    {
      rating: 5.0,
      message:
        "Pelayanan ramah, proses cepat! rekomendasi untuk mencari kendaraan second. goodjob!",
      product: "HONDA PCX 150 2022",
      date: "17/08/2025",
      image: "../assets/mobil.png",
    },
  ];

  // =====================
  // RESPONSIVE PER PAGE
  // =====================
  function getPerPage() {
    const w = window.innerWidth;
    if (w >= 990 && w <= 1399) return 6; // tablet
    return 8; // mobile & desktop besar
  }

  let perPage = getPerPage();
  let currentPage = 1;
  let totalPages = Math.ceil(testimonials.length / perPage);

  // =====================
  // RENDER DATA
  // =====================
  function renderData() {
    const container = $("#testi-container");
    container.empty();

    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const pageData = testimonials.slice(start, end);

    pageData.forEach((testi) => {
      const card = `
        <div class="card position-relative m-1 m-md-0">
          <img src="${testi.image}" class="card-img-top" alt="${testi.product}">
          <div class="card-body">
            <div class="card-title d-flex align-items-center">
              <span class="fw-bold" style="font-size:1rem">${testi.rating.toFixed(
                1
              )}</span>&nbsp;
              ${'<img src="../assets/icon/star.png" style="width:1.5rem;height:1rem">'.repeat(
                Math.floor(testi.rating)
              )}
            </div>
            <div class="card-text">
              <span class="d-block mb-4" style="height:4.5rem">
                ${testi.message}
              </span>
              <span class="d-block text-muted">${testi.product}</span>
              <span class="d-block text-muted">${testi.date}</span>
            </div>
          </div>
        </div>
      `;
      container.append(card);
    });
  }

  // =====================
  // RENDER PAGINATION
  // =====================
  function renderPagination() {
    perPage = getPerPage();
    totalPages = Math.ceil(testimonials.length / perPage);
    if (currentPage > totalPages) currentPage = totalPages;

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

  // =====================
  // EVENTS
  // =====================
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

  $(window).on("resize", function () {
    renderPagination();
  });

  // =====================
  // INIT
  // =====================
  renderPagination();
});
