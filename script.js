document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');
    const menuIcon = toggleButton.querySelector('ion-icon[name="menu-outline"]');
    const closeIcon = toggleButton.querySelector('ion-icon[name="close-outline"]');
    const links = document.querySelectorAll('[data-section]');
    const sections = document.querySelectorAll('main section');

    // Sidebar toggle 
    toggleButton.addEventListener('click', () => {

        sidebar.classList.toggle('hidden');    
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Section navigation 
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Hide 
            sections.forEach(section => section.classList.add('hidden'));

            // Show 
            const targetSection = document.getElementById(link.dataset.section);
            if (targetSection) targetSection.classList.remove('hidden');
        });
    });

    // Set default 
    document.getElementById('Title').classList.remove('hidden');
});
