import { React, useState } from 'react';
import './catechism-practice.css';
import { Question } from './question.jsx';
import { Answer } from './answer.jsx';
import { Verse } from './verse.jsx';
import { data } from './data.jsx';

export function Practice () {
    // const defaultGivens = {
    //     displayQuestionNumber: true,
    //     displayQuestion: true,
    //     displayAnswerAbbrev: false,
    //     displayAnswerFull: false,
    //     displayVerseReference: true, 
    //     displayVerseText: true,
    // }

    const [response, setResponse] = useState('');
    // const [givens, setGivens] = useState(defaultGivens);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [answerVisibility, setAnswerVisibility] = useState('none');
    const [gradeVisibility, setGradeVisibility] = useState('none');

    let grade = document.getElementById('grade');
    const answer = data[questionNumber].answerFull;
    const strippedAnswer = formatResponse(answer)
    console.log(strippedAnswer);
    console.log(answer);

    return (
        <div className='pracice-wrapper'>
            {/* QUESTION---------------------------------------------------------------------------------------------------------------- */}
            <div className='question' >
                <Question questionNumber={questionNumber}/>
            </div>
            <div className='question-navigation-wrapper'>
                <button className='question-navigation-btn' onClick={handlePreviousQuestion}>
                    {'< '}Previous Question
                </button>
                <button className='question-navigation-btn' onClick={handleNewQuestion}>
                    Random Question
                </button>
                <button className='question-navigation-btn' onClick={handleNextQuestion}>
                    Next Question {' >'}
                </button>
            </div>

            {/* RESPONSE---------------------------------------------------------------------------------------------------------------- */}
            <form>
                <textarea className='response-input' placeholder='Type the answer here' onChange={handleTyping}>

                </textarea>

            </form>
            <button onClick={handleSubmit}>
                Submit Response
            </button>


            <div id='grade' className='grade' >


            </div>

            {/* ANSWER------------------------------------------------------------------------------------------------------------------ */}
            <div className='answer-wrapper'>
                <button onClick={toggleAnswerVisibility}>
                    {answerVisibility === 'none' ? 'Show' : 'Hide'} Answer
                </button>
                <div className='answer-text' style={{display:answerVisibility}}>
                    {answer}
                </div>

            </div>
            {/* <Answer questionNumber={questionNumber} response={response}/> */}

            {/* VERSE------------------------------------------------------------------------------------------------------------------- */}
            <div className='verse-wrapper'>
                <Verse questionNumber={questionNumber}/>
            </div>
        </div>
    );

    function handlePreviousQuestion() {
        if (questionNumber === 0) {
            return setQuestionNumber(51);
        } else {
            return setQuestionNumber(questionNumber - 1);
        }
    }

    function handleNewQuestion() {
        setQuestionNumber(Math.floor(52*Math.random()))
    }

    function handleNextQuestion() {
        if (questionNumber === 51) {
            return setQuestionNumber(0);
        } else {
            return setQuestionNumber(questionNumber + 1);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(response);
        console.log(gradeResponse(response));
        // if (response === answer) {
        //     grade.textContent = ''
        // }
    }

    function handleTyping(e) {
        setResponse(e.target.value);
    }

    function toggleAnswerVisibility() {
        if (answerVisibility === '') {
            setAnswerVisibility('none');
        } else {
            setAnswerVisibility('')
        }
    }

    function gradeResponse(response) {
        // See if the response passes the following tests:
        // Matches the answer exactly, including punctuation, capitalization, etc.



        return formatResponse(response);
    }

    function formatResponse(rawResponse) {
        //rawResponse = rawResponse.replace(/ /g, "");
        rawResponse = rawResponse.replace(/[^\w\s]|_/g, "")
                                 .replace(/\s+/g, " ")
                                 .replace(/ /g, "");
        rawResponse = rawResponse.toLowerCase();

        return rawResponse;
    }

}

