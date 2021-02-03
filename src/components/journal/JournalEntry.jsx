import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://media.pitchfork.com/photos/5929a6789d034d5c69bf3542/1:1/w_320/5799fe8f.jpg)'
                }}
            />
            <div className="journal__entry-body">
                <div className="journal__entry-tile">
                    Una nuevo dia
                </div>
                <p className="journal__entry-content">
                    Qui nisi adipisicing ullamco deserunt reprehenderit. 
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>30</h4>
            </div>
        </div>
    )
}
