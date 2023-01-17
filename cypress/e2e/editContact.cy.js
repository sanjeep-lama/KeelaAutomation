
import { checkEditSuccessMessage } from "./resources/Notification"
import { editContact, editPersonalDetail, enterGender, enterPreferedName, enterTitle, goToContact, submitEditedForm, submitForm } from "./resources/Contact"
import { validLogin } from "./resources/Login"

describe('Edit fields of contact', () => {
    beforeEach(()=>{
        cy.visit('/')
        validLogin()
        goToContact()
        editContact()
        editPersonalDetail()
    })
    it('Should save without filling any data',()=>{
        submitEditedForm()
        checkEditSuccessMessage()
    })
    it('Should save the form by updating title only',()=>{
        enterTitle('Mrs.')
        submitEditedForm()
        checkEditSuccessMessage()
    })
    it('Should save the form by updating prefered name',()=>{
        enterPreferedName('QA Automation')
        submitEditedForm()
        checkEditSuccessMessage()
    })
    it('Should save the form by updating gender',()=>{
        enterGender('Male')
        submitEditedForm()
        checkEditSuccessMessage()
    })
    it('Should save the form by updating different fields',()=>{
        enterPreferedName('QA Automation')
        enterTitle('Dr.')
        enterGender('Male')
        submitEditedForm()
        checkEditSuccessMessage()
    })
})