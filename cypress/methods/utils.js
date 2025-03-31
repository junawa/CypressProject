class Utils{    
    setRowData(testDataRow){            
        cy.fixture("testData").then((data) => {                                
            Cypress.env("dataList", data[testDataRow]);

            const dataList = Cypress.env("dataList");            
        });                
    }    
    
    getRowData(val){      
        const dataList = Cypress.env("dataList");      
        return dataList[val];             
    }
}

export default new Utils();