describe('User finds job offers for \'QA Automation Engineer\' on 10clouds Careers page', () => {
  it('Visits the 10clouds website', () => {
    cy.visit('')
  })
  it('Sees the 10clouds website loaded', () => {
    cy.get('.description')
      .contains('A team of 100+ experienced developers and designers')
  })
  it('Opens 10clouds Careers page', () => {
    cy.get('span')
      .contains('Careers')
      .click()
  })
  it('Sees 10clouds Careers page loaded', () => {
    cy.get('#search-job')
      .should('be.visible')
  })
  it('Sees only 1 \'QA Automation Engineer\' job offer', () => {
    cy.get('.job-offer__title')
      .contains('QA Automation Engineer')
      .should('have.length', 1)
  })
})
