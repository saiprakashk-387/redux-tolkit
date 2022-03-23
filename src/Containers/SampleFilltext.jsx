import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getPet, deleteList, createPet, updatePetList } from '../API/Api';
import { fillTextSelector } from '../redux/slice';

export const SampleFilltext = () => {
  const dispatch = useDispatch()

  const { fillText } = useSelector(fillTextSelector)
  const [search, setSearch] = useState()
  const [form, setForm] = useState({ id: "", name: "", status: "" })
  useEffect(() => {
    dispatch(getPet(search));
  }, [search])

  let value = fillText;
  let reqData = {
    // "id":Math.floor((Math.random()*100)+1),
    "id": form.id,
    "category": {
      "id": form.id,
      "name": form.name
    },
    "name": form.name,
    "photourls": ["string"],
    "tags": [
      {
        "id": form.id,
        "name": form.name,
      }
    ],
    "status": form.status
  }

  const addpet = () => {
    dispatch(createPet(reqData))
    clearForm()
  }
  const editPet = (val) => {
    setForm(val)
  }
  const updatePet = () => {
    dispatch(updatePetList(form))
  }
  const deletePet = (id) => {
    dispatch(deleteList(id));
  };
  const clearForm = () => {
    setForm({ id: "", name: "", status: "" })
  }
  const handleInput = (e) => {
    let myData = { ...form }
    myData[e.target.name] = e.target.value
    setForm(myData)
  }
  const handleCheck = (e) => {
    let myUser = { ...search };
    myUser[e.target.value] = e.target.checked
    setSearch(myUser)
  }
  return (
    <div>
      <h1>Swagger API </h1>
      <form action="">
        Id :<input type="number" placeholder='Enter id' value={form.id} name="id" onChange={(e) => { handleInput(e) }} />
        Name: <input type="text" placeholder='Breed type' value={form.name} name="name" onChange={(e) => { handleInput(e) }} />
        Status: <input type="text" placeholder='available , pending , sold' name="status" value={form.status} onChange={(e) => { handleInput(e) }} />
        <button type='button' onClick={addpet}>Add</button>
        <button type='button' onClick={updatePet}>Update</button>
      </form>
      <div>
        <p>Total pets :{value.length}</p>
        <input type="checkbox" value="available" name="status" onChange={(e) => { handleCheck(e) }} />Availble
        <input type="checkbox" value="pending" name="status" onChange={(e) => { handleCheck(e) }} />Pending
        <input type="checkbox" value="sold" name="status" onChange={(e) => { handleCheck(e) }} />Sold
        {value.length >= 0 ?
          <table border="1px ">
            <thead>
              <tr>
                <th>S.No</th>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {value.map((val, i) => {
                return <><tr>
                  <td>{i + 1}</td>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.status}</td>
                  <td><button onClick={() => { editPet(val) }}>Edit</button>
                    <button onClick={() => { deletePet(val.id) }}>Delete</button>
                  </td>
                </tr>
                </>
              })
              }
            </tbody>
          </table>
          : "Loading"}
      </div>
    </div>
  )
}
export default SampleFilltext;
