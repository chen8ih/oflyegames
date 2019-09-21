import CryptoJS from "crypto-js";

const AESkey = "doracms_";
const MD5key = "dora";
export default {
	AES: {
    //加密
		encrypt: (message) => {
			return CryptoJS.AES.encrypt(message, AESkey, {
				mode: CryptoJS.mode.CBC,
				padding: CryptoJS.pad.Pkcs7
			}).toString();
    },
    //解密
		decrypt: (encrypt) => {
			return CryptoJS.AES.decrypt(encrypt, AESkey, {
				mode: CryptoJS.mode.CBC,
				padding: CryptoJS.pad.Pkcs7
			}).toString(CryptoJS.enc.Utf8);
		}
	},
	Base64: {
		stringify: (message) => {
			let base64Str = new Buffer(message).toString('base64');
			return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Base64.parse(base64Str));
		}
	},
	SHA: {
		SHA1: (message) => {
			return CryptoJS.SHA1(message).toString();
		}
	},
	MD5: (str) => {
		return CryptoJS.MD5(MD5key + str).toString();
	}
};
