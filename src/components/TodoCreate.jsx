import { useState } from 'react';

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState('');

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        console.log(title);
        if (!title.trim()) {
            console.log('Datos incompletos');
            return setTitle('');
        }
        createTodo(title);
        setTitle('');
    };
    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="flex items-center gap-6 overflow-hidden rounded-md bg-white px-4 py-4 transition-all duration-500 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none transition-all duration-500 dark:bg-gray-800"
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
