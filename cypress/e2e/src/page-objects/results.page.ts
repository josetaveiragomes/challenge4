import Page from './page';
import CONSTANTS from "../constants";

class ResultsPage extends Page {

    get propertiesHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('div[data-component="arp-header"] div div h1')
    }

    propertiesHeaderTextAs(value: string): Cypress.Chainable<string> {
        return this.propertiesHeader.invoke('text').as(value)
    }

    get dateStart(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('button[data-testid="date-display-field-start"]')
    }

    get dateEnd(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('button[data-testid="date-display-field-end"]')
    }

    get dateStartText(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.dateStart.invoke('text')
    }

    get dateEndText(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.dateEnd.invoke('text')
    }

    get searchResults(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('div[data-testid="property-card"] div[data-testid="title"]')
    }
    
    searchResultsAs(value: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.searchResults.as(value)
    }

    logPropertyNumber(): void {
        this.propertiesHeaderTextAs('properties')
        cy.get('@properties').then((properties) => {
            cy.log(properties.split(" ")[1].replace(",", ""))
        })
    }

    logPropertyNames(): void {
        this.searchResultsAs('results')
        cy.get('@results').each( $title => {
            cy.log($title.get(0).innerText)
        })
    }

}

export default new ResultsPage(CONSTANTS.URL.RESULTS);