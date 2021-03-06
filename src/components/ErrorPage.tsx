import { useHistory } from 'react-router-dom';
import ErrorModel from '../models/Error';
import Style from './ErrorPage.module.css';

const ErrorPage = (props: ErrorModel) => {
    const history = useHistory();

    return (
        <section className={Style.ErrorPage}>
            <h1>{props.code}</h1>
            <h3>{props.message}</h3>
            <button onClick={() => history.push('/')}>Home</button>
        </section>
    )
}

export default ErrorPage;