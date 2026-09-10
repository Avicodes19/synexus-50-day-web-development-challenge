import { globalStore } from "../store.js";

class ProductButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        button {
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          background: #2196f3;
          color: white;
          cursor: pointer;
          font-size: 14px;
        }

        button:hover {
          opacity: 0.9;
        }
      </style>

      <button type="button">Add to Cart</button>
    `;
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector("button");

    button.addEventListener("click", () => {
      const currentState = globalStore.getState();

      globalStore.setState({
        cartCount: currentState.cartCount + 1,
      });
    });
  }
}

customElements.define("product-button", ProductButton);
