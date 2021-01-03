import { ShoppingCart } from "../../models/ShoppingCart";
import { products } from "../../data/products";

export class Home extends HTMLElement {
  public shoppingCart = new ShoppingCart();

  public connectedCallback() {
    this.render();
    //remove
    this.shoppingCart.paraArray().map((item, idx) => {
      const id = "button-remove".concat(idx.toString());
      var el = document.getElementById(id);

      el.addEventListener("click", () => {
        this.shoppingCart.remove(item);
        this.connectedCallback();
      });
    });
    products.map((item, idx) => {
      const id = "button-add".concat(idx.toString());
      var el = document.getElementById(id);

      el.addEventListener("click", () => {
        this.shoppingCart.add(item);
        this.connectedCallback();
      });
    });
  }

  
  public render() {
    const productsTable = `
    <table class="table table-hover table-bordered">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>VALOR</th>            
            <th>ADD</th>
        </tr>
    </thead>
    <tbody>
    ${products
      .map(
        (product, idx) =>
          `
      <tr>      
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.valor}</td>
        <td><button id=${"button-add".concat(
          idx.toString()
        )} value="button" type="button"> Add </button></td>        
        </tr>
        `
      )
      .join("")}           
  
    </tbody>
  
    <tfoot>
    </tfoot>
  </table>      
    `;
const shoppingCartTable = `
    <table class="table table-hover table-bordered">
    <thead>
        <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>VALOR</th>            
        <th>REMOVE</th>
        </tr>
    </thead>
    <tbody>
    ${this.shoppingCart
      .paraArray()
      .map(
        (product, idx) =>
          `
      <tr>      
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.valor}</td>     
        <td><button id=${"button-remove".concat(
          idx.toString()
        )} value="button" type="button"> Remove </button></td>
        </tr>
        `
      )
      .join("")}             
    </tbody>
  </table>      
    `;
    const qntItens = `<div> Quantidade de itens: ${
      this.shoppingCart.paraArray().length
    }`;
    const total = `<div> Total: ${this.shoppingCart.total()}`;
    this.innerHTML = productsTable + shoppingCartTable + qntItens + total;
  }
}

customElements.define("app-view-home", Home);
