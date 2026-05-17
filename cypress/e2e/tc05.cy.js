// ============================================================
// TC-05 | Verify Footer Navigation Links Are Valid
// ============================================================
//
// STEPS:
// 1. Open homepage
// 2. Scroll to footer
// 3. Collect footer links
// 4. Assert each link has valid href (not empty, not #)
// 5. Open several footer links and check they load
//
// EXPECTED RESULT:
// - Footer links are clickable
// - No broken or empty links
// ============================================================

describe('TC-05 | Footer Navigation Links Are Valid', () => {

  it('Footer is visible and all links have valid href', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 2. Scroll to footer
    cy.get('footer').scrollIntoView()
    cy.get('footer').should('be.visible')

    // Step 3 + 4. Collect footer links and assert each has valid href
    cy.get('footer a[href]').each(($link) => {
      const href = $link.attr('href')

      // Skip mailto: and tel: — these are not page URLs
      if (href.startsWith('mailto:') || href.startsWith('tel:')) return

      // href must not be empty or just "#"
      expect(href).to.not.be.empty
      expect(href).to.not.equal('#')
    })

  })

  it('First 5 internal footer links return status 200', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 2. Scroll to footer
    cy.get('footer').scrollIntoView()

    // Step 3. Collect internal footer links (starting with /)
    cy.get('footer a[href^="/"]').then(($links) => {

      // Step 5. Open several footer links and check they load
      const hrefs = [...$links].map((el) => el.getAttribute('href'))
      const unique = [...new Set(hrefs)].slice(0, 5)

      unique.forEach((href) => {
        cy.request({
          url: `https://telnyx.com${href}`,
          failOnStatusCode: false,
        }).its('status').should('be.lessThan', 400)
      })
    })

  })

})
