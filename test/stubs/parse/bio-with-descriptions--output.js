const {
  BIO_CONTEXT,
  DESCRIPTION_CONTEXT,
  BIO_LINE_CONTEXT
} = require('../../../lib/constants')

module.exports = {
  type: BIO_CONTEXT,
  content: [
    {
      type: DESCRIPTION_CONTEXT,
      content: [
        { type: 'newline', content: '\n' },
        { type: 'newline', content: '\n' },
        { type: 'word', content: 'starting' },
        { type: 'word', content: 'description' },
        { type: 'newline', content: '\n' }
      ]
    },
    {
      type: BIO_LINE_CONTEXT,
      content: [
        { type: 'word', content: 'name:' },
        { type: 'word', content: 'John' },
        { type: 'word', content: 'Doe' },
        { type: 'newline', content: '\n' }
      ]
    },
    {
      type: DESCRIPTION_CONTEXT,
      content: [
        { type: 'word', content: 'another' },
        { type: 'word', content: 'description' },
        { type: 'word', content: 'under' },
        { type: 'word', content: 'bio-line' },
        { type: 'newline', content: '\n' }
      ]
    },
    {
      type: BIO_LINE_CONTEXT,
      content: [
        { type: 'word', content: 'location:' },
        { type: 'word', content: 'Kiev,' },
        { type: 'word', content: 'Ukraine' },
        { type: 'newline', content: '\n' }
      ]
    },
    {
      type: DESCRIPTION_CONTEXT,
      content: [
        { type: 'newline', content: '\n' }
      ]
    },
    {
      type: BIO_LINE_CONTEXT,
      content: [
        { type: 'word', content: 'link:' },
        { type: 'word', content: 'some@email.com' },
        { type: 'newline', content: '\n' }
      ]
    },
    {
      type: DESCRIPTION_CONTEXT,
      content: [
        { type: 'newline', content: '\n' },
        { type: 'newline', content: '\n' },
        { type: 'word', content: 'trailing' },
        { type: 'word', content: 'description' }
      ]
    }
  ]
}
