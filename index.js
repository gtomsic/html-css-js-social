// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item')

// Remove all active class from menu item before adding
const changeActiveItem = () => {
  menuItems.forEach((item) => item.classList.remove('active'))
}

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    changeActiveItem()
    item.classList.add('active')
    if (item.id != 'notifications') {
      document.querySelector('.notification-popup').style.display = 'none'
      document.querySelector('.notification-count').style.display = 'block'
    } else {
      document.querySelector('.notification-popup').style.display = 'block'
      document.querySelector('.notification-count').style.display = 'none'
    }
  })
})
