import React, {useState} from 'react';
import "./style.css";
const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);

    //Add item function

    const addItem = () =>{
        if(!inputData){
            alert("plz fill data")
        }else{
            setItems([...items,inputData]);
            setInputData("");
        }
    }
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="TodoLogo"/>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text"
                            placeholder="Add Item"
                            className="form-control"
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        <i className="fa fa-plus add-btn" onClick={addItem}></i>
                    </div>
                        {/* {show our items} */}
                        <div className="showItems">
                            {items.map((curElem, index)=>{
                                return(
                                    <div className="eachItem" key={index}>
                                    <h3>{curElem}</h3>
                                    <div className="todo-btn">
                                        <i className="fas fa-edit add-btn"></i>
                                        <i className="fas fa-trash-alt add-btn"></i>
                                    </div>
                                </div>    
                                );
                            })}
                        </div>
                    {/* {remove all button} */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All">
                            <span>CHECK LIST</span>
                        </button>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;
