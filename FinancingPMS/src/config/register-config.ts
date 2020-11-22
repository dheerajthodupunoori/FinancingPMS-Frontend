import {APPCONFIG}  from "./config";

export const RegisterConfigLocal = {
  firmRegistrationURL: APPCONFIG.localhostURL + "api/Registration",
  saveFirmAdditionalDetailsURL: APPCONFIG.localhostURL +
    "api/Registration/saveFirmDetails",
  customerRegistrationToFirmURL:
    APPCONFIG.localhostURL +  "api/CustomerRegistration/PerformCustomerRegistration",
  saveCustomerAdditinalDetailsURL: APPCONFIG.localhostURL +
    "api/CustomerRegistration/saveCustomerAdditionalDetails",
};
export const RegisterConfigServer = {
  firmRegistrationURL:  "",
  saveFirmAdditionalDetailsURL: APPCONFIG.defaultURL + "api/Registration/saveFirmDetails",
  customerRegistrationToFirmURL:  APPCONFIG.defaultURL +"api/CustomerRegistration/PerformCustomerRegistration",
  saveCustomerAdditinalDetailsURL: APPCONFIG.defaultURL + "api/CustomerRegistration/saveCustomerAdditionalDetails",
};
