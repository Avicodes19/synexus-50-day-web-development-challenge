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
    display: inline-block;
    padding: 10px 18px;
    border: 1px solid #444;
    border-radius: 6px;
    background: #262920;
    color: #dab263;
    font-size: 14px;
  }

  #count {
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

    // Bonus: render the current state immediately
    countElement.textContent = globalStore.getState().cartCount;

    // Subscribe to future state changes
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
