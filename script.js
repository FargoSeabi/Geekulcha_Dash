document.addEventListener('DOMContentLoaded', () => {
    const formIframe = document.getElementById('affiliationForm');
    const loading = document.getElementById('loading');

    if (loading && formIframe) {
        loading.style.display = 'flex';

        formIframe.addEventListener('load', () => {
            loading.style.display = 'none';
        });
    }
});