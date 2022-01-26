import {useState, useCallback} from 'react';
import {getColorsByName} from './colorSearchData';
import ColorCardList from '../ColorCardList/ColorCardList';
import styles from './colorSearchComponent.module.scss';


let searchTimer;
function Color(){
    const [colorText, setColorText] = useState('');
    const [listOfColors, setListOfColors] = useState([]);

    const colorApi = useCallback(async (value)=>{
        if(value.length > 2){
          const allColors = await getColorsByName(value);
          if(!!allColors){
              setListOfColors(allColors);
          }
    }else{
        setListOfColors([]);
    }
    }, [])

    const searchColorHandle = useCallback((e) =>{
        const value = e.target.value
        setColorText(value);
        clearTimeout(searchTimer);
        searchTimer = setTimeout(()=>{
            colorApi(value)
            }, 1000);    
    }, [colorApi]);

    return (
        <div className={styles.container}>
            <p className={styles.title}>Color Search</p>
            <input className={styles.inputContent} placeholder='Search your color' value={colorText} onChange={searchColorHandle}/>
            <ColorCardList colorsData={listOfColors} />
        </div>
    )
}

export default Color;