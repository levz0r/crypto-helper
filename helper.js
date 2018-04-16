var hdkey = require("ethereumjs-wallet/hdkey");
var bip39 = require("bip39");

module.exports = function(MNEMONIC) {
  let seed = bip39.mnemonicToSeed(MNEMONIC);
  let hdRoot = hdkey.fromMasterSeed(seed);
  let xPub = hdRoot.publicExtendedKey();
  return xPub;
};
