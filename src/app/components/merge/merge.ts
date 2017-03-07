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

    static leftGrid(grid: number[][]) {
        var result: number[][] = [];
        for (var i = 0; i < grid.length; i++) {
            result.push(Merge.left(grid[i]));
        }
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

    static transpose(grid: number[][]) {
        var result: number[][] = [];
        grid.forEach(row => result.push(row.concat()));
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid.length; j++) {
                result[i][j] = grid[j][i];
            }
        }
        return result;
    }

    static upGrid(grid: number[][]) {
        return this.transpose(Merge.leftGrid(this.transpose(grid)));
    }
    
    static downGrid(grid: number[][]) {
        return this.transpose(Merge.rightGrid(this.transpose(grid)));
    }

}