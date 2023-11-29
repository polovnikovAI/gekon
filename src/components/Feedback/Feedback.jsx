import React, { useState } from 'react';
import cl from './Feedback.module.css';
import leftPhotoFeedback from '../../photos/JBL4325/DSC_9964.JPG';
import doneIcon from '../../photos/logo/doneIcon.png';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';
import MyTextArea from '../UI/MyTextArea/MyTextArea';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [topic, setTopic] = useState('');
    const [question, setQuestion] = useState('');

    const functionButton = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(application));
        setName('');
        setEmail('');
        setTopic('');
        setQuestion('');
    }
    
    let application = {
        name: name,
        email: email,
        topic: topic,
        question: question,
    }

    return (
        <div className={cl.feedbackWrapper}>
            <div className={cl.container}>
                <img src={leftPhotoFeedback} alt="" className={cl.backPhotoFeedback} />
                <div className={cl.feedbackForm}>
                    <div className={cl.feedbackTitle}>
                        Напишите нам
                    </div>
                    <form action=''>
                        <div className={cl.feedbackUnit}>
                            <span className={cl.feedbackQuestion}>
                                Как к Вам обращаться?
                            </span>
                            <MyInput 
                                value={name} 
                                placeholder='Алексей'
                                style={{marginLeft: 20}}
                                onChange={event => setName(event.target.value)}
                            />
                        </div>
                        <div className={cl.feedbackUnit}>
                            <span className={cl.feedbackQuestion}>
                            Ваш email :
                            </span>
                            <MyInput 
                                value={email}
                                placeholder='example@gekon.audio'
                                style={{marginLeft: 20}} 
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                        <div className={cl.feedbackUnit}>
                            <span className={cl.feedbackQuestion}>
                                Тема обращения :
                            </span>
                            <MyInput 
                                value={topic} 
                                placeholder='Заказать колонки'
                                style={{marginLeft: 20}}
                                onChange={event => setTopic(event.target.value)}
                            />
                        </div>
                        <div className={cl.feedbackUnit}>
                            <span className={cl.feedbackQuestion}>
                                Ваш вопрос :
                            </span>
                            <MyTextArea 
                                value={question}
                                placeholder='Можем обсудить детали заказа ?'
                                style={{marginLeft: 20}}
                                onChange={event => setQuestion(event.target.value)}
                            />
                        </div>
                        <div className={cl.feedbackFooter}>
                            <MyButton
                            style={{width: 420}}
                            type="submit" 
                            onClick={functionButton}
                            >
                                Отправить</MyButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;