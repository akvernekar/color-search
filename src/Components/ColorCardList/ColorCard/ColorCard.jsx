import {useMemo} from 'react';
import { ColorCardVariant } from './ColorCardVariant';
import styles from './colorCard.module.scss';

function ColorCard(props){
    const {hex, name} = props.data;

    const pickRandomCardHandle = useMemo(()=>{
        const cardVarients = Object.values(ColorCardVariant);
        const randomIndex = Math.floor(Math.random()*cardVarients.length)
        return cardVarients[randomIndex] || '';
    }, [])

    return (
        <div style={{backgroundColor:hex}}  className={`${styles.card} ${styles[pickRandomCardHandle]}`}>
            <p className={styles.colorText}>{name}</p>
            <p className={styles.colorText}>{hex}</p>
        </div>
    )
}

export default ColorCard;