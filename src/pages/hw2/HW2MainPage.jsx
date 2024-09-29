import React, { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";

export default function HW2MainPage() {
  const [todos, setTodos] = useState([]);

  // 로컬스토리지에서 데이터를 불러오는 useEffect
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    } else {
      // 로컬스토리지에 저장된 데이터가 없을 때 기본 할 일을 추가
      const initialTodos = [{ text: "", completed: false }];
      setTodos(initialTodos);
      localStorage.setItem("todos", JSON.stringify(initialTodos));
    }
  }, []);

  // todos 상태가 변경될 때마다 로컬스토리지에 저장
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  // 새로운 TODO 추가 함수 (배열의 앞에 추가)
  const addTodo = () => {
    setTodos([{ text: "", completed: false }, ...todos]);
  };

  // TODO 항목 수정 함수
  const updateTodoText = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };

  // TODO 항목 체크박스 상태 변경 함수
  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // TODO 항목 삭제 함수
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="bg-red-300 p-10 m-20">
      <div className="flex justify-between text-white text-lg font-semibold">
        <div>Todos 앱</div>
        <div className="border-b border-white">
          <button onClick={addTodo}>새로운 TODO 추가하기</button>
        </div>
      </div>

      {todos.map((todo, index) => (
        <div
          key={index}
          className={`flex w-full mt-4 p-2 rounded-md items-center ${
            todo.completed ? "bg-sky-200 bg-opacity-50" : "bg-sky-200"
          }`}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(index)}
          />
          <input
            type="text"
            value={todo.text}
            onChange={(e) => updateTodoText(index, e.target.value)}
            className={`w-full bg-transparent outline-none px-2 ${
              todo.completed ? "line-through" : ""
            }`}
            placeholder="할 일을 입력하세요"
          />
          <div className="flex text-sm gap-2 text-red-400 cursor-pointer">
            <FaPencilAlt />
            <CiCircleMinus onClick={() => removeTodo(index)} />
          </div>
        </div>
      ))}
    </div>
  );
}
