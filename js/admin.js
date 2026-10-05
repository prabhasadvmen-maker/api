// js/admin.js

const renderAdminSidebar = (activePage) => {
    return `
        <div class="sidebar" style="background-color: #020617;">
            <div class="sidebar-header" style="background-color: #0f172a; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <a href="index.html" class="sidebar-brand">
                    <div style="background: var(--accent-blue); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px;">
                        <i class="ph-bold ph-cube"></i>
                    </div>
                    API <span class="badge" style="background: #3b82f6; color: white; font-size: 0.6rem; padding: 0.15rem 0.4rem; margin-left: 0.5rem;">ADMIN</span>
                </a>
            </div>
            <div class="sidebar-nav">
                <ul class="sidebar-menu">
                    <li><a href="admin.html" class="${activePage === 'overview' ? 'active' : ''}"><i class="ph ph-squares-four" style="font-size: 1.25rem;"></i> Overview</a></li>
                    <li><a href="admin-services.html" class="${activePage === 'services' ? 'active' : ''}"><i class="ph ph-plugs-connected" style="font-size: 1.25rem;"></i> API Services</a></li>
                    <li><a href="admin-providers.html" class="${activePage === 'providers' ? 'active' : ''}"><i class="ph ph-buildings" style="font-size: 1.25rem;"></i> Providers</a></li>
                    <li><a href="admin-customers.html" class="${activePage === 'customers' ? 'active' : ''}"><i class="ph ph-users" style="font-size: 1.25rem;"></i> Customers</a></li>
                    <li><a href="admin-orders.html" class="${activePage === 'orders' ? 'active' : ''}"><i class="ph ph-shopping-cart" style="font-size: 1.25rem;"></i> Orders</a></li>
                    <li><a href="admin-subscriptions.html" class="${activePage === 'subscriptions' ? 'active' : ''}"><i class="ph ph-arrows-clockwise" style="font-size: 1.25rem;"></i> Subscriptions</a></li>
                    <li><a href="admin-payments.html" class="${activePage === 'payments' ? 'active' : ''}"><i class="ph ph-credit-card" style="font-size: 1.25rem;"></i> Payments</a></li>
                    <li><a href="admin-invoices.html" class="${activePage === 'invoices' ? 'active' : ''}"><i class="ph ph-file-text" style="font-size: 1.25rem;"></i> Invoices</a></li>
                    <li><a href="admin-usage.html" class="${activePage === 'usage' ? 'active' : ''}"><i class="ph ph-chart-bar" style="font-size: 1.25rem;"></i> Usage</a></li>
                    <li><a href="admin-support.html" class="${activePage === 'support' ? 'active' : ''}"><i class="ph ph-lifebuoy" style="font-size: 1.25rem;"></i> Support</a></li>
                </ul>
            </div>
            <div class="sidebar-footer" style="border-top: 1px solid rgba(255,255,255,0.05);">
                <ul class="sidebar-menu">
                    <li><a href="admin-settings.html" class="${activePage === 'settings' ? 'active' : ''}"><i class="ph ph-gear" style="font-size: 1.25rem;"></i> Settings</a></li>
                    <li><a href="index.html" style="color: #ef4444;"><i class="ph ph-sign-out" style="font-size: 1.25rem;"></i> Exit Admin</a></li>
                </ul>
            </div>
        </div>
    `;
};

const renderAdminTopbar = (title) => {
    return `
        <div class="topbar" style="border-bottom: 1px solid var(--border-color); background: var(--primary-bg);">
            <div>
                <button class="mobile-menu-btn" style="color: var(--text-main); margin-right: 1rem;"><i class="ph ph-list"></i></button>
                <h2 style="font-size: 1.25rem; font-weight: 600; margin: 0; display: flex; align-items: center; gap: 0.5rem;">
                    ${title}
                </h2>
            </div>
            <div class="topbar-right">
                <div style="position: relative; margin-right: 1rem;">
                    <i class="ph ph-bell" style="font-size: 1.25rem; color: var(--text-muted);"></i>
                    <span style="position: absolute; top: -2px; right: -2px; width: 8px; height: 8px; background: var(--danger); border-radius: 50%;"></span>
                </div>
                <div class="user-profile">
                    <div class="avatar" style="background-color: #f3e8ff; color: #6b21a8; font-size: 0.875rem;">SA</div>
                    <span style="font-weight: 500; font-size: 0.875rem;" class="hide-mobile">Super Admin</span>
                    <i class="ph ph-caret-down" style="font-size: 0.75rem; color: var(--text-muted); margin-left: 0.25rem;"></i>
                </div>
            </div>
        </div>
    `;
};
