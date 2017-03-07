export class Merge {

    static left(row: number[]) {
        var result: number[] = [];
        for(var i = 0; i < row.length; i++) {
            if(row[i + 1] && row[i] == row[i + 1]) {
                result.push(row[i] * 2);
                i++;
            } else if (row[i] != 0) {
                result.push(row[i]);
            }
        }
        while (result.length < row.length) {
            result.push(0);
        };
        return result;
    }

}