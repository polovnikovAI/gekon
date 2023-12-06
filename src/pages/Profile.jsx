import { useState, useEffect } from 'react';
import MyButton from '../components/UI/MyButton/MyButton';
import {Link} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../styles/Profile.css'
import { Button } from 'react-scroll';

function Profile() {

    
    const [orderHistoryActive , setOrderHistoryActive] = useState(false);
    const [stuffHistoryActive, setStuffHistoryActive] = useState(false);



    // без этого при нажатии на кнопку он не выводит данные

    const [historyData,setHistoryData] = useState([' '])
    const [stuffData , setStuffData] = useState([' '])





    useEffect(()=> {
        fetch(`api/history/${localStorage.getItem('ID')}`)
        .then(response => response.json())
        .then(response => setHistoryData(response))
    
        fetch(`api/stuff/${localStorage.getItem('Mail')}`)
        .then(response => response.json())
        .then(response => setStuffData(response))

    }, [orderHistoryActive, stuffHistoryActive])





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
                            <div className = 'button'>История заказов</div>
                        </MyButton>

                        <MyButton

                            style={{marginTop: '12px'}}
                            onClick = {(event) => {
                                event.preventDefault();
                                setOrderHistoryActive(false) 
                                setStuffHistoryActive(!stuffHistoryActive);

                        }}>
                            <div className = 'button'>История обращений</div> 
                        </MyButton>
                    </div>

                    <div className='botButton'>
                        <MyButton
                            className = 'button'
                            onClick={ () =>{ 
                                localStorage.clear();
                                // чтобы кнопка менялась получилось только с location.reload
                                window.location.reload(false);
                            }}>
                            <div className = 'button'><Link to  = '/' style={{color: 'black'}}>выйти из аккаунта</Link></div>
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
                    
                    <CSSTransition in={orderHistoryActive} classNames={'alert'} timeout={400} mountOnEnter unmountOnExit>
                        <ul >
                            {historyData.map(item => 
                                <li 
                                    key={item.order_id + item.user_id}
                                    className='text'>
                                    {item.order_id} {item.user_id} {item.product_id}
                                </li>
                                )}
                        </ul>
                    </CSSTransition>

                    <CSSTransition in={stuffHistoryActive} classNames={'alert'} timeout={400} mountOnEnter unmountOnExit>
                        <ul>
                            {stuffData.map(item => 
                                <li 
                                    key={item.contact_id + item.topic}
                                    className='text'>
                                    номер вашей заявки {item.contact_id} <br /> 
                                    тема вашей заявки {item.topic} <br />
                                    ваш вопрос <br />
                                    {item.question}
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




