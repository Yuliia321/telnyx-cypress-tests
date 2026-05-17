// ============================================================
// TC-02 | Verify Pricing Plan CTA Routes to Sign-Up
// ============================================================
//
// STEPS:
// 1. Navigate to /pricing
// 2. Find first visible CTA button on any plan card
// 3. Click the CTA
// 4. Assert destination URL contains 'sign-up', 'register', or 'checkout'
// 5. Assert HTTP status < 400
//
// EXPECTED RESULT:
// - CTA button is visible on pricing page
// - Clicking CTA leads to sign-up / register / checkout page
// - Page loads without server error
// ============================================================

describe('TC-02 | Pricing Plan CTA Routes to Sign-Up', () => {

  it('CTA button on pricing page leads to sign-up page', () => {

    // Step 1. Navigate to /pricing
    cy.visit('https://telnyx.com/pricing')

    // Step 2. Find first visible CTA button on any plan card
    cy.contains('a, button', /get started|sign up|start free|try free/i)
      .filter(':visible')
      .first()
      .as('ctaButton')

    // Step 3. Read the href before clicking (to check URL and status)
    cy.get('@ctaButton')
      .invoke('attr', 'href')
      .then((href) => {

        // Step 4. Assert destination URL contains 'sign-up', 'register', or 'checkout'
        expect(href).to.match(/sign-up|register|checkout/i)

        // Step 5. Assert HTTP status < 400
        const fullUrl = href.startsWith('http') ? href : `https://telnyx.com${href}`
        cy.request({ url: fullUrl, failOnStatusCode: false })
          .its('status')
          .should('be.lessThan', 400)
      })

  })

})
