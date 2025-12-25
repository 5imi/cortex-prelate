// CSRF Protection for Contact Form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        // Generate CSRF token
        const csrfToken = generateCSRFToken();
        
        // Add CSRF token to form
        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = '_csrf_token';
        csrfInput.value = csrfToken;
        contactForm.appendChild(csrfInput);
        
        // Store token in session storage for validation
        sessionStorage.setItem('csrf_token', csrfToken);
    }
});

function generateCSRFToken() {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15) + 
           Date.now().toString(36);
}

// Toast notification function
function closeToast() {
    const toast = document.getElementById('success-toast');
    if (toast) {
        toast.style.display = 'none';
    }
}

// Show success toast if redirected with success parameter
if (window.location.search.includes('status=success')) {
    const toast = document.getElementById('success-toast');
    if (toast) {
        toast.style.display = 'block';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 5000);
    }
}