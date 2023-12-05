import { useState, useEffect } from 'react';
import MyButton from '../components/UI/MyButton/MyButton';
import {Link} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../styles/Profile.css'

function Profile() {

    
    const [orderHistoryActive , setOrderHistoryActive] = useState(false);
    const [stuffHistoryActive, setStuffHistoryActive] = useState(false);

    fetch(`api//history/${localStorage.getItem('ID')}`)
    .then(response => console.log(response.json()))
    .then(response => console.log(response))


    // без этого при нажатии на кнопку он не выводит данные
    const testText = [{id: 1 , data: 'бочка'},{id: 2 , data: 'бас'},{id: 3 , data: 'пилил'},{id: 4 , data: 'крутил'},]
    const testText1 = [{id: 1 , data: 'пластинка'},{id: 3 , data: 'пиво'},{id: 4 , data: 'гриб'},]
    
    const [historyData,setHistoryData] = useState([' '])
    const [stuffData , setStuffData] = useState([' '])


    useEffect(()=> {
        if (historyData[0] === ' '){
            setHistoryData(testText)
        }
        if (stuffData[0] ===' '){
            setStuffData(testText1)
        }

    }, [testText, testText1])






    return (
        <div className='Profile'>

            <div className='lineImage'>
                <div className='line'>
                    <div className='topButton'>

                        <MyButton 
                            onClick = {(event) => {
                                event.preventDefault(); 
                                setStuffHistoryActive(false)
                                setOrderHistoryActive(!orderHistoryActive);

                        }}>
                            История заказов
                        </MyButton>

                        <MyButton
                            style={{marginTop: '12px'}}
                            onClick = {(event) => {
                                event.preventDefault();
                                setOrderHistoryActive(false) 
                                setStuffHistoryActive(!stuffHistoryActive);

                        }}>
                            История обращений
                        </MyButton>
                    </div>

                    <div className='botButton'>
                        <MyButton 
                            onClick={ () =>{ 
                                localStorage.clear();
                                // чтобы кнопка менялась получилось только с location.reload
                                window.location.reload(false);
                            }}>
                            <Link to  = '/' style={{color: 'black'}}>выйти из аккаунта</Link>
                        </MyButton>
                    </div>
            </div>


                </div>

            <div className='content'>
                <div className='greetingsImage'>
                    <div className='greetings'>
                        <h1>личный кабинет</h1>
                        Привет пользователь, добро пожаловать в личный кабинет. Здесь ты сможешь посмотреть свои обращения и свою историю заказов. 

                    </div>
                </div> 
                
                <div className='history'>
                    
                    <CSSTransition in={orderHistoryActive} classNames={'alert'} timeout={300} mountOnEnter unmountOnExit>
                        <ul >
                            {historyData.map(item => 
                                <li 
                                    key={item.data + item.id}
                                    className='text'>
                                    {item.id} {item.data}
                                </li>
                                )}
                        </ul>
                    </CSSTransition>

                    <CSSTransition in={stuffHistoryActive} classNames={'alert'} timeout={300} mountOnEnter unmountOnExit>
                        <ul>
                            {stuffData.map(item => 
                                <li 
                                    key={item.data + item.id}
                                    className='text'>
                                    {item.id} {item.data}
                                </li>
                                )}
                        </ul>
                    </CSSTransition>

                </div>

                

            </div>
        </div>
        
    );
}

export default Profile;




