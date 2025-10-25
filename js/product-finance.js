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
