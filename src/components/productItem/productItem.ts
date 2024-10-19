import { appState, dispatch } from "../../store/store";
import { Actions } from '../../types/store';
import { addToCart } from "../../store/actions"

export enum Attribute {
    'uid' = 'uid',
    'image' = 'image',
    'description' = 'description',
    'category' = 'category',
    'price' = 'price',
    'rating' = 'rating',
}

class Product extends HTMLElement {
    uid?: number;
    image?: string;
    description?: string;
    category?: string;
    price?: number;
    rating?: number;


   
    //En este caso, se observan los atributos definidos en el enum Attribute (uid, image, etc.)
    static get observedAttributes() {
        return Object.keys(Attribute);
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }


    //Este método se ejecuta cada vez que un atributo observado (definido en observedAttributes) cambia su valor.
    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        if (propName === Attribute.price || propName === Attribute.rating ||  propName === Attribute.uid) {
            this[propName] = newValue ? Number(newValue) : undefined;
        } else {
            this[propName] = newValue;
        }
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;
    
        this.shadowRoot.innerHTML = `

        
            <div class="product-card">
                <img src="${this.image}" alt="Product Image">
                <h2>${this.description}</h2>
                <p>Category: ${this.category}</p>
                <p>Price: $${this.price}</p>
                <p>Rating: ${this.rating}</p>
                <button id="add-to-cart-btn">Add to Cart</button>
            </div>
        `;
    
        const addButton = this.shadowRoot?.querySelector('#add-to-cart-btn');
        addButton?.addEventListener('click', () => {
            const product = {
                uid: this.uid,
                image: this.image,
                description: this.description,
                category: this.category,
                price: this.price,
                rating: this.rating,
            };
            dispatch(addToCart(product)); // Disparar la acción de agregar el prducto al carrito
        });
    }
    
    
}


customElements.define('product-component', Product);
export default Product;