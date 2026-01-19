import Todoitem from "./Todoitem";
import styles from "./todolist.module.css";
export default function Todolist ({todos, setTodos}){


    return(
        <div className={styles.list}>
           {todos.map((item) => (
                
                 <Todoitem  key ={item.name}
                  item= {item} 
                  todos={todos} 
                  setTodos={setTodos}/>
                  
                  
            ))}
    </div>
    
    )

}