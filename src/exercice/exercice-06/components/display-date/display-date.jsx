const DisplayDate = () =>
{
    const today = (new Date()).toLocaleString('fr-fr', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return (
        <span>{today}</span>
    );
}

export default DisplayDate;
