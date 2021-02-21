import { Injectable } from "@angular/core";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';


@Injectable({
    providedIn: "root",
  })
export class ConvertToPDFService{
    constructor()
    {
        console.log("ConvertToPDFService is invoked.");
    }

    convertCustomerListToPDF(customersList : any[],pdf_headers:any[])
    {
        const data = [];
        customersList.forEach(customer => {
            let data_item = [customer["AadhaarNumber"],customer["CustomerID"],customer["EmailID"],customer["FirmID"],customer["Name"],customer["phone"]];
            data.push(data_item);
        });
        console.log("Customers List for PDF generation " , data);
        const customers_pdf = new jsPDF();
        customers_pdf.setFontSize(18);
        customers_pdf.text("Active Customers list", 77, 10);
        // customers_pdf.setPage(1);
        // customers_pdf.setTextColor("Gray");
        (customers_pdf as any).autoTable({
            head: pdf_headers,
            body: data,
            theme: 'grid',
            tableLineColor: [189, 195, 199],
            tableLineWidth: 0.75,
            alternateRowStyles: {
                fillColor: [250, 250, 250]
            },
            headerStyles: {
                fillColor: [0, 0, 0],
                fontSize: 11
            },
            bodyStyles: {
                fillColor: [216, 216, 216],
                textColor: 50
            },
            // didDrawCell: data => {
            //   console.log(data.column.index)
            // }
          })


        customers_pdf.output('dataurlnewwindow')
        // customers_pdf.save("a4.pdf");
    }
}