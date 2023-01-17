const notification = '.notification-title'

export function checkInvalidLogin(){
    cy.get(notification).contains('Login failed. Invalid email or password')
}

export function checkInvalidContactMessage(){
    cy.get(notification).contains('Contact must contain at least one of the required fields')
}

export function checkEditSuccessMessage(){
    cy.get(notification).contains('Contact successfully updated')
}
