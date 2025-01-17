// import { addObserver, appState, dispatch } from "../store/store";
// import Product, { Attribute as ProductAttribute } from "../components/productItem/productItem";
// import ShoppingCartItem, { Attribute as ShoppingCartItemAttribute } from "../components/productList/productList";
// import { getProductsState } from "../store/actions";

// class Dashboard extends HTMLElement {

//     constructor() {
//         super();
//         this.attachShadow({ mode: 'open' });

//         addObserver(this);
//     }

//     async connectedCallback() {
//         console.log('Dashboard connected');


//         if (!appState.products || appState.products.length === 0) {
//             const action = await getProductsState();

//             dispatch(action);
//             console.log('Products state after fetch:', appState.products);
//         } else {
//             console.log('Products already loaded:', appState.products);
//         }

//         this.render();
//     }



//     fetchProducts() {
  
//         try {
//             if (!appState.products || appState.products.length === 0) {
//                 console.log('No products available in the state.');
//                 return null;
//             }

//             const container = this.ownerDocument.createElement('section');
//             container.className = 'products-container';
   
//             appState.products.forEach((product: any) => {
//                 const productItem = this.ownerDocument.createElement('product-component') as Product;
//                 productItem.setAttribute(ProductAttribute.uid, product.id.toString());
//                 productItem.setAttribute(ProductAttribute.image, product.image);
//                 productItem.setAttribute(ProductAttribute.description, product.title);
//                 productItem.setAttribute(ProductAttribute.category, product.category);
//                 productItem.setAttribute(ProductAttribute.price, product.price.toString());
//                 productItem.setAttribute(ProductAttribute.rating, product.rating.rate.toString());

//                 container.appendChild(productItem);
//             });

//             console.log('Products rendered:', appState.products);

//             return container;
//         } catch (error) {
//             console.error("Error rendering products:", error);
//             return null;
//         }
//     }

//     renderShoppingCart() {
//         const cartContainer = this.ownerDocument.createElement('section');
//         cartContainer.className = 'cart-container';

//         if (appState.cart.length === 0) {
//             cartContainer.innerHTML = `<p>Your cart is empty</p>`;
//         } else {
 
//             appState.cart.forEach((item: Product) => {
//                 const cartItemComponent = this.ownerDocument.createElement('cart-component') as ShoppingCartItem;
//                 cartItemComponent.setAttribute(ShoppingCartItemAttribute.uid, item.uid?.toString() || '');
//                 cartItemComponent.setAttribute(ShoppingCartItemAttribute.utitle, item.description || '');
//                 cartItemComponent.setAttribute(ShoppingCartItemAttribute.price, item.price?.toString() || '');
//                 cartItemComponent.setAttribute(ShoppingCartItemAttribute.image, item.image || '');

//                 cartContainer.appendChild(cartItemComponent);
//             });
//         }

//         return cartContainer;
//     }

//     render() {
//         if (this.shadowRoot) {
//             this.shadowRoot.innerHTML = `
            
            
//             `; 


//             const productsTitle = this.ownerDocument.createElement('h2');
//             productsTitle.textContent = 'Product List';
//             this.shadowRoot.appendChild(productsTitle);

 
//             const productsContainer = this.fetchProducts();
//             if (productsContainer) {
//                 this.shadowRoot.appendChild(productsContainer);
//             } else {
//                 this.shadowRoot.innerHTML += `<p>no encontre los productos :( </p>`;
//             }

//             const cartTitle = this.ownerDocument.createElement('h2');
//             cartTitle.textContent = 'Shopping Cart';
//             this.shadowRoot.appendChild(cartTitle);

   
//             const cartContainer = this.renderShoppingCart();
//             if (cartContainer) {
//                 this.shadowRoot.appendChild(cartContainer);
//             }
//         }
//     }
// }

// customElements.define('app-dashboard', Dashboard);
// export default Dashboard
