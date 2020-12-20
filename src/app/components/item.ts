export class Item extends HTMLElement {

  public fullNameString = "Saul0kz a";

  get fullname() {
    return this.fullNameString;
  }

  public connectedCallback() {
    this.render();
  }

  public render() {
    
    this.innerHTML = `
      <h1>Item </h1>
      
    `;
  }
}

customElements.define('app-item', Item);
