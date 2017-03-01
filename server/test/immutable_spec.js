import {List} from 'immutable';
import {expect} from 'chai';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);
      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });

  });

  /**
   * With Immutable's Lists, we can, for example,
   * have an application whose state is a list of movies.
   * An operation that adds a movie produces a new list
   * that is the old list and the new movie combined.
   * Crucially, the old state remains unchanged after the operation:
   */

  describe('A List', () => {

    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      let state = List.of('Trainspotting', '28 Days Later');
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      ));
      expect(state).to.equal(List.of(
        'Trainspotting',
        '28 Days Later'
      ));
    });

  });



});