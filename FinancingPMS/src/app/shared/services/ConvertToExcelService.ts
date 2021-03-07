import { Injectable } from "@angular/core";
import * as XLSX from 'xlsx'; 


@Injectable({
    providedIn: "root",
  })
export class ConvertToExcelService{

    fileName= 'ExcelSheet.xlsx';  
    public firmId : string = "";


    constructor()
    {
        console.log("ConvertToExcelService is invoked.");
    }

    convertToExcel(customersList:any,excel_headers:any[],dataType:string,firmId:string)
    {
        console.log("Excel data",excel_headers);
        console.log(this.firmId);
        const data = [];
        data.push(excel_headers);
        customersList.forEach(customer => {
            let data_item = [customer["AadhaarNumber"],customer["CustomerID"],customer["EmailID"],customer["FirmID"],customer["Name"],customer["phone"]];
            data.push(data_item);
        });

       const ws: XLSX.WorkSheet =XLSX.utils.aoa_to_sheet(data);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.getExcelFileName(firmId,dataType));
    }

    getExcelFileName(firmId:string,dataType:string)
    {
        return firmId+"_"+dataType+".xlsx";
    }
}