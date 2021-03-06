/// <reference types="cypress"/>

describe("Work with alerts", () => {
  beforeEach(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it('Alert',() => {
    cy.get('#alert').click()
    cy.on('window:alert', msg =>{
      console.log(msg)
      expect(msg).to.be.equal('Alert Simples')
    })
  })
  
  it.only('Alert com mokc',() => {
    const stub = cy.stub().as('alerta')
    cy.get('#alert').click()
    cy.on('window:alert', stub)
    cy.get('#alert').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
    })
  })

})