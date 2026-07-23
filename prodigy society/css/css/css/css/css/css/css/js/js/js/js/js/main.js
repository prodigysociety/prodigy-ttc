document.addEventListener('DOMContentLoaded', () => {
    // VanillaTilt init for cards if present
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.glass-card'), {
            max: 10,
            speed: 400,
            glare: true,
            'max-glare': 0.15
        });
    }

    // Console Branding
    console.log("%c PRODIGY SOCIETY ", "background: #00d8f6; color: #030712; font-weight: bold; font-size: 14px;");
    console.log("Tilottama Campus • Established 2083 B.S.");
});