module.exports = {
    important: true,
    purge: ['./src/**/*.{jsx,tsx}', './pages/**/*.{jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            zIndex: ['hover'],
            filter: ['hover']
        },
    },
    plugins: [],
};
