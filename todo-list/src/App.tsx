import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { ITodo } from "./types/todo";
import Todos from "./components/todo";

function App() {
  const [todo, setTodo] = useState<ITodo[]>([
    { id: 1, desc: "Coding", isDone: false },
    { id: 2, desc: "Eat", isDone: false },
    { id: 3, desc: "Sleep", isDone: false },
    { id: 4, desc: "Repeat", isDone: false },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleAdd = () => {
    if (inputRef.current) {
      const newTodo: ITodo = {
      id: todo.length ? Math.max(...todo.map((item) => item.id)) + 1 : 1,
      desc: inputRef.current.value,
      isDone: false,
    };
    setTodo((t) => [...t, newTodo])
    inputRef.current.value = ''
  }
}
const handleDelete = (id: number) => {
  console.log(id);
  
  const newArr = todo.filter((item) => item.id !== id)
  setTodo(newArr)
}
const handleDone = (id: number) => {
  const newArr = todo.map((item) => {
    if (item.id == id) {
      return {...item, isDone: !item.isDone}
    }
    return {...item}
  })
  setTodo(newArr)
}
useEffect (() => {
  localStorage.setItem('name', 'andi')
})
  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-[60px] font-bold text-black-500]">
        To<span className="text-red-800">Do</span> List
      </h1>
      <Todos todos={todo} handleDelete={handleDelete} handleDone={handleDone}/>
      <div className="flex mt-10 min-w-[400px] gap-4">
        <input ref={inputRef} className="w-full border border-teal-600 rounded-md p-2 bg-yellow-50" type="text" placeholder="Add To Do List Here  . . ." />
        <button onClick={handleAdd} className="bg-teal-800 rounded-md p-2">Add</button>
      </div>
      <p className="font-medium text-2xl mt-5">Done: {todo.filter((item) => item.isDone == true).length}</p>
    </div>
  );
}

export default App;
