function validateForm() {
    // Mendapatkan nilai input username dan password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Memeriksa kombinasi username dan password yang benar
    if (username === "pajaklpt" && password === "pajaklptlogin") {
      return true; // Memungkinkan pengiriman form dan mengarahkan ke halaman dashboard.html
    } else if (username === "akunbaru" && password === "passwordbaru") {
      window.location.href = "dashboard2.html"; // Mengarahkan ke halaman dashboard2.html
      return false; // Mencegah pengiriman form
    } else if (username === "akunlain1" && password === "password1") {
      window.location.href = "dashboard3.html"; // Mengarahkan ke halaman dashboard3.html
      return false; // Mencegah pengiriman form
    } else if (username === "akunlain2" && password === "password2") {
      window.location.href = "dashboard4.html"; // Mengarahkan ke halaman dashboard4.html
      return false; // Mencegah pengiriman form
    } else {
    Swal.fire({
        icon: 'warning', // Menggunakan ikon warning
        title: 'Oops...',
        text: 'Username atau Password salah',
    });
    return false; // Mencegah pengiriman form
    }

    }

    
        function forgotPassword() {
        var phoneNumber = "6285750852290"; // Nomor telepon dengan kode wilayah Indonesia
        var message = "Saya lupa username dan password login akun lpt, mohon berikan passwordnya";

        // Format nomor telepon tanpa karakter "-" atau spasi
        var formattedPhoneNumber = phoneNumber.replace(/[-\s]/g, "");

        // Format pesan untuk URL
        var encodedMessage = encodeURIComponent(message);

        // URL deep linking WhatsApp
        var whatsappURL = "https://web.whatsapp.com/send?phone=" + formattedPhoneNumber + "&text=" + encodedMessage;

        // Membuka WhatsApp Web
        window.open(whatsappURL, "_blank");
        }
