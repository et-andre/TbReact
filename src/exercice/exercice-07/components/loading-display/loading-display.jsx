import style from './loading-display.module.css'

const LoadingDisplay = () =>
{
    return (
        <div className={style['lds-ripple']}><div></div><div></div></div>
    );
}

export default LoadingDisplay;
