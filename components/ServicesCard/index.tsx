import { useRef, useState } from 'react'
import styles from './ServicesCard.module.scss'

interface IPropsServicesCard {
    id: number,
    image: string,
    title: string,
    description: string
}

const ServicesCard = ({id, image, title, description}: IPropsServicesCard) => {

    const shadowRef = useRef<any>(null);
    const modalRef = useRef<any>(null);
    const [showModal, setShowModal] = useState(false);

    const toggleDescription = (option: boolean): void => {
        if(option)
        {
            shadowRef.current.style.transform = 'translateY(0)';
        }
        else
        {
            shadowRef.current.style.transform = 'translateY(100%)';
        }
    }

    const toggleModal = (option: boolean): void => {
        if(option)
        {
            setShowModal(true);
            setTimeout(() => {
                modalRef.current.style.transform = 'scale(1.1)'
            },0)
        }else 
        {
            setShowModal(false);
        }
    }

    return(
        <>
            <div className={styles.serviceItem} onMouseOver={(() => {toggleDescription(true)})} onMouseLeave={(() => {toggleDescription(false)})}>
                <img src={image} alt='Salón Mundo Risas'/>
                <div className={styles.itemFooter}>
                    <span>{title}</span>
                </div> 
                <div className={styles.serviceDescriptionContainer} ref={shadowRef}>
                    <p>{description}</p>
                    <button onClick={(() => {toggleModal(true)})}>SABER MÁS</button>
                </div>
            </div>
            {showModal ? 
            <div className={styles.modalContainer}>
                <div className={styles.modalBody} ref={modalRef}>
                    <img onClick={(() => {toggleModal(false)})} src='/assets/icons/close-icon.png' alt='cerrar'/>
                    <span>{title}</span>
                    {id == 1 ?
                    <>
                    <div className={styles.descriptionContainer}>
                        <p>Duración 2 horas 30 minutos</p>
                        <p>30 niños y 20 adultos (Cupo básico. Consultar por adicionales)</p>
                        <ul>
                            <li>Tarjetas de invitación</li>
                            <li>DJ, 3 animadoras</li>
                            <li>Piñata</li> 
                            <li>Souvenir para los invitados</li>
                            <li>Regalo especial para el agasajado</li>
                            <li>Maquillaje</li>
                            <li>Disfraces y vestidos</li>
                            <li>Just Dance - Humo, luces, lluvia de burbujas</li>
                        </ul>
                        <h3>SERVICIO ADULTOS</h3>
                        <ul>
                            <li>1 asistente</li>
                            <li>Vajilla completa</li>
                            <li>Café, Mate, Te - LIBRE</li>
                            <li>Mantelería</li>
                        </ul>
                        <h3>Menú niños:</h3>
                        <ul>
                            <li>Panchos</li>
                            <li>Patitas y caritas Smile</li>
                            <li>Merienda</li>
                        </ul>
                        <p>Todos los menús incluyen snacks, gaseosa línea Coca-Cola, jugos, agua y mesa dulce</p>
                    </div>
                    </>
                    :''}
                    {id == 2 ?
                    <>
                    <div className={styles.descriptionContainer}>
                        <p>Duración 2 horas 30 minutos</p>
                        <p>30 niños y 20 adultos (Cupo básico. Consultar por adicionales)</p>
                        <ul>
                            <li>Living especial para los chicos</li>
                            <li>Barra de jugos con Granadina</li>
                            <li>Baile y animacion teen</li> 
                            <li>Just Dance - humo, luces, lluvia de burbujas</li>
                            <li>Robot LedTarjetas de invitación</li>
                            <li>Maquillaje</li>
                            <li>DJ, 3 animadoras</li>
                            <li>Souvenir para los invitados</li>
                            <li>Regalo especial para el cumpleañero</li>
                        </ul>
                        <h3>SERVICIO ADULTOS</h3>
                        <ul>
                            <li>1 asistente</li>
                            <li>Vajilla completa</li>
                            <li>Café, Mate, Te - LIBRE</li>
                            <li>Mantelería</li>
                        </ul>
                        <h3>Menú teen's:</h3>
                        <ul>
                            <li>Panchos</li>
                            <li>Patitas y caritas Smile</li>
                            <li>Merienda</li>
                        </ul>
                        <p>Todos los menús incluyen snacks, gaseosa línea Coca-Cola, jugos, agua y mesa dulce</p>
                    </div>
                    </>
                    :''}
                    {id == 3 ?
                    <>
                    <div className={styles.descriptionContainer}>
                        <p>Duración 3 horas</p>
                        <h3>Incluye:</h3>
                        <p>Adultos: 70</p>
                        <p>Niños: 30</p>
                        <h3>DJ</h3>
                        <ul>
                            <li>3 animadoras</li>
                            <li>Piñata</li>
                            <li>Souvenir para los invitados</li> 
                            <li>Regalo especial para el cumpleañero</li>
                            <li>Maquillaje</li>
                            <li>Disfraces y vestidos</li>
                            <li>Animación para adultos y chicos</li>
                        </ul>
                        <h3>SERVICIO ADULTOS</h3>
                        <ul>
                            <li>3 camareros</li>
                            <li>Vajilla completa</li>
                            <li>Café, Mate, Te - LIBRE</li>
                            <li>Mantelería completa</li>
                            <li>Proyector</li>
                        </ul>
                        <h3>Menú niños:</h3>
                        <ul>
                            <li>Panchos</li>
                            <li>Patitas y caritas Smile</li>
                            <li>Merienda</li>
                        </ul>
                        <p>Todos los menús incluyen snacks, gaseosa línea Coca-Cola, jugos, agua y mesa dulce</p>
                    </div>
                    </>
                    :''}
                    {id == 4 ? 
                    <>
                    <div className={styles.descriptionContainer}>
                        <p>Duración 3 horas y media</p>
                        <h3>Incluye:</h3>
                        <ul>
                            <li>Servicio de animación para niños y adultos</li>
                            <li>DJ</li>
                            <li>Maquillaje</li> 
                            <li>Souvenir (Sombrero de egresados, pochoclos)</li>
                            <li>Show Robot Led</li>
                            <li>Pista de baile, Just Dance, máquina de humo, burbujas</li>
                            <li>Arcade Multi-juegos</li>
                            <li>Consolas Ps4, Xbox, Wii</li>
                        </ul>
                        <h3>Servicio adultos</h3>
                        <ul>
                            <li>Camareros</li>
                            <li>Vajilla completa</li>
                            <li>Café, Mate, Te - LIBRE</li> 
                            <li>Mantelería</li>
                        </ul>
                        <h3>Menú a elección para los chicos:</h3>
                        <ul>
                            <li>Nuggets de pollo, Caritas Smile y Pizzetas</li>
                            <li>Panchos y Pizzetasa</li>
                        </ul>
                        <h3>Menú adultos:</h3>
                        <ul>
                            <li>Empanadas</li>
                            <li>Brusquetas</li>
                            <li>Salchichas envueltas</li>
                            <li>Pizza Party libre 10 sabores</li>
                            <li>Pernil de cerdo con salsas</li>
                            <li>Almendrado con salsa de chocolate</li>
                            <li>Gaseosa libre (Línea Coca Cola)</li>
                            <li>Medio Litro de cerveza por persona</li>
                            <li>Brindis (1 copa de Champagne)</li>
                        </ul>
                    </div>
                    </>
                    : ''}
                </div>
            </div>
            :''}
        </>
    )
}

export default ServicesCard