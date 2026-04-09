   // Animation de chargement fluide
        window.addEventListener('load', function() {
            const loader = document.getElementById('loader');
            const mainContent = document.getElementById('mainContent');
            
            // Afficher le contenu en arrière-plan (transparent au début)
            mainContent.style.display = 'block';
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'scale(0.98)';
            
            // Attendre un peu puis faire le fondu
            setTimeout(function() {
                // Faire disparaître le loader en fondu
                loader.style.transition = 'opacity 1s ease-out';
                loader.style.opacity = '0';
                
                // Faire apparaître le contenu en fondu
                mainContent.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'scale(1)';
                
                // Cacher complètement le loader après l'animation
                setTimeout(function() {
                    loader.style.display = 'none';
                }, 1000);
            }, 1800);
        });