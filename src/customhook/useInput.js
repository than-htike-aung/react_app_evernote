import {useState} from 'react';

const useInput = (initialValue = '') => {
    const [value, SetValue] = useState(initialValue)
    const reset= () => {
        SetValue(initialValue)
    }
    const bind = {
        value,
        onChange: (e) =>{
            SetValue(e.target.value)
        }
    }
    return [value,bind,reset]
}
export default useInput;