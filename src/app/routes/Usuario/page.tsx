'use client'
import styles from './Usuario.module.css'
import Link from 'next/link'

export default function Depoimentos(){
    return(
        <>
        {/* Menu mobile */}
      <Link href={'/'} className={styles.SolarPower2}>SolarFlower</Link>
      <Link href={'/'} className={styles.Logout}>Logout</Link>
      
    {/*Textos na primeira parte da pagina principal */}
    <section className={styles.pt1}>
      <h1 className={styles.titulo1}>Bem-Vindo à sua página de usuário</h1>
    </section>
    {/* Imagem para a tel de fundo da primeira parte*/}
    <section className={styles.bg}></section>
    <img className={styles.bg1} src="/bg4.jfif" alt="bg1"/>
    {/*Box com depoimentos */}
    
        </>
    )
}