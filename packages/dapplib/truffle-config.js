require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index rifle magic huge inflict clog metal gentle'; 
let testAccounts = [
"0x0b8f6ccffae549a9fa18b6e063fc7f807f7cb8931b4ad3042feb12dbe901665b",
"0x07e746add5cf36e3308aaf2b3be2467f04e4ee0e5d425f6ba27dc5f741efb9cf",
"0x08b9392091282d1c07ae1bceeb785c5dbac01742aaeccb7b9bbb2af6ae140fe6",
"0x04b806fd24ead44b2dfe1178c348345fa7fef62c6e8a3c6a8e1789202d7cf069",
"0x6b64288ae6ca9bdeb4dbe16ff9d55dc0bd4b951b6d8c02f5eecf6f98695f8582",
"0x4c0e091d3b1acaa95af11f13df72faf0b18e3e20b984b016e6c751c734d55028",
"0x71d18f69e9959a17edd8d2aa8aaaa64b8a25ba7ee622d61ee23acefe061356b4",
"0xb6a47ebc11cd4c90e27a20f17d10371a059dc877563eb049116d6f60b2961f6c",
"0x9633861f2b6f24c25f8b596b61e99daf92b2db4c745feac0c8c38115975d9c9f",
"0xe7411f192e8ae87a740f94e33f96e5b241d2958c09764eebc95b507cbe3cef28"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

