import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import SimpleSlider from './SimpleSlider';

export default function Main({showSideBar , haddleIconsClick}) {
    return (
        <Switch>
            <Route path="/" exact render={(rprops) =>
            {
                return <SimpleSlider {...rprops} showSideBar={showSideBar} haddleIconsClick={haddleIconsClick} />
            }}>
            </Route>
            <Route path="/explore" component={About} />
        </Switch>
    )
}
