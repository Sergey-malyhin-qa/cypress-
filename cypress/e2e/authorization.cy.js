describe('Автотесты на авторизацию', function () {
    it('Позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('german@dolnikov.ru'); //ввел логин
         cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна

         cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна

         cy.get('#loginButton').click(); // нажать кнопку

         cy.get('#messageHeader').should('be.visible'); // текст виден
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // крестик виден       
     })
     it('Восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#forgotEmailButton').click(); // нажать кнопку забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввел логин

        cy.get('#restoreEmailButton').click(); // нажать кнопку отправить код

        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проветка текста
        
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден          
     })
     it('Негативный кейс неверный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru'); //ввел логин
         cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна

         cy.get('#pass').type('iLoveqastudi'); // ввел неверный пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна

         cy.get('#loginButton').click(); // нажать кнопку

         cy.get('#messageHeader').should('be.visible'); // текст виден
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // крестик виден         
     })
     it('Негативный кейс неверный логин', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@lnikov.ru'); //ввел неверный логин
         cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна

         cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна

         cy.get('#loginButton').click(); // нажать кнопку

         cy.get('#messageHeader').should('be.visible'); // текст виден
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // крестик виден         
     })
     it('негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('germandolnikov.ru'); //ввел неверный логин
         cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна

         cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна

         cy.get('#loginButton').click(); // нажать кнопку

         cy.get('#messageHeader').should('be.visible'); // текст виден
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // крестик виден         
     })
     it('Позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввел логин
        cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна

        cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельна

        cy.get('#loginButton').click(); // нажать кнопку

        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // крестик виден       
    })
 })
 