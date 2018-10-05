import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import EachLesson from './components/EachLesson';
import lessonsAPI from './API/lessonsAPI';
import NavBar from './components/NavBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      lessonArr: []
    }
  }

  renderEachLesson = (props) => {
    const { urlPath } = props.match.params
    const findLesson = lessonsAPI.getLessons.filter(lesson => {
      if (lesson.urlPath === urlPath) {
        return lesson
      }
    })

    if (!findLesson.length) {
      return (<div>lesson not found</div>)
    }
    return (<EachLesson header={findLesson[0].header} sections={findLesson[0].sections} />)
  }


  render() {
    const { header } = this.props

    return (
      <body class="container">
        <header>Intro To Python
            {"  "}
          <img src="https://png.icons8.com/color/50/000000/python.png" height="42" width="42" />
        </header>
        <NavBar header={header} />
        <Switch>
          {/* <Route path='/'>
            <Redirect from='/' to='/HowToPass' />
          </Route> */}
          <Route path='/:urlPath' render={this.renderEachLesson} />
        </Switch>
      </body>
    );
  }
}

export default App;
