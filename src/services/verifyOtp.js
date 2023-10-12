const axios = require("axios");
let data = JSON.stringify({
  mobileVerificationRefId: "38f7cffc-3639-4bd9-9648-11db24098d60",
  otp: "012345",
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://nimbus.sandbox.ibl.hyperface.co/v1/otp/verify",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

export const verify = () => {
  const data = axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  return data;
};
