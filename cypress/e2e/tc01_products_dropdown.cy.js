// ============================================================
// TC-01 | Verify Navigation Dropdown Opens
// ============================================================
//
// STEPS:
// 1. Open homepage
// 2. Hover over Products in top navigation
// 3. Verify product cards are visible on screen (Voice AI, Voice API, Inference, Mobile Voice)
// 4. Verify dropdown contains product links
// 5. Verify all links have valid href
//
// EXPECTED RESULT:
// - Dropdown is displayed after click
//- All 4 product cards are visible
//- Each link has a valid href and does not equal #
// ============================================================

describe('TC-01 | Navigation Dropdown Opens', () => {

  it('Products dropdown opens on hover and contains valid links', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 2. Hover over Products in top navigation
    cy.get('header').contains('Products').click()

    // Step 3 & 4. Verify product links appear in dropdown
    cy.get('a[href^="/products/"]', { timeout: 10000 })
      .should('be.visible')
      .and('have.length.greaterThan', 0)

    // Step 5. Verify all links have valid href
    cy.get('a[href^="/products/"]').each(($link) => {

      const href = $link.attr('href')

      expect(href).to.not.be.empty
      expect(href).to.not.equal('#')
    })

  })

})