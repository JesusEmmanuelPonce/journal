import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
    return (
        <>
            <h1 className="auth__title">
                Registro
            </h1>
            <form>
                <input 
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    className="auth__input"
                    autoComplete="off"
                />
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input 
                    type="password"
                    placeholder="*****"
                    name="password"
                    className="auth__input"
                />
                <input 
                    type="password"
                    placeholder="*****"
                    name="confirm"
                    className="auth__input"
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Registrar
                </button>
                
                <Link to="/auth/login" className="link">
                    Login
                </Link>
            </form>
        </>
    )
}
