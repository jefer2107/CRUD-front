import axios from 'axios'
import React, { useState } from 'react'
import "./listUser.css"

export default function ListUser(){

    axios.get('http://localhost:4000/users')
        .then((x)=>{
            x.data
        })

    return(

        <div className="user-list container-fluid">
            <table className="container">
                <thead className="text-center font-weight-bold">
                    <tr>
                        <td>NOME</td>
                        <td>EMAIL</td>
                        <td>EDIÇAO</td>
                    </tr>
                    <tbody>
                        
                    </tbody>
                </thead>
            </table>
        </div>
    )
}