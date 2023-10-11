import { serviceFunction } from "../utils/functions";
import Service from "./Service";

const PublicService = {
  fetchSummary: (accountId) =>
    Service.post(`/getSummary`, serviceFunction({ accountId: accountId })),
  fetchTransactions: (data) =>
    Service.post(`/fetchTransactions `, serviceFunction(data)),
  getActiveBenefitsList: (data) =>
    Service.post(`/getActiveBenefitsList`, serviceFunction(data)),
  getCombinedBenefitsList: (data) =>
    Service.post(`/getCombinedBenefitsList`, serviceFunction(data)),
  getBenefit: (data) => Service.post(`/getBenefit`, serviceFunction(data)),
  generateOtp: (data) => Service.post(`/generateOtp`, data),
  verifyOtp: (data) => Service.post(`/verifyOtp`, data),
  logout: (data) => Service.post(`/logout`, data),
  getQualifyingTransactions: (data) =>
    Service.post(`/getQualifyingTransactions`, serviceFunction(data)),
  getAllSubscriptions: (data) =>
    Service.post(`/getAllSubscriptions`, serviceFunction(data)),
  handshakeRedirection: (data) =>
    Service.post(`/handshakeRedirection`, serviceFunction(data)),
  sendFeedback: (data) => Service.post(`/sendFeedback `, serviceFunction(data)),
  updateCustomerNotif: (data) =>
    Service.post(`/updateNotif/customer `, serviceFunction(data)),
};

export default PublicService;
