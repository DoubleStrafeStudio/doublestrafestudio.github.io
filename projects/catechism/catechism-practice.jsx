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

    return (
        <div className='practice-wrapper'>
            {/* QUESTION---------------------------------------------------------------------------------------------------------------- */}
            <div className='question' >
                <Question questionNumber={questionNumber} />
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
                <textarea key={questionNumber} className='response-input' placeholder={`Type the answer here`} onChange={handleTyping} />
            </form>
            <button onClick={handleSubmit}>
                Submit Response
            </button>


            {/* GRADE ------------------------------------------------------------------------------------------------------------------ */}
            <div id='grade' className='grade' >


            </div>

            {/* ANSWER------------------------------------------------------------------------------------------------------------------ */}
            <div className='answer-wrapper' id='answer-wrapper'>
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
        let newQuestionNumber = 0;
        do {
            newQuestionNumber = Math.floor(52*Math.random())
            console.log(`${questionNumber} --> ${newQuestionNumber}`);
            if (questionNumber === newQuestionNumber) {console.log(`Same question! Rerolling.`)}
        } while (questionNumber === newQuestionNumber);

        setQuestionNumber(newQuestionNumber);
    }

    function handleNextQuestion() {
        if (questionNumber === 51) {
            return setQuestionNumber(0);
        } else {
            return setQuestionNumber(questionNumber + 1);
        }
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

    function handleSubmit(e) {
        e.preventDefault();
        gradeResponse(response)
        setAnswerVisibility('');

    }

    function gradeResponse(response) {
        console.log(`QUESTION ${questionNumber + 1}:`)

        // See if the response passes the following tests:
        // Matches the answer exactly, including punctuation, capitalization, etc.
        console.log(`TEST #1: EXACT MATCH ------------------------------------------`);
        console.log(`The submitted response: ${response}`);
        console.log(`The correct answer    : ${answer}`)
        
        if (response === answer) {
            console.log(`SUCCESS: Exact match`)
        } else {
            console.log(`FAILURE: Not an exact match`)
        }
        console.log(`\n`);


        // Match the letters of the answer, no capitalization.
        console.log(`TEST #2: LETTER EXACT MATCH -----------------------------------`);
        let responseLettersOnly = formatResponse(response, 'letterExact');
        let answerLettersOnly = formatResponse(answer, 'letterExact');
        console.log(`The submitted response: ${responseLettersOnly}\n` + 
                    `The correct answer    : ${answerLettersOnly}`)
        if (responseLettersOnly === answerLettersOnly) {
            console.log(`Every letter matched!`);
        } else {
            console.log(`There was not a letter match`);
        }
        console.log(`\n`);
        
        // Check for accuracy as a percentage by going through and matching characters. 
        // If a character does not match, then try to get back on track.


        // Match against the keywords of the answer. 


        return formatResponse(response);
    }

    function formatResponse(rawResponse, formatType) {
        /* Types of formatting:
           'letterExact': Remove all punctuation, capitalization, and spaces. It should only contain the lowercase letters in a continuous string.


        */

        //rawResponse = rawResponse.replace(/ /g, "");
        if (formatType === 'letterExact') {
            // return rawResponse.replace(/[^\w\s]|_/g, "") // Scrub punctuation
            //                   .replace(/ /g, "")         // Scrub all spaces
            //                   .toLowerCase();

            return rawResponse.replace(/[^\w]|_/g, "") // Scrub anything that isn't a letter, including spaces and underscores.
                              .toLowerCase();
        }
    }

    function createAnswer(submittedResponse) {
        const submittedResponseDiv = document.createElement("div");
        const responseToDisplay = document.createTextNode(submittedResponse);

        submittedResponseDiv.appendChild(responseToDisplay);

        const answerDiv = document.getElementById('answer-wrapper');
        document.body.insertBefore(submittedResponseDiv, answerDiv);
    }

}

