import ColorCard from './ColorCard/ColorCard';
import styles from './colorCardList.module.scss';

function ColorCardList(props){
    const {colorsData} = props;

    return (
        <div className={styles.cardContainer}>
            {colorsData?.map(color=>{
                return (
                   <ColorCard key={color.hex} data={color} />
                )
            })}
            </div>
    )
}

export default ColorCardList;