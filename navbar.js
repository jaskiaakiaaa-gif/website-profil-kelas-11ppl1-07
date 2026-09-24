class MainNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .my-navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #1e293b;
          padding: 15px 5%;
          font-family: sans-serif;
        }
        .my-navbar .logo a {
          font-size: 24px;
          font-weight: bold;
          color: #38bdf8;
          text-decoration: none;
        }
        .my-navbar .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
          padding: 0;
        }
        .my-navbar .nav-links a {
          color: #f8fafc;
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s;
        }
        .my-navbar .nav-links a:hover {
          color: #38bdf8;
        }
        @media (max-width: 768px) {
          .my-navbar { flex-direction: column; gap: 15px; }
          .my-navbar .nav-links { flex-direction: column; gap: 10px; text-align: center; }
        }
      </style>
      <nav class="my-navbar">
        <div class="logo"><a href="#">XI-RPL-1</a></div>
        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Profil</a></li>
          <li><a href="#">Anggota</a></li>
          <li><a href="#">Kontak</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('main-navbar', MainNavbar);
