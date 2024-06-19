// welcomeController.js

// Function untuk menampilkan halaman Welcome
const showWelcomePage = (req, res) => {
    res.json({
      message: "Welcome to Cuan Sampah",
      links: {
        login: "/auth/login",
        register: "/auth/register"
      }
    });
  };
  
  module.exports = {
    showWelcomePage,
  };