const sidebarToggle = document.querySelector('.sidebar-toggle');
const close = document.querySelector('.sidebar-header');
const sidebar = document.querySelector('.sidebar');

window.addEventListener('DOMContentLoaded', () => {
  sidebar.classList.toggle('show-sidebar');
});

close.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});
