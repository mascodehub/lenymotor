$(document).ready(function () {
  $("#navbar").load("../components/navbar.html");
  $("#footbar").load("../components/footbar.html");

  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");

  // Menampilkan parameter title ke breadcumb
  if (title) {
    $("#breadcrumb-title").text(decodeURIComponent(title));
  }

  // Contoh data artikel detail
  const articleData = {
    title: "Cari Mobil Bekas Impian? Leny Motor punya Solusinya!",
    date: "17 Agustus 2025",
    author: "Leny Motor",
    img: "../assets/article-1.png",
    desc: `
            <p class="fw-bold mb-1">
              Leny Motor
              <span class="fw-normal"
                >- The standard Lorem Ipsum passage, used since the 1500s</span
              >
            </p>
            <p class="mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <h5 class="fw-bold mt-4 mb-3">
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC
            </h5>

            <p class="mb-4">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>

            <h6 class="fw-bold mt-4 mb-3">1914 translation by H. Rackham</h6>

            <p>
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              occasionally circumstances occur in which toil and pain can
              procure him some great pleasure. To take a trivial example, which
              of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?"
            </p>
        `,
    tags: ["Kendaraan", "Dealer Motor", "Berita Terbaru"],
  };

  // Setiap property dari object detail artikel diarahkan ke halaman html
  $("#article-title").text(articleData.title);
  $("#article-date").text(articleData.date);
  $("#article-author").html(
    `Ditulis oleh <span class="fw-bold">${articleData.author}</span>`
  );
  $("#article-img").attr("src", articleData.img).attr("alt", articleData.title);
  $("#article-desc").html(articleData.desc);

  // Render tag list
  $("#article-tag").empty();
  articleData.tags.forEach((tag) => {
    $("#article-tag").append(`
          <div class="btn border border-1 border-dark rounded-pill small px-3">
            ${tag}
          </div>
        `);
  });

  // Contoh data artikel rekomendasi
  const articlesRecomendation = [
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

  function renderArticlesRecomendation(list) {
    $("#article-recomendation").empty();
    list.slice(0, 5).forEach((a) => {
      $("#article-recomendation").append(`
       <div id="article" class="article-card d-flex align-items-center mb-3 rounded-lg shadow-sm" style="border-radius: 0.5rem;padding: 1rem;">
        <img src="${a.image}" alt="Article" class="article-img rounded-3 me-3" style="border-radius: 0.5rem;">
        <div class="article-info">
          <div class="d-flex align-items-center mb-1">
            <span class="badge bg-danger me-2 rounded-pill" style="padding: 0.7rem 1rem;">BARU</span>
            <small class="text-muted">${a.date}</small>
          </div>
          <h5 class="fw-bold mb-1"><a href="article-detail.html?title=${a.title}">${a.title}</a></h5>
        </div>
      </div>
      `);
    });
  }

  renderArticlesRecomendation(articlesRecomendation);

  const articlesPopuler = [
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

  function renderArticlesPopuler(list) {
    $("#article-populer").empty();
    list.slice(0, 4).forEach((a) => {
      $("#article-populer").append(`
      <div class="col-md-6">
        <div id="article" class="article-card d-flex align-items-center mb-3 rounded-lg shadow-sm" style="border-radius: 0.5rem;padding: 1rem;">
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
      </div>
      `);
    });
  }

  renderArticlesPopuler(articlesPopuler);
});
