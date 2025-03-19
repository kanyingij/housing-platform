
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const sidebarToggle = document.getElementById('sidebar-toggle');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    mainContent.classList.toggle('expanded');
});


const darkMode = document.getElementById('dark-mode');
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

