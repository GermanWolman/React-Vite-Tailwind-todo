import IconCheck from './icons/IconCheck';
import IconCross from './icons/IconCross';

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;
    return (
        <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4 ">
            {/* tarea no completada */}
            {/* <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
                <IconCheck></IconCheck>
            </button> */}

            {/* tarea completada */}
            {/* <button className="flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 bg-gradient-to-r from-purple-500 to-pink-500">
                <IconCheck></IconCheck>
            </button> */}

            <button
                onClick={() => updateTodo(id)}
                className={`h-5 w-5 flex-none rounded-full border-2 ${
                    completed
                        ? 'flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500'
                        : 'inline-block'
                }`}
            >
                {completed && <IconCheck></IconCheck>}
            </button>

            <p
                className={`grow text-gray-600 dark:text-gray-400 ${
                    completed && 'line-through'
                }`}
            >
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <IconCross></IconCross>
            </button>
        </article>
    );
};

export default TodoItem;
