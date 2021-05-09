import React from "react"
import { Link } from "react-router-dom"

export default function Header(){

    return(

        <header className="container-fluid">
            <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register-user">Cadastro de usuário</Link></li>
            </ol>
        </header>
    )
}