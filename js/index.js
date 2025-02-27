
let pageLoaded = false;

function initPage() {
    let loadingDiv = document.getElementById('loading');

    loadingDiv.style.animation = 'loadingFadeOut 1s forwards';
    pageLoaded = true;
}

// onload
window.addEventListener('DOMContentLoaded', initPage);