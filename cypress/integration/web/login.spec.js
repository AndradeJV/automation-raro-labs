import IndexLoginPage from '../../support/views/pages/IndexLoginPage';
import HeaderComponent from '../../support/views/components/HeaderComponent';

const payload = require('../../fixtures/web/login.json');


describe('Validate login', () => {
    beforeEach(() => {
        cy.visit('/');
        HeaderComponent.clickSignIn();
    });


    it('Login with success', () => {
        IndexLoginPage.writeEmail(payload.correctCredencials.email);
        IndexLoginPage.writePassword(payload.correctCredencials.password);
        IndexLoginPage.clickSignIn();

        cy.get('nav > div:nth-child(1) > a')
            .should('be.visible');
    });


    context('Login with incorrect credencials', () => {
        afterEach(() => {
            cy.wait(3000);

            cy.get('#center_column > .alert-danger')
                .should('be.visible');
        });

        it('No email', () => {
            IndexLoginPage.writePassword(payload.incorrectCredencials.noEmail.password);
            IndexLoginPage.clickSignIn();    
        });

        it('No password', () => {
            IndexLoginPage.writeEmail(payload.incorrectCredencials.noPassword.email);
            IndexLoginPage.clickSignIn();    
        });

        it('Just email correct', () => {
            IndexLoginPage.writeEmail(payload.incorrectCredencials.justEmailCorrect.email);
            IndexLoginPage.writePassword(payload.incorrectCredencials.justEmailCorrect.email);
            IndexLoginPage.clickSignIn();     
        });

        it('Just password correct', () => {
            IndexLoginPage.writeEmail(payload.incorrectCredencials.justPasswordCorrect.email);
            IndexLoginPage.writePassword(payload.incorrectCredencials.justPasswordCorrect.email);
            IndexLoginPage.clickSignIn();    
        });
    });
})