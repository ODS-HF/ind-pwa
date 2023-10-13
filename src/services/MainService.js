import { setAuthorizationToken } from "../utils/functions";
import Service from "./Service";

const MainService = {
  fetchNudges: (accountId, token) =>
    Service.get(`/nudges/account/${accountId}`, setAuthorizationToken(token)),
  fetchBenefits: (data, token) =>
    Service.post(`/benefits/pwa/account `, data, setAuthorizationToken(token)),
  generateOTP: (data, token) => Service.post(`/v1/otp/generate `, data),
  verifyOTP: (data) => Service.post(`/v1/otp/verify`, data),
};

export default MainService;
