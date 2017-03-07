/* tslint:disable:no-unused-variable */

import { Merge } from './merge';

describe('Merge', () => {

    describe('left', () => {

        it('should not alter [0, 0, 0, 0]', () => {
            expect(Merge.left([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
        });

        it('should change [0, 2, 0, 0] to [2, 0, 0, 0]', () => {
            expect(Merge.left([0, 2, 0, 0])).toEqual([2, 0, 0, 0]);
        });

        it('should change [2, 2, 0, 0] to [4, 0, 0, 0]', () => {
            expect(Merge.left([2, 2, 0, 0])).toEqual([4, 0, 0, 0]);
        });

        it('should change [2, 2, 2, 2] to [4, 4, 0, 0]', () => {
            expect(Merge.left([2, 2, 2, 2])).toEqual([4, 4, 0, 0]);
        });

    });

});
