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

  beforeEach(() => {
    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 2. Scroll to footer
    cy.get('footer').scrollIntoView()
    cy.get('footer').should('be.visible')
  })

  it('All footer links have valid href', () => {

    // Step 3. Collect footer links
    // Step 4. Assert each link has valid href (not empty, not #)
    cy.get('footer a[href]').each(($link) => {

      const href = $link.attr('href')

      // пропускаємо mailto: і tel: — це не URL сторінок
      if (href.startsWith('mailto:') || href.startsWith('tel:')) return

      // href не порожній
      expect(href).to.not.be.empty

      // href не заглушка
      expect(href).to.not.equal('#')
    })
  })

  it('First 5 footer links load successfully', () => {

    // Step 5. Open several footer links and check they load
    cy.get('footer a[href^="/"]').then(($links) => {

      let count = 0

      $links.each((index, el) => {

        if (count >= 5) return

        const href = el.getAttribute('href')
        count++

        cy.request({
          url: `https://telnyx.com${href}`,
          failOnStatusCode: false,
        }).its('status').should('be.lessThan', 400)
      })
    })
  })

})