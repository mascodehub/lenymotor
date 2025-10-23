$(document).ready(function () {
  $("#navbar").load("../components/navbar.html");
  $("#footbar").load("../components/footbar.html");

  // Contoh memuat data artikel
  const articles = [
    {
      image: "../assets/artikel-1.png",
      date: "17 Agustus 2025",
      title: "Cari Mobil Bekas Impian? Leny Motor punya Solusinya!",
      desc: "Leny Motor - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "17 Agustus 2025",
      title: "Cari Mobil Bekas Impian? Leny Motor punya Solusinya!",
      desc: "Leny Motor - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "17 Agustus 2025",
      title: "Cari Mobil Bekas Impian? Leny Motor punya Solusinya!",
      desc: "Leny Motor - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "17 Agustus 2025",
      title: "Cari Mobil Bekas Impian? Leny Motor punya Solusinya!",
      desc: "Leny Motor - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "17 Agustus 2025",
      title: "Cari Mobil Bekas Impian? Leny Motor punya Solusinya!",
      desc: "Leny Motor - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "17 Agustus 2025",
      title: "Cari Mobil Bekas Impian? Leny Motor punya Solusinya!",
      desc: "Leny Motor - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  function renderBannerArtikel(data) {
    let html = `<div class="banner-grid">`;
    data.slice(0, 5).forEach((val, index) => {
      html += `
        <div class="banner-item">
          <img src="${val.image}" alt="${val.title}">
          <div class="banner-content">
            <h5>${val.title}</h5>
            <small>${val.date}</small>
          </div>
        </div>`;
    });
    html += `</div>`;
    return html;
  }

  function renderArticles(list) {
    $("#article-list").empty();
    list.forEach((a) => {
      $("#article-list").append(`
       <div class="article-card d-flex align-items-center mb-3 rounded-lg shadow-sm" style="border-radius: 0.5rem;padding: 1rem;">
        <img src="${a.image}" alt="Artikel" class="article-img rounded-3 me-3" style="border-radius: 0.5rem;">
        <div class="article-info">
          <div class="d-flex align-items-center mb-1">
            <span class="badge bg-danger me-2 rounded-pill" style="padding: 0.7rem 1rem;">BARU</span>
            <small class="text-muted">${a.date}</small>
          </div>
          <h5 class="fw-bold mb-1">${a.title}</h5>
          <p class="text-muted mb-0">${a.desc} [...]</p>
        </div>
      </div>
      `);
    });
  }

  renderArticles(articles);

  $("#banner-artikel").html(renderBannerArtikel(articles));

  // Sidebar interactivity
  $(".menu-item").click(function () {
    $(".menu-item").removeClass("active");
    $(this).addClass("active");
  });

  $("#searchArticle").on("keyup", function () {
    const keyword = $(this).val().toLowerCase();
    const filtered = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(keyword) ||
        a.desc.toLowerCase().includes(keyword)
    );
    renderArticles(filtered);
  });
});
