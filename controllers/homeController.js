// homeController.js

// Function untuk top navbar
const goToCart = (req, res) => {
    res.redirect('/cart'); // Arahkan ke halaman Cart
  };
  
  const goToHistory = (req, res) => {
    res.redirect('/history'); // Arahkan ke halaman History
  };
  
  // Function untuk middle section "Our Services"
  const goToSellWaste = (req, res) => {
    res.redirect('/sellWaste'); // Arahkan ke halaman Sell Waste
  };
  
  const goToPickupWaste = (req, res) => {
    res.redirect('/pickup'); // Arahkan ke halaman Pickup Waste
  };
  
  // Function untuk bottom navbar
  const goToHome = (req, res) => {
    res.redirect('/home'); // Arahkan kembali ke halaman Home (tidak harus diimplementasikan jika di homeRoutes.js)
  };
  
  const goToMarket = (req, res) => {
    res.redirect('/market'); // Arahkan ke halaman Market
  };
  
  const goToCamera = (req, res) => {
    res.redirect('/camera'); // Arahkan ke halaman Camera (untuk prediksi gambar)
  };
  
  const goToProfile = (req, res) => {
    res.redirect('/profile'); // Arahkan ke halaman Profile
  };
  
  module.exports = {
    goToCart,
    goToHistory,
    goToSellWaste,
    goToPickupWaste,
    goToHome,
    goToMarket,
    goToCamera,
    goToProfile,
  };