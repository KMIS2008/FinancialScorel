E-Pharmacy - це проект створений за допомогою Create React App для sc.

## Підготування до работи

1. Встанови базові залежності проекта командой `npm install`.
2. Запусти режим розробки, виповнив команду `npm start`.
3. Перейди в браузері за адресою [http://localhost:3000](http://localhost:3000).
   Ця сторінка буде автомотично перегружатися після зберегання змін в файлах проекту.

### Маршрутизація

ЕслиВ проекті була викоростона библиотека `react-router-dom` для маршрутизації,
необходимо дополнительно настроить компонент `<BrowserRouter>`.


Верстка відпвиповнена для коректного відмальовування на мобільних та планшетних пристроях.
Верстка адаптивна, окрім верстки для мобільних пристроїв, а саме:
- mobile: (від 320рх - гумова; від 375px - адаптивна)
- tablet: від 768px;
- desktop: від 1440px.

Робота виконана на React Redux.

Робота з формами та їх валідація - https://react-hook-form.com/ 

Авторизація користувача та робота з колекцією реалізовані за допомогою MongoDb.

Проєкт задеплоєний на github pages.

SharedLayout рендериться на маршрут "/" . Містить в собі Header та Footer обгортає вкладені маршрути з їх відповідними сторінками.  
 	
Компонент Header складається з:
    - Logo: складається з картинки і напису "E-Pharmacy".
        ✔ Компонент є клікабельним і переадресовує користувача на головну сторінку.    
    - Navigation Links:
        ✔ Посилання: 
                    "Home" - клік перенаправляє на головну сторінку.
                    "Medicine store" 
                    "Medicine". 
Клік на кожне з посилань перенаправляє користувача на відповідну сторінку.
    - Authentication Links:
       ✔ Компонент - кнопка Register, це посилання - перенаправляє користувача на RegisterPage.
       ✔ Компонент - кнопка  Login, це  посилання - перенаправляє користувача на LoginPage.
 
 	
Компонент Footer складається з:
    - Logo: складається з картинки і напису "E-Pharmacy".
        ✔ Компонент є клікабельним і переадресовує користувача на головну сторінку.    
Текст - "Get the medicine to help you feel better, get back to your active life, and enjoy every moment".
    - Social Media Icons:
       ✔ Іконки соціальних мереж (Facebook, Instagram, YouTube).
       - Перелік посилань на соц. мережі компанії має бути реалізовано як список елементів за допомогою <ul>, що відкриватимуть у новій вкладці сторінку GoIT відповідної соц. мережі: 
       ✔ Facebook - https://www.facebook.com/goITclub/  
       ✔ Instagram - https://www.instagram.com/goitclub/  
       ✔ YouTube - https://www.youtube.com/c/GoIT  
      - Іконки соц. мереж потрібно реалізувати у форматі svg.
    - Navigation Links:
        ✔ Посилання: 
                    "Home" - клік перенаправляє на головну сторінку.
                    "Medicine store" 
                    "Medicine". 
Клік на кожне з посилань перенаправляє користувача на відповідну сторінку.
    - Footer Bottom:
    - Copyright:
       ✔ Текст: "© E-Pharmacy 2023. All Rights Reserved".
    - Footer Links:
       ✔ "Privacy Policy".
       ✔ "Terms & Conditions".

RegisterPage рендериться на маршрут /register. 
 Заголовок з логотипом "E-Pharmacy".
- MainContent (основний блок із промо-текстом):
 ✔ Картинка - фонове зображення
 ✔ Напис - "Your medication, delivered Say goodbye to all your healthcare worries with us"
 ✔ Форма з кнопкою Register і елементом навігації Already have account? (розташованим під кнопкою Register):
      - кнопка Register - активізує перевірку на валідність введеної користувачем інформації. Всі інпути форми валідуються і виводять користувачу відповідну інформацію у випадку, якщо введене значення не валідне, у вигляді повідомлення (нотифікації). 
      - елемент навігації Already have account? - переадресовує користувача на сторінку LoginPage.
      Після реєстрації користувач повинен бути переадресований на сторінку LoginPage. Якщо з бекенда було отримано помилку реєстрації - користувачу виводиться відповідна інформація, у вигляді повідомлення  (нотифікації). 
Після реєстрації користувач повинен бути автоматично авторизований і перенаправлений на приватну сторінку.

LoginPage рендериться на маршрут /login.
Заголовок з логотипом "E-Pharmacy".
Сторінка містить:
MainContent: основний блок із промо-текстом.
 ✔ Картинка - фонове зображення
 ✔ Напис - "Your medication, delivered Say goodbye to all your healthcare worries with us"
 ✔ Форма з кнопкою Log in і елемент навігації Don't have an account? (розташованим під нею)
        - кнопка Log in - активізує перевірку на валідність введеної користувачем інформації. Всі інпути форми валідуються і виводять користувачу відповідну інформацію у випадку, якщо введене значення не валідне, у вигляді повідомлення (нотифікації). У разі їх валідності - відбувається авторизація користувача та переадресація на сторінку MainPage. Якщо з бекенда було отримано помилку логінізації - користувачу виводиться  відповідна інформація і вигляді повідомлень (нотифікації). 
        - елемент навігації Don't have an account? - переадресовує користувача на сторінку RegisterPage.
         
 	
Сторінка HomePage складається з наступних компонентів: 
1. MainBanner:
    - Promo Content:
        ✔ Головний промо-текст "Your medication delivered".
        ✔ Додатковий текст: "Say goodbye to all your healthcare worries with us".
        2. Promo Banners:
    - Banner 1:
        ✔ Назва: "Huge Sale".
        ✔ Знижка: "70%".
        ✔ Кнопка "Shop now", перенаправляє користувача на сторінку пошуку, на бекенд відбувається запит на пошук товарів зі зижкою в 70%
    - Banner 2:
        ✔ Назва: "Secure delivery".
        ✔ Гарантія: "100%".
        ✔ Кнsопка "Read more", перенаправляє користувача на сторінку - Feature
    - Banner 3:
        ✔ Назва: "Off".
        ✔ Знижка: "35%".
        ✔ Кнопка "Shop now",  перенаправляє користувача на сторінку пошуку, на бекенд відбувається запит на пошук товарів зі зижкою в 35%
3. Medicine Stores:
    - Header:
        ✔ Заголовок: "Your Nearest Medicine Store".
        ✔ Текст: "Search for Medicine, Filter by your location".
    - List of Stores - відображає список магазинів - 6шт. (запит за 6 рандомними значеннями з бази даних):
Кожний магазин має такі елементи:
        ✔ Назва магазину (наприклад, "Huge Sale").
        ✔ Адреса магазину (наприклад, "Albenia 683, Seoul").
        ✔ Телефонний номер магазину.
        ✔ Статус магазину ("OPEN" або "CLOSE").
При натисканні на картку магазину повинно відбуватись перенаправлення на сторінку Shop, де відображається більш детальна інформація по обранному магазину.
Add Pharmacy Promo Section:
    - Title: "Add your local pharmacy online now".
    - Description: ✔ Текст: "Enjoy the convenience of having your prescriptions filled from home by connecting with your community pharmacy through our online platform."
    - Call-to-Action Button: ✔ Кнопка "Buy medicine", При кліку перенаправляє користувача на сторінку магазинів - MedicineStorePage (/medicine-store)
    - Features Section - Список основних можливостей, які надає платформа для аптек:
        ✔ "Take user orders form online" - можливість приймати замовлення онлайн.
        ✔ "Create your shop profile" - можливість створення профілю вашої аптеки.
        ✔ "Manage your store" - інструменти для управління аптекою.
        ✔ "Get more orders" - збільшення кількості замовлень завдяки платформі.
        ✔ "Storage shed" - інструменти для управління запасами.
         
 	
Відгуки Клієнтів (Reviews Section):
    - Заголовок Відгуків:
        - Назва: "Reviews".
        - Опис: "Search for Medicine, Filter by your location".
    - Карточки Відгуків:
Перелік відгуків, де кожен відгук включає:
        ✔ Фотографія користувача.
        ✔ Ім'я користувача (наприклад, "Maria Tkachuk").
        ✔ Відгук користувача (наприклад, "I recently used this medical platform to book an appointment with a specialist, and I was impressed by how easy and user-friendly the process was. Highly recommended!").
        ✔ Відгуки мають бути вміщені в контейнери з візуальною відмінністю від основного контенту сторінки для кращого виокремлення.
Для відмальовування списку відгуків треба зробити запит на API бекенда. для отримання списку.

Розділ: Medicine store
    - Title: "Medicine store".
    - Список магазинів:
Кожна карточка магазину має такі елементи:
        ✔ Назва магазину - Наприклад, "Huge Sale", "Tremblay and Schiller", "Fahey-Batz".
        ✔ Адреса - Відображення назви вулиці та міста.
        ✔ Телефонний номер - Контактний номер магазину.
        ✔ Кнопка "Visit Store" - При натисканні користувача перенаправляє на сторінку магазину.
        ✔ Статус магазину - Індикатор "OPEN" або "CLOSE", який показує, чи відкритий магазин зараз.
        ✔ Оцінки - Відображені у вигляді зірочок біля статусу магазину.
Для відмальовування списку магазинів треба зробити запит на API бекенда. для отримання списку.

MedicinePage
Title: "Medicine".
Панель пошуку та фільтрації:
        ✔ Випадаючий список: "Product category" для вибору категорії ліків.
        ✔ Поле для пошуку: "Search medicine" дозволяє знайти медикаменти за назвою.
        ✔ Кнопка "Filter" для застосування фільтрів пошуку.
    - Каталог продуктів:
Кожна картка продукту включає:
        ✔ Зображення товару.
        ✔ Назву медикаменту - Наприклад, "Antimonium", "Isopro Alcohol", "Dapsone".
        ✔ Ціну - Вказану під назвою продукту.
    - Кнопки:
        ✔ "Add to cart" для додавання товару в кошик. (При натисканні на кнопку "Add to cart" відбвається перевірка чи авторизован користувач. Якщо користувач не авторизований, то з'являється модалка, яка пропронує йому зареєструватись чи залогінитись. Якщо зареєстрований, то відбувається довання товара в список товарів в корзині користувача)
        ✔ "Details" для перегляду детальної інформації про продукт.
Пагінація:
        Система пагінації знаходиться внизу сторінки для навігації між сторінками каталогу.
Фільтрація і пагінація відбувається на стороні бекенда, тоб-то коли користувач ввів дані для пошуку, то відправляється запит на бекенд, і якщо нічого не було знайдено по запиту, то треба відмалювати напис - "Nothing was found for your request", або відмалювати перелік товарів, які були отриманні з бекенда. Якщо кількість товарів більша за  12 одиниць, то треба відмалювати знизу екрана блок з пагінацією. Дані про загальну кількість сторінок приходить з бекенда. Коли користувач хоче перейти на іншу сторінку через блок пагінації, то відбуввається запит на бекенд, для отримання блоку інформації, яку далі відмальовують зі сторони фронтенда, для користувача.
Цей інтерфейс дозволяє користувачам легко переглядати доступні медикаменти, використовувати пошукові та фільтрувальні інструменти для знаходження потрібних товарів, а також додавати товари до кошика або отримувати більше інформації про кожен з них.

ProductPage
Сторінка: Product
    - Блок 'ProductOverview', дані на сторінку приходять зі сторони бекенду і повинні містити в собі наступні позиції:
        ✔ Зображення продукту
        ✔ Назва продукту.
        ✔ Бренд.
        ✔ Ціна.
        ✔ Рейтинг продукту.
        ✔ Можливість зміни кількості для покупки та кнопка "Add to cart" для додавання продукту в кошик. (При натисканні на кнопку "Add to cart" відбвається перевірка чи авторизован користувач. Якщо користувач не авторизований, то з'являється модалка, яка пропронує йому зареєструватись чи залогінитись. Якщо зареєстрований, то відбувається довання товара в список товарів в корзині користувача)
    - Блок 'TabsContainer':
        ✔ Вкладки: "Description" та "Reviews" для відображення інформації про продукт та відгуків користувачів.
    - Вкладка 'Description':
        ✔ Загальний опис продукту, включно з медичними застосуваннями та застереженнями щодо вживання.
    - Вкладка 'Reviews':
        ✔ Відгуки користувачів: відображення персональних вражень від використання продукту.
        ✔ Особисті відгуки включають ім'я користувача, дату публікації відгуку, текст відгуку, та рейтинг у вигляді зірок.
       
Блок 'TabsContainer' повинен забезпечити користувачам можливість з легкістю перемикатися між описом продукту та відгуками. При великій кількості відгуків, вкладка "Reviews" має включати пагінацію для зручного перегляду різних відгуків.

Cart Page
Сторінка: Cart
    - Розділ введення інформації про доставку:
        ✔ Поля для введення: ім'я, електронна адреса, телефон, адреса.
        ✔ Інструкція для користувача: "Enter your shipping info where you'll get the product. You can also send any other location where you need the products."
    - Розділ вибору способу оплати:
        ✔ Варіанти оплати: "Cash On Delivery", "Bank".
    - Перегляд обраного товару:
        ✔ Список обраних товарів з наступною інформацією:
             - Назва продукту: "Vitamin C Medicine", "Stomach Medicine".
             - Ціна за одиницю.
             - Кількість товару з можливістю редагування.
             - Загальна ціна за товар.
             - Кнопка "Remove" для кожного товару.
    - Розділ деталей замовлення:
        ✔ Загальна сума замовлення, яка відображається в розділі "Total".
    - Кнопка оформлення замовлення:
        ✔ "Place order" для завершення покупки. По натисканню на кнопку відбувається запит на бекенд, з додаванням до списку замовленні, додається поточне замовлення.
На сторінці також міститься інформація, що доставка та додаткові збори будуть розраховані на основі введених даних.