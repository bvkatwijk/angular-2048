export class Merge {

    static left(rowSource: number[]) {
        var row = rowSource.filter(val => val != 0);
        var result: number[] = [];
        row.filter(val => val != 0)
        for (var i = 0; i < row.length; i++) {
            if (row[i + 1] && row[i] == row[i + 1]) {
                result.push(row[i] * 2);
                i++;
            } else if (row[i] != 0) {
                result.push(row[i]);
            }
        }

        /** Fill remaining array with zeros */
        while (result.length < rowSource.length) {
            result.push(0);
        };

        return result;
    }

    static right(row: number[]) {
        return Merge.left(row.reverse()).reverse();
    }

    static rightGrid(grid: number[][]) {
        var result: number[][] = [];
        for (var i = 0; i < grid.length; i++) {
            result.push(Merge.right(grid[i]));
        }
        return result;
    }

}