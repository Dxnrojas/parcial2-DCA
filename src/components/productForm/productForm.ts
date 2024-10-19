import { addObserver, appState, dispatch } from "../../store/store";
import { Product } from "../../types/productTypes";
class productForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    addObserver(this)
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <h2>Form</h2>
         <form class="product-form">
            <input type="text" id="text-input" placeholder="Nombre de product" required />
            <button type="submit" id="add-btn">Agregar</button>
         </form>
        `;
  }
       

}

customElements.define("task-form", productForm);
export default productForm;
