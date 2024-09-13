describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка забыл пароль? на цвет 
         cy.get('#mail').type('german@dolnikov.ru'); // нашли логин
         cy.get('#pass').type('iLoveqastudio1'); // нашел строку пароль
         cy.get('#loginButton').click(); // нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка на успешную авторизацию
         cy.get('#messageHeader').should('be.visible'); // виден текста успешной авторизации
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик пользователю
 })
 

 it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка забыл пароль? на цвет 

    cy.get('#mail').type('german@dolnikov.ru'); // нашли логин
    cy.get('#pass').type('iLoveqastudio6'); // нашел строку пароль
    cy.get('#loginButton').click(); // нажал войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // ввели не верный парль
    cy.get('#messageHeader').should('be.visible'); // виден текста успешной авторизации
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик пользователю
})

it('Проверка волидации', function () {
    cy.visit('https://login.qa.studio/'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка забыл пароль? на цвет 

    cy.get('#mail').type('germandolnikov.ru'); // ввел пароль без @
    cy.get('#pass').type('iLoveqastudio1'); // вверный логин и пароль
    cy.get('#loginButton').click(); // нажал войти
    
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // ввели не верный парль
    cy.get('#messageHeader').should('be.visible'); // виден текста успешной авторизации
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик пользователю
})

it('Проверка востонавление пароля', function () {
    cy.visit('https://login.qa.studio/'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка забыл пароль? на цвет 

    
    cy.get('#forgotEmailButton').click(); // нажал востоновить пароль

    cy.get('#mailForgot').type('german@dolnikov.ru'); // вписать правильную почту

    cy.get('#restoreEmailButton').click(); // нажал отпрвить код
    
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // успешный текст отправление
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик пользователю
})

it('НЕ Верный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка забыл пароль? на цвет 

    cy.get('#mail').type('germa@dolnikov.ru'); // Вписать не верный логин
    cy.get('#pass').type('iLoveqastudio1'); // нашел строку пароль
    cy.get('#loginButton').click(); // нажал войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // правильный пароль но логин нет
    cy.get('#messageHeader').should('be.visible'); // виден текста успешной авторизации
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик пользователю
})

it('Провека на строчные буквам', function () {
    cy.visit('https://login.qa.studio/'); //зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверка забыл пароль? на цвет 

    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Вписать правильный логин с большими буквами
    cy.get('#pass').type('iLoveqastudio1'); // нашел строку пароль
    cy.get('#loginButton').click(); // нажал войти

    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // ввели Правильный пароль и логин
    cy.get('#messageHeader').should('be.visible'); // виден текста успешной авторизации
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик пользователю
})

})




 // + Ввести правильный логин
 // + Ввести правильный пароль
 // + Найти кнопку войти и нажать на неё
 // Успешная авторизация