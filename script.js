document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');
    const links = document.querySelectorAll('[data-section]');
    const sections = document.querySelectorAll('main section');

    // Sidebar toggle functionality
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });

    // Section navigation functionality
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Hide all sections
            sections.forEach(section => section.classList.add('hidden'));

            // Show target section
            const targetSection = document.getElementById(link.dataset.section);
            if (targetSection) targetSection.classList.remove('hidden');
        });
    });

    // Set default active section
    document.getElementById('dashboard').classList.remove('hidden');
});
