import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const Register = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui )

    const [ formValues, handleInputChange ] = useForm({
        name: 'Yisus',
        email: 'jesus@jesus.com',
        password: '123456',
        confirm: '123456'
    });

    const { name, email, password, confirm } = formValues;

    const handleRegister = e => {
        e.preventDefault()
        if(isFormValid()){
            console.log('Formulario correcto')
        }
    }

    const isFormValid = () => {
        if(name.trim().length === 0) {
            dispatch( setError('Name es requerido') )
            // console.log('Name es requerido')
            return false
        }else if( !validator.isEmail(email) ){
            dispatch( setError('No es valido el email') )
            // console.log('No es valido el email')
            return false
        }else if(password !== confirm || password.length < 5 ){
            dispatch( setError('Contraseña incorrecta') )
            // console.log('Contraseña incorrecta')
            return false
        }
        dispatch( removeError() )
        return true;
    }

    return (
        <>
            <h1 className="auth__title">
                Registro
            </h1>
            <form
                onSubmit={handleRegister}
            >

                {
                    msgError && (
                        <div className="auth__alert-error">
                            { msgError }
                        </div>
                    )
                }
                <input 
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className="auth__input"
                    value={name}
                    onChange={handleInputChange}
                    autoComplete="off"
                />
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
                <input 
                    type="password"
                    placeholder="*****"
                    name="confirm"
                    className="auth__input"
                    value={confirm}
                    onChange={handleInputChange}
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
