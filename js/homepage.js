const car_products = [
    {
        img: "../assets/mobil.png",
        price: "Rp. 460,000,000",
        name: "Honda CRV Turbo Prestige",
        location: "LENY NGASEM",
        year: "2020",
        km: "20.000 KM",
        transmission: "Matic",
        color: "Merah",
        cicilan: "Rp 1jt / Bulan"
    },
    {
        img: "../assets/mobil.png",
        price: "Rp. 250,000,000",
        name: "Toyota Yaris TRD",
        location: "LENY NGASEM",
        year: "2019",
        km: "15.000 KM",
        transmission: "Manual",
        color: "Putih",
        cicilan: "Rp 2jt / Bulan"
    },
    {
        img: "../assets/mobil.png",
        price: "Rp. 185,000,000",
        name: "Honda Jazz RS",
        location: "LENY NGASEM",
        year: "2018",
        km: "25.000 KM",
        transmission: "Matic",
        color: "Hitam",
        cicilan: "Rp 1,5jt / Bulan"
    },
    {
        img: "../assets/mobil.png",
        price: "Rp. 460,000,000",
        name: "Honda CRV Turbo Prestige",
        location: "LENY NGASEM",
        year: "2020",
        km: "20.000 KM",
        transmission: "Matic",
        color: "Merah",
        cicilan: "Rp 1jt / Bulan"
    },
    {
        img: "../assets/mobil.png",
        price: "Rp. 250,000,000",
        name: "Toyota Yaris TRD",
        location: "LENY NGASEM",
        year: "2019",
        km: "15.000 KM",
        transmission: "Manual",
        color: "Putih",
        cicilan: "Rp 2jt / Bulan"
    },
    {
        img: "../assets/mobil.png",
        price: "Rp. 185,000,000",
        name: "Honda Jazz RS",
        location: "LENY NGASEM",
        year: "2018",
        km: "25.000 KM",
        transmission: "Matic",
        color: "Hitam",
        cicilan: "Rp 1,5jt / Bulan"
    }
];

const motor_products = [
    {
        img: "../assets/Product-1.png",
        price: "Rp. 18,000,000",
        name: "Honda PCX 150",
        location: "LENY NGASEM",
        year: "2020",
        km: "12.500 KM",
        transmission: "Matic",
        color: "Hitam",
        cicilan: "Rp 700rb / Bulan"
    },
    {
        img: "../assets/Product-1.png",
        price: "Rp. 15,500,000",
        name: "Yamaha NMAX 155",
        location: "LENY NGASEM",
        year: "2019",
        km: "10.000 KM",
        transmission: "Matic",
        color: "Putih",
        cicilan: "Rp 650rb / Bulan"
    },
    {
        img: "../assets/Product-1.png",
        price: "Rp. 13,000,000",
        name: "Honda Vario 150",
        location: "LENY NGASEM",
        year: "2018",
        km: "15.000 KM",
        transmission: "Matic",
        color: "Merah",
        cicilan: "Rp 550rb / Bulan"
    },
    {
        img: "../assets/Product-1.png",
        price: "Rp. 9,800,000",
        name: "Yamaha Mio M3",
        location: "LENY NGASEM",
        year: "2017",
        km: "20.000 KM",
        transmission: "Matic",
        color: "Biru",
        cicilan: "Rp 400rb / Bulan"
    },
    {
        img: "../assets/Product-1.png",
        price: "Rp. 18,000,000",
        name: "Honda PCX 150",
        location: "LENY NGASEM",
        year: "2020",
        km: "12.500 KM",
        transmission: "Matic",
        color: "Hitam",
        cicilan: "Rp 700rb / Bulan"
    },
    {
        img: "../assets/Product-1.png",
        price: "Rp. 15,500,000",
        name: "Yamaha NMAX 155",
        location: "LENY NGASEM",
        year: "2019",
        km: "10.000 KM",
        transmission: "Matic",
        color: "Putih",
        cicilan: "Rp 650rb / Bulan"
    },
    {
        img: "../assets/Product-1.png",
        price: "Rp. 13,000,000",
        name: "Honda Vario 150",
        location: "LENY NGASEM",
        year: "2018",
        km: "15.000 KM",
        transmission: "Matic",
        color: "Merah",
        cicilan: "Rp 550rb / Bulan"
    },
    {
        img: "../assets/Product-1.png",
        price: "Rp. 9,800,000",
        name: "Yamaha Mio M3",
        location: "LENY NGASEM",
        year: "2017",
        km: "20.000 KM",
        transmission: "Matic",
        color: "Biru",
        cicilan: "Rp 400rb / Bulan"
    }
];


