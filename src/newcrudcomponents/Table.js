import axios from 'axios'
import React, { useEffect, useState, location } from 'react'
import './Table.css'


function Table() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [uname, usetName] = useState('')
    const [uemail, usetEmail] = useState('')
    const [editId, setEditID] = useState(-1)

    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = data[data.length - 1].id +1;
        axios.post('http://localhost:3000/users', {id: id,name: name, email: email})
        .then(res => {
            location.reload();
        })
        .catch(err => console.log(err))
    }
    const handleEdit = (id) => {
        axios.get('http://localhost:3000/users'+id)
        .then(res => {
            usetName(res.data[0].name)
            usetEmail(res.data[0].email)
        })
        .catch(err => console.log(err))
        setEditID(id)
    }
    const handleUpdate = () => {
        axios.put('http://localhost:3000/users/'+ editId, {id: editId,name: uname, email: uemail})
        .then(res => {
            console.log(res)
            location.reload();
            setEditID(-1);
        }).catch(err => console.log(err));
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/users/'+ editId, {id: editId,name: uname, email: uemail})
        .then(res => {
            location.reload();
            setEditID(-1);
        }).catch(err => console.log(err));
    }

  return (
    <div className='container'>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Name' onChange={e =>setName(e.target.value)}/>
                <input type="email" placeholder='Enter Email' onChange={e =>setEmail(e.target.value)}/>
                <button>Add</button>
            </form>
        </div>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    data.map((user,index)=>(
                        user.id === editId ?
                        <tr>
                            <td>{user.id}</td>
                            <td><input type="text" value={uname} onChange={e => usetName(e.target.value)}/></td>
                            <td><input type="text" value={uemail} onChange={e => usetEmail(e.target.value)}/></td>
                            <td><button onClick={handleUpdate}>Update</button></td>
                        </tr>
                        :
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                            <button onClick={() =>handleEdit(user.id)}>edit
                            </button>
                            <button onClick={handleDelete(user.id)}>delete</button>
                            </td>
                            </tr>

                    ))
                }
            </tbody>

    </table>
    </div>
  )
}

export default Table;