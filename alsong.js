/**
* @fileOverview RSA For Rhinojs
* @module RSAForRhinojs
* @author archethic
* @author jomin398
* @since 2021.08.25
* @copyright archethic
* @copyright jomin398
* @license MIT
* @description This code is licensed under the MIT Licensing Principles.
*/

'use strict';

module.exports = (function() {
	function RSAForRhinojs() {};
	/**
	* @param {string} str to encode data;
	* @param {string} privateKey to set private key;
	*/
	RSAForRhinojs.prototype.encrypt = function(str, privateKey) {
		importPackage(java.math, javax.crypto, java.security, java.security.spec, java.nio.charset);
		//security key for encrypt
		const defaultPrivateKey = [
			"dfbc1f3f4c10e17e0112d72e78916da5",
			"06edd57da06eac6ae4f00dd301067178",
			"057baa9ba94ef6e665bfb29cee567de4",
			"081249c0be376f9811383ce6d12bad74",
			"4a2f12fc16189c3d6ec041222b459541",
			"84165f37d98d188ed5ad158ff8b5004e",
			"8e717f714fc962ab7eb02d58481960d4",
			"d62f09c0b642e496ec703eca1c65374b"
		].join('');
		if (!str) {
			str = (() => {
				const pad2 = i => i.toString().padStart(2, '0');
				
				const date = new Date();
				
				const dateStr = [
					date.getUTCFullYear(),
					pad2(date.getUTCMonth() + 1),
					pad2(date.getUTCDate())
				].join('');
				const timeStr = [
					pad2(date.getUTCHours()),
					pad2(date.getUTCMinutes()),
					pad2(date.getUTCSeconds())
				].join('');
				return 'ALSONG_ANDROID_' + dateStr + '_' + timeStr
			})()
		};
		if (!key) {
			privateKey = defaultPrivateKey;
		}
		let keyFactory = KeyFactory.getInstance("RSA");
		let nvalue = new BigInteger(privateKey, 16);
		let evalue = new BigInteger(65537);
		let pks = new RSAPublicKeySpec(nvalue, evalue);
		let key = keyFactory.generatePublic(pks);
		let cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
		cipher.init(Cipher.ENCRYPT_MODE, key);
		cipher.update(new java.lang.String(str).getBytes(StandardCharsets.UTF_8));
		let hash = cipher.doFinal();
		let hex = new BigInteger(1, hash);
		return java.lang.String.format("%040x", hex);
	}
	return RSAForRhinojs;
})();