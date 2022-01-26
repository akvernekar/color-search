import searchIcon from "../../images/searchIcon.png";
import styles from './searchInput.module.scss';

function SearchInput(props){
    const {searchColorHandle, colorText} = props;

    return (
        <div className={styles.searchContent}>
        <input className={styles.inputContent} placeholder='Search your color' value={colorText} onChange={searchColorHandle}/>
        <img className={styles.searchIcon} src={searchIcon} alt='' />
        </div>
    )
}

export default SearchInput;