/// <reference types="cypress" />


import patientData from './patient.checkin.testdata'

describe('TestSuite 1', () => {

    it('TC_UI_001 - Test1', () => {
      
        cy.log("Test1 of Suite1 is executed")
    })

    it('TC_UI_002 - Test2', () => {
      
        cy.log("Test2 of Suite1 is executed")
    })
	
	it('TC_UI_003 - Test1', () => {
      
        cy.log("Test3 of Suite1 is executed")
    })
  
})