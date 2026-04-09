// ========== OUVERTURE DU RIDEAU SUR LA PAGE SPECTACLE ==========
document.addEventListener('DOMContentLoaded', function() {
    const curtainOverlay = document.getElementById('curtainOverlay');
    
    // Si on est sur la page spectacle, on lance l'animation du rideau
    if (curtainOverlay) {
        // Cacher le contenu au départ
        const mainContent = document.getElementById('mainContent');
        if (mainContent) {
            mainContent.style.opacity = '0.1';
        }
        
        // Déclencher l'ouverture du rideau
        setTimeout(() => {
            curtainOverlay.classList.add('open');
        }, 100);
        
        // Faire apparaître le contenu après l'ouverture
        setTimeout(() => {
            if (mainContent) {
                mainContent.style.transition = 'opacity 1s ease-out';
                mainContent.style.opacity = '0.9';
                 mainContent.style.filter = 'blur(5px) 2s'; // Supprimer le flou après l'ouverture
            }
        }, 1300);
        
        // Supprimer l'overlay après l'animation
        setTimeout(() => {
            curtainOverlay.style.display = 'none';
        }, 2500);
    }
});

// ========== TRANSITION ENTRE LES PAGES ==========
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('mainContent');
    const isSpectaclePage = window.location.pathname.includes('spectacle.html');
    
    // Pour les pages autres que spectacle
    if (mainContent && !isSpectaclePage) {
        mainContent.style.opacity = '1';
        mainContent.style.transition = 'opacity 1s ease-out';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);
    }
    
    // Gestion des liens internes
    const allLinks = document.querySelectorAll('a');
    
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href && 
            !href.startsWith('http') && 
            !href.startsWith('https') && 
            !href.startsWith('#') &&
            !link.getAttribute('target')) {
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetUrl = this.getAttribute('href');
                
                if (mainContent) {
                    mainContent.style.transition = 'opacity 1s ease-out';
                    mainContent.style.opacity = '1';
                }
                
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 200);
            });
        }
    });
    
    // Lien actif
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});