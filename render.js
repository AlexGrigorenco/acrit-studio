

(function(){
    const menuList = document.querySelector('.menu-nav-list')
    const subMenuHtml = `<div class="sub-menu">
                        <div class="sub-menu-list">
                            <div class="sub-menu-item">
                                <a href="#">1С-Битрикс</a>
                            </div>
                            <div class="sub-menu-item">
                                <a href="#">Модули для 1С-Битрикс</a>
                            </div>
                            <div class="sub-menu-item">
                                <a href="#">Продления модулей</a>
                            </div>
                            <div class="sub-menu-item">
                                <a href="#">Модули от АКРИТ</a>
                            </div>
                            <div class="sub-menu-item">
                                <a href="#">Акции и скидки</a>
                            </div>
                        </div>
                    </div>`

    const menuItems =[
        {
            title: 'Каталог',
            link: window.location.pathname === '/index.html' ? './articles/articles.html' : window.location.pathname === '/product-card/product-card.html' ? '../articles/articles.html' : '#',
            subMenu: subMenuHtml,
        },
        {
            title: 'Услуги',
            link: window.location.pathname === '/index.html' ? './product-card/product-card.html' : window.location.pathname === '/articles/articles.html' ? '../product-card/product-card.html' : '#',
            subMenu: subMenuHtml,
        },
        {
            title: 'Помощь',
            link: '#',
            subMenu: subMenuHtml,
        },
        {
            title: 'Клиентам',
            link: '#',
            subMenu: subMenuHtml,
        },
        {
            title: 'База знаний',
            link: '#',
            subMenu: subMenuHtml,
        },
        {
            title: 'FAQ Экспорта',
            link: '#',
        },
        {
            title: 'Вакансии',
            link: '#',
        },
    ]

    console.log(window.location.pathname)

    menuItems.forEach(menuItem => {
        const menuItemDiv = document.createElement('div')
        menuItemDiv.classList.add('menu-nav-item')
        menuItemDiv.innerHTML += `<div class="link">
                                        <a href=${menuItem.link}>${menuItem.title}</a>
                                        ${menuItem.subMenu ? '<img class="arrow-icon" src="./images/menu-nav/arrow-down.svg" alt="arrow">' : ''}
                                  </div>
                                    
                                  <div class="underline"></div>
                                  ${menuItem.subMenu ? menuItem.subMenu : ''}`
        
        menuList.appendChild(menuItemDiv)
        
    })

    menuList.querySelectorAll('.menu-nav-item').forEach((item, index) => {
        if(index === 0){
            item.classList.add('active')
        }
    })
})()