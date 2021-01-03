import { Item } from "src/app/models/item";

export class ItemsList extends HTMLElement {
  
  public items: Item[];

  constructor () {
    super();
    
  };

  public connectedCallback() {
    
    //TODO aprender a pegar um objeto via prop, gambiarra temporária
    console.log(this.getAttribute("items"));
    this.items = JSON.parse(this.getAttribute("items")); 
    
    this.render();
  }

  public render() {
    this.innerHTML = `
    <table class="table table-hover table-bordered">
    <thead>
        <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
            <th>REMOVER</th>
        </tr>
    </thead>
    <tbody>
    ${this.items
      .map(
        (item, idx) =>
          `
      <tr>      
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.valor}</td>
        <td><button id=${"button-add".concat(
          idx.toString()
        )} value="button" type="button"> Add </button></td>
        <td><button id=${"button-remove".concat(
          idx.toString()
        )} value="button" type="button"> Remove </button></td>
        </tr>
        `
      )
      .join("")}           

    </tbody>

    <tfoot>
    </tfoot>
</table>
      
    `;
  }
}

customElements.define("app-items-list", ItemsList);
