import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* import * as bip39 from 'bip39'
import * as bip32 from 'bip32'
import * as slip77 from 'slip77'
import * as liquid from 'liquidjs-lib'

const regtest = liquid.networks.regtest

try {
  const mnemonic = bip39.generateMnemonic()
  const seed = bip39.mnemonicToSeedSync(mnemonic)

  const node = bip32.fromSeed(seed, regtest)
  const nodeBlinding = slip77.fromSeed(seed)

  const addressIndex = 0
  const child = node.derivePath(`m/44'/0'/0'/${addressIndex}`)
  const p2pkh = liquid.payments.p2pkh({ pubkey: child.publicKey, network: regtest })

  // Now we pass the scriptPubKey down to the derive function to get the corresponding blinding key
  const blindingKeyPair = nodeBlinding.derive(p2pkh.output!)

  console.log(p2pkh.address)
  //console.log(blindingKeyPair.privateKey, blindingKeyPair.publicKey)
} catch (err) {
  console.log(err)
}
 */




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
