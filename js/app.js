// js/app.js
// General app interactions

// Render APIs to a specific container
const renderAPIs = (containerId, apis, renderType = 'grid') => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    apis.forEach(api => {
        const card = document.createElement('div');
        card.className = 'card card-hover api-card';
        
        card.innerHTML = `
            <div class="card-body">
                <div class="flex justify-between items-start">
                    <div class="api-icon"><i class="ph ${api.icon}"></i></div>
                    <span class="badge badge-blue">${api.category}</span>
                </div>
                <h3 class="mt-4 mb-2">${api.name}</h3>
                <p class="text-muted" style="font-size: 0.875rem;">${api.description}</p>
                <div class="api-price">
                    ${formatCurrency(api.price)}
                    <span>/ year</span>
                </div>
            </div>
            <div class="card-footer flex justify-between items-center">
                <a href="api-details.html?id=${api.id}" class="btn btn-outline" style="padding: 0.5rem 1rem;">Details</a>
                <button class="btn btn-primary" onclick="addToCart('${api.id}')">Add to Project</button>
            </div>
        `;
        
        container.appendChild(card);
    });
};
