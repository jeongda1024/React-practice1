import React from 'react';

function Exam1(props) {
  console.log('props', props, props.title);
  return <h1>{props.title}</h1>;
}

function Exam2(props) {
  let lists = [];
  for (let i = 0; i < props.topics.length; i++) {
    let e = props.topics[i];
    lists.push(
      <li key={e.id}>
        {e.subject} - {e.singer}
      </li>
    );
  }
  return <ol>{lists}</ol>;
}

function ExamAdd() {
  const exam = [
    { id: 1, subject: 'super shy', singer: 'New Jeans' },
    { id: 2, subject: 'I AM', singer: 'IVE' },
    { id: 3, subject: 'spicy', singer: 'aespa' },
    { id: 4, subject: 'unforggiven', singer: 'LE SSERAFIM' },
    { id: 5, subject: 'new jeans', singer: 'New Jeans' },
  ];
  return (
    <div>
      <Exam1 title="what's your favorite song?"></Exam1>
      <Exam2 topics={exam}></Exam2>
    </div>
  );
}

export default ExamAdd;
