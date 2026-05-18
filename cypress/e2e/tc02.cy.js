// ============================================================
// TC-02 | Verify Pricing Dropdown Displays Plan Cards
// ============================================================
//
// STEPS:
// 1. Open homepage
// 2. Click Pricing in top navigation
// 3. Verify pricing cards are visible on screen
// 4. Verify dropdown contains pricing links
// 5. Verify all links have valid href
//
// EXPECTED RESULT:
// - Dropdown is displayed after click
// - All plan cards are visible
// - Each link has a valid href and does not equal #
// ============================================================

describe('TC-02 | Pricing Dropdown Displays Plan Cards', () => {

  it('Pricing dropdown opens on click and contains valid links', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 2. Click Pricing in top navigation
    cy.get('header').contains('Pricing').click()

    // Step 3 & 4. Verify pricing links appear in dropdown
    cy.get('a[href^="/pricing/"]', { timeout: 10000 })
      .should('be.visible')
      .and('have.length.greaterThan', 0)

    // Step 5. Verify all links have valid href
    cy.get('a[href^="/pricing/"]').each(($link) => {

      const href = $link.attr('href')

      expect(href).to.not.be.empty
      expect(href).to.not.equal('#')
    })

  })

})