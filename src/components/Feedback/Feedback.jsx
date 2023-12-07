import React, { useState } from 'react';
import cl from './Feedback.module.css';
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
        <div className={cl.feedbackWrapper} id="moduleContacts">
            <div className={cl.container}>
                <div className={cl.feedbackTitle}>
                    Связь с нами
                </div>
                <div className={cl.backgroundFeedbackForm}>
                    <form action='' className={cl.feedbackForm}>
                        <div className={cl.feedbackUnit}>
                            <div className={cl.feedbackQuestion}>
                                Как к Вам обращаться?
                            </div>
                            <MyInput 
                                value={name}
                                placeholder='Алексей'
                                onChange={event => setName(event.target.value)}
                            />
                        </div>
                        <div className={cl.feedbackUnit}>
                            <div className={cl.feedbackQuestion}>
                            Ваш email :
                            </div>
                            <MyInput 
                                value={email}
                                placeholder='example@gekon.audio'
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                        <div className={cl.feedbackUnit}>
                            <div className={cl.feedbackQuestion}>
                                Тема обращения :
                            </div>
                            <MyInput 
                                value={topic} 
                                placeholder='Заказать колонки'
                                onChange={event => setTopic(event.target.value)}
                            />
                        </div>
                        <div className={cl.feedbackUnit}>
                            <div className={cl.feedbackQuestion}>
                                Ваш вопрос :
                            </div>
                            <MyTextArea 
                                value={question}
                                placeholder='Можем обсудить детали заказа ?'
                                onChange={event => setQuestion(event.target.value)}
                            />
                        </div>
                        <div className={cl.feedbackFooter}>
                        <MyButton
                                // style={{}}
                                type="submit" 
                                onClick={functionButton}
                            >
                                Отправить
                            </MyButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;