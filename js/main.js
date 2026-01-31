// ===== MAIN.JS - Shared functionality for all pages =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('RecipeBook website loaded successfully!');
    
    // ===== MOBILE MENU TOGGLE =====
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('nav') && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // ===== SET ACTIVE NAV LINK =====
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            // Remove active class from all links
            link.classList.remove('active');
            
            // Get just the filename from href
            const linkPage = link.getAttribute('href');
            
            // Set active if it matches current page
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (linkPage === 'index.html' && (currentPage === '' || currentPage === 'index.html'))) {
                link.classList.add('active');
            }
        });
    }
    
    // Run on page load
    setActiveNavLink();
    
    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
    
    // ===== RECIPE CARD HOVER EFFECTS =====
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ===== FEATURE CARD ANIMATIONS =====
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ===== BACK TO TOP BUTTON =====
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #e74c3c;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
        transition: all 0.3s;
    `;
    
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 16px rgba(231, 76, 60, 0.4)';
    });
    
    backToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.3)';
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(backToTopButton);
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // ===== LAZY LOAD IMAGES =====
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }
    
    // ===== ADD CSS FOR BACK TO TOP BUTTON RESPONSIVENESS =====
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .back-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
                font-size: 1rem;
            }
        }
        
        @media (max-width: 480px) {
            .back-to-top {
                bottom: 15px;
                right: 15px;
                width: 40px;
                height: 40px;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ===== LOADING ANIMATION =====
    function showLoading() {
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'loading-overlay';
        loadingDiv.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.9);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        `;
        
        loadingDiv.innerHTML = `
            <div class="spinner" style="
                width: 50px;
                height: 50px;
                border: 5px solid #f3f3f3;
                border-top: 5px solid #e74c3c;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            "></div>
            <p style="margin-top: 20px; color: #333; font-weight: 500;">Loading...</p>
        `;
        
        // Add keyframes for spinner animation
        const spinStyle = document.createElement('style');
        spinStyle.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(spinStyle);
        
        document.body.appendChild(loadingDiv);
        
        // Remove loading after 1 second (simulate loading time)
        setTimeout(() => {
            if (loadingDiv.parentNode) {
                loadingDiv.parentNode.removeChild(loadingDiv);
            }
        }, 1000);
    }
    
    // Show loading animation on external link clicks
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.addEventListener('click', showLoading);
        }
    });
    
    // ===== CURRENT YEAR IN FOOTER =====
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.footer-bottom p');
    yearElements.forEach(element => {
        if (element.textContent.includes('2023')) {
            element.textContent = element.textContent.replace('2023', currentYear);
        }
    });
    
    // ===== VISIT COUNTER (LocalStorage) =====
    function updateVisitCounter() {
        const visitKey = 'recipebook_visits';
        let visits = localStorage.getItem(visitKey);
        
        if (!visits) {
            visits = 1;
        } else {
            visits = parseInt(visits) + 1;
        }
        
        localStorage.setItem(visitKey, visits);
        
        // Optional: Display visit count in console
        console.log(`Welcome to RecipeBook! This is your visit #${visits}`);
        
        // Optional: Display on page (uncomment if you want to show it)
        // const visitCounter = document.createElement('div');
        // visitCounter.className = 'visit-counter';
        // visitCounter.textContent = `Visits: ${visits}`;
        // visitCounter.style.cssText = `
        //     position: fixed;
        //     bottom: 10px;
        //     left: 10px;
        //     background: rgba(0,0,0,0.7);
        //     color: white;
        //     padding: 5px 10px;
        //     border-radius: 3px;
        //     font-size: 12px;
        //     z-index: 1000;
        // `;
        // document.body.appendChild(visitCounter);
    }
    
    updateVisitCounter();
    
    // ===== THEME TOGGLE (Optional) =====
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.title = 'Toggle dark mode';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 90px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #2c3e50;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        transition: all 0.3s;
    `;
    
    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.style.background = '#f39c12';
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggle.style.background = '#f39c12';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.style.background = '#2c3e50';
        }
    });
    
    document.body.appendChild(themeToggle);
    
    // ===== ADD DARK THEME STYLES =====
    const darkThemeStyle = document.createElement('style');
    darkThemeStyle.textContent = `
        .dark-theme {
            background-color: #1a1a1a;
            color: #e0e0e0;
        }
        
        .dark-theme .recipe-card,
        .dark-theme .feature-card,
        .dark-theme .modal-content {
            background-color: #2d2d2d;
            color: #e0e0e0;
        }
        
        .dark-theme h1,
        .dark-theme h2,
        .dark-theme h3,
        .dark-theme h4 {
            color: #ffffff;
        }
        
        .dark-theme p {
            color: #b0b0b0;
        }
        
        .dark-theme .form-group input,
        .dark-theme .form-group select,
        .dark-theme .form-group textarea,
        .dark-theme #search-input {
            background-color: #3d3d3d;
            color: #e0e0e0;
            border-color: #555;
        }
        
        .dark-theme .btn-secondary {
            background-color: #3d3d3d;
            color: #e0e0e0;
        }
        
        .dark-theme .footer-bottom {
            background-color: #1a1a1a;
            color: #b0b0b0;
        }
    `;
    document.head.appendChild(darkThemeStyle);
    
    // ===== INITIALIZATION COMPLETE =====
    console.log('RecipeBook initialization complete!');
});

// ===== UTILITY FUNCTIONS =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    // Add animation keyframes
    const keyframesStyle = document.createElement('style');
    keyframesStyle.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(keyframesStyle);
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Click to dismiss
    notification.addEventListener('click', function() {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// Export utility function (for other JS files to use)
window.showNotification = showNotification;