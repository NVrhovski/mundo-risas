import { useForm } from 'react-hook-form';
import styles from './Contact.module.scss';
import moment from 'moment';

const Contact = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleFormSubmit = (data: any) => {
        let aux = data.date.split('-');
        data.date = `${aux[2]}/${aux[1]}/${aux[0]}`
        window.open(`https://api.whatsapp.com/send?phone=5491164338628&text=Hola!%20Quería%20averiguar%20para%20hacer%20un/una%20${data.eventType},%20con%20${data.participants}%20invitados%20y%20para%20el%20dia%20${data.date}%20`)
    }

    return(
        <div className={styles.mainContactContainer} id='contacto'>
            <h3>Cotizá tu fiesta</h3>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <span>Tipo de festejo</span>
                <select {...register('eventType', {required: true})} style={errors.eventType ? {borderColor: 'red'} : {}}>
                    <option value={''}>-- Elegí el tipo de festejo --</option>
                    <option value={'cumpleaños'}>Cumpleaños</option>
                    <option value={'fiesta de 15'}>Fiesta de 15</option>
                    <option value={'egresaditos'}>Egresaditos</option>
                </select>
                <span>Cantidad de invitados</span>
                <input type='number' {...register('participants', {required: true})} style={errors.participants ? {borderColor: 'red'} : {}}/>
                <span>Fecha</span>
                <input type='date' min={moment().format('YYYY-MM-DD')}{...register('date', {required: true})} style={errors.date ? {borderColor: 'red'} : {}}/>
                <button type='submit'>Contactar</button>
            </form>
        </div>
    )
}

export default Contact