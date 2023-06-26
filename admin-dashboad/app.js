let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

const openSidebar = function () {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
};

const closeSidebar = function() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
};
