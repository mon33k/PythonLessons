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
                infoText: (<div><ol>
                    <li>Practice Problems ------------------------------ 20%</li>
                    <li>Projects ------------------------------------------- 30%</li>
                    <li>Quizzes -------------------------------------------- 10%</li>
                    <li>Classwork ----------------------------------------- 10%</li>
                    <li>Attendance + Behavior / Participation ----- 30%</li>
                </ol><li>If you miss a test or quiz come speak to me to let me know beforehand.</li><li>If you fail a test or quiz you will have the option to do extra credit work</li></div>)
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
                    <br></br>
                    <li style={{ textDecoration: 'underline' }}>October 5, Friday:</li>
                    <p>Reinforce the concepts of conditional statements through creating a game of Rock, Paper, Scissors</p>
                    <Link to="/week3Practice">Practice Problem</Link>
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
                    <Switch>
                        <Route path='/week4Game' render={this.renderEachLesson} />
                    </Switch>
                    <Switch>
                        <Route path='/week4Video' render={this.renderEachLesson} />
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
                title: (<h3>1) Learn How to Code By Playing this RPG Game</h3>),
                infoText: (<div><p>To play click this link <a href="https://codecombat.com/students?_cc=HalfFightHand">here</a></p><p>Class Code: HalfFightHand</p><br></br></div>)
            },
            {
                title: (<h3>2) Video: What Can You Do with Python? - The 3 Main Applications</h3>),
                infoText: (<p>Click <a href="https://www.youtube.com/watch?v=kLZuut1fYzQ">here</a> to view video!</p>)
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
                infoText: <SyntaxHighlighter language='python' style={foundation}
                >{` x = 15 \n print(x) \n \n Output: 15`}</SyntaxHighlighter>
            },
            {
                title: <p>If we want to change this variable we can re-assign the value to a different integer, string or boolean or even a new variable. For this example we are going to add to the value of x. We use the built in method print() to print the variable’s value onto the console.</p>,
                infoText: <SyntaxHighlighter language='python' style={foundation}
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
                title: (<h2>The "if" Statement</h2>),
                infoText: (<p>Why is this important? In order to write useful programs, we always need the ability to check conditions and change the behavior of the program accordingly. Conditional statements give us this ability. The simplest form is the if statement.</p>)
            },
            {
                title: (<p>Which has the general form:</p>),
                infoText: <SyntaxHighlighter language='python' style={foundation}>{`if BOOLEAN EXPRESSION:       # This is an  if statement which is a boolean      \n    STATEMENTS               # These are the body statements after the if statement`}</SyntaxHighlighter>
            },
            {
                title: (<h3>Important things to note about if statements: </h3>),
                infoText: (<ol><li>The colon (:) is significant and required. It separates the if statement from the body statements.</li>
                    <li>The line after the colon under the if statement MUST be indented. It is standard in Python to use four spaces for indenting.</li>
                    <li>All lines indented the same amount after the colon under the if statement will be executed whenever the BOOLEAN_EXPRESSION is true. </li>
                </ol>)
            },
            {
                title: (<p>Example:</p>),
                infoText: <SyntaxHighlighter language='python' style={foundation}>{`food = 'Chicken Adobo' \n\nif food == 'Chicken Adobo': \n    print('Ummmm, my favorite!') \n    print('I feel like saying it 100 times...') \n    print(100 * (food + '! '))`}</SyntaxHighlighter>
            },
            {
                title: (<h2>The "if else" Statement</h2>),
                infoText: (<p>If you want one thing to happen when a condition is true, and something else to happen when it is false. For that we have the if else statement. </p>)
            },
            {
                title: (<p>This follows the general form:</p>),
                infoText: (<SyntaxHighlighter language='python' style={foundation}>{`if BOOLEAN EXPRESSION: \n    STATEMENTS_1        #executed if condition evaluates to True \nelse:\n    STATEMENTS_2        # executed if condition evaluates to False`}</SyntaxHighlighter>)
            },
            {
                title: (<h2>Chained Conditionals</h2>),
                infoText: (<p>Sometimes there are more than two possibilities. One way to express that is a chained conditional. We use elif (which means else if) for conditionals in between the first and last if else statement.</p>)
            },
            {
                title: (<p>The general form looks like this:</p>),
                infoText: (<SyntaxHighlighter language='python' style={foundation}>{`x = 20\ny = 5\n\nif x < y:\n    STATEMENTS_A\nelif x > y:\n    STATEMENTS_B\nelse:\n    STATEMENTS_C`}</SyntaxHighlighter>)
            },
            {
                title: (<p>Example:</p>),
                infoText: (<div><SyntaxHighlighter language='python' style={foundation}>{`choice = ‘b’\n\nif choice == 'a':\n    print("You choose 'a'.")\nelif choice == 'b':\n    print("You choose 'b'.")\nelif choice == 'c':\n    print("You choose 'c'.")\nelse:\n    print("Invalid choice.")`}</SyntaxHighlighter><p>You can see how in the code above if you change the value of choice you will get different results each time you run your code.</p></div>)
            }
        ]
    },
    {
        urlPath: "lists",
        header: "lists",
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
                title: (<h2>Creating a Rock, Paper, Scissors Game</h2>),
                infoText: (<p>In this project you will make a Rock, Paper, Scissors game and play against the computer.</p>)
            },
            {
                title: (<p>Rules: You and the computer both choose rock, paper or scissors. The winner is decided by these rules:</p>),
                infoText: (<div><ol>
                    <li>Rock blunts scissors</li>
                    <li>Paper covers rock</li>
                    <li>Scissors cut paper</li>
                </ol>
                </div>)
            },
            {
                title: (<h2>Step 1: Player's Turn</h2>),
                infoText: (<p>First, let the player choose Rock, Paper or Scissors. <br></br><br></br><li>Begin by first opening a new repl.it document selecting the computer lanugage python.</li></p>)
            },
            {
                title: (<p>Remember when I mentioned python having a lot of libraries or modules you can use built in? Well randint is one of them and will allow for us to generate random numbers. <li>For this project you need to import it at the top of your document in order to use it in your program</li></p>),
                infoText: (<SyntaxHighlighter language='python' style={foundation} showLineNumbers={true}>{`import random from randint`}</SyntaxHighlighter>)
            },
            {
                title: (<li>Next we are going to let the player choose Rock, Paper or Scissors by typing the letter ‘r’, ‘p’ or ‘s’.</li>),
                infoText: (<SyntaxHighlighter language='python' style={foundation} showLineNumbers={true}>{`import random from randint\n\nplayer = input('rock (r), paper (p), or scissors (s)?')`}</SyntaxHighlighter>)
            },
            {
                title: (<li>Now print out what the player chose</li>),
                infoText: (<SyntaxHighlighter language='python' style={foundation} showLineNumbers={true}>{`import random from randint\n\nplayer = input('rock (r), paper (p), or scissors (s)?')\nprint(player, 'vs')`}</SyntaxHighlighter>)
            },
            {
                title: (<li>Test your code by clicking Run. Click in the Repl.it output window and enter your choice on the right side of the screen.</li>),
                infoText: (<p></p>)
            },
            {
                title: (<h2>Step 2: Computer’s Turn</h2>),
                infoText: (<p>Now it’s the computer’s turn. You can use the randint function to generate a random number to decide between rock, paper and scissors.</p>)
            },
            {
                title: (<li>Use randint to generate a random number (between 1 - 3) to decide whether the
                    computer has chosen rock, paper or scissors.</li>),
                infoText: (<SyntaxHighlighter language='python' style={foundation} showLineNumbers={true}>{`import random from randint\n\nplayer = input('rock (r), paper (p), or scissors (s)?')\nprint(player, 'vs')\n\nchosen = randint(1,3)     # This will generate a random number between 1 and 3\nprint(chosen)           # Use print() to see this random number`}</SyntaxHighlighter>)
            },
            {
                title: (<li>Run your script lots of times (you’ll need to enter ‘r’, ‘p’ or ‘s’ each time.<br></br>You should see that ‘chosen’ is randomly set to either 1, 2 or 3.</li>),
                infoText: (<div><p>Let’s say:</p><ul>
                    <li>1 = rock (r)</li>
                    <li>2 = paper (p)</li>
                    <li>3 = scissors (s)</li>
                </ul></div>)
            },
            {
                title: (<li>Use if to check if the chosen number is 1 ( == is used to see if 2 things are the same).</li>),
                infoText: (<SyntaxHighlighter language='python' style={foundation} showLineNumbers={true} startingLineNumber={6}>{`chosen = randint(1,3)\nprint(chosen)\n\nif chosen == 1:       # Don't forget the colon!`}</SyntaxHighlighter>)
            },
            {
                title: (<div><p>Python uses indentation to execute code in if statements.</p><li>After if chosen == 1, press the space bar four times and create a variable called computer and set the value equal to 'r' </li></div>),
                infoText: (<SyntaxHighlighter language='python' style={foundation} showLineNumbers={true} startingLineNumber={9}>{`if chosen == 1:\n    computer = 'r'     # Don't forget to indent 4 spaces, to create a code block for this if statement!`}</SyntaxHighlighter>)
            },
            {
                title: (<li>You can add an alternative check using elif (short for else if):</li>),
                infoText: (<SyntaxHighlighter language='python' style={foundation} showLineNumbers={true} startingLineNumber={9}>{`if chosen == 1:\n    computer = 'r'\n\nelif chosen == 2:\n    computer = 'p'      # Don't forget to indent this code block as well so the computer knows it belongs with this elif (aka else if) statement!`}</SyntaxHighlighter>)
            },
            {
                title: (<p>This condition will only be checked if the first condition fails (if the computer didn’t choose 1 )</p>),
                infoText: (<li>And finally, if the computer didn’t choose 1 or 2 then it must have chosen 3.</li>)
            },
            {
                title: <p>This time we can just use else which means otherwise.</p>,
                infoText: (<SyntaxHighlighter language='python' style={foundation} showLineNumbers={true} startingLineNumber={9}>{`if chosen == 1:\n    computer = 'r'\n\nelif chosen == 2:\n    computer = 'p'\n\nelse:\n    computer = 's'`}</SyntaxHighlighter>)
            },
            {
                title: (<li>Now, instead of printing out the random number that the computer chose you can print the letter.</li>),
                infoText: (<SyntaxHighlighter language='python' style={foundation} showLineNumbers={true} startingLineNumber={9}>{`if chosen == 1:\n    computer = 'r'\n\nelif chosen == 2:\n    computer = 'p'\n\nelse:\n    computer = 's'\n\nprint(computer)        # Instead of printing out the random number that the computer chose you can print the letter.`}</SyntaxHighlighter>)
            },
            {
                title: (<li>You can either delete the line print(chosen) on line 6, or make the computer ignore it by adding a # at the start of the line on line 6.</li>),
                infoText: (<SyntaxHighlighter language='python' style={foundation} showLineNumbers={true} startingLineNumber={6}>{`chosen = randint(1,3)\nprint(chosen)          # Comment this out by putting # at the start of the line or delete this\n\nif chosen == 1:`}</SyntaxHighlighter>)
            },
            {
                title: (<li>Test your code by clicking Run and choosing your option.</li>),
                infoText: (<li>Hmm, the computer’s choice gets printed on a new line. You can fix that by adding end='  ' after vs , that tells Python to end with a space instead of a new line.</li>)
            },
            {
                title: (<SyntaxHighlighter language='python' style={foundation} showLineNumbers={true}>{`import random from randint\n\nplayer = input('rock (r), paper (p), or scissors (s)?')\nprint(player, 'vs', end='  ')     # This is where you'd add the space\n\nchosen = randint(1,3)\n#print(chosen)`}</SyntaxHighlighter>),
                infoText: (<div><li>Play the game a few times by clicking Run and making a choice.</li><p>For now you’ll have to work out who won yourself. Next you’ll add the Python code to work this out.</p></div>)
            },
            {
                title: (<div><h2>Step 3: Check the Result</h2><p>Now let’s add the code to see who won.</p></div>),
                infoText: (<li>You need to compare the player and computer variables to see who won.</li>)
            },
            {
                title: (<p>If they’re the same then it’s a draw:</p>),
                infoText: (<SyntaxHighlighter language='python' style={foundation} showLineNumbers={true} startingLineNumber={17}>{`\nprint(computer)\n\nif player == computer:\n    print('DRAW')`}</SyntaxHighlighter>)
            },
            {
                title: (<li>Test your code by playing the game a few times until you get a draw, You’ll need to click Run to start a new game.</li>),
                infoText: (
                <ul>
                    <li>Now let’s look at the cases where the player chose ‘r’ (rock) but the computer didn’t.
                        <ul>
                            <li>If the computer chose ‘s’ (scissors) then the player wins (rock beats scissors).</li>
                            <li>If the computer chose ‘p’ (paper) then the computer wins (paper beats rock).</li>
                            
                        </ul>
                    </li>
                </ul>)
            },
            {
                title: (<li>We can check the player choice and the computer choice using and .</li>),
                infoText: (<SyntaxHighlighter language='python' style={foundation} showLineNumbers={true} startingLineNumber={17}>{`\nprint(computer)\n\nif player == computer:\n    print('DRAW')\n\nelif player == 'r' and computer == 's':      # This is the line you add and in between player's choice and computer's choice\n    print('Player Wins!')\n\nelif player == 'p' and computer == 's':     # This is the line you add and in between player's choice and computer's choice\n    print('Computer wins!')`}</SyntaxHighlighter>)
            },
            {
                title: (<li>And finally, can you add the code to check for the winner when the player chose ‘s’ (scissors) and the computer chose rock or paper?</li>),
                infoText: (<div><li>Now play the game to test your code. </li><li>Click Run to start a new game.</li><img src={require('./images/rps14.png')} height="45%" width="45%" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} /></div>)
            },
            {
                title: (<h2>Bonus Challenge: Create A New Game</h2>),
                infoText: (<p>Can you create your own game like Rock, Paper, Scissors with different objects? They could be super heros, or items anything you want instead of Rock, Paper, Scissors</p>)
            }
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
