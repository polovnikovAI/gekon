import { useState } from "react";
import GInput from "../GInput/GInput";
import MyButton from "../MyButton/MyButton";
import classes from "./AuthorizationMenu.module.css";
import './AuthorizationMenu.css'
import { Link } from "react-router-dom";


const AuthorizationMenu = () => {
    
    const buttonStyle ={
        color: "black" , 
        border: "2px solid black",
        backgroundColor: "rgb(54,209,96)",
    }

    const [registrationVisible , setRegistrationVisible] = useState(false)
    const [passwdVisible , setPasswdVisible] = useState(false)

    const registrationClasses = ['visible']
    const passwdClasses = ['visible']
    const [mail, setMail] = useState('')
    const [passwd, setPasswd] = useState('')
    const [checkPasswd , setCheckPasswd] = useState('')



    // без этого при нажатии на кнопку он не выводит графу для регистрации
    if (registrationVisible === true) {
        registrationClasses.push('active')
    }

    if (passwdVisible === true) { 
        passwdClasses.push('active')
    }


    return (
        <div>

            <div className={classes.content}> 
                <div className={classes.greetings}>
                    Добрейшего времени суток!
                </div>

                <div className={classes.input}>

                    <GInput
                        type = 'text' 
                        placeholder = 'Введите почту' 
                        onChange = {(event) => setMail(event.target.value)}
                    />

                    <GInput
                        type = 'text' 
                        placeholder = 'Введите пароль' 
                        onChange = {(event) =>setPasswd(event.target.value)}
                    />

                    <div className = {passwdClasses} style={{fontSize: '24px' , color: 'red' }}>
                        Пароли не совпадают
                    </div>

                    <div className={registrationClasses}>
                        <GInput
                        type = 'text' 
                        placeholder = 'Повторите пароль' 
                        onChange = {(event) =>setCheckPasswd(event.target.value)}/>
                    </div>

                </div>
            </div>


                <div className={classes.button}>


                    <MyButton style = {buttonStyle}
                    onClick = {(event) => {
                        event.preventDefault();
                        setRegistrationVisible(false);
                    }}>

                        <Link to  = "/profil" style={{color: 'black'}}> Авторизироваться </Link>

                    </MyButton>
                    
                    <MyButton style = {buttonStyle}
                    onClick = { (event) => {
                        event.preventDefault();
                        if (registrationVisible === false)
                        {
                            setRegistrationVisible(true);
                            registrationClasses.push('active')
                        }
                        else {
                            if (passwd === checkPasswd){
                                setPasswdVisible(false)


                                let userObject = {
                                    mail: mail,
                                    passwd: passwd
                                };


                                fetch('/api/registration',{ 
                                    method: 'POST',

                                    headers: {
                                        'Content-Type': 'application/json;charset=utf-8'
                                    },

                                    body: JSON.stringify(userObject)})

                            }
                            else { 
                                if (passwdVisible === false){
                                    setPasswdVisible(true);
                                    passwdClasses.push('active')
                                }

                                
                            }
                        }

                    }}>
                        Зарегистрироваться
                    </MyButton>

                </div>
        </div>

        
    );

};


export default AuthorizationMenu;