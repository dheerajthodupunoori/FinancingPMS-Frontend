import {APPCONFIG}  from "./config";

export const FileUploadConfigLocal = {
    aadhaarUploadForCustomerRegistrationURL : APPCONFIG.localhostURL +
    "api/AzureBlobOperations​/UploadAadhaarImageToAzureBlobContainer"
}

export const FileUploadConfigServer = {
    aadhaarUploadForCustomerRegistrationURL : APPCONFIG.defaultURL + "api/AzureBlobOperations​/UploadAadhaarImageToAzureBlobContainer"
}