$(document).ready(function () {
  $("#navbar").load("../components/navbar.html");
  $("#footbar").load("../components/footbar.html");

  // Contoh memuat data artikel
  const articlesRecomendation = [
    {
      image: "../assets/artikel-1.png",
      date: "17 Agustus 2025",
      title: "Cari Mobil Bekas Impian? Leny Motor punya Solusinya!",
      desc: "Leny Motor - Temukan mobil bekas impian Anda dengan kualitas terjamin dan harga bersaing hanya di Leny Motor.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "20 Agustus 2025",
      title: "Tips Memilih Mobil Bekas yang Masih Berkualitas",
      desc: "Leny Motor - Panduan cepat untuk memastikan mobil bekas pilihan Anda bebas dari masalah besar dan tetap nyaman dikendarai.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "25 Agustus 2025",
      title: "Leny Motor Hadirkan Promo Spesial Akhir Bulan!",
      desc: "Leny Motor - Nikmati potongan harga dan bonus menarik untuk setiap pembelian mobil bekas di akhir bulan ini.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "30 Agustus 2025",
      title: "Rahasia Merawat Mesin Mobil Bekas Agar Awet",
      desc: "Leny Motor - Pelajari langkah-langkah sederhana menjaga performa mesin mobil bekas agar tetap optimal setiap hari.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "1 September 2025",
      title: "Leny Motor Kini Hadir di Kota Baru!",
      desc: "Leny Motor - Kabar gembira! Kami membuka cabang baru untuk memberikan layanan terbaik bagi Anda yang ingin beli mobil bekas.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "5 September 2025",
      title: "Cara Cerdas Menghitung Biaya Perawatan Mobil Bekas",
      desc: "Leny Motor - Ketahui cara mengatur budget perawatan agar mobil bekas Anda tetap irit dan tidak boros di perbaikan.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "9 September 2025",
      title: "Testimoni Pelanggan: Pengalaman Beli Mobil di Leny Motor",
      desc: "Leny Motor - Baca kisah nyata pelanggan kami yang puas dengan layanan pembelian mobil bekas terpercaya dari Leny Motor.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "12 September 2025",
      title: "Mobil Bekas vs Mobil Baru: Mana yang Lebih Untung?",
      desc: "Leny Motor - Ulasan lengkap kelebihan dan kekurangan membeli mobil bekas dibanding mobil baru untuk keputusan yang tepat.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "15 September 2025",
      title: "Panduan Lengkap Sebelum Test Drive Mobil Bekas",
      desc: "Leny Motor - Tips penting agar Anda bisa menilai kondisi mobil bekas secara akurat saat melakukan test drive.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "18 September 2025",
      title: "5 Mobil Bekas Paling Dicari Tahun Ini",
      desc: "Leny Motor - Simak daftar mobil bekas favorit yang paling diminati konsumen karena performa dan harga jualnya yang stabil.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "21 September 2025",
      title: "Leny Motor Siap Layani Pembelian Online!",
      desc: "Leny Motor - Sekarang Anda bisa membeli mobil bekas impian tanpa keluar rumah, aman dan mudah lewat platform kami.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "24 September 2025",
      title: "Kenali Tanda Mobil Bekas Pernah Kecelakaan",
      desc: "Leny Motor - Jangan terkecoh! Pelajari ciri-ciri mobil bekas yang pernah mengalami benturan atau perbaikan besar.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "27 September 2025",
      title: "Promo Kredit Ringan Mobil Bekas Leny Motor",
      desc: "Leny Motor - Cicilan ringan, bunga rendah, dan proses cepat! Miliki mobil impian Anda sekarang juga.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "30 September 2025",
      title: "Cara Mengecek Dokumen Mobil Bekas Sebelum Beli",
      desc: "Leny Motor - Pastikan semua dokumen kendaraan lengkap dan sah agar pembelian Anda aman dan bebas masalah hukum.",
    },
    {
      image: "../assets/artikel-1.png",
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
        <img src="${a.image}" alt="Artikel" class="article-img rounded-3 me-3" style="border-radius: 0.5rem;">
        <div class="article-info">
          <div class="d-flex align-items-center mb-1">
            <span class="badge bg-danger me-2 rounded-pill" style="padding: 0.7rem 1rem;">BARU</span>
            <small class="text-muted">${a.date}</small>
          </div>
          <h5 class="fw-bold mb-1"><a href="artikel-detail.html?title=${a.title}">${a.title}</a></h5>
        </div>
      </div>
      `);
    });
  }

  renderArticlesRecomendation(articlesRecomendation);

  const articlesPopuler = [
    {
      image: "../assets/artikel-1.png",
      date: "17 Agustus 2025",
      title: "Cari Mobil Bekas Impian? Leny Motor punya Solusinya!",
      desc: "Leny Motor - Temukan mobil bekas impian Anda dengan kualitas terjamin dan harga bersaing hanya di Leny Motor.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "20 Agustus 2025",
      title: "Tips Memilih Mobil Bekas yang Masih Berkualitas",
      desc: "Leny Motor - Panduan cepat untuk memastikan mobil bekas pilihan Anda bebas dari masalah besar dan tetap nyaman dikendarai.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "25 Agustus 2025",
      title: "Leny Motor Hadirkan Promo Spesial Akhir Bulan!",
      desc: "Leny Motor - Nikmati potongan harga dan bonus menarik untuk setiap pembelian mobil bekas di akhir bulan ini.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "30 Agustus 2025",
      title: "Rahasia Merawat Mesin Mobil Bekas Agar Awet",
      desc: "Leny Motor - Pelajari langkah-langkah sederhana menjaga performa mesin mobil bekas agar tetap optimal setiap hari.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "1 September 2025",
      title: "Leny Motor Kini Hadir di Kota Baru!",
      desc: "Leny Motor - Kabar gembira! Kami membuka cabang baru untuk memberikan layanan terbaik bagi Anda yang ingin beli mobil bekas.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "5 September 2025",
      title: "Cara Cerdas Menghitung Biaya Perawatan Mobil Bekas",
      desc: "Leny Motor - Ketahui cara mengatur budget perawatan agar mobil bekas Anda tetap irit dan tidak boros di perbaikan.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "9 September 2025",
      title: "Testimoni Pelanggan: Pengalaman Beli Mobil di Leny Motor",
      desc: "Leny Motor - Baca kisah nyata pelanggan kami yang puas dengan layanan pembelian mobil bekas terpercaya dari Leny Motor.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "12 September 2025",
      title: "Mobil Bekas vs Mobil Baru: Mana yang Lebih Untung?",
      desc: "Leny Motor - Ulasan lengkap kelebihan dan kekurangan membeli mobil bekas dibanding mobil baru untuk keputusan yang tepat.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "15 September 2025",
      title: "Panduan Lengkap Sebelum Test Drive Mobil Bekas",
      desc: "Leny Motor - Tips penting agar Anda bisa menilai kondisi mobil bekas secara akurat saat melakukan test drive.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "18 September 2025",
      title: "5 Mobil Bekas Paling Dicari Tahun Ini",
      desc: "Leny Motor - Simak daftar mobil bekas favorit yang paling diminati konsumen karena performa dan harga jualnya yang stabil.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "21 September 2025",
      title: "Leny Motor Siap Layani Pembelian Online!",
      desc: "Leny Motor - Sekarang Anda bisa membeli mobil bekas impian tanpa keluar rumah, aman dan mudah lewat platform kami.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "24 September 2025",
      title: "Kenali Tanda Mobil Bekas Pernah Kecelakaan",
      desc: "Leny Motor - Jangan terkecoh! Pelajari ciri-ciri mobil bekas yang pernah mengalami benturan atau perbaikan besar.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "27 September 2025",
      title: "Promo Kredit Ringan Mobil Bekas Leny Motor",
      desc: "Leny Motor - Cicilan ringan, bunga rendah, dan proses cepat! Miliki mobil impian Anda sekarang juga.",
    },
    {
      image: "../assets/artikel-1.png",
      date: "30 September 2025",
      title: "Cara Mengecek Dokumen Mobil Bekas Sebelum Beli",
      desc: "Leny Motor - Pastikan semua dokumen kendaraan lengkap dan sah agar pembelian Anda aman dan bebas masalah hukum.",
    },
    {
      image: "../assets/artikel-1.png",
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
          <img src="${a.image}" alt="Artikel" class="article-img rounded-3 me-3" style="border-radius: 0.5rem;">
          <div class="article-info">
            <div class="d-flex align-items-center mb-1">
              <span class="badge bg-danger me-2 rounded-pill" style="padding: 0.7rem 1rem;">BARU</span>
              <small class="text-muted">${a.date}</small>
            </div>
            <h5 class="fw-bold mb-1"><a href="artikel-detail.html?title=${a.title}">${a.title}</a></h5>
              <p class="text-muted mb-0">${a.desc} [...]</p>
          </div>
        </div>
      </div>
      `);
    });
  }

  renderArticlesPopuler(articlesPopuler);
});
