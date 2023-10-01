import TodoItem from './TodoItem';
import { Droppable, Draggable } from '@hello-pangea/dnd';

const TodoList = ({ todos, removeTodo, updateTodo, handleDragEnd }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <div
                    className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-500 dark:bg-gray-800 [&>article]:p-4"
                    {...droppableProvided.droppableProps}
                    ref={droppableProvided.innerRef}
                >
                    {todos.map(
                        (
                            todo,
                            index //index para ordenarlo
                        ) => (
                            <Draggable
                                key={todo.id}
                                draggableId={`${todo.id}`}
                                index={index}
                            >
                                {(provided) => (
                                    <TodoItem
                                        {...provided.draggableProps}
                                        ref={provided.innerRef}
                                        {...provided.dragHandleProps}
                                        todo={todo}
                                        removeTodo={removeTodo}
                                        updateTodo={updateTodo}
                                    ></TodoItem>
                                )}
                            </Draggable>
                        )
                    )}
                    {droppableProvided.placeholder} {/* desestruturacion */}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
