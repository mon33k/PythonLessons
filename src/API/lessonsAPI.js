import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { foundation } from 'react-syntax-highlighter/styles/hljs';
import { Route, Switch, Link } from 'react-router-dom'

const getLessons = [
    {
        urlPath: "HowToPass",
        header: "How To Pass",
        sections: [
            {
                title: "",
                infoText: (<ol>
                    <li>Practice Problems</li>
                    <li>Projects</li>
                    <li>Quizzes</li>
                    <li>Classwork</li>
                    <li>Attendance</li>
                    <li>Behavior + Participation</li>
                </ol>)
            },
        ]

    },
    //-------------------SYLLABUS-------------------//
    {
        urlPath: "Syllabus",
        header: "Syllabus",
        sections: [
            {
                title: (<h4>Week 1 </h4>),
                infoText: (<ul>
                    <li style={{ textDecoration: 'underline' }}>September 17, Monday:</li>
                    <p>Intro to Computer Science + Programming, brief history of the Python programming language. Demonstration of computer programs and the applications.</p>
                    <Link to="/Syntax+Datatypes" className="mainLink">Datatypes + Syntax</Link>
                    <Switch>
                        <Route path='/Syntax+Datatypes' render={this.renderEachLesson} />
                    </Switch>

                    <li style={{ textDecoration: 'underline' }}>September 21, Friday:</li>
                    <p>Set up programming environment, introduce programming language, basic main datatypes, syntax and built in functions of python language.</p>
                    <Link to="/Variables">Variables</Link>
                    <Switch>
                        <Route path='/Variables' render={this.renderEachLesson} />
                    </Switch>

                </ul>)
            },
            {
                title: (<h4>Week 2</h4>),
                infoText: (<ul>
                    <li style={{ textDecoration: 'underline' }}>September 24, Monday:</li>
                    <p>Reinforced basic main datatypes, syntax, some built in functions of python language and if else statements</p>
                    <li style={{ textDecoration: 'underline' }}>September 28, Friday:</li>
                    <p>Worksheet on Variables, completed first simple program Dinner Tip Calculator. Learned some variable rules, how to create variables that store information as values, update and change the value of variables. Used math expression in a real-world application to generate the result in program output.</p>
                    <Link to="/week1+2Practice">Week 2: Practice Problem</Link>
                    <Switch>
                        <Route path='/week1+2Practice' render={this.renderEachLesson} />
                    </Switch>
                </ul>)
            },
            {
                title: (<h4>Week 3</h4>),
                infoText: (<ul>
                    <li style={{ textDecoration: 'underline' }}>October 1, Monday:</li>
                    <p>Conditionals if else statements, practice questions</p>
                    <Link to="/ConditionalStatements">Conditional Statements</Link>
                    <Switch>
                        <Route path='/ConditionalStatements' render={this.renderEachLesson} />
                    </Switch>
                    <li style={{ textDecoration: 'underline' }}>October 5, Friday:</li>
                    <p>Introduce the concept of functions using variables, conditionals and the datatype array. Simple practice problems.</p>
                    <Link to="/Functions">Functions</Link>
                    <Switch>
                        <Route path='/Functions' render={this.renderEachLesson} />
                    </Switch>
                </ul>)
            },
            {
                title: (<h4>Week 4</h4>),
                infoText: (<ul>
                    <li style={{ textDecoration: 'underline' }}>October 8, Monday:</li>
                    <p>NO CLASS</p>
                    <li style={{ textDecoration: 'underline' }}>October 12, Friday:</li>
                    <p>Reinforce the important concepts of functions and conditionals, activity, practice problems, games or videos</p>
                    <Link to="/week4Game">Game</Link>
                    <br></br> 
                    <Link to="/week4Video">Video</Link>
                    <br></br>
                    <Link to="/week4Practice">Practice Problems</Link>
                    <Switch>
                        <Route path='/week4Game' render={this.renderEachLesson} />
                    </Switch>
                    <Switch>
                        <Route path='/week4Video' render={this.renderEachLesson} />
                    </Switch>
                    <Switch>
                        <Route path='/week4Practice' render={this.renderEachLesson} />
                    </Switch>
                </ul>)
            },
            {
                title: (<h4>Week 5</h4>),
                infoText: (<ul>
                    <li style={{ textDecoration: 'underline' }}>October 15, Monday:</li>
                    <p>Preparing for first project: edit a game in python</p>
                    <li style={{ textDecoration: 'underline' }}>October 19, Friday:</li>
                    <p>Give first project, build a simple game</p>
                </ul>)
            },
        ]

    },
    //-------------------FURTHER LEARNING-------------------//
    {
        urlPath: "FurtherLearning",
        header: "Further Learning",
        sections: [
            {
                title: (<h4>Learn How to Make An RPG Game</h4>),
                infoText: "Going to update w/ content"
            },
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            }
        ]
    },
    //-------------------WEEKS COURSEWORK-------------------//
    {
        urlPath: "Syntax+Datatypes",
        header: "Syntax & Datatypes",
        sections: [
            {
                title: (<h4>But first, What Even Is Your Computer?!</h4>),
                infoText: (<p>We are going to use Repl.it as a compiler or translator for our code. Through this website we can create new files that have an autogenerated name. Change the name at the top to be more specific for each activity we do so you can find it later.</p>)
            },
            {
                title: "A visual representation:",
                infoText: (<img src={require('./images/dataStructures1.png')} height="45%" width="45%" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />)
            },
            {
                title: <h4>Main Datatypes</h4>,
                infoText: (<ol>
                    <li>Integers: Any whole number</li>
                    <li>Floats: Any decimal point number</li>
                    <li>Strings: Is used to represent text rather than numbers. It is comprised of a set of characters enclosed in either '', "" or ''' ''' for multiline strings</li>
                    <li>Booleans: Expression that is a value that is either TRUE or FALSE</li>
                    <li>Built In Functions: A function that is built into an application and can be accessed by end-users. For example the print() function prints what you want on the screen, there's another one to get the sum of a number sum(), convert variables to strings str(), or integers int()</li>
                </ol>)
            },
            {
                title: <h4>Integers</h4>,
                infoText: (<p>Python is great at handling math, we use integers  </p>)
            }
        ]
    },
    {
        urlPath: "Variables",
        header: "Variables",
        sections: [
            {
                title: (<h2>Why is this important?</h2>),
                infoText: (<p>In all computer programming languages, variables work like containers to hold numbers, phrases, or other important stuff used in several places in your code. Variables help us store data and is something that can be changed in the program.</p>)
            },
            {
                title: "A visual representation:",
                infoText: (<img src={require('./images/variables1.png')} height="45%" width="45%" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />)
            },
            {
                title: <p>The variable X contains the value 15. <br></br> This can be read in python as:</p>,
                infoText: <SyntaxHighlighter language='javascript' style={foundation}
                >{` x = 15 \n print(x) \n \n Output: 15`}</SyntaxHighlighter>
            },
            {
                title: <p>If we want to change this variable we can re-assign the value to a different integer, string or boolean or even a new variable. For this example we are going to add to the value of x. We use the built in method print() to print the variable’s value onto the console.</p>,
                infoText: <SyntaxHighlighter language='javascript' style={foundation}
                >{` x = 15 + 5 \n x = 20 \n print(x) \n \n Output: 20`}</SyntaxHighlighter>
            },
            {
                title: <h2>Variable Rules:</h2>,
                infoText: <ol>
                    <li>You must assign a value to a variable before you can use it, even if that value is zero or empty.</li>
                    <li>Variables names must start with a letter or an underscore. But the remainder of your variable name may consist of letters, numbers and underscores.</li>
                    <li>Names are case sensitive.</li>
                    <li>Readability is very important.</li>
                    <li>Descriptive names are very useful.</li>
                </ol>
            }
        ]
    },
    {
        urlPath: "week1+2Practice",
        header: "Week 1 Practice Problem: Variables",
        sections: [
            {
                title: <h2>Create A Tip Calculator</h2>,
                infoText: <ol>
                    <li>Make a comment at the top that says, Python Program to calculate tip</li>
                    <li>Next make a variable called meal and set that equal to the amount 44.50</li>
                    <li>Under this, create a variable called tax and set the value equal to 0.0675. We get this by dividing the cost of the tax 6.75 by 100.</li>
                    <li>Now make another variable called tip and set the value equal to 0.15.</li>
                    <li>You can change this value based on the percentage of tip you want to give, 15% = 15/100</li>
                    <li>Under this, we are going to change the value of meal to include tax. Type meal and set that equal to meal + meal * tax.</li>
                    <li>Next we are going to create the variable total, set that equal to meal + meal * tip</li>
                    <li>Finally, we are going to print our result by using print(total)</li>
                </ol>
            }
        ]
    },
    {
        urlPath: "ConditionalStatements",
        header: "Conditional Statements",
        sections: [
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
        ]
    },
    {
        urlPath: "Functions",
        header: "Functions",
        sections: [
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
        ]
    },
    {
        urlPath: "week3Practice",
        header: "Week 3 Practice Problems: Conditional Statements",
        sections: [
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
        ]
    },
    {
        urlPath: "week4Game",
        header: "Week 4: Game",
        sections: [
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
        ]
    },
    {
        urlPath: "week4Video",
        header: "Week 4: Video",
        sections: [
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
        ]
    },
    {
        urlPath: "week4Practice",
        header: "Week 4 Practice Problems: Functions",
        sections: [
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
            {
                title: "Going to update w/ content",
                infoText: "Going to update w/ content"
            },
        ]
    },

]

export default {
    getLessons
};
