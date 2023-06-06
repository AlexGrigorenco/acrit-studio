

//! RENDER MENU NAV AND MENU MOBILE
(function(){
    const menuList = document.querySelector('.menu-desctop .menu-nav-list')
    const menuMobileList = document.querySelector('.menu-mobile-wrapper .menu-nav-list')
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
    const icon = '<svg class="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 6L8 11L3 6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    const menuItems =[
        {
            title: 'Статьи',
            link: window.location.pathname.includes('/index.html') ? './articles/articles.html' : window.location.pathname.includes('/product-card/product-card.html') ? '../articles/articles.html' : '#',
            subMenu: subMenuHtml,
        },
        {
            title: 'Продукт',
            link: window.location.pathname.includes('/index.html') ? './product-card/product-card.html' : window.location.pathname.includes('/articles/articles.html') ? '../product-card/product-card.html' : '#',
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

    

    menuItems.forEach(menuItem => {
        const menuItemDiv = document.createElement('div')
        menuItemDiv.classList.add('menu-nav-item')
        menuItemDiv.innerHTML += `<div class="link">
                                        <a href=${menuItem.link}>${menuItem.title}</a>
                                        ${menuItem.subMenu ? icon : ''}
                                  </div>
                                    
                                  <div class="underline"></div>
                                  ${menuItem.subMenu ? menuItem.subMenu : ''}`
        
        menuList.appendChild(menuItemDiv)
        menuMobileList.appendChild(menuItemDiv.cloneNode(true))
        
    })

    if(window.location.pathname.includes('/articles/articles.html')){
        menuList.querySelectorAll('a').forEach(link => {
            link.textContent === 'Статьи' ? link.closest('.menu-nav-item').classList.add('active') : null
        })
    }else if(window.location.pathname.includes('/product-card/product-card.html')){
        menuList.querySelectorAll('a').forEach(link => {
            link.textContent === 'Продукт' ? link.closest('.menu-nav-item').classList.add('active') : null
        })
    }
})();

//! RENDER HEADER ICONS
(function(){
    if(window.location.pathname.includes('/index.html')){
        const headerIconsWrapper = document.querySelector('.header .header-icons-wrapper')
        const headerIcons = [
            {
                title: 'Идея',
                icon: 'icon-idea',
            },
            {
                title: 'Анализ',
                icon: 'icon-analysis',
            },
            {
                title: 'Проект',
                icon: 'icon-project',
            },
            {
                title: 'Дизайн',
                icon: 'icon-design',
            },
            {
                title: 'Маркетинг',
                icon: 'icon-marketing',
            },
            {
                title: 'Разработка',
                icon: 'icon-development',
            },
            {
                title: 'Наполнение',
                icon: 'icon-content',
            },
            {
                title: 'Техподдержка',
                icon: 'icon-support',
            },
        ]

        headerIcons.forEach(headerIcon => {
            const iconDiv = document.createElement('div')
            iconDiv.classList.add('header-icon')

            iconDiv.innerHTML = `<a class="header-icon__link" href="#">
                                    <svg class="svg-icon">
                                        <use xlink:href="./images/header/sprite.svg#${headerIcon.icon}"></use>
                                    </svg>
                                    <span>${headerIcon.title}</span>
                                </a>`

            headerIconsWrapper.appendChild(iconDiv)
        })

    }
})();

//! RENDER FOOTER COLUMNS
(function(){
    const footerColumnsWrapper = document.querySelector('.footer .footer-columns-wrapper')
    const footerColumns = [
        {
            title: 'Услуги',
            links: [
                'Услуги разработки',
                'Настройки интеграций с маркетплайсами',
                'Экспертиза производительности',
                'Абонентское обслуживание',
                'Переход на старшие редакции',
                'Продление решений',
            ]
        },
        {
            title: 'Лицензии Bitrix',
            links: [
                'Управление сайтом',
                'Продления лицензий',
                'Переход на высшие редакции',
                'Битрикс24',
                'Корпоративный портал',
                'Подписки на Битрикс24.Маркет',
            ]
        },
        {
            title: 'Лицензии Bitrix marketplace',
            links: [
                'Готовые интернет-магазины',
                'Готовые сайты',
                'Для интернет-магазина',
                'Инструменты',
                'Интеграция',
                'Маркетинг, реклама',
                'Мобильные приложения',
                'Поддержка клиентов',
                'Решения для Битрикс24',
            ]
        },
    ]

    footerColumns.forEach(footerColumn => {
        const columnDiv = document.createElement('div')
        columnDiv.classList.add('footer-column')

        const linkList = document.createElement('div')
        linkList.classList.add('footer-links-list')
        
        footerColumn.links.forEach(link => {
            linkDiv = document.createElement('div')
            linkDiv.classList.add('footer-link')
            linkDiv.innerHTML = `<a href="#">
                                            ${link}
                                        </a>`
            linkList.appendChild(linkDiv)
        })

        columnDiv.innerHTML = `<div class="footer-title">
                                    ${footerColumn.title}
                                </div>`

        columnDiv.appendChild(linkList)

        footerColumnsWrapper.appendChild(columnDiv)
    })
})();

//! RENDER ARTICLES
(function(){
    if(window.location.pathname.includes('/articles/articles.html')){
        const articlesWrapper = document.querySelector('.articles .articles-list')
        const articles = [
            {
                img: '../images/articles/article-image-1.jpg',
                title: '6 полезных библиотек для программирования на PHP. Часть 1',
                text: 'Перевод публикации «30 Amazing PHP Libraries for Programmers and Developers»',
            },
            {
                img: '../images/articles/article-image-2.jpg',
                title: '6 полезных библиотек для программирования на PHP. Часть 2',
                text: 'pGraph — совершенно необъятная библиотека для построения объектно-ориентированных графиков. Строит диаграммы линейные, плоярные, гистограммы,',
            },
            {
                img: '../images/articles/article-image-3.jpg',
                title: '7 полезных инструментов Chrome для веб-разработчика',
                text: 'Сочетание клавиш Ctrl + P (Cmd + P, если вы работаете на Mac). В Sublime Text подобная функция называется «Go to anything», а в Idea — «Searching Everywhere».',
            },
            {
                img: '../images/articles/article-image-4.jpg',
                title: 'HTMLслепки для индексации ajax-сайтов поисковиками',
                text: 'С индексацией поисковыми машинами все не так гладко. Подгружаемый «на лету» контент поисковые роботы ловят нестабильно. Как быть?',
            },
            {
                img: '../images/articles/article-image-5.jpg',
                title: 'Волшебный ускоритель compress.php',
                text: 'Этот маленький файл может удивительно много. Объединяет многочисленные таблицы стилей в один файл CSS. Так же поступает с множеством скриптов Javascript. Сжимает полученные файлы. Объед',
            },
            {
                img: '../images/articles/article-image-6.jpg',
                title: 'Дизайн email для мобильных устройств',
                text: 'Вы регулярно рассылаете письма настоящим и будущим заказчикам? Тогда стоит учитывать тот факт, что не менее трети из них просматривают почту на смартфонах и мобильных телефонах.',
            },
            {
                img: '../images/articles/article-image-7.jpg',
                title: 'Есть ли безопасность на FL.RU?',
                text: 'Миллионы пользователей FL.RU ведут переписку между собой. Но при этом документы, приложенные к переписке, исправно индексируются Яндексом и доступны в его выдаче!',
            },
            {
                img: '../images/articles/article-image-8.jpg',
                title: 'Ещё 7 нужных инструментов Chrome для веб-разработчика',
                text: 'Если в редакторе кликнуть образец цвета, появится экранная пипетка в виде лупы. Вы сможете указать цвет на одной из открытых страниц с точностью до одного пикселя.',
            },
            {
                img: '../images/articles/article-image-9.jpg',
                title: 'Ещё раз об удобных интерфейсах',
                text: 'Интерфейсы большинства сайтов неудобны. Или очень неудобны. Но бывает так, что выбора нет, надо заполнять именно эту анкету, именно здесь и сейчас. Например, на шенгенскую визу, или коммунальн..',
            },
            {
                img: '../images/articles/article-image-10.jpg',
                title: 'Зачем вообще нужна техподдержка сайта?',
                text: 'Техподдержка подразумевает под собой ежемесячное абонентское обслуживание вашего сайта, выявление неполадок и своевременное их устранение. Так ли она нужна?',
            },
            {
                img: '../images/articles/article-image-11.jpg',
                title: 'Как превратить смартфон в пульт управления презентацией?',
                text: 'Как превратить смартфон в пульт управления презентацией? Это не очень трудная задача. Мы будем использовать браузеры, поддерживающие открытие сокетов. При помощи Node.js и Socket.io мы.',
            },
            {
                img: '../images/articles/article-image-12.jpg',
                title: 'Количество оповещений во вкладке браузера',
                text: 'Ваш сервис должен обеспечивать активное общение пользователей, постоянное обновление контента, требующее быстрой реакции участников? Как Gmail, Facebook, Twitter? Все они используют функци.',
            },
        ]

        articles.forEach(item => {
            const article = document.createElement('div')
            article.classList.add('article')

            article.innerHTML = `<div class="marker">
                                    Техподдержка советует
                                </div>
                                <div class="img-wrapper">
                                    <a href="#">
                                        <img src=${item.img} alt="article">
                                    </a>
                                </div>
                                <div class="article__title">
                                    <a href="#">
                                        ${item.title}
                                    </a>
                                </div>
                                <div class="article__description">
                                    ${item.text}
                                </div>`

            articlesWrapper.appendChild(article)
        })
    }
})();