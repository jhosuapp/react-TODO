const TodoResults = ({ results, cls })=>{
    return (
        <p className={`todo-results ${cls}`}>Se han encontrado <b>{results}</b> resultados</p>
    );
}

export { TodoResults }