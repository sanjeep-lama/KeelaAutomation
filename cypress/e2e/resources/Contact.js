const openFormSelector = '.btn-primary'
const contactNavSelector = '.nav-main-link'
const profileSelecotr = '[data-tracking-tab="contact-profile-Profile"]'
const firstNameSelector = '[data-tracking-input="contacts-PersonContacts-firstName"] input'
const lastNameSelector = '[data-tracking-input="contacts-PersonContacts-lastName"] input'
const emailSelector = '[data-tracking-input="contacts-PersonContacts-primaryEmail"] input'
const phoneSelector = '[data-tracking-input="contacts-PersonContacts-primaryPhone"] input'
const address1Selector = '[placeholder="Address Line 1"]'
const address2Selector = '[placeholder="Address Line 2"]'
const citySelector = '[placeholder="City"]'
const provinceSelector = '[placeholder="State/Province"]'
const zipSelector = '[placeholder="Postal/Zip"]'    
const countrySelector = '[placeholder="Country"]'
const submitFormSelector = '[data-tracking-button="add-person-contact-modal-save"]'
const emailSubscriptionStatSelector = '[data-tracking-input="contacts-PersonContacts-subscriptionStatus"] select'
const dobSelector = '[data-tracking-input="contacts-PersonContacts-birthDate"] > div select'

// Edit contact
const editSelector = ':nth-child(1) > [colspan="2"] > a > .d-flex'
const personalContactEdit = ':nth-child(2) > .block-header > .block-options > .btn'
const titleSelector =  '[data-tracking-input="contact-profile-PersonContacts-title"] input'
const genderSelector = '[data-tracking-input="contact-profile-PersonContacts-gender"] input'
const preferedNameSelector = '[data-tracking-input="contact-profile-PersonContacts-preferredName"]'
const editFormSaveButtonSelector = '[data-tracking-button="edit-contact-modal-save"]'
const prioritySelector = '[data-tracking-input="contacts-PersonContacts-priority"] select'
// 

export function goToContact(){
    cy.get(contactNavSelector).contains('Contacts').click()
}

export function openContactForm(){
    goToContact()
    cy.get(openFormSelector).contains('Add Contact').click()
}

export function enterFirstName(fName){
    cy.get(firstNameSelector).type(fName)
}

export function enterLastName(lName){
    cy.get(lastNameSelector).type(lName)
}

export function enterEmail(email){
    cy.get(emailSelector).type(email)
}

export function enterPhone(phone){
    cy.get(phoneSelector).type(phone)
}

export function enterAddress1(address1){
    cy.get(address1Selector).type(address1)
}

export function enterAddress2(address2){
    cy.get(address2Selector).type(address2)
}

export function enterCity(city){
    cy.get(citySelector).type(city)
}

export function enterProvince(province){
    cy.get(provinceSelector).type(province)
}

export function enterZip(zip){
    cy.get(zipSelector).type(zip)
}

export function enterCountry(country){
    cy.get(countrySelector).type(country)
}

export function submitForm(){
    cy.get(submitFormSelector).click()
}

export function checkFormSubmission(){
    cy.get(profileSelecotr).should('have.class','active')
}

export function selectEmailSubsDropdown(selectField){
    cy.get(emailSubscriptionStatSelector).select(selectField)
}

export function selectDate(day, month, year){
    selectDay(day)
    selectMonth(month)
    selectYear(year)
}

export function selectPriority(priorityValue){
    cy.get( prioritySelector).select(priorityValue)
}

function selectDay(day){
    cy.get(dobSelector).first().select(day)
}

function selectMonth(month){
    cy.get(dobSelector).eq(1).select(month)
}

function selectYear(year){
    cy.get(dobSelector).last().select(year)
}

// edit functions
export function editContact(){
    cy.get(editSelector).click()
}

export function editPersonalDetail(){
    cy.get(personalContactEdit).click()
}

export function enterTitle(title){
    cy.get(titleSelector).type('{selectAll}'+title)
}

export function enterPreferedName(pName){
    cy.get(preferedNameSelector).type('{selectAll}'+pName)
}

export function enterGender(gender){
    cy.get(genderSelector).type('{selectAll}'+gender)
}

export function submitEditedForm(){
    cy.get(editFormSaveButtonSelector).click()
}



