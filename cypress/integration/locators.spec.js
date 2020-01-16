/// <reference types="cypress"/>

describe("Work with basic element", () => {
  beforeEach(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it('Using xpath',() => {
    cy.xpath('//*[@id="tabelaUsuarios"]/tbody/tr[3]/td[6]/input')
  })
})