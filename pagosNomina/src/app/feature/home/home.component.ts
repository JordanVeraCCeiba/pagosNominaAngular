import { Component, Input, OnInit } from '@angular/core';
import { NgbAlertConfig}  from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbAlertConfig]
})
export class HomeComponent implements OnInit {

  @Input() public alerts: Array<string> = [];

  constructor(alertConfig: NgbAlertConfig) {
    // customize default values of alerts used by this component tree
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }

  static trm2: string;
  trm: string;

  ngOnInit() {
    this.soapCall();
  }
  
  soapCall() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 
                 `/SuperfinancieraWebServiceTRM/TCRMServicesWebService/TCRMServicesWebService?WSDL`, 
                true);

    const request =
        `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:act="http://action.trm.services.generic.action.superfinanciera.nexura.sc.com.co/">
        <soapenv:Header/>
        <soapenv:Body>
        <act:queryTCRM>
        <tcrmQueryAssociatedDate>2020-03-06</tcrmQueryAssociatedDate>
        </act:queryTCRM>
        </soapenv:Body>
        </soapenv:Envelope>`;

    xmlhttp.onreadystatechange =  () => {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                const xml = xmlhttp.responseXML;
                HomeComponent.trm2 = xml.getElementsByTagName('return')[0].childNodes[4].textContent;
                this.trm = xml.getElementsByTagName('return')[0].childNodes[4].textContent;
            }
        }
    }

    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.responseType = 'document';
    xmlhttp.send(request);
  }

}
