class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .my-footer {
          background-color: #0f172a;
          color: #94a3b8;
          padding: 40px 5% 20px 5%;
          font-family: sans-serif;
          font-size: 14px;
        }
        .footer-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 30px;
          margin-bottom: 30px;
        }
        .footer-section h3 { color: #f8fafc; margin-bottom: 15px; }
        .footer-bottom {
          text-align: center;
          border-top: 1px solid #334155;
          padding-top: 20px;
          font-size: 12px;
        }
      </style>
      <footer class="my-footer">
        <div class="footer-container">
          <div class="footer-section">
            <h3>Tentang Kelas</h3>
            <p>Kelas XI-RPL-1 adalah kelas yang berfokus pada pengembangan perangkat lunak dan pemrograman.</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 XI-RPL-1. All Rights Reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('main-footer', MainFooter);
