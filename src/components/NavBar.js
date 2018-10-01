import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'


const NavBar = ({ header }) => {
    return (
        <nav className="nav-bar">
            <Link to="/HowToPass">How To Pass</Link>
            <Link to="/Syllabus">Syllabus</Link>
            <Link to="/FurtherLearning">Further Learning</Link>
            {"  "}
            <h4>Week 1 + 2:</h4>
            <Link to="/Syntax+Datatypes">Datatypes + Syntax</Link>
            <Link to="/Variables">Variables</Link>
            <Link to="/week1+2Practice">Practice Problems</Link>
            {"  "}
            <h4>Week 3:</h4>
            <Link to="/ConditionalStatements">Conditional Statements</Link>
            <Link to="/Functions">Functions</Link>
            <Link to="/week3Practice">Practice Problems</Link>
            {"  "}
            <h4>Week 4:</h4>
            <Link to="/week4Game">Game</Link>
            <Link to="/week4Video">Video</Link>
            <Link to="/week4Practice">Practice Problems</Link>
        </nav>
    )
}
export default NavBar;