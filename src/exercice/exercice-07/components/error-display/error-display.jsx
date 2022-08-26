import style from './error-display.module.css'

const ErrorDisplay = ({ errorMsg }) =>
{
    return (
        <p className={style.error}>{errorMsg}</p>
    );
}

export default ErrorDisplay;
