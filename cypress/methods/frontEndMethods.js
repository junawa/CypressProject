import objectRepoIndex from '../objectRepository/objectRepoMain.js';
import utils from './utils.js';

class FrontEndMethods{
    visitUrl(val){
        const url = utils.getRowData(val);     
        cy.visit(url);
        cy.url().should('include', url);
    }

    clickElement(objName, pageName){
        const page = objectRepoIndex[pageName];
        if(!page){
            throw new Error(`Page '${pageName}' not found in object repository.`);
        }
            
        return cy.get(page[objName]).click();
    }

    setText(val, objName, pageName){
        const page = objectRepoIndex[pageName];
        const txtVal = utils.getRowData(val); 
        if(!page){
            throw new Error(`Page '${pageName}' not found in object repository.`);
        }

        return cy.get(page[objName]).type(txtVal);                     
    }

    assertEqualValue(val, objName, pageName){
        const page = objectRepoIndex[pageName];
        const txtVal = utils.getRowData(val); 
        if(!page){
            throw new Error(`Page '${pageName}' not found in object repository.`);
        }

       
        cy.get(page[objName]).should('be.visible').invoke("text").then((text) => {           
            cy.wrap(text.trim()).should("have.text", txtVal);
        });
    }

    assertPartialValue(val, objName, pageName){
        const page = objectRepoIndex[pageName];
        const txtVal = utils.getRowData(val);
        if(!page){
            throw new Error(`Page '${pageName}' not found in object repository.`);
        }
       
        cy.get(page[objName]).should('be.visible').invoke("text").then((text) => {
            cy.wrap(text.trim()).should("include", txtVal);
        });
    }
    
    assertValueIncrements(objName, pageName){
        const page = objectRepoIndex[pageName];
        if(!page){
            throw new Error(`Page '${pageName}' not found in object repository.`);
        }

        cy.get(page[objName]).should('be.visible').invoke("text").then((value) => {
            const cleanedText = value.replace(/[^0-9]/g, "").trim(); // Remove $ and "/ coin"          
            const startValue = parseInt(cleanedText, 10);

            cy.wait(1000);

            cy.get('.container > div:nth-child(2) > .ticket-price').invoke("text").then((updatedValue) => {
                const cleanedText = updatedValue.replace(/[^0-9]/g, "").trim(); // Remove $ and "/ coin"
                const newValue = parseInt(cleanedText, 10);
                expect(newValue).to.be.greaterThan(startValue);
            })
        })
    }
    
    assertMarketValue(){
        // coins owned
        cy.get('.inventory > .inventory-item:nth-of-type(3) > div:nth-of-type(2)').invoke('text').then((owned) => {
            const cleanedText = owned.replace(/[^0-9]/g, "").trim(); // Remove $ and "/ coin"
            const coinsOwned = parseInt(cleanedText, 10);

            // market value
            cy.get('.inventory > .inventory-item:nth-of-type(3) > .amount-owned').invoke('text').then((value) => {
            const cleanedText = value.replace(/[^0-9]/g, "").trim(); // Remove $ and "/ coin"
            const marketValue = parseInt(cleanedText, 10);

            // coin A price
            cy.get('.container > div:nth-child(1) > .ticket-price').invoke('text').then((price) => {
            const cleanedText = value.replace(/[^0-9]/g, "").trim(); // Remove $ and "/ coin"
            const priceValue = parseInt(cleanedText, 10);

            const coinPrice = coinsOwned * priceValue;
            expect(coinPrice).to.be.equal(marketValue);
            })
        })
    })

       
    }
}

export default new FrontEndMethods();