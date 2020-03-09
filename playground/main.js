const todos = [
  {
    id: 1,
    text: 'smth',
    isCompleted: true
  },
  {
    id: 2,
    text: 'smth2',
    isCompleted: true
  },
  {
    id: 3,
    text: 'smth3',
    isCompleted: false
  }
];

const todoCompleted = todos
  .filter(todo => todo.isCompleted === true)
  .map(todo => todo.text);

console.log(todoCompleted);
