import { useSelector } from 'react-redux';
import hamsterModel from '../models/Hamster';
import Hamster from '../components/Hamster';
import Style from './Gallery.module.css';

const Gallery = (props: any) => {
    const all: hamsterModel[] = useSelector((state: any) => state.hamsters);

    return (
        <section className="inner-wrapper">
              {all.map((i: hamsterModel) => <Hamster setErrorCode={(e: string) => props.setErrorCode(e)} 
                setErrorMessage={(e: string) => props.setErrorMessage(e)}  update={props.update} key={i.id} {...i} />)} 
        </section>
    )
}

export default Gallery;