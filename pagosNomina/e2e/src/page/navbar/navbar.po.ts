import { by, element } from 'protractor';

export class NavbarPage {
    linkInicio = element(by.xpath('/html/body/app-root/app-navbar/nav/div/ul/li[1]/a'));
    linkEmpleado = element(by.xpath('/html/body/app-root/app-navbar/nav/div/ul/li[2]/a'));
    async clickBotonEmpleados() {
        await this.linkEmpleado.click();
    }
}
