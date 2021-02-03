import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Titulo"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="Describe tu dia"
                    className="notes__textarea"
                    rows={6}
                />
                <div className="notes__image">
                    <img src="https://static2.abc.es/media/ciencia/2019/12/13/polvo-estrellas-k2EB--1200x630@abc.jpg" alt="Space"/>
                </div>
            </div>
        </div>
    )
}
