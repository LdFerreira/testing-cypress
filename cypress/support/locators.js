const locators = {
  LOGIN: {
    USER: '//*[@id="root"]/div/div/div[2]/div[1]/div/input',
    PASSWORD: '//*[@id="root"]/div/div/div[2]/div[2]/input',
    BTN_LOGIN: '//*[@id="root"]/div/div/div[2]/button'
  },
  MENU: {
    HOME: '[data-test=menu-home]',
    SETTING: '[data-test=menu-settings]',
    CONTAS: '[href="/contas"]',
    RESET: '[href="/reset"]',
    MOVIMENTACAO: '[data-test=menu-movimentacao]',
    EXTRATO: '[data-test=menu-extrato]',

  },
  MOVIMENTACAO: {
    DESCRICAO: '[data-test=descricao]',
    VALOR: '[data-test=valor]',
    ENVOLVIDO: '[data-test=envolvido]',
    CONTA_ALTERAR: '[data-test=conta]',
    STATUS: '[data-test=status]',
    BTN_SALVAR: '.btn-primary',
  },
  CONTAS: {
    NOME: '[data-test=nome]',
    BTN_SALVAR: '.btn',
    FN_XPATH_BTN_ALTERAR: nome => `//table//td[text()="${nome}"]/..//i[@class="far fa-edit"]`
  },
  EXTRATO: {
    LINHAS: '.list-group > li',
    FN_XPATH_BUSCA_ELEMENTO: (desc,value) => `//span[contains(.,'${desc}')]/following-sibling::small[contains(.,'${value}')]`,
    FN_XPATH_REMOVER_ELEMENTO: conta => `//span[contains(.,'${conta}')]/../../..//i[@class='far fa-trash-alt']`,
  },
  SALDO : {
    FN_XP_SALDO_CONTA: nome =>`//td[contains(., '${nome}')]/../td[2]`
  },
  MESSAGE: '.toast-message', 
}

export default locators;