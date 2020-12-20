
import './views/home/home';

export class App extends HTMLElement {

  public fullNameString = "Saul0kz a";

  get fullname() {
    return this.fullNameString;
  }

  public connectedCallback() {
    this.render();
  }

  public render() {
    const x = "testando";
    this.innerHTML = `
     <app-view-home />
    `;
  }
}

customElements.define('app-root', App);
