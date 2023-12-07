import { useState } from "react";
import GInput from "../GInput/GInput";
import MyButton from "../MyButton/MyButton";
import classes from "./AuthorizationMenu.module.css";
import './AuthorizationMenu.css'
import { Link } from "react-router-dom";


const AuthorizationMenu = () => {
    
// переменные для работы с visible
    const [registrationVisible , setRegistrationVisible] = useState(false)
    const [passwdVisible , setPasswdVisible] = useState(false)
    const [alertVisible , setAlertVisible] = useState(false)

    const registrationClasses = ['visible']
    const passwdClasses = ['visible']
    const alertClasses = ['visible']
    const [mail, setMail] = useState('')
    const [passwd, setPasswd] = useState('')
    const [checkPasswd , setCheckPasswd] = useState('')
    // для хранения id в localstorage, для упрощенных запросов для конкретного пользователя
    const [id, setId] = useState('')

    const [profileLink , setProfileLink] = useState('')


    // без этого при нажатии на кнопку он не выводит графу для регистрации
    if (registrationVisible === true) {
        registrationClasses.push('active')
    }

    if (passwdVisible === true) { 
        passwdClasses.push('active')
    }

    if (alertVisible === true) { 
        alertClasses.push('active')
    }



    return (
        <div>

            <div className={classes.content}> 
                <div className={classes.greetings}>
                    Добрейшего времени суток!
                </div>

                <div className={classes.input}>


                    <div className = {alertClasses} style={{fontSize: '24px' , color: 'red' }}>
                        Неверно указана почта или пароль
                    </div>


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


                    <MyButton 
                    onClick = {(event) => {
                        event.preventDefault();
                        setPasswdVisible(false);
                        setProfileLink('');
                        if (registrationVisible === true){
                            setRegistrationVisible(false);
                        }

                        else{
                            fetch(`/api/user/${mail}/${passwd}`)
                            .then(response => response.json())
                            .then(response => {

                                if (response.length > 0){
                                    // если верно указаны данные сохраняем id
                                    setAlertVisible(false);
                                    setId(response[0].user_id);
                                    setProfileLink('/profile');                                        
                                    localStorage.setItem('ID' , response[0].user_id);
                                    localStorage.setItem('Mail' , mail);
                                    // чтобы пропала модалка
                                    window.location.reload(false);
                                }

                                else{
                                    if(alertVisible === false){
                                        setAlertVisible(true);
                                        alertClasses.push('active')
                                    }
                                    localStorage.clear();
                                }
                            })
                            

                        }

                    }}>

                        <div className={classes.buttonText}><Link to  = {profileLink} style={{color: 'black'}}> Авторизироваться </Link></div>

                    </MyButton>
                    
                    <MyButton 
                    onClick = { (event) => {
                        event.preventDefault();
                        setAlertVisible(false)
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
                        <div className={classes.buttonText}>Зарегистрироваться</div>
                    </MyButton>

                </div>
        </div>

        
    );

};


export default AuthorizationMenu;