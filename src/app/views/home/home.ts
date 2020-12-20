import '../../components/item';
export class Home extends HTMLElement {

  public fullNameString = "Saul0kz a";

  get fullname() {
    return this.fullNameString;
  }

  public connectedCallback() {
    this.render();
  }

  public render() {
    
    this.innerHTML = `
      <h1>Home</h1>
      
    `;
  }
}

customElements.define('app-view-home', Home);
