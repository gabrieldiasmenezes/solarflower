'use client'
import { useState } from "react"
import styles from './Produtos.module.css'
import Link from "next/link"
import WatsonChat from './WatsonChat'
export default function Produtos(){
    const[menu,setMenu]=useState(false)
  const mostra=()=>{setMenu(true)}
  const fecha=()=>{setMenu(false)}
    return(
        <>
        <WatsonChat/>
            {/* Menu mobile */}
        {menu && (
        <section className={`${styles.MenuM} ${styles.mostrar}`}>
        <button className={styles.Fechar} onClick={fecha}>x</button>
        <Link href={"https://github.com/gabrieldiasmenezes/solarflower"} className={styles.githubG}><img className={styles.githubG} src="/github.jfif" alt="GitHub"  /></Link>
        <Link href={"Login"} className={styles.loginL}>Login</Link>
        <Link href={"Produtos"} className={styles.linkL}>Produtos</Link>
        <Link href={"ET"} className={styles.linkL2}>Especificações Técnicas</Link>
            <Link href={"Vantagens"} className={styles.linkL2}>Vantagens</Link>
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
            <Link href={"Produtos"} className={styles.link}>Produtos</Link>
            <Link href={"Depoimentos"} className={styles.link}>Depoimentos</Link>
            <Link href={"Integrantes"} className={styles.link}>Integrantes</Link>
            <Link href={"Contato"} className={styles.link}>Contato</Link>
        </ul>
        
        <Link href={"Login"} className={styles.login}>Login</Link>
        <Link href={"https://github.com/gabrieldiasmenezes/solarflower"} className={styles.github}><img src="/github.jfif" alt="GitHub"  /></Link>
        </header>
        <header className={styles.cabecalho2}>
        <ul className={styles.Link2}>
            <Link href={"ET"} className={styles.link2}>Especificações Técnicas</Link>
            <Link href={"Vantagens"} className={styles.link2}>Vantagens</Link>

        </ul>
        </header>
        {/*Box com os modelos do solar power */}
        <section className={styles.box1}>
            <section className={styles.BSPP}>
                <img className={styles.SP} src="/SolarPower.png" alt="" />
                <h1 className={styles.SolarP}>Solar Power <span className={styles.comp}>+</span></h1>
                <p className={styles.textoP}>Energia solar máxima para sua casa ou empresa. Invista em sustentabilidade com potência total e economize nas suas contas de luz!</p>
                <del className={styles.PA}>R$259.978,87</del>
                <p className={styles.PN}>R$170.000,00</p>
                <Link href={'LoginA'} className={styles.bt1}>Reserve pelo chat!</Link>
            </section>
            <section className={styles.BSPP}>
                <img className={styles.SP} src="/SolarPower.png" alt="" />
                <h1 className={styles.SolarP}>Solar Power <span className={styles.comp}>Minus</span></h1>
                <p className={styles.textoP}>Eficiência solar ao seu alcance! O Minun combina alta tecnologia e economia, tornando a energia renovável acessível para sua casa ou pequeno negócio.</p>
                <del className={styles.PA}>R$129.989,48</del>
                <p className={styles.PN}>R$85.000,00</p>
                <Link href={'LoginA'} className={styles.bt1}>Reserve pelo chat!</Link>
            </section>
        </section>
        {/*Box com Informações sobre */}
        <section className={styles.box2}>
            <section className={styles.Boxtxt1}>
                <h1 className={styles.titulo3}>Energia Instantânia</h1>
                <p className={styles.texto3}>Aproveite a energia solar de forma descomplicada. Em poucas horas, o Smartflower é entregue e instalado, trazendo energia renovável e eficiente para sua casa com um sistema totalmente independente.</p>
            </section>
            <section className={styles.bgBox2}></section>
            <img className={styles.bg2Box2} src="/bg2.jfif" alt="bg1"/>
        </section>
        {/* Segunda box de Informação*/}
        <section className={styles.degrade}></section>
        <section className={styles.box3}>
            <section className={styles.Boxtxt2}>
                <h1 className={styles.titulo4}>Energia Inspirada</h1>
                <p className={styles.texto4}>Redefinindo a beleza da energia solar. O Smartflower combina design inovador e funcionalidade, movendo-se ao longo do dia para capturar a luz solar de forma dinâmica. Um verdadeiro símbolo de elegância e alto desempenho, tudo em um só produto.</p>
            </section>
            <section className={styles.Boxtxt3}>
                <h1 className={styles.titulo5}>Energia Inteligente</h1>
                <p className={styles.texto5}>Com robótica inteligente, o SmartFlower segue o sol ao longo do dia, aumentando a geração de energia em até 40% em comparação com painéis tradicionais. E ao anoitecer, ele se fecha e se auto-limpa, garantindo desempenho máximo todos os dias.</p>
            </section>
            <section className={styles.bgBox3}></section>
            <img className={styles.bg2Box3} src="/bg3.jfif" alt="bg1"/>
        </section>
        {/*Box de Informacão sobre agendamento */}
        <section className={styles.box4}>
      <h1 className={styles.titulo6}>Reserve o seu Hoje</h1>
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
      <h1 className={styles.titulo7}>Solar Power</h1>
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