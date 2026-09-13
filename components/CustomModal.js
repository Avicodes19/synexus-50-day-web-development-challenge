class CustomModal extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const template = document.getElementById("modal-template");

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.closeTimer = null;
  }

  disconnectedCallback() {
    clearTimeout(this.closeTimer);
  }

  open() {
    this.setAttribute("open", "");
  }

  close() {
    this.removeAttribute("open");
  }

  toggle() {
    this.toggleAttribute("open");
  }
}

customElements.define("custom-modal", CustomModal);
