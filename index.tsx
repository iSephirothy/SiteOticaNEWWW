<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Óculos — Loja Exemplo</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#">
        <img src="https://via.placeholder.com/160x40?text=LOGO" alt="Logo" />
      </a>

      <nav class="main-nav">
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Óculos</a></li>
          <li><a href="#">Sunglasses</a></li>
          <li><a href="#">Promoções</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <button class="search-btn" aria-label="Pesquisar">🔍</button>
        <button class="cart-btn" aria-label="Carrinho">🛒 <span class="cart-count">2</span></button>
        <button class="hamburger" aria-label="Menu">☰</button>
      </div>
    </div>
  </header>

  <!-- Hero / Banner -->
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-text">
        <h1>Óculos com estilo <span>feito pra você</span></h1>
        <p>Modelos exclusivos, entrega rápida e garantia de qualidade. Confira as novidades da estação.</p>
        <div class="hero-cta">
          <a class="btn primary" href="#">Ver coleção</a>
          <a class="btn ghost" href="#">Ofertas</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://via.placeholder.com/640x420?text=Banner" alt="Banner promocional">
      </div>
    </div>
  </section>

  <main class="container main-content">
    <section class="products-section">
      <div class="section-head">
        <h2>Mais vendidos</h2>
        <div class="filter-row">
          <label>
            Ordenar:
            <select>
              <option>Mais populares</option>
              <option>Mais vendidos</option>
              <option>Preço: baixo → alto</option>
            </select>
          </label>
        </div>
      </div>

      <div class="products-grid">
        <!-- Repeat product card -->
        <article class="product-card">
          <div class="product-thumb">
            <img src="https://via.placeholder.com/420x300?text=Produto+1" alt="Óculos 1">
          </div>
          <div class="product-body">
            <h3>Óculos Vintage</h3>
            <p class="price">R$ 199,90</p>
            <div class="product-actions">
              <button class="btn small">Ver</button>
              <button class="btn outline small">Comprar</button>
            </div>
          </div>
        </article>

        <article class="product-card">
          <div class="product-thumb">
            <img src="https://via.placeholder.com/420x300?text=Produto+2" alt="Óculos 2">
          </div>
          <div class="product-body">
            <h3>Óculos Classic</h3>
            <p class="price">R$ 229,90</p>
            <div class="product-actions">
              <button class="btn small">Ver</button>
              <button class="btn outline small">Comprar</button>
            </div>
          </div>
        </article>

        <article class="product-card">
          <div class="product-thumb">
            <img src="https://via.placeholder.com/420x300?text=Produto+3" alt="Óculos 3">
          </div>
          <div class="product-body">
            <h3>Sunglasses UV</h3>
            <p class="price">R$ 179,90</p>
            <div class="product-actions">
              <button class="btn small">Ver</button>
              <button class="btn outline small">Comprar</button>
            </div>
          </div>
        </article>

        <article class="product-card">
          <div class="product-thumb">
            <img src="https://via.placeholder.com/420x300?text=Produto+4" alt="Óculos 4">
          </div>
          <div class="product-body">
            <h3>Armação Slim</h3>
            <p class="price">R$ 149,90</p>
            <div class="product-actions">
              <button class="btn small">Ver</button>
              <button class="btn outline small">Comprar</button>
            </div>
          </div>
        </article>

      </div>
    </section>

    <!-- Dashboard-style section -->
    <aside class="dashboard">
      <div class="dashboard-card">
        <h4>Visão geral</h4>
        <div class="stats-grid">
          <div class="stat">
            <span class="stat-num">1.245</span>
            <span class="stat-label">Visitas</span>
          </div>
          <div class="stat">
            <span class="stat-num">312</span>
            <span class="stat-label">Pedidos</span>
          </div>
          <div class="stat">
            <span class="stat-num">R$ 28.900</span>
            <span class="stat-label">Fatura</span>
          </div>
        </div>
      </div>

      <div class="dashboard-card">
        <h4>Últimos pedidos</h4>
        <ul class="orders-list">
          <li>Pedido #1254 — R$ 179,90</li>
          <li>Pedido #1253 — R$ 199,90</li>
          <li>Pedido #1252 — R$ 229,90</li>
        </ul>
      </div>

      <div class="dashboard-card">
        <h4>Filtros</h4>
        <div class="filters">
          <label><input type="checkbox" /> Promoção</label>
          <label><input type="checkbox" /> Novidades</label>
          <label><input type="checkbox" /> Mais vendidos</label>
        </div>
      </div>
    </aside>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-col">
        <h5>Atendimento</h5>
        <p>Seg–Sex: 9h–18h • fale@exemplo.com</p>
      </div>
      <div class="footer-col">
        <h5>Links</h5>
        <ul>
          <li><a href="#">Política de privacidade</a></li>
          <li><a href="#">Trocas e devoluções</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Siga-nos</h5>
        <div class="socials">FB · IG · TT</div>
      </div>
    </div>
    <div class="footer-bottom">
      <small>© <span id="year"></span> Loja Exemplo — Todos os direitos reservados.</small>
    </div>
  </footer>

  <script>
    // Put current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const hamb = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    hamb.addEventListener('click', () => nav.classList.toggle('open'));
  </script>
</body>
</html>
