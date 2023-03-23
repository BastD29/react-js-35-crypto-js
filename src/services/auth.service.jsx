import CryptoJs from "crypto-js";

const secretKey = "my_secret_key";

const AuthService = {
  encryptPassword: function (password) {
    const encryptedPassword = CryptoJs.AES.encrypt(
      password,
      secretKey
    ).toString();
    return encryptedPassword;
  },

  decryptPassword: function (encryptedPassword) {
    const decryptedPasswordBytes = CryptoJs.AES.decrypt(
      encryptedPassword,
      secretKey
    );
    const decryptedPassword = decryptedPasswordBytes.toString(
      CryptoJs.enc.Utf8
    );
    return decryptedPassword;
  },
};

export default AuthService;
