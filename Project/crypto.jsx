import React from "https://esm.sh/react@18.3.1";

const coins = [
  { symbol: "BTC", name: "Bitcoin", price: "$68,420", change: "+2.4%" },
  { symbol: "ETH", name: "Ethereum", price: "$3,840", change: "+1.8%" },
  { symbol: "SOL", name: "Solana", price: "$152.30", change: "+4.9%" },
];

const styles = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: #050505;
  }

  .crypto-app {
    min-height: 100vh;
    color: #fff7df;
    background:
      radial-gradient(circle at top right, rgba(212, 175, 55, 0.24), transparent 34rem),
      linear-gradient(135deg, #030303 0%, #12100a 48%, #2a2108 100%);
    padding: 24px;
  }

  .hero {
    min-height: 58vh;
    border: 1px solid rgba(212, 175, 55, 0.28);
    background:
      linear-gradient(135deg, rgba(0, 0, 0, 0.82), rgba(45, 35, 8, 0.58)),
      url("https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1600&q=80");
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.46);
    overflow: hidden;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 22px 28px;
    border-bottom: 1px solid rgba(212, 175, 55, 0.22);
    backdrop-filter: blur(14px);
  }

  .navbar h2 {
    margin: 0;
    color: #f5c84c;
    font-size: 1.25rem;
  }

  .navbar div,
  .hero-actions {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  a {
    color: #fff4cf;
    text-decoration: none;
    font-weight: 600;
  }

  button {
    border: 0;
    border-radius: 8px;
    background: linear-gradient(135deg, #ffd66b, #b68118);
    color: #090704;
    cursor: pointer;
    font-weight: 800;
    padding: 12px 18px;
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.22);
  }

  button.secondary {
    background: rgba(255, 247, 223, 0.08);
    border: 1px solid rgba(245, 200, 76, 0.38);
    color: #f8dc88;
  }

  .hero-content {
    max-width: 720px;
    padding: 78px 28px 92px;
  }

  .eyebrow {
    margin: 0 0 12px;
    color: #f5c84c;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    max-width: 680px;
    font-size: clamp(2.4rem, 6vw, 5.2rem);
    line-height: 0.95;
  }

  .hero-content > p:not(.eyebrow) {
    max-width: 560px;
    color: #e9d9a8;
    font-size: 1.06rem;
    line-height: 1.7;
  }

  .stats,
  .coin-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin-top: 22px;
  }

  .stats article,
  .coin-card {
    border: 1px solid rgba(212, 175, 55, 0.24);
    border-radius: 8px;
    background: rgba(8, 8, 8, 0.78);
    padding: 22px;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
  }

  .stats span,
  .coin-card span {
    color: #bca869;
    font-size: 0.92rem;
  }

  .stats strong {
    display: block;
    margin: 10px 0;
    color: #ffd66b;
    font-size: 2rem;
  }

  small {
    color: #54d88f;
    font-weight: 700;
  }

  .market {
    padding: 58px 0 24px;
  }

  .section-title h2 {
    margin: 0;
    font-size: 2rem;
  }

  .coin-card {
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    align-items: center;
    gap: 16px;
  }

  .coin-icon {
    display: grid;
    width: 48px;
    height: 48px;
    place-items: center;
    border-radius: 50%;
    background: #f5c84c;
    color: #090704;
    font-weight: 900;
  }

  .coin-card h3 {
    margin: 0 0 4px;
  }

  .coin-card strong {
    color: #fff3bf;
    font-size: 1.1rem;
  }

  @media (max-width: 800px) {
    .crypto-app {
      padding: 14px;
    }
    .navbar {
      align-items: flex-start;
      flex-direction: column;
    }

    .hero-content {
      padding: 54px 22px 68px;
    }

    .stats,
    .coin-list {
      grid-template-columns: 1fr;
    }

    .coin-card {
      grid-template-columns: auto 1fr;
    }

    .coin-card strong,
    .coin-card small {
      grid-column: 2;
    }
  }
`;

function el(type, props, ...children) {
  return React.createElement(type, props, ...children);
}

export default function CryptoApp() {
  return el(
    "main",
    { className: "crypto-app" },
    el(
      "section",
      { className: "hero" },
      el(
        "nav",
        { className: "navbar" },
        el("h2", null, "CryptoVault"),
        el(
          "div",
          null,
          el("a", { href: "#market" }, "Market"),
          el("a", { href: "#portfolio" }, "Portfolio"),
          el("button", null, "Connect Wallet")
        )
      ),
      el(
        "div",
        { className: "hero-content" },
        el("p", { className: "eyebrow" }, "Black Gold Trading Desk"),
        el("h1", null, "Track, trade, and grow your crypto portfolio."),
        el(
          "p",
          null,
          "Follow live market movement, monitor premium coins, and keep your digital assets organized in one polished dashboard."
        ),
        el(
          "div",
          { className: "hero-actions" },
          el("button", null, "Start Trading"),
          el("button", { className: "secondary" }, "View Markets")
        )
      )
    ),
    el(
      "section",
      { className: "stats", id: "portfolio" },
      el(
        "article",
        null,
        el("span", null, "Total Balance"),
        el("strong", null, "$124,870.45"),
        el("small", null, "+12.8% this month")
      ),
      el(
        "article",
        null,
        el("span", null, "Daily Profit"),
        el("strong", null, "$3,420.18"),
        el("small", null, "+4.2% today")
      ),
      el(
        "article",
        null,
        el("span", null, "Active Assets"),
        el("strong", null, "18"),
        el("small", null, "Across 6 chains")
      )
    ),
    el(
      "section",
      { className: "market", id: "market" },
      el(
        "div",
        { className: "section-title" },
        el("p", { className: "eyebrow" }, "Live Market"),
        el("h2", null, "Top performing coins")
      ),
      el(
        "div",
        { className: "coin-list" }, ...coins.map((coin) =>
          el(
            "article",
            { className: "coin-card", key: coin.symbol },
            el("div", { className: "coin-icon" }, coin.symbol.slice(0, 1)),
            el("div", null, el("h3", null, coin.name), el("span", null, coin.symbol)),
            el("strong", null, coin.price),
            el("small", null, coin.change)
          )
        )
      )
    ),
    el("style", null, styles)
  );
}
