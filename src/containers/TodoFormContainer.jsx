import { useCallback } from "react";
import { useDispatch } from "react-redux";
import TodoForm from '../components/TodoForm';
import { addTodo } from "../redux/actions";



export default function TodoFormContainer(){
    const dispacth = useDispatch();

    const add = useCallback((text)=> {
        dispacth(addTodo(text));
    },[dispacth])
   

    return <TodoForm add={add}/>
}