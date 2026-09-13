import { globalStore } from "../store.js";
class ProductButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const name = this.getAttribute("name") || "Product";
    const icon = this.getAttribute("icon") || "🛒";
    const price = this.getAttribute("price") || "";

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          height: 100%;
          font-family: "Poppins", sans-serif;
        }

        .product-card {
          height: 100%;
          min-height: 50px;
          box-sizing: border-box;
          padding: 24px;
          border: 1px solid #0d47a1;
          border-radius: 12px;
          background: #0b3767;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
          border-color: #90caf9;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
        }

        .icon {
          font-size: 38px;
          margin-bottom: 18px;
        }

        h3 {
          margin: 0 0 8px;
          color: #f0eee7;
          font-size: 17px;
          font-weight: 600;
        }

        .price {
          margin: 0 0 20px;
          color: #ffffff;
          font-size: 14px;
        }

        .add {
          color: #aaa;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .product-card:hover .add {
          color: #90caf9;
        }
      </style>

      <div class="product-card">
        <div class="icon">${icon}</div>
        <h3>${name}</h3>
        <p class="price">${price}</p>
        <span class="add">Add to cart →</span>
      </div>
    `;

    this.card = this.shadowRoot.querySelector(".product-card");
  }

  connectedCallback() {
    this.card.addEventListener("click", this.handleClick);
  }

  disconnectedCallback() {
    this.card.removeEventListener("click", this.handleClick);
  }

  handleClick = () => {
    const currentState = globalStore.getState();

    globalStore.setState({
      cartCount: currentState.cartCount + 1,
    });
  };
}

customElements.define("product-button", ProductButton);
