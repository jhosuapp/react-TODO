const TodoAccents = (text) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export { TodoAccents }