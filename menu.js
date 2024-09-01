document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
  
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const desktopMenu = document.getElementById('desktop-menu');
    const mobileMenuList = document.getElementById('mobile-menu');
  
    console.log('Desktop menu element:', desktopMenu);
    console.log('Mobile menu element:', mobileMenuList);
  
    // Define menu items
    const menuItems = [
      { href: 'index.html', text: 'Home' },
      { href: 'games.html', text: 'Games' },
      { href: 'projects.html', text: 'Projects' },
      { href: 'contact.html', text: 'Contact' }
    ];
  
    // Function to generate menu items
    function generateMenuItems(container, isMobile) {
      console.log('Generating menu items for', isMobile ? 'mobile' : 'desktop');
      menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        a.className = isMobile ? 'block py-2 hover:text-gray-900' : 'mr-5 hover:text-gray-900';
        li.appendChild(a);
        container.appendChild(li);
        console.log('Added menu item:', item.text);
      });
    }
  
    // Generate desktop menu items
    if (desktopMenu) {
      generateMenuItems(desktopMenu, false);
    } else {
      console.error('Desktop menu element not found');
    }
  
    // Generate mobile menu items
    if (mobileMenuList) {
      generateMenuItems(mobileMenuList, true);
    } else {
      console.error('Mobile menu element not found');
    }
  
    // Toggle mobile menu
    if (hamburgerButton && mobileMenu) {
      hamburgerButton.addEventListener('click', function() {
        console.log('Hamburger button clicked');
        mobileMenu.classList.toggle('active');
      });
    } else {
      console.error('Hamburger button or mobile menu element not found');
    }
  });
  
  console.log('menu.js file loaded');