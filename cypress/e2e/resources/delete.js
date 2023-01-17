const deleteSelector = '[data-tracking-table="contacts-Contacts-0-0"]'
const deleteMenuSelector = '[data-tracking-button="contact-profile-"]'


export function deleteContact(){
    cy.get(deleteSelector).click()
}

// export function deleteMenuSelect(){
//     cy.get(deleteMenuSelector).contain('Delete Contact')
// }