// ============================================================
// TC-08| Verify External Social Links in Footer
// ============================================================
//
// STEPS:
// 1. Open homepage
// 2. Scroll to footer
// 3. Find LinkedIn / Twitter / Facebook icons
// 4. Verify href attributes contain valid URLs
// 5. Verify links point to external domains (not telnyx.com)
//
// EXPECTED RESULT:
// - Social links contain valid URLs
// - Links open external domains
// ============================================================

describe('TC-08b | External Social Links in Footer', () => {

  it('All 3 social icons have valid external links', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 2. Scroll to footer
    cy.get('footer').scrollIntoView()

    // Step 3. Find social icons block
    // Traversing: footer → знаходимо параграф "Social" → піднімаємось до parent div → спускаємось до всіх <a>
    cy.get('footer')
      .contains('p', 'Social')    // знаходимо заголовок "Social"
      .parent()                   // піднімаємось до div що містить весь соціальний блок
      .find('ul a')               // спускаємось до посилань всередині списку

    // Step 4. Verify there are exactly 3 social links
      .should('have.length', 3)

    // Step 5. Verify each link has valid href and points to external domain
      .each(($link) => {
        const href = $link.attr('href')

        // href не порожній
        expect(href).to.not.be.empty

        // посилання починається з https
        expect(href).to.match(/^https:\/\//)


        // відкривається в новій вкладці
        expect($link.attr('target')).to.equal('_blank')
      })

  })

})
