import { useEffect, useState } from "react";
import GInput from "../GInput/GInput";
import MyButton from "../MyButton/MyButton";
import classes from "./AuthorizationMenu.module.css";
import './AuthorizationMenu.css'
import { Link } from "react-router-dom";
import { spaceCkecker } from "../../SpaceChecker";
import { mailCkecker } from "../../mailChecker";


const AuthorizationMenu = () => {
    
// переменные для работы с visible
    const [registrationVisible , setRegistrationVisible] = useState(false)
    const [passwdVisible , setPasswdVisible] = useState(false)
    const [alertVisible , setAlertVisible] = useState(false)
    const [successRegistration, setSuccessRegistration] = useState(false)
    const [mailCkeck, setMailCheck] = useState(false)
    const [spaceAlert, setSapceAlert] = useState(false)
    const [mailExistsCheck, setMailExistsCheck] = useState(false)

    const registrationClasses = ['visible']
    const passwdClasses = ['visible']
    const alertClasses = ['visible']
    const successRegistrationClasses = ['visible']
    const mailCkeckClasses = ['visible']
    const spaceAlertClasses = ['visible']
    const mailExistsCheckClasses = ['visible']

    const [mail, setMail] = useState('')
    const [passwd, setPasswd] = useState('')
    const [checkPasswd , setCheckPasswd] = useState('')
    // для хранения id в localstorage, для упрощенния запросов для конкретного пользователя
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

    if (successRegistration === true ) {
        successRegistrationClasses.push('active')
    }

    if (mailCkeck === true ) {
        mailCkeckClasses.push('active')
    }

    if (spaceAlert === true){
        spaceAlertClasses.push('active')
    }

    if (mailExistsCheck === true){
        mailExistsCheckClasses.push('active')
    }



    useEffect(() => {
        if (!spaceCkecker(mail))
            setSapceAlert(true)
        else if (!spaceCkecker(passwd))
            setSapceAlert(true)
        else if (!spaceCkecker(checkPasswd))
            setSapceAlert(true)
        else
            setSapceAlert(false)

    });



    const AuthorizationFunction = (event) => {
        event.preventDefault();
        if (!spaceAlert){
            if (registrationVisible === true){
                setRegistrationVisible(false);
                setMailExistsCheck(false)
            }

            else{

                if (mailCkecker(mail)){
                    setMailExistsCheck(false)
                    setPasswdVisible(false);
                    setSuccessRegistration(false);
                    setMailCheck(false)
                    setProfileLink('');
    
    
    
                

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
                
                else 
                setMailExistsCheck(true)

            }
            

            
        }
    }

    const RegistrationFunction = (event) => {
            event.preventDefault();
            


            if (!spaceAlert) {
                if (registrationVisible === false)
                    {   
                        setRegistrationVisible(true);
                        registrationClasses.push('active')
                        setMailExistsCheck(false)
                    }

                else {

                    if (mailCkecker(mail)){
                        setMailExistsCheck(false)
                        setAlertVisible(false)

                        
                        if (passwd === checkPasswd){
                            setPasswdVisible(false)
                            setMailCheck(false)
                            setSuccessRegistration(false)

                            let userObject = {
                                mail: mail,
                                passwd: passwd
                            };


                            fetch('/api/registration',{ 
                                method: 'POST',

                                headers: {
                                    'Content-Type': 'application/json;charset=utf-8'
                                },

                                body: JSON.stringify(userObject)}).then(response => {(response.status === 200) ? setSuccessRegistration(true)  : setMailCheck(true)})
        // 500 ошибка, 200 номарльно
                        }
                        else { 
                            if (passwdVisible === false){
                                setPasswdVisible(true);
                                passwdClasses.push('active')

                            }

                                
                        }
                        
     
                    }
                    
                    else 
                        setMailExistsCheck(true)

                }
        }

    }

    return (
        <div>

            <div className={classes.content}> 
                <div className={classes.greetings}>
                    Добрейшего времени суток!
                </div>

                <div className={classes.input}>

                    <div className = {successRegistrationClasses} style={{fontSize: '24px' , color: 'green' }}>
                        регистрация прошла успешно, авторизируйтесь
                    </div>

                    <div className = {mailExistsCheckClasses} style={{fontSize: '24px' , color: 'green' }}>
                        укажите правильную почту
                    </div>

                    <div className = {spaceAlertClasses} style={{fontSize: '24px' , color: 'red' }}>
                        пароль или почта не должны содеражать пробелов
                    </div>

                    <div className = {mailCkeckClasses} style={{fontSize: '24px' , color: 'red' }}>
                        пользователь с такой почтой уже существует
                    </div>

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
                    onClick = {AuthorizationFunction}>

                        <div className={classes.buttonText}><Link to  = {profileLink} style={{color: 'black'}}> Авторизироваться </Link></div>

                    </MyButton>
                    
                    <MyButton 
                    onClick = {RegistrationFunction}>
                        <div className={classes.buttonText}>Зарегистрироваться</div>
                    </MyButton>

                </div>
        </div>

        
    );

};


export default AuthorizationMenu;