// import { it } from "mocha"
import { checkInvalidLogin } from "./resources/Notification"
import {checkLoginSuccess, enterUserEmail, enterUserPassword, submitLogin } from "./resources/Login"

describe('Check all different login cases', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
  // Test ID is represented with #
  it('Should not submit empty credentials', () => {
    submitLogin()
  })

  it('Should give invalid message if email is invalid', () => {
    enterUserEmail('invalid@getnada.com')
    enterUserPassword('qatest12345')
    submitLogin()
    checkInvalidLogin()
  })

  it('Should give invalid message if password is invalid', () => {
    enterUserEmail('qatest@getnada.com')
    enterUserPassword('abc123')
    submitLogin()
    checkInvalidLogin()
  })
  it('Should not submit if username is blank',()=> {
    // enterUserEmail('qatest@getnada.com')
    enterUserPassword('qatest12345')
  })
  
  it('Should not submit if password is blank', () => {
    enterUserEmail('qatest@getnada.com')
    // enterUserPassword('qatest12345') remove this line
    submitLogin()
  })
  
  it('Should login into the system if credential is valid', () => {
    enterUserEmail('qatest@getnada.com')
    enterUserPassword('qatest12345')
    submitLogin()
    checkLoginSuccess()
  })
})