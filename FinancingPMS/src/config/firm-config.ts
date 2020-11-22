import {APPCONFIG}  from "./config";

export const FirmConfigLocal = {
  getAllFirms: APPCONFIG.localhostURL +  "api/Firm",
};

export const FirmConfigServer = {
  getAllFirms: APPCONFIG.defaultURL + "api/Firm",
};
