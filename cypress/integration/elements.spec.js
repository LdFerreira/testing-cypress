/// <reference types="cypress"/>

describe("Work with basic element", () => {
  it("Text", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");

    //cy.get("body").should("have.text", "Cuidado");
    cy.get("span").should("contain", "Cuidado");
    cy.get(".facilAchar").should(
      "have.text",
      "Cuidado onde clica, muitas armadilhas..."
    );
  });
});
