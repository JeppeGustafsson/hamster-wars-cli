import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addHamsters } from '../store/actions/actions';
import axios from 'axios';
import hamsterModel from '../models/Hamster';
import Hamster from '../components/Hamster';
import Style from './Gallery.module.css';

const Gallery = () => {
    const all: hamsterModel[] = useSelector((state: any) => state.hamsters);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/hamsters')
            .then(response => {
            dispatch(addHamsters(response.data));
            });
    },[]);

    return (
        <section className="inner-wrapper">
              {all.map((i: hamsterModel) => <Hamster key={i.id} {...i} />)} 
        </section>
    )
}

export default Gallery;