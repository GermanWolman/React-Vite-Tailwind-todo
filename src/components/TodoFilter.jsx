// eslint-disable-next-line react/prop-types
const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8 ">
            <div className="flex justify-center gap-4 bg-white p-4 transition-all duration-500 dark:bg-gray-800">
                <button
                    className={`${
                        filter === 'all'
                            ? 'hover:text-grey-400 text-blue-500'
                            : 'text-grey-400 hover:text-blue-500'
                    }`}
                    onClick={() => changeFilter('all')}
                >
                    All
                </button>
                <button
                    className={`${
                        filter === 'active'
                            ? 'hover:text-grey-400 text-blue-500'
                            : 'text-grey-400 hover:text-blue-500'
                    }`}
                    onClick={() => changeFilter('active')}
                >
                    Active
                </button>
                <button
                    className={`${
                        filter === 'completed'
                            ? 'hover:text-grey-400 text-blue-500'
                            : 'text-grey-400 hover:text-blue-500'
                    }`}
                    onClick={() => changeFilter('completed')}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
