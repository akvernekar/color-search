import axios from 'axios';
import {colorUrl} from './constant';

export const getColorsByName = async(searchText) =>{
    try{
        const res = await axios.get(`${colorUrl}/${searchText}`)
        if(res.data){
            return res.data.colors;
        }
    }
    catch(error){
        console.log('error', error)
    }
    return []
}