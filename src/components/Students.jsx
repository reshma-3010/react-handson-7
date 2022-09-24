
import React,{useState} from 'react'

let studentDetails = {
  name:'',
  age:'',
  course:'',
  batch:''
}
const Students = () => {
  const [store, setStore] = useState(studentDetails);
  const [dataList, setDataList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [hide, setHide] = useState(false);

  const changeHandler = (e) => {
    const value = e.target.value
    const name=e.target.name
    setStore(store =>({...store,[name] : value}))    
  }   
const addData = () =>{
  if(edit){
    const updatedDataList = dataList.map((row)=>row.id === store.id ? store : row );
    setDataList(updatedDataList);
    setEdit(false);
    setStore(studentDetails);
    setHide(!hide);
  }
  else{
  let listItems = dataList;
  const item = {
    id:dataList.length,
    ...store
  }
  listItems = [...dataList,item];
  setDataList(listItems);
  clearData();
  setHide(!hide);
}
}
const clearData = () =>{
  setStore(studentDetails);
}
const deleteRow = (id) =>{
const filtered = dataList.filter(item=>item.id !== id);
setDataList(filtered);
}
const editRow = (row) =>{
  setStore(row);
  setEdit(true);
  setHide(!hide);
}
  return (
    <>
    {hide ? null : <><div className='studentDetails'>
      <h1>Students Details</h1>
      <button onClick={()=>{setHide(!hide)}}>Add Student</button>
    </div>
    <div>
    <table className='table'> 
    <thead >
      <tr >
        <th scope='col'>Name</th>
        <th scope='col'>Age</th>
        <th scope='col'>Course</th>
        <th scope='col'>Batch</th>
        <th scope='col'>Change</th>
      </tr>
      </thead>
      <tbody>
      {dataList && dataList.map((row,i)=>
        <tr>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>{row.course}</td>
        <td>{row.batch}</td>
        <td>
      
      
       <div  className="div1"onClick={()=>{editRow(row)}}>EDIT</div>
       <div  className="div2"onClick={()=>{deleteRow(row.id)}}>DELETE</div>
        </td>
      </tr>
      )}
      </tbody>
    </table>
    </div></> }
    {hide ? <div>
    <div className='grid'>
      <label className="lab1">Name:</label>
      <input className='inp1'  type="text"name='name' value={store.name} onChange={changeHandler}/>
      <label className="lab2">Age:</label>
      <input  className="inp2"  type="number" name='age' value={store.age} onChange={changeHandler} /><br></br>
      <label className="lab3">Course:</label>
      <input className="inp3"  type="text" name='course' value={store.course} onChange={changeHandler} />
      <label className="lab4">Batch:</label>
      <input className="inp4"  type="text" name='batch' value={store.batch} onChange={changeHandler} />
    </div>
    <div>
      <button className='btn1' onClick={addData} >{edit ? 'Update' : 'submit'}</button>
      <button className='btn2' onClick={clearData} >Clear</button>
    </div>
    </div>
    : null}
    </>
  )
}

export default Students;