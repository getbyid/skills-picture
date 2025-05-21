# Skills picture from HTML

Раньше у каждого рыцаря был герб. Помещаемые на герб символы говорили о характере и жизненном пути его носителя.

В наше время в онлайне вместо герба применяется аватарка. Можно создать картинку для профиля (аватарку) подобно гербу рыцаря, разместив на ней символы своих навыков.

## Логотипы для навыков

Навык (skill) - это практический опыт применения какой-либо технологии или инструмента. Подходящий логотип можно найти на соответствующем сайте:

* [Go](https://go.dev/blog/go-brand)
* [HTML](https://www.w3.org/html/logo/)
* [Node.js](https://nodejs.dev/en/about/branding/)
* [PHP](https://www.php.net/download-logos.php)
* [Python](https://www.python.org/community/logos/)

Кое-где можно добыть сразу несколько логотипов по общей теме:

* [Linux Foundation Projects](https://www.linuxfoundation.org/projects), формат SVG - AsyncAPI, GraphQL, gRPC, JSON Schema, NATS, OpenAPI, Rust, Linux, ...
* [OpenJS Foundation Projects](https://openjsf.org/projects/) - Node.js, webpack, Fastify, Jest, ...

Нужны логотипы с прозрачным фоном, лучше всего в формате PNG или SVG - есть прозрачность, нет потери качества при однотонной заливке.

## Цвет фона

Для каждого навыка (логотипа) нужно выбрать цвет фона. Его следует искать на официальном сайте, иногда он там указан прямым текстом:

* [Linux Foundation](https://www.linuxfoundation.org/brand-guidelines) - ...Primary colors: `#003778 #0094FF #5B1DE7`
* [Node.js](https://nodejs.dev/en/about/branding/) - ...Brand colors: `#5FA04E`

Другой вариант - взять наиболее характерный цвет из CSS-стиля сайта:

* [Docker](https://www.docker.com/) - `.et_pb_section_0_tb_footer.et_pb_section { background-color: #002a64 }`
* [Python](https://www.python.org/) - `.main-header { background-color: #2b5b84 }`

## Сохранение результата в файл

JS-библиотека [modern-screenshot](https://github.com/qq15725/modern-screenshot) позволяет сохранить часть веб-страницы (узел DOM-дерева) в файл нужного формата. Но есть условие - картинки и использующая их страница должны быть из одного источника (same origin). Иначе картинки не отрисуются и в консоли будут ошибки [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) подобные этой:

~~~text
skills.html:1 Access to fetch at 'https://kernel.org/theme/images/logos/tux.png' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
~~~

Простой локальный HTTP-сервер решает эту проблему - страница открывается с него, картинки при этом проксируются:

~~~sh
$ node server.js 
Server started on http://localhost:8888
GET /
GET /python.png
GET /golang.png
GET /linux.png
GET /postgres.png
~~~

Другой способ получить файл - через консоль браузера:

* Открыть консоль (`F12`), перейти на вкладку "Elements" ("Инспектор" в Firefox)
* Найти и выделить `<div id="picture" ...`
* В контекстном меню выбрать "Capture node screenshot" ("Скриншот узла" в Firefox)
