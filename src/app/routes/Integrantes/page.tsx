'use client'
import styles from './Integrantes.module.css'
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
    {/*Textos na primeira parte da pagina principal */}
    <section className={styles.box1}>
            <section className={styles.BSPP}>
                <img className={styles.SP} src="/SolarPower.png" alt="" />
                <h1 className={styles.SolarP}>João Gabriel Silva Oliveira</h1>
                <p className={styles.textoP}>RM:555308</p>
                <Link href={'/'} className={styles.bt1}>GITHUB</Link>
            </section>
            <section className={styles.BSPP}>
                <img className={styles.SP} src="/gabriel.jfif" alt="" />
                <h1 className={styles.SolarP}>Gabriel Dias Menezes</h1>
                <p className={styles.textoP}>RM:555019</p>
                <Link href={'/'} className={styles.bt1}>GITHUB</Link>
            </section>
            <section className={styles.BSPP}>
                <img className={styles.SP} src="/SolarPower.png" alt="" />
                <h1 className={styles.SolarP}>Sofia Domingues Gonçalves</h1>
                <p className={styles.textoP}>RM:554920 </p>
                <Link href={'/'} className={styles.bt1}>GITHUB</Link>
            </section>
            
        </section>

            <img className={styles.bg1} src="/bgInt.jfif" alt="bg1"/>
        
        
    </>
    )
}