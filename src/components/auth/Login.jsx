import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <>
            <h2 className="auth__title">
                Iniciar Sesion
            </h2>
            <form>
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
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Ingresar
                </button>
                <hr />
                <div className="auth__social-networks">
                    <p>
                        Redes Sociales
                    </p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link">
                    Crear cuenta
                </Link>
            </form>
        </>
    )
}
