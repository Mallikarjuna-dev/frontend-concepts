import React, { useEffect, useState } from 'react';
import './App.css';
import UseRefFocus from './UseRefFocus';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Failed to fetch todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const totalPages = Math.ceil(todos.length / todosPerPage);

  const start = (currentPage - 1) * todosPerPage;
  const currentTodos = todos.slice(start, start + todosPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <ul className="todo-list">
          {currentTodos.map((todo) => (
            <li key={todo.id}>
              #{todo.id} - {todo.title}
            </li>
          ))}
        </ul>

        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={page === currentPage ? 'active' : ''}
            >
              {page}
            </button>
          ))}

          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>

      <hr />

      <div style={{margin: "50px"}}>
        <UseRefFocus />
      </div>

    </>
  );
};

export default App;