$(document).ready(function () {
    const $carousel_motor = $("#carousel-motor");

    $.each(motor_products, function (i, p) {
        const card = `
            <div class="card position-relative"  style="width: 30rem;border-radius: 5%;margin: 0 15px;">
                <img src="${p.img}" class="card-img-top" alt="..." style="border-top-left-radius: 5.5%;border-top-right-radius: 5.5%;height: 397px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title" style="font-size: 36px;color: #D40000;">${p.price}</h5>
                    <div class="card-text">
                        <span class="d-block" style="margin: 5px 0px;">${p.name}</span>
                        <span class="d-block" style="margin: 5px 0px;">${p.location}</span>
                        <div class="card-detail mb-3" style="border: 2px solid #EFEFEF;border-radius: 10px;padding: 20px 0px;">
                            <table style="width: 100%;">
                                <tr class="text-center">
                                    <td>
                                        <span class="d-flex align-items-center justify-content-center text-center">
                                            <img src="../assets/icon/date.png" width="20" height="20">&nbsp;${p.year}
                                        </span>
                                    </td>
                                    <td>
                                        <span class="d-flex align-items-center justify-content-center text-center">
                                            <img src="../assets/icon/road.png" width="20" height="20">&nbsp;${p.km}
                                        </span>
                                    </td>
                                    <td>
                                        <span class="d-flex align-items-center justify-content-center text-center">
                                            <img src="../assets/icon/transmission.png" width="20" height="20">&nbsp;${p.transmission}
                                        </span>
                                    </td>
                                    <td>
                                        <span class="d-flex align-items-center justify-content-center text-center">
                                            <i class="fa fa-circle" style="color: #D40000;"></i>&nbsp;${p.color}
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <span class="d-block" style="border: 2px solid #EFEFEF;border-radius: 30px;padding: 5px 20px;background-color: #EFEFEF;">
                            <div class="row">
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
                <div class="position-absolute top-0 start-100 translate-middle shadow" style="background-color: white;border-radius: 100%; padding: 5px 10px;font-size: 18pt;margin-left: -40px;margin-top: 40px;">
                    <i class="far fa-star text-dark"></i>
                </div>
            </div>
        `;
        $carousel_motor.append(card);
    });

    let isDown = false;
    let startX, scrollLeft;

    $carousel_motor.on("mousedown", function (e) {
        isDown = true;
        startX = e.pageX;
        scrollLeft = $carousel_motor.scrollLeft();
        $carousel_motor.css("cursor", "grabbing");
        e.preventDefault(); // cegah block teks
    });

    $(window).on("mouseup", function () {
        isDown = false;
        $carousel_motor.css("cursor", "grab");
    });

    $carousel_motor.on("mousemove", function (e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX); // seberapa jauh mouse digeser
        $carousel_motor.scrollLeft(scrollLeft - walk);
    });

    const $carousel_mobil = $("#carousel-mobil");

    $.each(car_products, function (i, p) {
        const card = `
            <div class="card position-relative"  style="width: 30rem;border-radius: 5%;margin: 0 15px;">
                <img src="${p.img}" class="card-img-top" alt="..." style="border-top-left-radius: 5.5%;border-top-right-radius: 5.5%;height: 397px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title" style="font-size: 36px;color: #D40000;">${p.price}</h5>
                    <div class="card-text">
                        <span class="d-block" style="margin: 5px 0px;">${p.name}</span>
                        <span class="d-block" style="margin: 5px 0px;">${p.location}</span>
                        <div class="card-detail mb-3" style="border: 2px solid #EFEFEF;border-radius: 10px;padding: 20px 0px;">
                            <table style="width: 100%;">
                                <tr class="text-center">
                                    <td>
                                        <span class="d-flex align-items-center justify-content-center text-center">
                                            <img src="../assets/icon/date.png" width="20" height="20">&nbsp;${p.year}
                                        </span>
                                    </td>
                                    <td>
                                        <span class="d-flex align-items-center justify-content-center text-center">
                                            <img src="../assets/icon/road.png" width="20" height="20">&nbsp;${p.km}
                                        </span>
                                    </td>
                                    <td>
                                        <span class="d-flex align-items-center justify-content-center text-center">
                                            <img src="../assets/icon/transmission.png" width="20" height="20">&nbsp;${p.transmission}
                                        </span>
                                    </td>
                                    <td>
                                        <span class="d-flex align-items-center justify-content-center text-center">
                                            <i class="fa fa-circle" style="color: #D40000;"></i>&nbsp;${p.color}
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <span class="d-block" style="border: 2px solid #EFEFEF;border-radius: 30px;padding: 5px 20px;background-color: #EFEFEF;">
                            <div class="row">
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
                <div class="position-absolute top-0 start-100 translate-middle shadow" style="background-color: white;border-radius: 100%; padding: 5px 10px;font-size: 18pt;margin-left: -40px;margin-top: 40px;">
                    <i class="far fa-star text-dark"></i>
                </div>
            </div>
        `;
        $carousel_mobil.append(card);
    });

    $carousel_mobil.on("mousedown", function (e) {
        isDown = true;
        startX = e.pageX;
        scrollLeft = $carousel_mobil.scrollLeft();
        $carousel_mobil.css("cursor", "grabbing");
        e.preventDefault(); // cegah block teks
    });

    $(window).on("mouseup", function () {
        isDown = false;
        $carousel_mobil.css("cursor", "grab");
    });

    $carousel_mobil.on("mousemove", function (e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX); // seberapa jauh mouse digeser
        $carousel_mobil.scrollLeft(scrollLeft - walk);
    });
})