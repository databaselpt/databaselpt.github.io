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
    
      // Periksa apakah pengguna menggunakan perangkat seluler
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
      // URL WhatsApp
      var whatsappURL = "";
    
      if (isMobile) {
        // URL untuk perangkat seluler
        whatsappURL = "https://api.whatsapp.com/send?phone=" + formattedPhoneNumber + "&text=" + encodedMessage;
      } else {
        // URL untuk desktop (WhatsApp Web)
        whatsappURL = "https://web.whatsapp.com/send?phone=" + formattedPhoneNumber + "&text=" + encodedMessage;
      }
    
      // Membuka WhatsApp pada perangkat pengguna
      window.open(whatsappURL, "_blank");
    }
    
