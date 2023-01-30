import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export default function QuestionsAnswers(props) {
  const { ask, wrongAnswers, correctAnswer } = props.data;

  // Get array of mixed answers - strings
  const mixedAnswers = [...wrongAnswers, correctAnswer].sort(
    () => Math.random() - 0.5
  );

  const isSelectedObjects = mixedAnswers.map((a) => ({
    answer: a,
    isSelected: false,
    id: nanoid(),
    value: correctAnswer.includes(a),
  }));

  const [isSelectedState, setIsSelectedState] = useState(isSelectedObjects);

  function selectAnswer(e) {
    setIsSelectedState((prev) => {
      const newValues = prev.map((answer) => {
        if (answer.id === e.target.id) {
          return {
            answer: answer.answer,
            isSelected: true,
            id: answer.id,
            value: answer.value,
          };
        } else {
          return { ...answer, isSelected: false };
        }
      });
      const SelectedAnswer = newValues.filter((x) => x.isSelected)[0];

      props.updateAnswer(props.questionID, SelectedAnswer.value);

      if (props.result) {
        if (SelectedAnswer.value) {
          console.log(SelectedAnswer);
        }
      }

      return newValues;
    });
  }

  return (
    <div>
      <div className='question-frame'>
        <div className='question-cont'>
          <h2 className='question'>{ask}</h2>
          <div
            onClick={selectAnswer}
            id={isSelectedState[0].id}
            className={
              isSelectedState[0].isSelected
                ? 'answer selected-answer'
                : 'answer'
            }
          >
            {isSelectedState[0].answer}
          </div>
          <div
            onClick={selectAnswer}
            id={isSelectedState[1].id}
            className={
              isSelectedState[1].isSelected
                ? 'answer selected-answer'
                : 'answer'
            }
          >
            {isSelectedState[1].answer}
          </div>
          <div
            onClick={selectAnswer}
            id={isSelectedState[2].id}
            className={
              isSelectedState[2].isSelected
                ? 'answer selected-answer'
                : 'answer'
            }
          >
            {isSelectedState[2].answer}
          </div>
          <div
            onClick={selectAnswer}
            id={isSelectedState[3].id}
            className={
              isSelectedState[3].isSelected
                ? 'answer selected-answer'
                : 'answer'
            }
          >
            {isSelectedState[3].answer}
          </div>
        </div>
      </div>
    </div>
  );
}
