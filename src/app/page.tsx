'use client'
import Link from "next/link";
import styles from "./page.module.css"
import { useState } from "react";
import WatsonChat from './WatsonChat'
export default function Home() {
  const[menu,setMenu]=useState(false)
  const mostra=()=>{setMenu(true)}
  const fecha=()=>{setMenu(false)}
  return (
    <>
    <WatsonChat/>
     {/* Menu mobile */}
     
    {menu && (
      <section className={`${styles.MenuM} ${styles.mostrar}`}>
      <button className={styles.Fechar} onClick={fecha}>x</button>
      <Link href={"routes/Login"} className={styles.githubG}><img className={styles.githubG} src="usu.avif" alt="GitHub"  /></Link>
      <Link href={"routes/Produtos"} className={styles.linkL}>Produtos</Link>
      <Link href={"routes/Depoimentos"} className={styles.linkL}>Depoimentos</Link>
      <Link href={"routes/Integrantes"} className={styles.linkL}>Integrantes</Link>
      <Link href={"routes/Contato"} className={styles.linkL}>Contato</Link>
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
        <Link href={"routes/Produtos"} className={styles.linkP}>Produtos</Link>
        <Link href={"routes/Depoimentos"} className={styles.link}>Depoimentos</Link>
        <Link href={"routes/Integrantes"} className={styles.link}>Integrantes</Link>
        <Link href={"routes/Contato"} className={styles.link}>Contato</Link>
      </ul>
      <Link href={"routes/Login"} className={styles.github}><img className={styles.github} src="usu.avif" alt="GitHub"  /></Link>
    </header>
    {/*Textos na primeira parte da pagina principal */}
    <section className={styles.pt1}>
      <h1 className={styles.titulo1}>Descubra o Novo</h1>
      <p className={styles.texto1}>Descubra uma nova era de energia solar. Inteligente, eficiente e sustentável. Transforme luz em energia de forma inovadora.</p>
      <Link href={'routes/Produtos'} className={styles.bt1}>Conheça o Solar Flower</Link>
    </section>
    {/* Imagem para a tel de fundo da primeira parte*/}
    <section className={styles.bg}></section>
    <img className={styles.bg1} src="bg1.jfif" alt="bg1"/>
    {/* Primeira box*/}
    <section className={styles.box1}>
      <h1 className={styles.titulo2}>Solar Power</h1>
      <p className={styles.texto2}>Somos uma empresa que une tecnologia e sustentabilidade para transformar a energia solar em inovação.</p>
    </section>
    {/* Segunda box*/}
    <section className={styles.degrade}></section>
    <section className={styles.box2}>
    <section className={styles.Boxtxt1}>
      <h1 className={styles.titulo3}>Energia Reinventada</h1>
      <p className={styles.texto3}>Um design escultural e uma solução inteligente para gerar energia limpa e sustentável, ideal para sua casa, carro ou empresa — isso é o que define a Solar Power.</p>
    </section>
    <section className={styles.Boxtxt2}>
      <h1 className={styles.titulo4}>Mãe Natureza: A Pioneira em Eficiência</h1>
      <p className={styles.texto4}>Inspirados pelos girassóis, que se movem com o sol para captar sua energia ao máximo, desenvolvemos painéis solares que fazem o mesmo, trazendo inteligência e eficiência à energia solar.</p>
    </section>
    <section className={styles.bgBox2}></section>
    <img className={styles.bg2Box2} src="bgBox2.jfif" alt="bg1"/>
    </section>
    {/* Terceira box*/}
    <section className={styles.box3}>
      <h1 className={styles.titulo5}>Reserve o seu Hoje</h1>
      <section className={styles.agenda}>
        <section className={styles.agenda1}>
          <h1 className={styles.tituloA}>Escolha o seu Modelo</h1>
          <p className={styles.textoA}>Escolha o modelo do seu solar flower</p>
        </section>
        <section className={styles.agenda1}>
          <h1 className={styles.tituloA}>Agende sua visita</h1>
          <p className={styles.textoA}>escolha a data e horário para a visita técnica</p>
        </section>
        <section className={styles.agenda1}>
          <h1 className={styles.tituloA}>Fique atento(a)</h1>
          <p className={styles.textoA}>enviaremos um email com todas as informações nescessárias</p>
        </section>
      </section>
      <section className={styles.bt3}>
        <Link href={'LoginA'} className={styles.bt4}>Reserve pelo chat!!</Link>
      </section>
    </section>
    {/*Rodapé*/}
    <footer className={styles.Rodape}>
      <h1 className={styles.titulo6}>Solar Power</h1>
      <ul className={styles.LinkR}>
        <h2 className={styles.tituloR}>Links Rápidos</h2>
        <Link className={styles.linkR} href={'/'}>Home</Link>
        <Link className={styles.linkR} href={'routes/Produtos'}>Produto</Link>
        <Link className={styles.linkR} href={'routes/Depoimentos'}>Depoimento</Link>
        <Link className={styles.linkR} href={'routes/Integrantes'}>Integrantes</Link>
        <Link className={styles.linkR} href={'routes/Contato'}>Contato</Link>
      </ul>
      <ul className={styles.LinkR}>
        <h2 className={styles.tituloR}>Produtos</h2>
        <Link className={styles.linkR} href={'routes/Produtos'}>Visão Geral</Link>
        <Link className={styles.linkR} href={'routes/ET'}>Especificações Técnicas</Link>
        <Link className={styles.linkR} href={'routes/Vantagens'}>Vantagens</Link>
      </ul>
      <ul className={styles.LinkR}>
        <h2 className={styles.tituloR}>Empresa</h2>
        <Link className={styles.linkR} href={'routes/Integrantes'}>Integrantes</Link>
        <Link className={styles.linkR} href={'routes/Contato'}>Contato</Link>
      </ul>
    </footer>

    </>
  );
}
