export const ErrorCard = ({refetch}:{refetch:() => void}) => {
    return (
        <div className="card-error">
            <h3>Ошибка загрузки</h3>
            <button onClick={() => refetch()}>Повторить</button>
        </div>
    )
}