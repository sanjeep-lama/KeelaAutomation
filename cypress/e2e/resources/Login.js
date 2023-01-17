const userEmailSelector = '#user-email'
const userPasswordSelector = '#user-password'
const submit = '[type="submit"]'
const navSelector = '.nav-main-link'

export function enterUserEmail(email) {
    cy.get(userEmailSelector).type(email)
}

export function enterUserPassword(password){
    cy.get(userPasswordSelector).type(password)
}

export function submitLogin(){
    cy.get(submit).click()
}

export function validLogin(){
    enterUserEmail('qatest@getnada.com')
    enterUserPassword('qatest12345')
    submitLogin()
}

export function checkLoginSuccess(){
    cy.get(navSelector).contains('Dashboard').parent().should('have.class', 'selected')
}
