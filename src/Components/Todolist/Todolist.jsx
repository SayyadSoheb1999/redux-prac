import React from 'react';
import { Card} from 'react-bootstrap';
import { TodoItems } from './Todoitems';
export const Todolist=({todoitem, handleDelete})=>{
    return(
        <div >
            <Card className="todolist">
                {todoitem.map((item)=>(
                <TodoItems item={item} handleDelete={handleDelete}/>))}
            
            </Card>
        </div>
    );
};