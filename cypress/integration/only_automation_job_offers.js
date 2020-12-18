describe('User finds all open positions with \'Automation\' in job title', () => {
  it('Sees the 10clouds website loaded', () => {
    cy.get('.description')
      .contains('A team of 100+ experienced developers and designers')
  })
  it('Opens 10clouds Careers tab', () => {
    cy.get('span')
      .contains('Careers')
      .click()
  })
  it('Searches for \'Automation\' in job offers', () => {
    cy.get('#search-job')
      .type('Automation')
  })
  it('Sees only \'Automation\' job offers', () => {
    cy.get('.job-offer__title')
      .each(($el) => {
        cy.get($el).contains('Automation')
      })
  })
})