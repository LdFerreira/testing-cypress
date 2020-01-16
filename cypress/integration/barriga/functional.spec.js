/// <reference types="cypress"/>
import loc from '../../support/locators';
import '../../support/commandsContas';
describe("Should test at a functional level", () => {
  before(() => {
    cy.login('leandrosf250796@gmail.com','123456')
    cy.resetApp()
  });
  
  it('Should create an account',() => {
    cy.acessarMenuConta()
    cy.inserirConta('Conta de teste')
    cy.get(loc.MESSAGE).should('contain','Conta inserida com sucesso!')
  })
 
  it('Should update an account', () => {
    cy.acessarMenuConta()
    cy.xpath(loc.CONTAS.FN_XPATH_BTN_ALTERAR('Conta de teste')).click()
    cy.get(loc.CONTAS.NOME).clear().type('Conta de teste alterada')
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain','Conta atualizada com sucesso!')
  })
  
  it('Should not create an account with same name', () => {
    cy.acessarMenuConta()
    cy.inserirConta('Conta de teste alterada')
    cy.get(loc.MESSAGE).should('contain','code 400')
  })

  it('Should create a transaction', () => {
    cy.get(loc.MENU.MOVIMENTACAO).click()
    cy.get(loc.MOVIMENTACAO.DESCRICAO).type('DESC')
    cy.get(loc.MOVIMENTACAO.VALOR).type('123')
    cy.get(loc.MOVIMENTACAO.ENVOLVIDO).type('Inter')
    cy.get(loc.MOVIMENTACAO.CONTA_ALTERAR).select('Conta de teste alterada')
    cy.get(loc.MOVIMENTACAO.STATUS).click()
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()

    cy.get(loc.MESSAGE).should('contain','sucesso')

    cy.get(loc.EXTRATO.LINHAS).should('have.length',7)

    cy.xpath(loc.EXTRATO.FN_XPATH_BUSCA_ELEMENTO('DESC','123')).should('exist')
  })
  
  it('Should get balance', () => {
    cy.get(loc.MENU.HOME).click()
    cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta de teste alterada')).should('contain','123,00')
  })
})

