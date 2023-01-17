import { editContact, goToContact } from "./resources/Contact"
// import { deleteContact, deleteMenuSelect } from "./resources/delete"
import { validLogin } from "./resources/Login"

describe('add contact', () => {
    beforeEach(()=>{
        cy.visit('/')
        validLogin()
        goToContact()
        editContact()
    })
    it.only('go to contact page',()=>{
        cy.get('[data-tracking-button="contact-profile-"]').trigger('mouseover')
        // cy.get('dropdown-menu')
        // cy.get('dropdown-menu').contains('Delete Contact').click({force: true})
    })
})