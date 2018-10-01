import React, { Component } from 'react';

const EachLesson = ({ header, sections }) => {
    console.log("header", header)
    console.log("sections", sections)
    return (
        <main>
            <h1 style={{fontWeight: 'bold', fontSize: 34}}>{header}</h1>
            {sections.map(elem => (
                <div>
                    {elem.title}
                    {elem.infoText}
                </div>
            ))}
        </main>

    )
}
export default EachLesson;