// ===== CONTACT.JS - Contact page functionality =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact page loaded');
    
    // ===== DOM ELEMENTS =====
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectSelect = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');
    const charCounter = document.getElementById('char-counter');
    const newsletterCheckbox = document.getElementById('newsletter');
    const termsCheckbox = document.getElementById('terms');
    const successModal = document.getElementById('success-modal');
    const closeSuccessBtn = document.getElementById('close-success');
    const getDirectionsBtn = document.getElementById('get-directions');
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // ===== ADD MISSING CSS FOR CONTACT PAGE =====
    const contactStyles = document.createElement('style');
    contactStyles.textContent = `
        /* Contact page specific styles */
        .contact-hero {
            text-align: center;
            padding: 4rem 2rem;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .contact-illustration {
            font-size: 4rem;
            color: #e74c3c;
            margin: 2rem 0;
        }
        
        .contact-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 3rem;
        }
        
        @media (max-width: 768px) {
            .contact-content {
                grid-template-columns: 1fr;
            }
        }
        
        .info-cards {
            display: grid;
            gap: 1rem;
            margin: 2rem 0;
        }
        
        .info-card {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            padding: 1.5rem;
            background: white;
            border-radius: 10px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }
        
        .info-icon {
            background: #e74c3c;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            flex-shrink: 0;
        }
        
        .social-contact {
            margin-top: 2rem;
            padding: 1.5rem;
            background: white;
            border-radius: 10px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }
        
        .social-links {
            display: grid;
            gap: 0.5rem;
            margin-top: 1rem;
        }
        
        .social-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.8rem;
            border-radius: 5px;
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: transform 0.3s;
        }
        
        .social-link:hover {
            transform: translateX(5px);
        }
        
        .social-link.facebook { background: #4267B2; }
        .social-link.instagram { background: #E1306C; }
        .social-link.twitter { background: #1DA1F2; }
        .social-link.pinterest { background: #E60023; }
        
        .contact-form-section {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 3px 15px rgba(0,0,0,0.1);
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        
        @media (max-width: 768px) {
            .form-row {
                grid-template-columns: 1fr;
            }
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: #2c3e50;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 0.8rem;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            font-family: inherit;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #3498db;
        }
        
        .checkbox-group {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .checkbox-group input {
            width: auto;
        }
        
        .checkbox-group label {
            margin-bottom: 0;
            font-weight: normal;
        }
        
        .char-count {
            text-align: right;
            font-size: 0.85rem;
            color: #666;
            margin-top: 5px;
        }
        
        .error {
            border-color: #e74c3c !important;
            background-color: rgba(231, 76, 60, 0.05);
        }
        
        .error-message {
            color: #e74c3c;
            font-size: 0.85rem;
            margin-top: 5px;
            display: none;
        }
        
        /* FAQ Section */
        .faq-section {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 0 2rem;
        }
        
        .faq-container {
            margin-top: 2rem;
        }
        
        .faq-item {
            margin-bottom: 1rem;
            border: 1px solid #eee;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .faq-question {
            width: 100%;
            padding: 1.5rem;
            background: white;
            border: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            color: #2c3e50;
            text-align: left;
        }
        
        .faq-question:hover {
            background: #f8f9fa;
        }
        
        .faq-answer {
            padding: 0 1.5rem;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            background: #f8f9fa;
        }
        
        .faq-answer p {
            padding: 1.5rem 0;
            margin: 0;
        }
        
        /* Map Section */
        .map-section {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 0 2rem;
        }
        
        .map-placeholder {
            height: 300px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            position: relative;
            overflow: hidden;
        }
        
        .map-content {
            text-align: center;
            z-index: 1;
        }
        
        .map-content i {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        /* Success Modal */
        .success-modal {
            text-align: center;
            padding: 3rem;
            max-width: 500px;
        }
        
        .success-icon {
            font-size: 4rem;
            color: #2ecc71;
            margin-bottom: 1.5rem;
        }
        
        /* Form Actions */
        .form-actions {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        @media (max-width: 768px) {
            .form-actions {
                flex-direction: column;
            }
        }
    `;
    document.head.appendChild(contactStyles);
    
    // ===== FORM VALIDATION FUNCTIONS =====
    
    function validateName() {
        const name = nameInput ? nameInput.value.trim() : '';
        const errorElement = document.getElementById('name-error');
        
        if (!name) {
            showError(nameInput, errorElement, 'Name is required');
            return false;
        }
        
        if (name.length < 2) {
            showError(nameInput, errorElement, 'Name must be at least 2 characters');
            return false;
        }
        
        if (!/^[A-Za-z\s]+$/.test(name)) {
            showError(nameInput, errorElement, 'Name can only contain letters and spaces');
            return false;
        }
        
        clearError(nameInput, errorElement);
        return true;
    }
    
    function validateEmail() {
        const email = emailInput ? emailInput.value.trim() : '';
        const errorElement = document.getElementById('email-error');
        
        if (!email) {
            showError(emailInput, errorElement, 'Email is required');
            return false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError(emailInput, errorElement, 'Please enter a valid email address');
            return false;
        }
        
        clearError(emailInput, errorElement);
        return true;
    }
    
    function validateSubject() {
        const subject = subjectSelect ? subjectSelect.value : '';
        const errorElement = document.getElementById('subject-error');
        
        if (!subject) {
            showError(subjectSelect, errorElement, 'Please select a subject');
            return false;
        }
        
        clearError(subjectSelect, errorElement);
        return true;
    }
    
    function validateMessage() {
        const message = messageTextarea ? messageTextarea.value.trim() : '';
        const errorElement = document.getElementById('message-error');
        
        if (!message) {
            showError(messageTextarea, errorElement, 'Message is required');
            return false;
        }
        
        if (message.length < 10) {
            showError(messageTextarea, errorElement, 'Message must be at least 10 characters');
            return false;
        }
        
        if (message.length > 500) {
            showError(messageTextarea, errorElement, 'Message cannot exceed 500 characters');
            return false;
        }
        
        clearError(messageTextarea, errorElement);
        return true;
    }
    
    function validateTerms() {
        const errorElement = document.getElementById('terms-error');
        
        if (!termsCheckbox || !termsCheckbox.checked) {
            showError(termsCheckbox, errorElement, 'You must agree to the terms and conditions');
            return false;
        }
        
        clearError(termsCheckbox, errorElement);
        return true;
    }
    
    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();
        const isTermsValid = validateTerms();
        
        return isNameValid && isEmailValid && isSubjectValid && isMessageValid && isTermsValid;
    }
    
    // ===== ERROR HANDLING FUNCTIONS =====
    
    function showError(input, errorElement, message) {
        if (input) input.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }
    
    function clearError(input, errorElement) {
        if (input) input.classList.remove('error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    }
    
    // ===== CHARACTER COUNTER =====
    
    function updateCharCounter() {
        if (!messageTextarea || !charCounter) return;
        
        const length = messageTextarea.value.length;
        charCounter.textContent = length;
        
        if (length > 450) {
            charCounter.style.color = '#e74c3c';
        } else if (length > 400) {
            charCounter.style.color = '#f39c12';
        } else {
            charCounter.style.color = '#27ae60';
        }
    }
    
    // ===== FAQ ACCORDION =====
    
    function initFAQAccordion() {
        if (!faqQuestions.length) return;
        
        faqQuestions.forEach(question => {
            const answer = question.nextElementSibling;
            if (answer && answer.classList.contains('faq-answer')) {
                // Set initial state
                answer.style.maxHeight = '0';
                
                question.addEventListener('click', function() {
                    const icon = this.querySelector('i');
                    
                    // Close other open FAQs
                    document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                        if (otherAnswer !== answer && otherAnswer.style.maxHeight !== '0px') {
                            otherAnswer.style.maxHeight = '0';
                            const otherIcon = otherAnswer.previousElementSibling.querySelector('i');
                            if (otherIcon) {
                                otherIcon.classList.remove('fa-chevron-up');
                                otherIcon.classList.add('fa-chevron-down');
                            }
                        }
                    });
                    
                    // Toggle current FAQ
                    if (answer.style.maxHeight === '0px' || !answer.style.maxHeight) {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                        if (icon) {
                            icon.classList.remove('fa-chevron-down');
                            icon.classList.add('fa-chevron-up');
                        }
                    } else {
                        answer.style.maxHeight = '0';
                        if (icon) {
                            icon.classList.remove('fa-chevron-up');
                            icon.classList.add('fa-chevron-down');
                        }
                    }
                });
            }
        });
    }
    
    // ===== FORM SUBMISSION =====
    
    function handleFormSubmit(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            showNotification('Please fix the errors in the form', 'error');
            return;
        }
        
        // Simulate form submission
        const formData = {
            name: nameInput ? nameInput.value.trim() : '',
            email: emailInput ? emailInput.value.trim() : '',
            subject: subjectSelect ? subjectSelect.options[subjectSelect.selectedIndex].text : '',
            message: messageTextarea ? messageTextarea.value.trim() : '',
            newsletter: newsletterCheckbox ? newsletterCheckbox.checked : false,
            timestamp: new Date().toISOString()
        };
        
        // Save to localStorage
        saveContactMessage(formData);
        
        // Show success modal
        showSuccessModal();
        
        // Reset form
        if (contactForm) contactForm.reset();
        updateCharCounter();
        
        // Clear errors
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
        document.querySelectorAll('.error').forEach(el => {
            el.classList.remove('error');
        });
    }
    
    // ===== SAVE TO LOCALSTORAGE =====
    
    function saveContactMessage(message) {
        let messages = JSON.parse(localStorage.getItem('recipebook_contact_messages')) || [];
        messages.push(message);
        localStorage.setItem('recipebook_contact_messages', JSON.stringify(messages));
        
        console.log('Contact message saved:', message);
        console.log('Total messages:', messages.length);
    }
    
    // ===== NOTIFICATION SYSTEM =====
    
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
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
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
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
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }
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
    
    // ===== SUCCESS MODAL =====
    
    function showSuccessModal() {
        if (!successModal) {
            // Create modal if it doesn't exist
            const modal = document.createElement('div');
            modal.id = 'success-modal';
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
            `;
            
            modal.innerHTML = `
                <div style="
                    background: white;
                    border-radius: 15px;
                    padding: 3rem;
                    max-width: 500px;
                    width: 90%;
                    text-align: center;
                ">
                    <div style="font-size: 4rem; color: #2ecc71; margin-bottom: 1.5rem;">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h2 style="margin-bottom: 1rem;">Message Sent Successfully!</h2>
                    <p style="margin-bottom: 2rem; color: #666;">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    <button id="temp-close-success" style="
                        background: #e74c3c;
                        color: white;
                        border: none;
                        padding: 0.8rem 2rem;
                        border-radius: 5px;
                        font-size: 1rem;
                        cursor: pointer;
                        font-weight: 600;
                    ">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Add event listener for the temporary close button
            document.getElementById('temp-close-success').addEventListener('click', () => {
                document.body.removeChild(modal);
            });
            
            // Close when clicking outside
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
            
            // Auto-close after 5 seconds
            setTimeout(() => {
                if (modal.parentNode) {
                    document.body.removeChild(modal);
                }
            }, 5000);
            
        } else {
            // Use existing modal
            successModal.style.display = 'flex';
            
            // Auto-close after 5 seconds
            setTimeout(() => {
                if (successModal && successModal.style.display === 'flex') {
                    successModal.style.display = 'none';
                }
            }, 5000);
        }
    }
    
    // ===== GET DIRECTIONS =====
    
    function handleGetDirections() {
        const address = "123 Recipe Street, Food City, FC 10001";
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        
        // Open in new tab
        window.open(mapsUrl, '_blank');
        
        showNotification('Opening directions in Google Maps...', 'info');
    }
    
    // ===== SOCIAL LINKS =====
    
    function initSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-link');
        
        socialLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const platform = this.classList.contains('facebook') ? 'Facebook' :
                               this.classList.contains('instagram') ? 'Instagram' :
                               this.classList.contains('twitter') ? 'Twitter' : 'Pinterest';
                
                showNotification(`${platform} link clicked (simulated)`, 'info');
            });
        });
    }
    
    // ===== REAL-TIME VALIDATION =====
    
    function initRealTimeValidation() {
        // Name validation
        if (nameInput) {
            nameInput.addEventListener('blur', validateName);
            nameInput.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateName();
                }
            });
        }
        
        // Email validation
        if (emailInput) {
            emailInput.addEventListener('blur', validateEmail);
            emailInput.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateEmail();
                }
            });
        }
        
        // Subject validation
        if (subjectSelect) {
            subjectSelect.addEventListener('change', validateSubject);
        }
        
        // Message validation
        if (messageTextarea) {
            messageTextarea.addEventListener('input', function() {
                updateCharCounter();
                if (this.classList.contains('error')) {
                    validateMessage();
                }
            });
            messageTextarea.addEventListener('blur', validateMessage);
        }
        
        // Terms validation
        if (termsCheckbox) {
            termsCheckbox.addEventListener('change', validateTerms);
        }
    }
    
    // ===== EVENT LISTENERS =====
    
    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Success modal close
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', () => {
            if (successModal) successModal.style.display = 'none';
        });
    }
    
    // Success modal close on outside click
    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.style.display = 'none';
            }
        });
    }
    
    // Get directions
    if (getDirectionsBtn) {
        getDirectionsBtn.addEventListener('click', handleGetDirections);
    }
    
    // Form reset
    const resetBtn = contactForm ? contactForm.querySelector('button[type="reset"]') : null;
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            document.querySelectorAll('.error-message').forEach(el => {
                el.textContent = '';
                el.style.display = 'none';
            });
            document.querySelectorAll('.error').forEach(el => {
                el.classList.remove('error');
            });
            updateCharCounter();
            showNotification('Form cleared', 'info');
        });
    }
    
    // ===== KEYBOARD SHORTCUTS =====
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + Enter to submit form
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && contactForm) {
            e.preventDefault();
            contactForm.dispatchEvent(new Event('submit'));
        }
        
        // Escape to close success modal
        if (e.key === 'Escape') {
            if (successModal && successModal.style.display === 'flex') {
                successModal.style.display = 'none';
            }
        }
    });
    
    // ===== INITIALIZE =====
    
    // Initialize components
    initFAQAccordion();
    initSocialLinks();
    initRealTimeValidation();
    updateCharCounter(); // Initial character count
    
    // Show welcome message
    setTimeout(() => {
        console.log('Contact page fully initialized');
    }, 100);
});