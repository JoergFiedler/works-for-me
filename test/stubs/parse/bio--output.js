module.exports = [
  {
    type: 'bio-line',
    content: [
      { type: 'newline', content: '\n' },
      { type: 'word', content: 'name:' },
      { type: 'word', content: 'John' },
      { type: 'word', content: 'Doe' },
      { type: 'newline', content: '\n' }
    ]
  },
  {
    type: 'bio-line',
    content: [
      { type: 'word', content: 'location:' },
      { type: 'word', content: 'Kiev,' },
      { type: 'word', content: 'Ukraine' },
      { type: 'newline', content: '\n' }
    ]
  },
  {
    type: 'bio-line',
    content: [
      { type: 'newline', content: '\n' },
      { type: 'word', content: 'contact:' },
      { type: 'word', content: 'some@email.com' },
      { type: 'newline', content: '\n' }
    ]
  }
];
