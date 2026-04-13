import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import InstagramFeed from '../components/InstagramFeed'
import './Home.css'

const IFOOD = 'https://www.ifood.com.br/delivery/paulinia-sp/a-dona-dos-quitutes---confeitaria-artesanal-jardim-america/84ab3b0f-1d9c-4676-9cd5-b750085f2a4c'

/* ── Produto card ── */
function ProductCard({ src, alt, nome, desc, delay = 0 }) {
  const [err, setErr] = useState(false)
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`product-card anim-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="product-img-wrap">
        {!err
          ? <img src={src} alt={alt} className="product-img" onError={() => setErr(true)} />
          : <div className="product-img-placeholder"><span>🍬</span></div>}
      </div>
      <div className="product-info">
        <h3 className="product-nome">{nome}</h3>
        <p className="product-desc">{desc}</p>
      </div>
    </div>
  )
}

const produtos = [
  { src: '/images/produto1.jpg', alt: 'Trufa Crocante', nome: 'Trufa Crocante', desc: 'Camadas de chocolate com recheio surpreendente.' },
  { src: '/images/produto2.jpg', alt: 'Bolo de Cenoura', nome: 'Bolo de Cenoura', desc: 'Fofinho por dentro, coberto com brigadeiro cremoso.' },
  { src: '/images/produto3.jpg', alt: 'Cookie Recheado', nome: 'Cookie Recheado', desc: 'Crocante por fora, macio e surpreendente por dentro.' },
  { src: '/images/produto4.jpg', alt: 'Tortinha de Banana', nome: 'Tortinha de Banana', desc: 'Base crocante, banana caramelizada e chantilly fresco.' },
]

/* ── SVG Icons ── */
function PhoneIcon() {
  return (
    <svg viewBox="0 0 48 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="40" height="72" rx="7"/>
      <line x1="17" y1="13" x2="31" y2="13"/>
      <circle cx="24" cy="63" r="3.5"/>
    </svg>
  )
}

function ScooterIcon() {
  return (
    <svg viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="54" r="13"/>
      <circle cx="78" cy="54" r="13"/>
      <path d="M35 54 Q42 54 50 44 Q58 34 68 30 L78 30"/>
      <path d="M50 44 Q40 44 35 54"/>
      <path d="M68 30 L72 14 L85 14"/>
      <path d="M50 26 Q60 24 70 28"/>
      <line x1="85" y1="14" x2="85" y2="28"/>
    </svg>
  )
}

function CookieIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M40 8 A32 32 0 1 0 72 40 A24 24 0 0 1 40 8 Z"/>
      <circle cx="30" cy="35" r="3.5" fill="currentColor" stroke="none"/>
      <circle cx="44" cy="48" r="3.5" fill="currentColor" stroke="none"/>
      <circle cx="52" cy="30" r="2.5" fill="currentColor" stroke="none"/>
      <circle cx="34" cy="55" r="2.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

const cards = [
  {
    icon: <PhoneIcon />,
    titulo: 'Faça seu pedido online',
    desc: 'Peça seus quitutes favoritos de forma rápida e prática, sem sair de casa.',
  },
  {
    icon: <ScooterIcon />,
    titulo: 'Receba no conforto do seu lar',
    desc: 'Realizamos entregas rápidas e seguras para que você possa desfrutar dos nossos quitutes no conforto da sua casa.',
  },
  {
    icon: <CookieIcon />,
    titulo: 'Saboreie cada momento',
    desc: 'Aproveite nossos quitutes fresquinhos, feitos com carinho, para tornar seu dia ainda mais especial.',
  },
]

export default function Home() {
  const [heroErr,    setHeroErr]    = useState(false)
  const [entregaErr, setEntregaErr] = useState(false)

  const [cfRef,      cfInView]      = useInView()
  const [prodRef,    prodInView]    = useInView()
  const [entRef,     entInView]     = useInView()
  const [sobreRef,   sobreInView]   = useInView()
  const [contatoRef, contatoInView] = useInView()

  return (
    <div className="home">

      {/* ════ HERO ════ */}
      <section className="hero">
        <div className="hero-text hero-anim-left">
          <p className="hero-eyebrow">Conheça a Dona dos Quitutes</p>
          <h1 className="hero-title">
            Sabor que<br />surpreende
          </h1>
          <p className="hero-sub">
            Iguarias artesanais preparadas com muito carinho,
            para adoçar cada momento especial.
          </p>
          <div className="hero-actions hero-anim-up">
            <a href={IFOOD} target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
              Pedir pelo iFood
            </a>
            <a href="#" className="btn-hero-secondary"
               onClick={e => { e.preventDefault(); alert('Cardápio em breve!') }}>
              Ver o Cardápio
            </a>
          </div>
        </div>

        <div className="hero-img-wrap hero-anim-right">
          {!heroErr
            ? <img src="/images/cokkie.jpg" alt="Cookie recheado artesanal" className="hero-img" onError={() => setHeroErr(true)} />
            : <div className="hero-img-fallback">🍪</div>}
        </div>
      </section>

      {/* ════ COMO FUNCIONA — 3 cards roxo ════ */}
      <section className="como-funciona" ref={cfRef}>
        <div className="cf-grid">
          {cards.map((c, i) => (
            <div key={i}
              className={`cf-card anim-up ${cfInView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="cf-icon">{c.icon}</div>
              <h3 className="cf-titulo">{c.titulo.toUpperCase()}</h3>
              <p className="cf-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════ ALGUNS DE NOSSOS QUITUTES ════ */}
      <section className="produtos" ref={prodRef}>
        <div className="section-wrap">
          <div className={`section-head anim-up ${prodInView ? 'visible' : ''}`}>
            <p className="section-eyebrow">— O que fazemos —</p>
            <h2 className="section-title">Alguns de nossos quitutes</h2>
            <p className="section-sub">
              Uma pequena amostra do que preparamos com amor todos os dias.
            </p>
          </div>
          <div className="produtos-grid">
            {produtos.map((p, i) => (
              <ProductCard key={p.nome} {...p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ════ ENTREGAS RÁPIDAS ════ */}
      <section className="entregas" ref={entRef}>
        <div className={`entregas-img anim-left ${entInView ? 'visible' : ''}`}>
          {!entregaErr
            ? <img src="/images/entrega.png" alt="Entregas rápidas" onError={() => setEntregaErr(true)} />
            : <img src="/images/entrega.png" alt="Entregas rápidas" />}
        </div>
        <div className={`entregas-text anim-right ${entInView ? 'visible' : ''}`}>
          <h2 className="entregas-titulo">Entregas Rápidas</h2>
          <p className="entregas-subtitulo">Saboreie a conveniência</p>
          <p className="entregas-desc">
            Desfrute da praticidade de receber os nossos quitutes no conforto do seu lar.
            Faça agora o seu pedido e tenha uma experiência única.
          </p>
          <a href={IFOOD} target="_blank" rel="noopener noreferrer" className="btn-entregas">
            Fazer Pedido
          </a>
        </div>
      </section>

      {/* ════ SOBRE ════ */}
      <section className="sobre" ref={sobreRef}>
        <div className="sobre-inner">
          <div className={`sobre-visual anim-left ${sobreInView ? 'visible' : ''}`} aria-hidden="true">
            <div className="sobre-blob"><span>🍰</span></div>
          </div>
          <div className={`sobre-text anim-right ${sobreInView ? 'visible' : ''}`}>
            <p className="section-eyebrow" style={{ color: 'var(--yellow)', opacity: 0.75 }}>— Nossa história —</p>
            <h2 className="sobre-titulo">
              Nascemos da paixão<br /><em>pelos sabores</em>
            </h2>
            <p className="sobre-desc">
              A Dona dos Quitutes nasceu do desejo de compartilhar receitas
              artesanais cheias de sabor e carinho. Cada doce é preparado com
              ingredientes frescos e muito amor — do início ao fim.
            </p>
            <p className="sobre-desc">
              Estamos no coração de São Paulo, prontos para tornar qualquer
              momento mais doce e especial.
            </p>
            <Link to="/contato" className="btn-sobre">Onde nos encontrar →</Link>
          </div>
        </div>
      </section>

      {/* ════ INSTAGRAM ════ */}
      <InstagramFeed />

      {/* ════ CONTATO ════ */}
      <section className="contato" id="contato" ref={contatoRef}>
        <div className="contato-inner">
          <div className={`contato-head anim-up ${contatoInView ? 'visible' : ''}`}>
            <p className="section-eyebrow" style={{ color: 'var(--yellow)', opacity: 0.75 }}>— Fale conosco —</p>
            <h2 className="contato-titulo">Onde nos encontrar</h2>
          </div>

          <div className="contato-grid">
            {/* Horários */}
            <div className={`contato-card anim-up ${contatoInView ? 'visible' : ''}`} style={{ transitionDelay: '0ms' }}>
              <div className="contato-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="contato-card-titulo">Horários</h3>
              <p>Seg – Sex: 11h às 22h</p>
              <p>Sáb – Dom: 11h às 24h</p>
            </div>

            {/* Endereço */}
            <div className={`contato-card anim-up ${contatoInView ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
              <div className="contato-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="contato-card-titulo">Endereço</h3>
              <p>Rua Prates, 194</p>
              <p>Bom Retiro — São Paulo, SP</p>
            </div>

            {/* Telefone */}
            <div className={`contato-card anim-up ${contatoInView ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
              <div className="contato-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.08-1.08a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="contato-card-titulo">Telefone</h3>
              <a href="tel:+551134567890">(11) 3456-7890</a>
              <a href="mailto:info@meusite.com">info@meusite.com</a>
            </div>

            {/* Social */}
            <div className={`contato-card anim-up ${contatoInView ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
              <div className="contato-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </div>
              <h3 className="contato-card-titulo">Instagram</h3>
              <a href="https://instagram.com/adonadosquitutes" target="_blank" rel="noopener noreferrer">@adonadosquitutes</a>
            </div>
          </div>

          <div className={`contato-ifood anim-up ${contatoInView ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
            <p className="contato-ifood-text">Prefere pedir pelo iFood?</p>
            <a href={IFOOD} target="_blank" rel="noopener noreferrer" className="btn-contato-ifood">
              Abrir no iFood
            </a>
          </div>
        </div>
      </section>

      {/* ════ PEDIR ════ */}
      <section className="pedir">
        <div className="pedir-inner">
          <div className="pedir-text">
            <h2 className="pedir-titulo">Pronto para pedir?</h2>
            <p className="pedir-sub">
              Peça pelo iFood e receba nossos quitutes fresquinhos onde você estiver.
            </p>
          </div>
          <a href={IFOOD} target="_blank" rel="noopener noreferrer" className="btn-pedir">
            Abrir no iFood
          </a>
        </div>
      </section>

    </div>
  )
}
