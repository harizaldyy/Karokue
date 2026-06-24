var scrollPosition = 0; // variabel untuk menyimpan posisi scroll sebelum modal ditampilkan

function openModal(imgSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");

    // Simpan posisi scroll saat ini sebelum modal ditampilkan
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    modal.style.display = "block";
    modalImg.src = imgSrc;

    // Atur posisi scroll kembali ke posisi sebelum modal ditampilkan
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    // Atur posisi scroll kembali ke posisi sebelum modal ditampilkan
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, scrollPosition);
}


