import React, { useState } from 'react';
import cl from './Feedback.module.sass';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';
import MyTextArea from '../UI/MyTextArea/MyTextArea';
import GModal from '../UI/GModal/GModal';
import FeedbackAlert from '../UI/FeedbackAlert/FeedbackAlert';
import { spaceCkecker } from '../SpaceChecker';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState((localStorage.getItem('Mail') === null) ? 'зарегистрируйтесь' : localStorage.getItem('Mail'));
    const [topic, setTopic] = useState('');
    const [question, setQuestion] = useState('');
    const [modal, setModal] = useState('')
    const [emptyQuestionModal , setEmptyQuestionModal ] = useState('')

    const functionButton = (e) => {
        e.preventDefault();
        if (email === 'зарегистрируйтесь')
        {
            setModal(true)
        }
        else {
            if (question.replaceAll(' ', '') !== '') {
                fetch(`/api/user/feedback`,{ 
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },

                    body: JSON.stringify(application)})

                setName('');
                setTopic('');
                setQuestion('');
            }
            else {
                setEmptyQuestionModal(true)
            }
        }
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
                    <form action='' method="post" className={cl.feedbackForm}>
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
                                disabled
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
                                type="submit" 
                                onClick={functionButton}
                            >
                                Отправить
                            </MyButton>
                        </div>
                    </form>
                </div>
            </div>

            <GModal
                visible = {modal}
                setVisible = {setModal}>
                <FeedbackAlert/>
            </GModal>

            <GModal
                visible = {emptyQuestionModal}
                setVisible = {setEmptyQuestionModal}>
                <div style={{fontSize:'25px' , marginTop: '30%'}}>Поле "Ваш вопрос" - не может быть пустым</div>
            </GModal>

        </div>
    );
};

export default Feedback;