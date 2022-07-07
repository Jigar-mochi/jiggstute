import React from 'react'

export default function About(props) {
    const mystyle = {
        color: props.mode === "light" ? "black" : "white"
    }

    return (
        <>
            <div className="container my-3 py-3" >
                <h1 className='text-center' style={mystyle}>This is container</h1>
            </div>
        </>
    )
}
