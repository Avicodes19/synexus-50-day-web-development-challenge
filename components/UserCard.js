class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["name", "role"];
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const name = this.getAttribute("name") || "Unknown User";
    const role = this.getAttribute("role") || "No Role";
    this.shadowRoot.innerHTML = `
      <style>
        :host {
        display: block;
        width: 320px;
        max-width: calc(100% - 40px);
        margin: 20px auto;
        }
        .card {
          padding: 28px 24px;
          background: #003566;
          border: 1px solid rgba(33, 150, 243, 0.4);
          border-radius: 16px;
          color: white;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          transition:
            transform 0.2s ease,
            border-color 0.2s ease;
        }
        .card:hover {
          transform: translateY(-4px);
          border-color: #2196f3;
        }
        .name {
          margin: 0 0 8px;
          font-size: 1.4rem;
        }
        .role {
          margin: 0;
          color: #90caf9;
          font-size: 1rem;
        }
      </style>
      <div class="card">
        <h2 class="name">${name}</h2>
        <p class="role">${role}</p>
      </div>
    `;
  }
}
customElements.define("user-card", UserCard);
