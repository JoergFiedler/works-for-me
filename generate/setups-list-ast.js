const Immutable = require('immutable');
const {
  BIO_CONTEXT,
  SETUPS_LIST_ITEM_CONTEXT,
  SETUPS_LIST_ITEM_KEY_CONTEXT,
  SETUPS_LIST_ROOT_CONTEXT,
  SETUPS_LIST_CONTEXT
} = require('../lib/constants');

function findBioContext (setupAst) {
  let rootContext = setupAst.get('content');

  return rootContext
    .get('content')
    .find(context => context.get('type') === BIO_CONTEXT);
}

function generateSetupListItem (setupAst) {
  let bio = findBioContext(setupAst);
  let key = setupAst.get('name');
  let content = [];

  if (key) {
    content.push({
      type: SETUPS_LIST_ITEM_KEY_CONTEXT,
      content: key
    });
  }

  content.push(bio);

  return Immutable.fromJS({
    type: SETUPS_LIST_ITEM_CONTEXT,
    content
  });
}

function generate (setupsAstList = []) {
  let setupsListItems = Immutable.fromJS(setupsAstList)
    .filter(setupAst => {
      return findBioContext(setupAst) !== undefined;
    })
    .map(generateSetupListItem);

  return {
    type: SETUPS_LIST_ROOT_CONTEXT,
    content: [
      {
        type: SETUPS_LIST_CONTEXT,
        content: setupsListItems.toJS()
      }
    ]
  };
}

module.exports = generate;