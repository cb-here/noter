document.querySelector('form').addEventListener('submit', (e) => {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput.value.trim()) {
        e.preventDefault();
    }
})