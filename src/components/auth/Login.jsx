import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startGoogleLogin, startLoginEmail } from '../../actions/auth'

export const Login = () => {
    
    const dispatch = useDispatch()

    const [ formValues, handleInputChange ] = useForm({
        email: 'jesus@jesus.com',
        password: '123'
    });

    const { email, password } = formValues;

    const handleLogin = e => {
        e.preventDefault()
        console.log(email, password)

        dispatch( startLoginEmail(email, password))

    }

    const handleLoginGoogle = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <>
            <h2 className="auth__title">
                Iniciar Sesion
            </h2>
            <form
                onSubmit={handleLogin}
            >
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                <input 
                    type="password"
                    placeholder="*****"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
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
                    <div className="google-btn"
                        onClick={handleLoginGoogle}
                    >
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
