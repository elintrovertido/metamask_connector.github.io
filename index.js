var web3;

async function connect(){
    await window.web3.currentProvider.enable();
    web3 = new web3(window.web3.currentProvider);
    const accounts = web3.eth.accounts;
// const accounts = await ethereum.request({ method: 'eth_accounts' });
console.log(accounts);

}




