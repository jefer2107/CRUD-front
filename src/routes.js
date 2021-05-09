import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import ListUser from "./pages/users/list/listUser"
import RegisterUser from "./pages/users/register/registerUser"

export default function Routes(){

    return(

        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register-user" component={RegisterUser} />
                <Route exact path="/user-list" component={ListUser} />
            </Switch>
        </BrowserRouter>
    )
}