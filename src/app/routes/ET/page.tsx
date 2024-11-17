'use client'
import Link from "next/link"
import { useState } from "react"
import styles from './ET.module.css'

export default function ET(){
    const [menu,setMenu]=useState(false)
    const mostra=()=>{setMenu(true)}
    const fecha=()=>{setMenu(false)}
    return(
        <>
            {/* Menu mobile */}
            {menu && (
        <section className={`${styles.MenuM} ${styles.mostrar}`}>
        <button className={styles.Fechar} onClick={fecha}>x</button>
        <Link href={""} className={styles.githubG}><img className={styles.githubG} src="/github.jfif" alt="GitHub"  /></Link>
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
        <Link href={""} className={styles.github}><img src="/github.jfif" alt="GitHub"  /></Link>
        </header>
        <header className={styles.cabecalho2}>
        <ul className={styles.Link2}>
            <Link href={"ET"} className={styles.link2}>Especificações Técnicas</Link>
            <Link href={"Vantagens"} className={styles.link2}>Vantagens</Link>
        </ul>
        </header>
        {/*Box com as especificações técnicas de cada um dos modelos */}
        <section className={styles.boxET}>
        {/*Box com as especificações técnicas Solar Power + */}
            <section className={styles.ETP}>
                <h1 className={styles.SP}>Solar Power <span className={styles.comp}>+</span></h1>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Resfriamento Inteligente</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Saída Nominal:<p className={styles.texto}>2.50 kWp*</p></li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Produção Anual: <p className={styles.texto}>~4.000-6400 kWh**</p></li>
                    </ul>
                </section>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Especificações Físicas</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Instalação: <p className={styles.texto}>4 pontos de fixação parafusos de aterramento ou fundação de concreto</p></li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Espaço Limpo:<p className={styles.texto}>~1,5 m²</p></li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Peso:<p className={styles.texto}>703 kg</p></li>
                    </ul>
                </section>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Segurança</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Faixa de Temperatura: <p className={styles.texto}>-4 F° — 131° F / 
                        -20°C – 55°C</p></li>
                        <li className={styles.borda}></li>
                        <li className={styles.itemV}>Velocidade do vento antes de entrar automaticamente em duas posições de segurança:<p className={styles.textoV}> 1: {">"}~48 km/h 2: {">"}~63km/h </p></li>
                    </ul>
                </section>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Garantia</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Garantia de desempenho do módulo: <p className={styles.texto}>25 anos</p></li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Garantia do Sistema:<p className={styles.texto}>2 anos</p></li>
                    </ul>
                </section>       
            </section>
            {/*Box com as especificações técnicas Solar Power Minun*/}
            <section className={styles.ETP}>
                <h1 className={styles.SP}>Solar Power <span className={styles.comp}>Minun</span></h1>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Resfriamento Inteligente</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Saída Nominal:<p className={styles.texto}>1,75 kWp*</p></li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Produção Anual: <p className={styles.texto}>~3.100-5.000kWh**</p></li>
                    </ul>
                </section>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Especificações Físicas</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Instalação: <p className={styles.texto}>4 pontos de fixação parafusos de aterramento ou fundação de concreto</p></li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Espaço Limpo:<p className={styles.texto}>~1,1 m² </p></li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Peso:<p className={styles.texto}>454 kg</p></li>
                    </ul>
                </section>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Segurança</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Faixa de Temperatura: <p className={styles.texto}>-4 F° — 131° F / 
                        -20°C – 55°C</p></li>
                        <li className={styles.borda}></li>
                        <li className={styles.itemV}>Velocidade do vento antes de entrar automaticamente em duas posições de segurança:<p className={styles.textoV}> 1: {">"}~40 km/h 2: {">"}~56km/h </p></li>
                    </ul>
                </section>
                <section className={styles.info}>
                    <h3 className={styles.tituloI}>Garantia</h3>
                    <ul className={styles.lista}>
                        <li className={styles.item}>Garantia de desempenho do módulo: <p className={styles.texto}>20 anos</p></li>
                        <li className={styles.borda}></li>
                        <li className={styles.item}>Garantia do Sistema:<p className={styles.texto}>2 anos</p></li>
                    </ul>
                </section>       
            </section>
        </section>
        <section className={styles.degrade}></section>
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
      <Link href={'/'} className={styles.bt4}>Reserve o seu !!</Link>
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