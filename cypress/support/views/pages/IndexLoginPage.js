/// <reference types="cypress" />


class IndexLoginPage {
    // Clicar em [ Sign In ]
    clickSignIn(){
        cy.get('#SubmitLogin > span').click();
    }
    
    // Digitar email
    writeEmail(email){
        cy.get('#email').type(email);
    }

    // Digitar senha
    writePassword(password){
        cy.get('#passwd').type(password);
    }
}


export default new IndexLoginPage;