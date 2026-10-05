// js/utils.js

// Cart State Management
const getCart = () => {
    const cart = localStorage.getItem('apiCart');
    return cart ? JSON.parse(cart) : [];
};

const saveCart = (cart) => {
    localStorage.setItem('apiCart', JSON.stringify(cart));
    updateCartCount();
};

const addToCart = (apiId) => {
    const cart = getCart();
    if (!cart.includes(apiId)) {
        cart.push(apiId);
        saveCart(cart);
        showToast('API added to your package successfully!');
    } else {
        showToast('API is already in your package.');
    }
};

const removeFromCart = (apiId) => {
    let cart = getCart();
    cart = cart.filter(id => id !== apiId);
    saveCart(cart);
};

const clearCart = () => {
    localStorage.removeItem('apiCart');
    updateCartCount();
};

const updateCartCount = () => {
    const cart = getCart();
    const countElements = document.querySelectorAll('.cart-count');
    countElements.forEach(el => {
        el.textContent = cart.length;
        if(cart.length > 0) {
            el.style.display = 'inline-block';
            el.style.background = '#ef4444';
            el.style.color = '#fff';
            el.style.borderRadius = '50%';
            el.style.padding = '0.1rem 0.4rem';
            el.style.fontSize = '0.75rem';
            el.style.marginLeft = '0.25rem';
        } else {
            el.style.display = 'none';
        }
    });
};

// Toast Notification
const showToast = (message, type = 'success') => {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    const icon = type === 'success' ? '✓' : '⚠️';
    toast.innerHTML = `<span style="font-weight:bold">${icon}</span> <span>${message}</span>`;
    
    container.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

// --- AUTHENTICATION LOGIC ---
const registerUser = (userData) => {
    const users = JSON.parse(localStorage.getItem('apiUsers') || '[]');
    // Check if exists
    if (users.find(u => u.email === userData.email)) {
        return { success: false, message: 'Email already registered' };
    }
    users.push(userData);
    localStorage.setItem('apiUsers', JSON.stringify(users));
    
    // Auto login
    localStorage.setItem('currentUser', JSON.stringify(userData));
    return { success: true };
};

const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('apiUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return { success: true };
    }
    // Hardcoded demo fallback
    if (email === 'demo@api.com' && password === 'password123') {
        const demoUser = { fullName: 'Demo User', email: email, company: 'Demo Corp' };
        localStorage.setItem('currentUser', JSON.stringify(demoUser));
        return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
};

const logoutUser = () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
};

const getCurrentUser = () => {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
};

// --- API KEY GENERATION LOGIC ---
const generateRandomKey = (prefix) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = prefix + '_';
    for (let i = 0; i < 32; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const getApiKeys = () => {
    return JSON.parse(localStorage.getItem('userApiKeys') || '[]');
};

const createApiKey = (name, environment) => {
    const keys = getApiKeys();
    const newKey = {
        id: 'key_' + Date.now(),
        name,
        environment,
        publishable: generateRandomKey('pk_' + (environment === 'Live' ? 'live' : 'test')),
        secret: generateRandomKey('sk_' + (environment === 'Live' ? 'live' : 'test')),
        createdAt: new Date().toISOString(),
        lastUsed: 'Never'
    };
    keys.push(newKey);
    localStorage.setItem('userApiKeys', JSON.stringify(keys));
    return newKey;
};

const deleteApiKey = (id) => {
    let keys = getApiKeys();
    keys = keys.filter(k => k.id !== id);
    localStorage.setItem('userApiKeys', JSON.stringify(keys));
};

// Common initializations
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            document.querySelector('.nav-links')?.classList.toggle('active');
            document.querySelector('.nav-actions')?.classList.toggle('active');
        });
    }
});
