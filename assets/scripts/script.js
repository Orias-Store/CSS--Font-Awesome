const DATAPATH = 'assets/jsons/data.json';

async function loadAndRenderUpdates() {
    try {
        const response = await fetch(DATAPATH);
        if (!response.ok) throw new Error("Network response was not ok");
        const updatesDatabase = await response.json();
        renderUpdates(updatesDatabase);
    } catch (error) {
        console.error("Load data error:", error);
        document.getElementById('updates-container').innerHTML =
            '<p style="text-align:center; color:red; padding: 20px;">Error: Cannot load JSON data.</p>';
    }
}

// Render function
function renderUpdates(updatesDatabase) {
    const container = document.getElementById('updates-container');
    container.innerHTML = '';

    updatesDatabase.forEach(update => {
        const article = document.createElement('article');
        article.className = 'update-block';
        const badgeStatus = update.isNew ? '<span class="badge new-badge">NEW</span>' : '';

        const iconsGrid = update.resources.map(iconClass => {
            return `<div class="icon-item" title="${iconClass}">
                        <i class="${iconClass}"></i>
                    </div>`;
        }).join('');

        article.innerHTML = `
            <div class="update-header">
                <div class="version-info">
                    <h2>${update.title}</h2>
                    ${badgeStatus}
                </div>
                <p class="update-meta">
                    <i class="${update.descIcon || 'fas fa-info-circle'}"></i> 
                    ${update.description}
                </p>
            </div>
            <div class="icon-grid">
                ${iconsGrid}
            </div>
        `;
        container.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', loadAndRenderUpdates);