// ============================================================
// TC-03 | Contact Form Validation on Empty Submit
// ============================================================
//
// STEPS:
// 1. Navigate to /contact-us
// 2. Do not fill any fields
// 3. Click submit button
// 4. Assert inline error messages appear on required fields
// 5. Assert no success / thank-you message is shown
//
// EXPECTED RESULT:
// - Error messages appear on required fields
// - No success message is shown
// ============================================================

describe('TC-03 | Contact Form Validation on Empty Submit', () => {

  it('Empty form submit shows errors and no success message', () => {

    // Step 1. Navigate to /contact-us
    cy.visit('https://telnyx.com/contact-us')

    // Step 2. Do not fill any fields (just verify form is visible)
    cy.get('form').should('be.visible')

    // Step 3. Click submit button
    cy.get('form').contains('button, input[type="submit"]', /submit|send|get started/i)
      .click()

    // Step 4. Assert inline error messages appear on required fields
    cy.get('[class*="error"], [aria-invalid="true"], [class*="invalid"]')
      .first()
      .should('be.visible')

    // Step 5. Assert no success / thank-you message is shown
    cy.contains(/thank you|success|we'll be in touch/i).should('not.exist')

  })

})
