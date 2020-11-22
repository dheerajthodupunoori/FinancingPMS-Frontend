import {APPCONFIG} from './config';

export const LoginConfigLocal = {
  customerLoginURL: APPCONFIG.localhostURL +"api/Login/customerLogin",
  firmloginURL: APPCONFIG.localhostURL+ "api/Login",
};

export const LoginConfigServer = {
  customerLoginURL: APPCONFIG.defaultURL + "api/Login/customerLogin",
  firmloginURL: APPCONFIG.defaultURL + "api/Login",
};
