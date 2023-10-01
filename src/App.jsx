import TodoCreate from './components/TodoCreate';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoComputed from './components/TodoComputed';
import TodoFilter from './components/TodoFilter';
import { useEffect, useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';

 const initialStateTodos = [
    {
        id: 1,
        title: 'Complete online Javascript course',
        completed: true,
    },
    {
        id: 2,
        title: 'Go to de gym',
        completed: false,
    },
    {
        id: 3,
        title: '10 minutes meditation',
        completed: false,
    },
    {
        id: 4,
        title: 'Pick up groseries',
        completed: false,
    },
    {
        id: 5,
        title: 'Complete todo app on React',
        completed: false,
    },
]; 

//const initialStateTodos = JSON.parse(localStorage.getItem('todos') || []);

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    // mantener los todos en el local storage
    useEffect(() => {
        console.log('todos');
        localStorage.setItem('todos', JSON.stringify(todos)); // guarda el string en formato json
    }, [todos]); // cada vez que cambien los todos

    // para persistit el orden de los elementos
    const handleDragEnd = (result) => {
        // result tiene el comienzo y el fina del elemento que quiero mover
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    // eleccion del profesor de poner todas las acciones en el app

    const createTodo = (title) => {
        const newTodo = {
            id: Math.random(),
            title: title.trim(),
            completed: false,
        };
        console.log(newTodo);
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const clrearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const computedItemLeft = todos.filter((todo) => !todo.completed).length;

    // all, active y complete
    const [filter, setFilter] = useState('all');

    // metodo para filtrar
    const filteredTodos = () => {
        switch (filter) {
            case 'all':
                return todos;
            case 'active':
                return todos.filter((todo) => !todo.completed);

            case 'completed':
                return todos.filter((todo) => todo.completed);
        }
    };

    const changeFilter = (filter) => setFilter(filter);

    return (
        // md: es como @media, es un punto de quiebre mediano (hay otros puntos de quiebre o breakpoint)
        // con el plugin de pretier y el archivo de configuracion .pretierrc ordena las clases
        // para que quede ultimo el md: (primero text center, y luego en el punto de quiebre el text right)
        // para la imagen cuando pasemos el punto de quiebre pasamos a poner otra imagen
        <div
            className="min-h-screen 
            bg-gray-300
            bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain 
            bg-no-repeat transition-all duration-500 dark:bg-gray-900 dark:bg-[url(./assets/images/bg-mobile-dark.jpg)]
            md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]"
        >
            {/* Header */}
            <Header></Header>
            <main className="container mx-auto mt-8 px-4 dark:text-gray-400 md:max-w-xl">
                {/* Para comentar aca hay que apretar shit + alt + a */}
                {/* TodoCreate */}
                {/* Puedo pasarle el metodo por props */}
                <TodoCreate createTodo={createTodo}></TodoCreate>

                {/* TodoList (TodoItem)  TodoUpdate y TodoDelete */}
                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filteredTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    ></TodoList>
                </DragDropContext>

                {/* TodoCumputed - ya le paso el resultado (no el metodo como en los otros)*/}
                <TodoComputed
                    computedItemLeft={computedItemLeft}
                    clrearCompleted={clrearCompleted}
                ></TodoComputed>

                {/* TodoFilter - filter tambien le mandamos para cambiar los hover*/}
                <TodoFilter
                    changeFilter={changeFilter}
                    filter={filter}
                ></TodoFilter>
            </main>

            <footer className="mt-8 pb-8 text-center dark:text-gray-400">
                Drag and drop to reaorder list
            </footer>
        </div>
    );
};
export default App;
