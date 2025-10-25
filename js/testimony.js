$(document).ready(function () {
  $("#navbar").load("../components/navbar.html");
  $("#footbar").load("../components/footbar.html");
  // Data testimoni
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

  // Render card
  testimonials.forEach((testi) => {
    const card = `
          <div class="card position-relative">
            <img src="${testi.image}" class="card-img-top" alt="${
      testi.product
    }">
            <div class="card-body">
              <span class="text-center w-100 d-block">
                <div class="card-title d-flex align-items-center">
                 <span class="fw-bold" style="font-size:1rem">${testi.rating.toFixed(
                   1
                 )}</span> &nbsp;
                  ${'<img src="../assets/icon/star.png" style="width:1.5rem;height:1rem">'.repeat(
                    Math.floor(testi.rating)
                  )}
                </div>
              </span>
              <div class="card-text">
                <span class="d-block mb-4" style="margin: 0.2rem 0.2rem;height:4.5rem;">
                  ${testi.message}
                </span>
                <span class="d-block" style="margin: 0.2rem 0.2rem;color: #AFAFAF;">
                  ${testi.product}
                </span>
                <span class="d-block" style="margin: 0.2rem 0.2rem;color: #AFAFAF;">
                  ${testi.date}
                </span>
              </div>
            </div>
          </div>
        `;
    $("#testi-container").append(card);
  });

  // Pagination
  const totalPages = 20; // misalnya total halaman
  let currentPage =
    parseInt(new URLSearchParams(window.location.search).get("page")) || 1;

  function renderPagination() {
    const pagination = $("#pagination");
    pagination.empty();

    let pagesToShow = [];
    if (totalPages <= 5) {
      pagesToShow = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      pagesToShow = [1, 2, 3, 4, "...", totalPages];
    }

    pagesToShow.forEach((page) => {
      if (page === "...") {
        pagination.append(`<span>...</span>`);
      } else {
        const btn = $(`<button class="page-btn">${page}</button>`);
        if (page === currentPage) btn.addClass("active");
        btn.click(() => {
          currentPage = page;
          updateURL();
          renderPagination();
        });
        pagination.append(btn);
      }
    });
  }

  function updateURL() {
    const url = new URL(window.location);
    url.searchParams.set("page", currentPage);
    window.history.pushState({}, "", url);
  }

  $("#prevBtn").click(() => {
    if (currentPage > 1) {
      currentPage--;
      updateURL();
      renderPagination();
    }
  });

  $("#nextBtn").click(() => {
    if (currentPage < totalPages) {
      currentPage++;
      updateURL();
      renderPagination();
    }
  });

  renderPagination();
});
