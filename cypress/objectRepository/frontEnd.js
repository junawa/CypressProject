class FrontEnd{    
    lblUSDBalance = '.inventory > div:nth-child(2)';
    
    lblCoinA = '.container > div:nth-child(1) > .ticket-name';
    lblCoinAOwned = '.inventory > .inventory-item:nth-of-type(3) > div:nth-of-type(2)';
    lblCoinAMarketValue = '.inventory > .inventory-item:nth-of-type(3) > .amount-owned';    
    txtCoinA = '.container > div:first-child input.purchase-input.mt';
    lblCoinAPrice = '.container > div:nth-child(1) > .ticket-price';
    btnCoinABuy = '.container > div:first-child button.action-button:contains("Buy")';
    
    lblCoinB = '.container > div:nth-child(2) > .ticket-name';
    lblCoinBPrice = '.container > div:nth-child(2) > .ticket-price';
    
    lblCoinC = '.container > div:nth-child(3) > .ticket-name';
    lblCoinD = '.container > div:nth-child(4) > .ticket-name';    
 }
 
 export default new FrontEnd();
 