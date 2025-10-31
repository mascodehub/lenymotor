$(document).ready(function () {
  $("#navbar").load("../components/navbar.html");
  $("#footbar").load("../components/footbar.html");

  // Contoh memuat data article
  const articles = [
    {
      image: "../assets/article-1.png",
      date: "17 Agustus 2025",
      title: "Cari Mobil Bekas Impian? Leny Motor punya Solusinya!",
      desc: "Leny Motor - Temukan mobil bekas impian Anda dengan kualitas terjamin dan harga bersaing hanya di Leny Motor.",
    },
    {
      image: "../assets/article-1.png",
      date: "20 Agustus 2025",
      title: "Tips Memilih Mobil Bekas yang Masih Berkualitas",
      desc: "Leny Motor - Panduan cepat untuk memastikan mobil bekas pilihan Anda bebas dari masalah besar dan tetap nyaman dikendarai.",
    },
    {
      image: "../assets/article-1.png",
      date: "25 Agustus 2025",
      title: "Leny Motor Hadirkan Promo Spesial Akhir Bulan!",
      desc: "Leny Motor - Nikmati potongan harga dan bonus menarik untuk setiap pembelian mobil bekas di akhir bulan ini.",
    },
    {
      image: "../assets/article-1.png",
      date: "30 Agustus 2025",
      title: "Rahasia Merawat Mesin Mobil Bekas Agar Awet",
      desc: "Leny Motor - Pelajari langkah-langkah sederhana menjaga performa mesin mobil bekas agar tetap optimal setiap hari.",
    },
    {
      image: "../assets/article-1.png",
      date: "1 September 2025",
      title: "Leny Motor Kini Hadir di Kota Baru!",
      desc: "Leny Motor - Kabar gembira! Kami membuka cabang baru untuk memberikan layanan terbaik bagi Anda yang ingin beli mobil bekas.",
    },
    {
      image: "../assets/article-1.png",
      date: "5 September 2025",
      title: "Cara Cerdas Menghitung Biaya Perawatan Mobil Bekas",
      desc: "Leny Motor - Ketahui cara mengatur budget perawatan agar mobil bekas Anda tetap irit dan tidak boros di perbaikan.",
    },
    {
      image: "../assets/article-1.png",
      date: "9 September 2025",
      title: "Testimoni Pelanggan: Pengalaman Beli Mobil di Leny Motor",
      desc: "Leny Motor - Baca kisah nyata pelanggan kami yang puas dengan layanan pembelian mobil bekas terpercaya dari Leny Motor.",
    },
    {
      image: "../assets/article-1.png",
      date: "12 September 2025",
      title: "Mobil Bekas vs Mobil Baru: Mana yang Lebih Untung?",
      desc: "Leny Motor - Ulasan lengkap kelebihan dan kekurangan membeli mobil bekas dibanding mobil baru untuk keputusan yang tepat.",
    },
    {
      image: "../assets/article-1.png",
      date: "15 September 2025",
      title: "Panduan Lengkap Sebelum Test Drive Mobil Bekas",
      desc: "Leny Motor - Tips penting agar Anda bisa menilai kondisi mobil bekas secara akurat saat melakukan test drive.",
    },
    {
      image: "../assets/article-1.png",
      date: "18 September 2025",
      title: "5 Mobil Bekas Paling Dicari Tahun Ini",
      desc: "Leny Motor - Simak daftar mobil bekas favorit yang paling diminati konsumen karena performa dan harga jualnya yang stabil.",
    },
    {
      image: "../assets/article-1.png",
      date: "21 September 2025",
      title: "Leny Motor Siap Layani Pembelian Online!",
      desc: "Leny Motor - Sekarang Anda bisa membeli mobil bekas impian tanpa keluar rumah, aman dan mudah lewat platform kami.",
    },
    {
      image: "../assets/article-1.png",
      date: "24 September 2025",
      title: "Kenali Tanda Mobil Bekas Pernah Kecelakaan",
      desc: "Leny Motor - Jangan terkecoh! Pelajari ciri-ciri mobil bekas yang pernah mengalami benturan atau perbaikan besar.",
    },
    {
      image: "../assets/article-1.png",
      date: "27 September 2025",
      title: "Promo Kredit Ringan Mobil Bekas Leny Motor",
      desc: "Leny Motor - Cicilan ringan, bunga rendah, dan proses cepat! Miliki mobil impian Anda sekarang juga.",
    },
    {
      image: "../assets/article-1.png",
      date: "30 September 2025",
      title: "Cara Mengecek Dokumen Mobil Bekas Sebelum Beli",
      desc: "Leny Motor - Pastikan semua dokumen kendaraan lengkap dan sah agar pembelian Anda aman dan bebas masalah hukum.",
    },
    {
      image: "../assets/article-1.png",
      date: "3 Oktober 2025",
      title: "Leny Motor Rayakan 10 Tahun Kepercayaan Pelanggan",
      desc: "Leny Motor - Satu dekade melayani pelanggan dengan integritas, transparansi, dan pelayanan terbaik di dunia otomotif.",
    },
  ];

  function renderBannerArticle(data) {
    let html = `<div class="d-none d-md-grid banner-grid">`;
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

  function renderBannerArticleMobile(data) {
    let html = `<div class="d-grid d-md-none banner-grid">`;
    data.slice(0, 3).forEach((val, index) => {
      html += `
        <div id="banner-${index}" class="banner-item">
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
       <div id="article" class="article-card d-block d-md-flex align-items-center mb-3 rounded-lg shadow-sm" style="border-radius: 0.5rem;padding: 1rem;">
        <img src="${a.image}" alt="Article" class="article-img rounded-3 me-3" style="border-radius: 0.5rem;">
        <div class="article-info">
          <div class="d-flex align-items-center mb-1">
            <span class="badge bg-danger me-2 rounded-pill" style="padding: 0.7rem 1rem;">BARU</span>
            <small class="text-muted">${a.date}</small>
          </div>
          <h5 class="fw-bold mb-1"><a href="article-detail.html?title=${a.title}">${a.title}</a></h5>
          <p class="text-muted mb-0">${a.desc} [...]</p>
        </div>
      </div>
      `);
    });
  }

  renderArticles(articles);
  $("#banner-article").html(renderBannerArticle(articles));
  $("#banner-article-mobile").html(renderBannerArticleMobile(articles));

  // -------------------
  // KONFIGURASI PAGINATION
  // -------------------
  const perPage = 5;
  let currentPage = 1;
  const totalPages = Math.ceil(articles.length / perPage);

  document.getElementById("article-length").innerText = perPage;

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
  // -------------------
  // FUNGSI RENDER UTAMA
  // -------------------
  function renderPage(page) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const dataPage = articles.slice(start, end);

    $("#article-list").html(renderArticles(dataPage));
  }

  renderPage(currentPage);

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
