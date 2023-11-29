import { useState } from 'react';
import MyButton from '../../components/UI/MyButton/MyButton';
import classes from './Profile.module.css';
import {Link} from 'react-router-dom';

function Profile() {

    
    const [historyActive , setHistoryActive] = useState(false);

    const historyClasses = [classes.visible]

    // без этого при нажатии на кнопку он не выводит данные
    const testText = [1,2,3,4,5,6,7] 
    if (historyActive === true) {
        historyClasses.push(classes.active)
    }

    return (
        <div className={classes.Profile} >

            <div className={classes.greetings}>
                привет пользователь
                <MyButton 
                    onClick={ () =>{ 
                        localStorage.clear();
                        // чтобы кнопка менялась получилось только с location.reload
                        window.location.reload(false);
                    }}>
                    <Link to  = '/' style={{color: 'black'}}>выйти из аккаунта</Link>
                </MyButton>

                <MyButton >
                    <Link to  = '/' style={{color: 'black'}}> назад </Link>
                </MyButton>

            </div>

            <div className={classes.history}>
                <div className={classes.fixedHistory}> 
                    <div className={classes.text}>
                        история заказов
                    </div>

                    <MyButton 
                        style ={{height: '80px' , background: "#08e091" }} 
                        onClick = {(event) => {
                            event.preventDefault(); 


                            if (historyActive === false){

                                setHistoryActive(true);
                                historyClasses.push(classes.active)
                            }

                            else if (historyActive === true){
                                setHistoryActive(false)
                            }


                        }}>
                        показать
                    </MyButton>
                </div>

                {/* на будущее сделаем может быть 
                анимацию а выводить через fetch().then((item)=> item.map(()=> ....)*/}

                <div className={historyClasses}>

                    {testText.map(item => 

                    <div 
                    className={classes.text}
                    style={{marginTop: '4px' , width:'720px'}}
                    key={item}
                    > 
                    
                    {item}


                    </div>)}

                </div>

            </div>
        
        </div>
        
    );
}

export default Profile;