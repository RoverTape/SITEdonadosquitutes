import './Cardapio.css'

const menu = [
  {
    categoria: 'Sanduíche de Frango',
    icone: '🍗',
    itens: [
      { nome: 'Sanduíche de Frango Clássico', desc: 'Frango empanado crocante, alface, tomate e molho especial da casa.', preco: 'R$ 27' },
      { nome: 'Sanduíche de Frango Gigante', desc: 'Porção dupla de frango, queijo derretido, bacon e molho barbecue.', preco: 'R$ 36' },
    ],
  },
  {
    categoria: 'Ofertas Especiais',
    icone: '⭐',
    destaque: true,
    itens: [
      { nome: 'Combo A Crosta', desc: 'Sanduíche clássico + batatas fritas + bebida à escolha.', preco: 'R$ 59,99' },
      { nome: 'Combo Família', desc: '2 sanduíches gigantes + 2 acompanhamentos + 2 bebidas.', preco: 'R$ 59,99' },
    ],
  },
  {
    categoria: 'Tiras',
    icone: '🍖',
    itens: [
      { nome: 'Tiras de Frango — 6 unidades', desc: 'Tiras crocantes temperadas com ervas especiais.', preco: 'R$ 27' },
      { nome: 'Tiras de Frango — 9 unidades', desc: 'Porção família com molho à escolha.', preco: 'R$ 36' },
    ],
  },
  {
    categoria: 'Acompanhamentos',
    icone: '🍟',
    itens: [
      { nome: 'Batatas Fritas', desc: 'Fritas na hora, crocantes e douradas.', preco: 'R$ 16' },
      { nome: 'Macarrão com Queijo', desc: 'Cremoso e quentinho, feito na hora.', preco: 'R$ 16' },
      { nome: 'Salada de Repolho', desc: 'Leve, fresquinha e temperada.', preco: 'R$ 16' },
      { nome: 'Mix de Verduras', desc: 'Combinação saudável grelhada na chapa.', preco: 'R$ 16' },
    ],
  },
  {
    categoria: 'Asinhas',
    icone: '🔥',
    itens: [
      { nome: 'Asinhas Picantes — 6 unidades', desc: 'Crocantes por fora, suculentas por dentro. Molho picante irresistível.', preco: 'R$ 27' },
      { nome: 'Asinhas Picantes — 9 unidades', desc: 'Porção generosa para dividir (ou não).', preco: 'R$ 36' },
    ],
  },
  {
    categoria: 'Sobremesas',
    icone: '🧇',
    itens: [
      { nome: '★ Waffle', desc: 'Waffle artesanal com calda de chocolate e frutas vermelhas.', preco: 'R$ 16' },
      { nome: 'Milkshake', desc: 'Cremoso, espesso e nos sabores: chocolate, morango ou baunilha.', preco: 'R$ 16' },
    ],
  },
]

function MenuItem({ item }) {
  return (
    <li className="menu-item">
      <div className="menu-item-top">
        <span className="menu-item-nome">{item.nome}</span>
        <span className="menu-item-preco">{item.preco}</span>
      </div>
      <p className="menu-item-desc">{item.desc}</p>
    </li>
  )
}

function MenuSection({ categoria, icone, itens, destaque }) {
  return (
    <div className={`menu-section ${destaque ? 'menu-section--destaque' : ''}`}>
      <div className="menu-section-header">
        <span className="menu-section-icone">{icone}</span>
        <h2 className="menu-section-titulo">{categoria.toUpperCase()}</h2>
      </div>
      <div className="menu-section-bar" />
      <ul className="menu-list">
        {itens.map((item) => (
          <MenuItem key={item.nome} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default function Cardapio() {
  const esquerda = menu.filter((_, i) => i % 2 === 0)
  const direita  = menu.filter((_, i) => i % 2 === 1)

  return (
    <div className="cardapio">
      {/* Hero */}
      <section className="cardapio-hero">
        <div className="cardapio-hero-inner">
          <span className="cardapio-hero-badge">— O que temos para você —</span>
          <h1 className="cardapio-hero-titulo">CARDÁPIO</h1>
          <p className="cardapio-hero-sub">
            Iguarias artesanais preparadas com ingredientes frescos e muito carinho.
          </p>
        </div>
      </section>

      {/* Menu grid */}
      <section className="cardapio-body">
        <div className="cardapio-grid">
          <div className="cardapio-col">
            {esquerda.map((s) => (
              <MenuSection key={s.categoria} {...s} />
            ))}
          </div>
          <div className="cardapio-col">
            {direita.map((s) => (
              <MenuSection key={s.categoria} {...s} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
