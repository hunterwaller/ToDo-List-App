function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Here are some examples of items in the list',
      isCompleted: false,
    },
    {
      text: 'Click on an item to delete them',
      isCompleted: false,
    },
    {
      text: '1) Write more items in list',
      isCompleted: false,
    },
    {
      text: '2) Finish the project that is coming up',
      isCompleted: false,
    }        
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp)
  }
  return(
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, i) => 
            <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
          <TodoForm addTodo={addTodo}/>
        </div>
      </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
