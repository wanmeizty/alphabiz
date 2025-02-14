/// <reference path="cypress" />
/// <reference path="../../support/index.d.ts" />
describe('main',{
  retries: {
    runMode: 2,
    openMode: 2
  }
}, function () {
  describe('LanguageSelection', () => {
    it('language', () => {
      cy.signIn('test1' + Cypress.env('testEmailDomain'), 'password')
      cy.title().should('include', 'Alphabiz')
      cy.get('#version').contains(/^v\d+\.\d+\.\d+/)

      cy.changeLanguage('EN', 'CN')
      cy.changeLanguage('CN', 'TW')
      cy.changeLanguage('TW', 'EN')
    })
  })
  describe('Player', () => {
    beforeEach(function onBeforeEach () {
      if (Cypress.platform === 'win32') this.skip()
    })
    it('.mkv', () => {
      cy.signIn('test1' + Cypress.env('testEmailDomain'), 'password')
      const mediaPath = 'samples/Embedded.Subtitles.Sample.Princess.Mononoke.1080p.H264.AAC.DualAudio.5.1.BDrip.mkv'
      cy.playMedia(mediaPath, { isPlay: true, duration: 39.795 })
    })
    it('.avi', () => {
      cy.signIn('test1' + Cypress.env('testEmailDomain'), 'password')
      const mediaPath = 'samples/GoneNutty.avi'
      cy.playMedia(mediaPath, { isPlay: false })
    })
  })
})