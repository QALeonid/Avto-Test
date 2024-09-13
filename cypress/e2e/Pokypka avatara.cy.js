describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://pokemonbattle.ru/login'); //зашли на сайт
         cy.get(':nth-child(1) > .auth__input').type('TheHonzikGames@yandex.ru'); // нашли логин
         cy.get('#password').type('Vbnm56789'); // ввести пароль
         cy.get('.auth__button').click(); // нажал войти

         cy.wait(2000)

         cy.get('.header__container > .header__id').click({ force: true }); // нажал на тренера

         cy.wait(2000)

         cy.get('[href="/shop"]').click({ force: true }); // нажать на сменить тернера

         cy.wait(2000)

         cy.get(':nth-child(1) > .shop__button').click({ force: true });

         cy.wait(2000)

         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996')
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225')
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GERMAN DOLINIKOV')
         
         cy.get('.pay-btn').click({ force: true });

         cy.get('#cardnumber').type('56456')

         cy.get('.payment__submit-button').click({ force: true });

         cy.contains('Покупка прошла успешно').should('be.visible');
 })
 
// анекдот

// Заходит тестировщик в бар. Заказывает кружку пива. Заказывает 0 кружек пива. Заказывает 999999999 кружек пива. Заказывает -1 кружку пива. Заказывает ФАОЛФВОЫЛ.

// Тут заходит реальный пользователь. Спрашивает, где здесь туалет. Бар сгорает в адском пламени, убивая всех вокруг.

// (Шутка в том что, туалет только для клиентов)

})

