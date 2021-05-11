import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./listUser.css"

export default function ListUser(){

    const [user,setUser] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/users')
        .then((x)=>{
            setUser(x.data)
            console.log(x.data)
        }) 
    },[])

    const onCancel = (id)=>{
        axios.delete(`http://localhost:4000/users/${id}`,id)
            .then((x)=>{
                console.log(x.data)
            })
    }

    return(

        <div className="user-list container-fluid">
            <table className="container">
                <thead className="text-center font-weight-bold">
                    <tr>
                        <td>ID</td>
                        <td>NOME</td>
                        <td>EMAIL</td>
                        <td>EDIÇAO</td>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {user.map((x)=>{
                        return(
                            <tr>
                                <td> {x._id} </td>
                                <td> {x.nome} </td>
                                <td> {x.email} </td>
                                <td>
                                    <button type="button" onCancel={()=>onCancel(x._id)}  className="btn btn-primary btn-xs btn-block">Editar</button>
                                    <button className="btn btn-danger btn-xs btn-block">Cancelar</button>
                                </td>
                            </tr>
                        )
                    })}             
                    </tbody>
            </table>
        </div>
    )
}