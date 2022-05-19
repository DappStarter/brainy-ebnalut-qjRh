require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name razor meadow slow hockey produce army giggle'; 
let testAccounts = [
"0xd0209acfbe9639ca6ed5b9557ab6ca2e075313e0018d7752adbacc8127e36812",
"0x9712bfd6d72d91fdd86b8eebac52eb0eee1aa4c85144c58e36c76cd9173ec4ad",
"0x01e23138b24832275dc64ae6bf0ef1a1197813c0676af06f3f294e0a8478b6cb",
"0x5757b0bdb42f181d8c70b63fc565de03bd9a373a58e2c0dc07436bf03012bf78",
"0x8098f3f37b6a6289d6a2fec7c7207835f56f25f7113db794bc165a3a379fa440",
"0x6f16e74254ff9b078fb4dfbe3600e4446d7691bc23c36749b951d3cea6280583",
"0x1406ec6aceecd5111730dd96128112a5b6509600c1ab59fce54580506142af83",
"0x21f1df4766ed77f4e331d834df947addd4f0237446866dcd6d4f211783acc4bc",
"0x38b02dc5fba980de71511b095dcbbb5dd7b1d7e6e46b81d9afff67b71171cef3",
"0xc66e5774d2df80ca55f3dca581e7a9c88023f8e3c3f106e099a8f77f72e31047"
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

