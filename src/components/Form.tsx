import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Style from './Form.module.css';
import axios from 'axios';

const Form = (props: any) => {
    const [name, setName] = useState<string>('');
    const [faveFood, setFaveFood] = useState<string>('');
    const [loves, setLoves] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [imgName, setImgName] = useState<string>('');

    const history = useHistory();

    const addHamster = () => {
        axios.post('/hamsters', 
        {
            name: name,
            age: age,
            favFood: faveFood,
            loves: loves,
            imgName: imgName,
            wins: 0,
            defeats: 0,
            games: 0
        }).catch((error) => {
            if (error.response) {
                props.setErrorCode(error.response.status);
                props.setErrorMessage('It seems like something went wrong...'); 
                history.push('/error');
            }
        });
        setAge(0);
        setFaveFood('');
        setImgName('');
        setLoves('');
        setName('');
        setTimeout(() => {
            props.update();
        }, 500);
    }  


    
    return (
        <section className={Style.Form}>
            <input className={Style.Input} value={name} type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input className={Style.Input} value={faveFood} type="text" name="favFood" placeholder="Fav food" onChange={(e) => setFaveFood(e.target.value)} />
            <input className={Style.Input} value={loves} type="text" name="loves" placeholder="Loves" onChange={(e) => setLoves(e.target.value)} />
            <input className={Style.Input} value={age} type="text" name="age" placeholder="Age" onChange={(e) => setAge(parseInt(e.target.value))} />
            <input className={Style.Input} value={imgName} type="text" name="imgName" placeholder="Image URL" onChange={(e) => setImgName(e.target.value)} />
            <button className={Style.Add} onClick={addHamster}>Add</button>
        </section>
    )    
}

export default Form;