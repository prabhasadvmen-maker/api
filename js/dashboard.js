// js/dashboard.js

const renderSidebar = (activePage) => {
    return `
        <div class="sidebar">
            <div class="sidebar-header">
                <a href="index.html" class="sidebar-brand">
                    <div style="background: var(--accent-blue); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">
                        <i class="ph-bold ph-cube"></i>
                    </div>
                    API
                </a>
            </div>
            <div class="sidebar-nav">
                <ul class="sidebar-menu">
                    <li><a href="dashboard.html" class="${activePage === 'dashboard' ? 'active' : ''}"><i class="ph ph-squares-four" style="font-size: 1.25rem;"></i> Dashboard</a></li>
                    <li><a href="my-apis.html" class="${activePage === 'my-apis' ? 'active' : ''}"><i class="ph ph-lightning" style="font-size: 1.25rem;"></i> My APIs</a></li>
                    <li><a href="api-credentials.html" class="${activePage === 'credentials' ? 'active' : ''}"><i class="ph ph-key" style="font-size: 1.25rem;"></i> Credentials</a></li>
                    <li><a href="usage.html" class="${activePage === 'usage' ? 'active' : ''}"><i class="ph ph-chart-line-up" style="font-size: 1.25rem;"></i> Usage</a></li>
                    <li><a href="billing.html" class="${activePage === 'billing' ? 'active' : ''}"><i class="ph ph-credit-card" style="font-size: 1.25rem;"></i> Billing</a></li>
                    <li><a href="invoices.html" class="${activePage === 'invoices' ? 'active' : ''}"><i class="ph ph-file-text" style="font-size: 1.25rem;"></i> Invoices</a></li>
                </ul>
            </div>
            <div class="sidebar-footer">
                <ul class="sidebar-menu">
                    <li><a href="documentation.html" class="${activePage === 'documentation' ? 'active' : ''}"><i class="ph ph-book-open" style="font-size: 1.25rem;"></i> Documentation</a></li>
                    <li><a href="support.html" class="${activePage === 'support' ? 'active' : ''}"><i class="ph ph-headphones" style="font-size: 1.25rem;"></i> Support</a></li>
                    <li><a href="settings.html" class="${activePage === 'settings' ? 'active' : ''}"><i class="ph ph-gear" style="font-size: 1.25rem;"></i> Settings</a></li>
                    <li><a href="#" onclick="logoutUser()" style="color: var(--danger);"><i class="ph ph-sign-out" style="font-size: 1.25rem;"></i> Sign Out</a></li>
                </ul>
            </div>
        </div>
    `;
};

const renderTopbar = (title) => {
    const user = getCurrentUser() || { fullName: 'John Doe', company: 'Acme Corp' };
    const initials = user.fullName ? user.fullName.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase() : 'JD';
    
    return `
        <div class="topbar">
            <div>
                <button class="mobile-menu-btn" style="color: var(--text-main); margin-right: 1rem;"><i class="ph ph-list"></i></button>
                <h2 style="font-size: 1.25rem; font-weight: 600; margin: 0;">${title}</h2>
            </div>
            <div class="topbar-right">
                <a href="marketplace.html" class="btn btn-outline" style="padding: 0.5rem 1rem;"><i class="ph ph-plus" style="margin-right: 0.5rem;"></i>Add Services</a>
                <div class="user-profile">
                    <div class="avatar">${initials}</div>
                    <span style="font-weight: 500; font-size: 0.875rem;" class="hide-mobile">${user.fullName}</span>
                </div>
            </div>
        </div>
    `;
};

const initDashboard = (pageId, pageTitle) => {
    // If auth is required, we can check it here
    // if(!getCurrentUser()) window.location.href = 'login.html';
    
    document.getElementById('sidebar-container').innerHTML = renderSidebar(pageId);
    document.getElementById('topbar-container').innerHTML = renderTopbar(pageTitle);
    
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const sidebar = document.querySelector('.sidebar');
            if(sidebar.style.transform === 'translateX(0px)') {
                sidebar.style.transform = 'translateX(-100%)';
            } else {
                sidebar.style.transform = 'translateX(0px)';
                sidebar.style.transition = 'transform 0.3s ease';
            }
        });
    }
};

const getActiveApis = () => {
    let apis = localStorage.getItem('activeApis');
    if (!apis || JSON.parse(apis).length === 0) {
        // Seed default demo data
        apis = JSON.stringify(['api-1', 'api-2', 'api-11', 'api-16']);
        localStorage.setItem('activeApis', apis);
        localStorage.setItem('apiOrderSummary', JSON.stringify({subtotal: 72000, tax: 12960, total: 84960}));
        localStorage.setItem('lastOrderNumber', 'API-2026-DEMO');
    }
    return JSON.parse(apis);
};
