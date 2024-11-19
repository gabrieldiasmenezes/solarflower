'use client'
import styles from './Depoimentos.module.css'
import Link from 'next/link'
import { useState } from 'react'
import WatsonChat from './WatsonChat'
export default function Depoimentos(){
    const [menu,setMenu]=useState(false)
    const mostra=()=>{setMenu(true)}
    const fecha=()=>{setMenu(false)}

    return(
        <>
        <WatsonChat/>
        {/* Menu mobile */}  
        {menu && (
          <section className={`${styles.MenuM} ${styles.mostrar}`}>
            <button className={styles.Fechar} onClick={fecha}>x</button>
            <Link href={"https://github.com/gabrieldiasmenezes/solarflower"} className={styles.githubG}><img className={styles.githubG} src="github.jfif" alt="GitHub"  /></Link>
            <Link href={"Login"} className={styles.loginL}>Login</Link>
            <Link href={"Produtos"} className={styles.linkL}>Produtos</Link>
            <Link href={"Depoimentos"} className={styles.linkL}>Depoimentos</Link>
            <Link href={"Integrantes"} className={styles.linkL}>Integrantes</Link>
            <Link href={"Contato"} className={styles.linkL}>Contato</Link>
          </section> 
        )}

        <Link href={'/'} className={styles.SolarPower2}>SolarFlower</Link>
        <ul onClick={mostra} className={styles.Menu}>
            <li>_____</li>
            <li>_____</li>
            <li>_____</li>
        </ul>

        {/* Menu para desktop e tablet */}
        <header className={styles.cabecalho}>
          <Link href={'/'} className={styles.SolarPower}>SolarFlower</Link>
          <ul className={styles.Link}>
            <Link href={"Produtos"} className={styles.linkP}>Produtos</Link>
            <Link href={"Depoimentos"} className={styles.link}>Depoimentos</Link>
            <Link href={"Integrantes"} className={styles.link}>Integrantes</Link>
            <Link href={"Contato"} className={styles.link}>Contato</Link>
          </ul>
          <Link href={"Login"} className={styles.login}>Login</Link>
          <Link href={"https://github.com/gabrieldiasmenezes/solarflower"} className={styles.github}><img src="/github.jfif" alt="GitHub"  /></Link>
        </header>

        {/* Textos na primeira parte da pagina principal */}
        <section className={styles.pt1}>
          <h1 className={styles.titulo1}>Depoimento dos nossos clientes</h1>
        </section>

        {/* Box com depoimentos */}
        <section className={styles.boxD}>
          <section className={styles.dep}>
            <h1 className={styles.tituloD}>&quot;Um passo significativo em direção a um futuro mais sustentável.&quot;</h1>
            <p className={styles.textoD}>&quot;Nosso compromisso com a sustentabilidade vai além dos nossos produtos. Ao integrar o SmartFlower em nossas operações, estamos mostrando que é possível combinar inovação com responsabilidade ambiental, promovendo o uso de energia renovável de forma eficiente e elegante.&quot;</p>
            <p className={styles.persona}>— Ana Costa, Diretora de Sustentabilidade da Natura</p>
          </section>
          
          <section className={styles.dep}>
            <h1 className={styles.tituloD}>&quot;Um marco no nosso compromisso com a sustentabilidade.&quot;</h1>
            <p className={styles.textoD}>&quot;Ao incorporar o Solar Flower em nossos eventos, demonstramos que é possível ser sustentável sem abrir mão de inovação e estilo. Ele se tornou um ícone de nossa jornada em direção à energia limpa.&quot;</p>
            <p className={styles.persona}>— Lucas Almeida, Diretor do Rock in Rio</p>
          </section>
          <section className={styles.dep}>
            <h1 className={styles.tituloD}>&quot;Transformando a maneira como vemos a energia solar.&quot;</h1>
            <p className={styles.textoD}>&quot;O Solar Flower é uma excelente adição à nossa sede. Com ele, não só produzimos mais energia, mas também inspiramos nossos colaboradores a adotar práticas mais sustentáveis no dia a dia.&quot;</p>
            <p className={styles.persona}>— Mariana Torres, Diretora de Operações da Vivo</p>
          </section>
          <section className={styles.dep}>
            <h1 className={styles.tituloD}>&quot;A energia renovável ao seu alcance, agora para pequenas empresas!&quot;</h1>
            <p className={styles.textoD}>&quot;O Solar Power tem sido uma excelente solução para a EcoBrew. A instalação foi simples e o sistema atende perfeitamente às nossas necessidades, com uma excelente economia. Estamos orgulhosos de gerar nossa própria energia renovável.&quot;</p>
            <p className={styles.persona}>—Carlos Botelho, Fundador do EcoBrew Café</p>
          </section>
          <section className={styles.dep}>
            <h1 className={styles.tituloD}>&quot;Sustentabilidade inteligente para o seu negócio!&quot;</h1>
            <p className={styles.textoD}>&quot;O Solar Power foi a escolha ideal para a GreenTech. Ele é eficiente, acessível e se adapta bem ao nosso orçamento. Além disso, é uma forma prática de reduzir nossa pegada ambiental.&quot;</p>
            <p className={styles.persona}>—Patrícia Oliveira, Gerente de Sustentabilidade da GreenTech</p>
          </section>
          <section className={styles.dep}>
            <h1 className={styles.tituloD}>&quot;Economia e sustentabilidade no seu lar!&quot;</h1>
            <p className={styles.textoD}>&quot;Instalar o Solar Power em minha casa foi uma excelente decisão. Ele oferece uma ótima capacidade de geração de energia, reduzindo minha conta de luz e, ao mesmo tempo, ajudando o meio ambiente.&quot;</p>
            <p className={styles.persona}>—Luciana Ferreira, Proprietária de Casa em São Paulo</p>
          </section>
          <section className={styles.dep}>
            <h1 className={styles.tituloD}>&quot;Energia solar acessível e eficiente para sua casa!&quot;</h1>
            <p className={styles.textoD}>&quot;Com o Solar Power, consegui uma forma econômica de gerar energia em casa. Ele é fácil de instalar, eficiente e perfeito para quem quer reduzir custos e colaborar com a sustentabilidade.&quot;</p>
            <p className={styles.persona}>—Eduardo Silva, Morador de Porto Alegre</p>
          </section>
        </section>

        {/* Terceira box */}
        <section className={styles.degrade}></section>
        <section className={styles.box3}>
          <h1 className={styles.titulo5}>Reserve o seu Hoje</h1>
          <section className={styles.agenda}>
            <section className={styles.agenda1}>
              <h1 className={styles.tituloA}>Escolha o seu Modelo</h1>
              <p className={styles.textoA}>Escolha o modelo do seu solar flower</p>
            </section>
            <section className={styles.agenda1}>
              <h1 className={styles.tituloA}>Agende sua visita</h1>
              <p className={styles.textoA}>Escolha a data e horário para a visita técnica</p>
            </section>
            <section className={styles.agenda1}>
              <h1 className={styles.tituloA}>Fique atento(a)</h1>
              <p className={styles.textoA}>Enviaremos um email com todas as informações necessárias</p>
            </section>
          </section>
          <section className={styles.bt3}>
            <p className={styles.bt4}>Reserve pelo chat !!</p>
          </section>
        </section>

        {/* Rodapé */}
        <footer className={styles.Rodape}>
          <h1 className={styles.titulo6}>Solar Power</h1>
          <ul className={styles.LinkR}>
            <h2 className={styles.tituloR}>Links Rápidos</h2>
            <Link className={styles.linkR} href={'/'}>Home</Link>
            <Link className={styles.linkR} href={'Produtos'}>Produto</Link>
            <Link className={styles.linkR} href={'Depoimentos'}>Depoimento</Link>
            <Link className={styles.linkR} href={'Integrantes'}>Integrantes</Link>
            <Link className={styles.linkR} href={'Contato'}>Contato</Link>
          </ul>
          <ul className={styles.LinkR}>
            <h2 className={styles.tituloR}>Produtos</h2>
            <Link className={styles.linkR} href={'Produtos'}>Visão Geral</Link>
            <Link className={styles.linkR} href={'ET'}>Especificações Técnicas</Link>
            <Link className={styles.linkR} href={'Vantagens'}>Vantagens</Link>
          </ul>
          <ul className={styles.LinkR}>
            <h2 className={styles.tituloR}>Empresa</h2>
            <Link className={styles.linkR} href={'Integrantes'}>Integrantes</Link>
            <Link className={styles.linkR} href={'Contato'}>Contato</Link>
          </ul>
        </footer> 
        {/* Imagem para a tela de fundo da primeira parte */}
      <section className={styles.bg}></section>
      <img className={styles.bg1} src="/bgInt.jfif" alt="bg1" />
        </>
    )
}
