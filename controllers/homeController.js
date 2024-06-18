// controllers/home.js
exports.getHomePage = (req, res) => {
    res.status(200).json({
        topFunctions: [
            { name: 'Cart', route: '/cartRoutes' },
            { name: 'History', route: '/historyRoutes' }
        ],
        middleFunctions: {
            label: 'Our Services',
            services: [
                { name: 'Sell Waste', route: '/sellWasteRoutes' },
                { name: 'Pickup Waste', route: '/pickupRoutes' }
            ]
        },
        bottomNavbar: [
            { name: 'Home', route: '/homeRoutes' },
            { name: 'Market', route: '/marketRoutes' },
            { name: 'Camera for Waste Classification API', route: '/camera' },
            { name: 'Pickup', route: '/pickupRoutes' },
            { name: 'Profile', route: '/profileRoutes' }
        ]
    });
};
