const TodoComputed = ({ computedItemLeft, clrearCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white p-4 transition-all duration-500 dark:bg-gray-800">
            <span className="text-gray-400">{computedItemLeft} items left</span>
            {/* como la funcion clearCompleted no tiene propiedades no le tengo que poner la funcion de flecha */}
            <button className="text-gray-400" onClick={clrearCompleted}>
                Clear complete
            </button>
        </section>
    );
};

export default TodoComputed;
