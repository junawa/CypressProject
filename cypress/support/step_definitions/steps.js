import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import frontEndMethods from '../../methods/frontEndMethods';
import utils from '../../methods/utils';

Given('user data has been loaded from {string}', (val) => {    
    utils.setRowData(val);
});

Given('user visits {string} application url', (val) => {   
    frontEndMethods.visitUrl(val);    
});

Given('gets data {string} from file', (val) => {        
    const sample = utils.getRowData(val);
}); 

When('user clicks {string} element in {string} page', (objName, pageName) => {    
    frontEndMethods.clickElement(objName, pageName);
});

When('user set text {string} in element {string} on {string} page', (val, objName, pageName) => {    
    frontEndMethods.setText(val, objName, pageName);
});

Then('user should see {string} in element {string} on {string} page', (val, objName, pageName) => {
    frontEndMethods.assertEqualValue(val, objName, pageName);  
});

Then('user should see it contains {string} in element {string} on {string} page', (val, objName, pageName) => {
    frontEndMethods.assertPartialValue(val, objName, pageName);   
});

Then('user should see increasing value of element {string} on {string} page', (objName, pageName) => {
    frontEndMethods.assertValueIncrements(objName, pageName);   
});

Then('assert market value', (objName, pageName) => {
    frontEndMethods.assertMarketValue();
});



