// ============================================================
// TC-07 | Verify "Talk to an Expert" Button Opens Contact Flow
// ============================================================
//
// STEPS:
// 1. Open homepage
// 2. Find "Talk to an Expert" button
// 3. Click the button
// 4. Assert contact or sales page opens
// 5. Assert form or scheduling section is visible
//
// EXPECTED RESULT:
// - Contact or sales page opens
// - Form or scheduling section is visible
// ============================================================

describe('TC-07 | "Talk to an Expert" Button Opens Contact Flow', () => {

  it('Talk to an Expert button leads to contact page with form', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 2. Find "Talk to an Expert" button
    cy.contains('a, button', /talk to an expert|talk to sales|contact sales/i)
      .filter(':visible')
      .first()
      .should('be.visible')

    // Step 3. Click the button
    cy.contains('a, button', /talk to an expert|talk to sales|contact sales/i)
      .filter(':visible')
      .first()
      .invoke('removeAttr', 'target')
      .click()

    // Step 4. Assert contact or sales page opens
    cy.url().should('match', /contact|sales|expert|demo|talk/i)

    // Step 5. Assert form or scheduling section is visible
    cy.get('form').should('be.visible')

  })

})