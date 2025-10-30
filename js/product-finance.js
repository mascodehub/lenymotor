$(document).ready(function () {
  $("#navbar").load("../components/navbar.html");
  $("#footbar").load("../components/footbar.html");

  const financeLogos = [
    "../assets/finance/Niaga.png",
    "../assets/finance/OTO.png",
    "../assets/finance/Sinarmas_Hana.png",
    "../assets/finance/sinarmas.png",
    "../assets/finance/SMS.png",
    "../assets/finance/Suzuki.png",
    "../assets/finance/Adira.png",
    "../assets/finance/BAF.png",
    "../assets/finance/BCA.png",
  ];

  const $track = $("#finance-logo-track");
  financeLogos.forEach((logo) => {
    $track.append(`<img src="${logo}" alt="logo finance">`);
  });

  // Gandakan logo agar looping tampak mulus
  financeLogos.forEach((logo) => {
    $track.append(`<img src="${logo}" alt="logo finance duplicate">`);
  });

  const financeList = [
    {
      logo: "../assets/finance/Niaga.png",
      title: "CIMB Niaga Finance",
      desc: "Deskripsi singkat produk atau jasa dari lembaga pembiayaan ini.",
    },
    {
      logo: "../assets/finance/OTO.png",
      title: "OTO Kredit",
      desc: "Deskripsi singkat produk atau jasa dari lembaga pembiayaan ini.",
    },
    {
      logo: "../assets/finance/Sinarmas_Hana.png",
      title: "Sinarmas Hana Finance",
      desc: "Deskripsi singkat produk atau jasa dari lembaga pembiayaan ini.",
    },
    {
      logo: "../assets/finance/sinarmas.png",
      title: "Sinarmas Multifinance",
      desc: "Deskripsi singkat produk atau jasa dari lembaga pembiayaan ini.",
    },
    {
      logo: "../assets/finance/SMS.png",
      title: "SMS Finance",
      desc: "Deskripsi singkat produk atau jasa dari lembaga pembiayaan ini.",
    },
    {
      logo: "../assets/finance/Suzuki.png",
      title: "Suzuki Finance",
      desc: "Deskripsi singkat produk atau jasa dari lembaga pembiayaan ini.",
    },
    {
      logo: "../assets/finance/Adira.png",
      title: "Adira Finance",
      desc: "Deskripsi singkat produk atau jasa dari lembaga pembiayaan ini.",
    },
    {
      logo: "../assets/finance/BAF.png",
      title: "Bussan Auto Finance",
      desc: "Deskripsi singkat produk atau jasa dari lembaga pembiayaan ini.",
    },
    {
      logo: "../assets/finance/BCA.png",
      title: "BCA Finance",
      desc: "Deskripsi singkat produk atau jasa dari lembaga pembiayaan ini.",
    },
  ];

  financeList.forEach((item) => {
    const card = `
          <div class="finance-card">
            <img src="${item.logo}" alt="${item.title}" class="img-fluid d-block m-auto mb-3">
            <div class="text-justify">
              <div class="finance-title">${item.title}</div>
              <div class="finance-desc">${item.desc}</div>
              <div class="finance-footer mt-3">Info lainnya bisa ditambahkan disini</div>
            </div>
          </div>
        `;
    $("#finance-list").append(card);
  });

  document.getElementById("product-finance-length").innerText = 9;

  // -------------------
  // KONFIGURASI PAGINATION
  // -------------------
  const perPage = 5;
  let currentPage = 1;
  const totalPages = Math.ceil(financeList.length / perPage);

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
  renderPagination();
});
