describe('User finds all open positions with \'Automation\' in job title', () => {
  it('Opens careers page', () => {
    cy.visit('/careers')
  })
  it('Searches for \'Automation\' in job offers', () => {
    cy.get('#search-job')
      .type('Automation')
  })
  it('Sees only \'Automation\' job offers', () => {
    cy.get('.job-offer__title')
      .each(($el, index) => {
        cy.get($el).contains('Automation')
      })
  })
})