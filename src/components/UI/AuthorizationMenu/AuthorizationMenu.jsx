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

    const registrationClasses = ['visible']

    // без этого при нажатии на кнопку он не выводит графу для регистрации
    if (registrationVisible === true) {
        registrationClasses.push('active')
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
                    />

                    <GInput
                        type = 'text' 
                        placeholder = 'Введите пароль' 
                    />


                    <div className={registrationClasses}>
                        <GInput
                        type = 'text' 
                        placeholder = 'Повторите пароль' 
                        />
                    </div>

                </div>
            </div>


                <div className={classes.button}>


                    <MyButton style = {buttonStyle}>

                        <Link to  = "/profile" style={{color: 'black'}}> Авторизироваться </Link>

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
                            setRegistrationVisible(false);
                        }

                    }}>
                        Зарегистрироваться
                    </MyButton>

                </div>
        </div>

        
    );

};


export default AuthorizationMenu;