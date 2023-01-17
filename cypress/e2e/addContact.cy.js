import { checkInvalidContactMessage } from "./resources/Notification"
import { enterCity, enterCountry, enterEmail, enterFirstName, enterLastName, enterPhone, enterProvince, enterZip, openContactForm, selectDate, selectEmailSubsDropdown, selectPriority, submitForm } from "./resources/Contact"
import { validLogin } from "./resources/Login"

describe('add contact', () => {
    beforeEach(()=>{
        cy.visit('/')
        validLogin()
        openContactForm()
    })
    // afterEach(()=>{
    //     submitForm()
    // })
    it('Should be valid by entering First Name only',()=>{
        enterFirstName('Sanjeep')
        submitForm()
    })
    it('Should be valid by entering Last Name only',()=>{
        enterLastName('Lama')
        submitForm()
    })
    it('Should be valid by entering Email only',()=>{
        enterEmail('test@gmail.com')
        submitForm()
    })
    it('Should not be valid by entering City only',()=>{
        enterCity('Kathmandu')
        submitForm()
        checkInvalidContactMessage()
    })
    it('Should not be valid by entering Province only',()=>{
        enterProvince('Bagmati')
        submitForm()
        checkInvalidContactMessage()
    })
    it('Should not be valid by entering Zip only',()=>{
        enterZip('44600')
        submitForm()
        checkInvalidContactMessage()
    })
    it('Should not be valid by entering phone number only',()=>{
        enterPhone('7894561232')
        submitForm()
        checkInvalidContactMessage()
    })
    it('Should not be valid by entering Country only',()=>{
        enterCountry('Nepal')
        submitForm()
        checkInvalidContactMessage()
    })
    it('Should not be valid by submiting blank form only',() =>{
        submitForm()
        checkInvalidContactMessage()
    })

    it('Select email subscription status from dropdown', ()=>{
        selectEmailSubsDropdown('Unknown')
        submitForm()
        checkInvalidContactMessage()
    })
    
    it('Select dates from dropdown',()=>{
        selectDate(3, 'January', '1996')
        submitForm()
        checkInvalidContactMessage()
    })

    it('Should not be valid by selecting priority from dropdown', ()=>{
        selectPriority('Medium')
        submitForm()
        checkInvalidContactMessage()
    })

    it('Should be valid if all field are entered',()=>{
        enterFirstName('Sanjeep')
        enterLastName('Lama')
        enterEmail('test@gmail.com')
        enterPhone('9801234567')
        // enterAddress1('Jorpati'+'{enter}')
        // enterAddress2('Boudha'+'{enter}')
        enterCountry('Nepal')
        enterCity('Kathmandu')
        enterProvince('Bagmati')
        enterZip('44600')
        submitForm()
    })

})