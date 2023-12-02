const TodoCounter = ({ completed, total })=>{
    return (
        <h1>Completed {completed} to {total}</h1>
    );
}

export { TodoCounter }