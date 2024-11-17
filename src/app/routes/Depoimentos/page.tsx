'use client'
import styles from './Depoimentos.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Depoimentos(){
    const [menu,setMenu]=useState(false)
    const mostra=()=>{setMenu(true)}
    const fecha=()=>{setMenu(false)}

    return(
        <>
        {/* Menu mobile */}  
        {menu && (
          <section className={`${styles.MenuM} ${styles.mostrar}`}>
            <button className={styles.Fechar} onClick={fecha}>x</button>
            <Link href={""} className={styles.githubG}><img className={styles.githubG} src="github.jfif" alt="GitHub"  /></Link>
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
          <Link href={""} className={styles.github}><img src="/github.jfif" alt="GitHub"  /></Link>
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

          {/* Outros depoimentos */}
          <section className={styles.dep}>
            <h1 className={styles.tituloD}>&quot;Transformando a maneira como vemos a energia solar.&quot;</h1>
            <p className={styles.textoD}>&quot;O Solar Flower é uma excelente adição à nossa sede. Com ele, não só produzimos mais energia, mas também inspiramos nossos colaboradores a adotar práticas mais sustentáveis no dia a dia.&quot;</p>
            <p className={styles.persona}>— Mariana Torres, Diretora de Operações da Vivo</p>
          </section>

          {/* Mais seções de depoimentos */}
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
            <Link href={'/'} className={styles.bt4}>Reserve o seu !!</Link>
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
        </>
    )
}
