import { fromJS } from 'immutable';
import { addComment, removeComment, setComments } from '../comments';

describe('addComment', () => {

  it('add a comment to the list', () => {
    const comment = fromJS({ id: 1, author: "Malcolm Reynolds", text: "Half of writing history is hiding the truth." });
    const state = undefined;
    const next = addComment(state, comment);

    expect(next).toEqualImmutable(fromJS([
      { id: 1, author: "Malcolm Reynolds", text: "Half of writing history is hiding the truth." },
    ]));
  });

});

describe('removeComment', () => {

  it('remove a comment to the list', () => {
    const comment = fromJS({ id: 1, author: "Malcolm Reynolds", text: "Half of writing history is hiding the truth." });
    const state = undefined;
    const next = removeComment(state, comment);

    expect(next).toEqualImmutable(fromJS([]));
  });

});

describe('setComments', () => {

  it('set the comment to the list', () => {
    const comments = fromJS([
      { id: 1, author: "Malcolm Reynolds", text: "Half of writing history is hiding the truth." },
    ]);
    const state = undefined;
    const next = setComments(state, comments);

    expect(next).toEqualImmutable(comments);
  });

});
