import React from 'react';

function Title(props) {
  console.log('props', props.title);
  return <h1>{props.title}</h1>;
}

function ListAdd(props) {
  let list = [];
  for (let i = 0; i < props.dd.length; i++) {
    let p = props.dd[i];
    list.push(
      <li key={p.id}>
        {p.name} : {p.birthday}
      </li>
    );
  }
  return <ol>{list}</ol>;
}

function Birthday() {
  const people = [
    { id: 1, name: 'Oikawa', birthday: '1994-07-20' },
    { id: 2, name: 'Amagi', birthday: '1999-01-05' },
    { id: 3, name: 'Isara', birthday: '1998-03-15' },
    { id: 4, name: 'Sakuma', birthday: '1997-09-22' },
    { id: 5, name: 'Sena', birthday: '1997-11-23' },
  ];
  return (
    <div>
      <Title title="Birthday List" />
      <ListAdd dd={people} />
    </div>
  );
}

export default Birthday;
