/// <reference types="cypress" />


class HeaderComponent {
    
    // Clicar em [ Sign In ]
    clickSignIn(){
        cy.get('.header_user_info > a').click();
    }
}


export default new HeaderComponent;