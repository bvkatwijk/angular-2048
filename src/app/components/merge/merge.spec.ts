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

        it('should change [2, 2, 2, 0] to [4, 2, 0, 0]', () => {
            expect(Merge.left([2, 2, 2, 0])).toEqual([4, 2, 0, 0]);
        });

        it('should change [4, 2, 2, 0] to [4, 4, 0, 0]', () => {
            expect(Merge.left([4, 2, 2, 0])).toEqual([4, 4, 0, 0]);
        });

        it('should change [0, 2, 2, 0] to [4, 0, 0, 0]', () => {
            expect(Merge.left([0, 2, 2, 0])).toEqual([4, 0, 0, 0]);
        });

        it('should change [0, 2, 0, 2] to [4, 0, 0, 0]', () => {
            expect(Merge.left([0, 2, 0, 2])).toEqual([4, 0, 0, 0]);
        });

        it('should change [2, 2, 2, 2] to [4, 4, 0, 0]', () => {
            expect(Merge.left([2, 2, 2, 2])).toEqual([4, 4, 0, 0]);
        });

    });

    describe('leftGrid', () => {

        it('should merge sample grid correctly', () => {
            expect(Merge.leftGrid([
                [2, 0, 2, 0],
                [0, 8, 8, 0],
                [0, 0, 0, 0],
                [2, 4, 8, 0],
            ])).toEqual([
                [4, 0, 0, 0],
                [16, 0, 0, 0],
                [0, 0, 0, 0],
                [2, 4, 8, 0],
            ]);
        });

    });

    describe('right', () => {

        it('should not alter [0, 0, 0, 0]', () => {
            expect(Merge.right([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
        });

        it('should change [0, 2, 0, 0] to [0, 0, 0, 2]', () => {
            expect(Merge.right([0, 2, 0, 0])).toEqual([0, 0, 0, 2]);
        });

        it('should change [2, 2, 0, 0] to [0, 0, 0, 4]', () => {
            expect(Merge.right([2, 2, 0, 0])).toEqual([0, 0, 0, 4]);
        });

        it('should change [2, 2, 2, 2] to [0, 0, 4, 4]', () => {
            expect(Merge.right([2, 2, 2, 2])).toEqual([0, 0, 4, 4]);
        });

    });

    describe('transpose', () => {

        it('should convert sample grid correctly', () => {
            expect(Merge.transpose([
                [2, 0, 2, 0],
                [0, 8, 8, 0],
                [0, 0, 0, 0],
                [2, 4, 8, 0],
            ])).toEqual([
                [2, 0, 0, 2],
                [0, 8, 0, 4],
                [2, 8, 0, 8],
                [0, 0, 0, 0],
            ]);
        });

    });

    describe('upGrid', () => {

        it('should merge sample grid correctly', () => {
            expect(Merge.upGrid([
                [2, 0, 2, 0],
                [0, 8, 8, 0],
                [0, 0, 0, 0],
                [2, 4, 8, 0],
            ])).toEqual([
                [4, 8, 2, 0],
                [0, 4, 16, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]);
        });

    });

    describe('downGrid', () => {

        it('should merge sample grid correctly', () => {
            expect(Merge.downGrid([
                [2, 0, 2, 0],
                [0, 8, 8, 0],
                [0, 0, 0, 0],
                [2, 4, 8, 0],
            ])).toEqual([
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 8, 2, 0],
                [4, 4, 16, 0],
            ]);
        });
        
    });

});
