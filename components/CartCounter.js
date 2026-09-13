import { globalStore } from "../store.js";

class CartCounter extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
  :host {
    display: inline-block;
    font-family: "Poppins", sans-serif;
  }

  .counter {
    display: inline-flex;
    align-items: center;

    padding: 9px 15px;

    border: 1px solid var(--border-color);
    border-radius: 6px;

    background: var(--card-bg);
    color: var(--primary-light);

    font-size: 13px;
  }

  #count {
    margin-left: 5px;
    color: var(--text-color);
    font-weight: 600;
  }
</style>

      <div class="counter">
        Cart: <span id="count">0</span>
      </div>
    `;
  }

  connectedCallback() {
    const countElement = this.shadowRoot.querySelector("#count");

    countElement.textContent = globalStore.getState().cartCount;

    this.unsubscribe = globalStore.subscribe((state) => {
      countElement.textContent = state.cartCount;
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}

customElements.define("cart-counter", CartCounter);
