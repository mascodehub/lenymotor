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
];

const dealers = [
  {
    name: "Leny Motor Bandar",
    address: "Jl. Kh. Agus Salim No.12 Bandar Kidul - Kediri Jawa Timur 64118",
    phone: "(0354) 774195",
    whatsapp: "0813 3086 8885",
    image: "../assets/mobil.png",
    maps: "#",
  },
  {
    name: "Leny Motor Pare",
    address: "Jl. Raya Pamenang No.433 Ngasem - Kediri Jawa Timur 62154",
    phone: "",
    whatsapp: "0813 3086 8886",
    image: "../assets/mobil.png",
    maps: "#",
  },
  {
    name: "Leny Motor Blitar",
    address: "Jl. Letjen Panjaitan No.18 Tinalan - Kediri Jawa Timur 64131",
    phone: "",
    whatsapp: "0813 3086 8887",
    image: "../assets/mobil.png",
    maps: "#",
  },
  {
    name: "Leny Motor Blitar",
    address: "Jl. Kh. Agus Salim No.79 Bandar Kidul - Kediri Jawa Timur 64118",
    phone: "",
    whatsapp: "0811 3312 555",
    image: "../assets/mobil.png",
    maps: "#",
  },
];

$(document).ready(async function () {
  $("#navbar").load("../components/navbar.html");
  $("#footbar").load("../components/footbar.html");

  $.each(testimonials, function (i, t) {
    let text = t.message;
    if (text.length > 90) {
      text = text.substring(0, text.lastIndexOf(" "));
      text = text.replace(/\s*\S+$/, " ...");
    }

    const card = `
                <div class="card position-relative" style="width: 18rem;border-radius: 25px;margin-right: 15px;">
                    <img src="${t.image}" class="card-img-top" alt="..."
                        style="border-top-left-radius: 5.5%;border-top-right-radius: 5.5%;object-fit: cover;">
                    <div class="card-body">
                        <span class="text-center" style="width: 100%;">
                            <h5 class="card-title d-flex align-items-center justify-content-center" style="font-size: 30px;">
                                ${t.rating} &nbsp;
                                ${'<img src="../assets/icon/star.png" style="height:34px;">'.repeat(
                                  5
                                )}
                            </h5>
                        </span>
                        <div class="card-text">
                            <span class="d-block" style="margin: 5px 5px;height: 75px;">
                                ${text}
                            </span>
                            <span class="d-block pt-4" style="margin: 5px 5px;color: #AFAFAF;">
                                ${t.product}
                            </span>
                            <span class="d-block" style="margin: 5px 5px;color: #AFAFAF">
                                ${t.date}
                            </span>
                        </div>
                    </div>
                </div>
            `;
    $("#card-s4").append(card);
  });

  $.each(dealers, function (index, dealer) {
    let contact = "";

    if (dealer.phone != "") {
      contact = `
                <span class="fw-bold" style="color: #D40000;">
                    <img src="../assets/icon/phone.png" alt="" style="width:24px;height:24px;"> ${dealer.phone}
                </span>
            `;
    }

    if (dealer.whatsapp != "") {
      contact = `
                ${contact}
                <span class="fw-bold" style="color: #D40000;">
                    <img src="../assets/icon/whatsapp.png" alt="" style="width:24px;height:24px;"> ${dealer.whatsapp}
                </span>
            `;
    }

    const card = `
                <div class="card position-relative bg-white" 
                    style="width: 18rem;border-radius: 20px;margin-right: 15px;">
                    <img src="${dealer.image}" class="card-img-top" alt="${dealer.name}"
                        style="border-top-left-radius: 5.5%;border-top-right-radius: 5.5%;
                        object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title" style="font-size: 1.6rem;margin: 5px 5px;">
                            ${dealer.name}
                        </h5>
                        <div class="card-text">
                            <span class="d-block" style="margin: 5px 5px;color: #AFAFAF;">
                                ${dealer.address}
                            </span>
                            <span class="d-flex text-center" 
                                style="margin: 5px 5px;color: #AFAFAF;justify-content: space-between;cursor: pointer;">
                                ${contact}
                            </span>
                            <hr>
                            <span class="d-block" style="margin: 25px 5px;color: #AFAFAF;cursor: pointer;">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <img src="../assets/icon/maps.png" alt="" style="width:1.5rem;height:auto;">
                                        &nbsp;
                                        <a href="${dealer.maps}" target="_blank" class="fw-bold" style="font-size:0.9rem;text-decoration:none;color:#000000;">
                                            Lihat via Google Maps
                                        </a>
                                    </div>
                                    <div class="col-3" style="text-align: right;">
                                        <span class="shadow" 
                                            style="background-color: white;border-radius: 100%;
                                            font-size: 0.8rem;padding: 10px 13px;color: black;">
                                            <i class="fa fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            `;
    $("#card-cabang").append(card);
  });
});
