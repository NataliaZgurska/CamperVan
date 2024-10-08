CamperVan

Цей проект був створений як тренувальний в межах навчання в GoIt. Розробник -
Наталя Згурська www.linkedin.com/in/natalia-zgurska

Щоб запустити цей проєкт, переконайтеся, що ваша система відповідає наступним
вимогам:

### Операційна система

- **Windows**: 10 або новіше
- **macOS**: 10.14 (Mojave) або новіше
- **Linux**: Ubuntu 18.04 або новіше

Цей сайт пропонує користувачеві переглянути каталог кемперів (будинків на
колесах/кемпінгових автомобілей).

Layout сайта зроблений для компьютера/ноутбука (width 1312px). На домашній
сторінці користувач бачить коротку інформацію про фірму, контактний номер
телефону, галерею фотографій кемперів. Клік на картинку відкриває модальне вікно
з інформацією про кемпер. З домашньої сторінки можна перейти до сторінки Каталог
і Favorities.

На сторінці Каталог зправа користувач бачить перелік - короткий опис - перших 4
кемперів. Зроблена пагінація (внизу можна обрати сторінку переліку, яку хоче
переглянути користувач)

Зліва на сторінці Каталог користувачу пропонується зробити фільтр по тим
машинам, які він/вона хоче побачити. Користувач може ввести значення локації
кемпера, зробити мульти-вибір обладнання, яке хоче мати в кемпері, а також
обрати один з можливих варіантів типу машини

Користувач має можливість побачити розширену інформацію по кожному кемперу,
натиснувши в каталозі на кнопку "Show more". Відкривається модальне вікно з
додатковими фото кемпера, посиланням на інформацію про обладнання кемпера і
посиланням на reviews. Тут у користувача є можливість залишити свої контакти,
щоб продавці могли з ним зв'язатися. Оскільки це пет-проект, то інформація про
користувача не зберігається

Даний проект написаний на React зі збіркою Vite. Використовується маршрутизація
React Router для переходу на сторінки. Сайт звертається на сервер mockapi.io для
отримання даних про кемпери. Використовується react-modal, reac-hook-form,
react-paginate, react-loader-spinner, react-hot-toast.
