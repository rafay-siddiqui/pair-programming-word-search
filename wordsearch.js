const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const horizontalJoinReverse = letters.map(ls => ls.reverse().join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (l of horizontalJoinReverse) {
        if (l.includes(word)) return true
    }
    const verticalJoin = [];
    const verticalJoinReverse = [];
    for (let i = 0; i < letters[0].length; i++) {
        const newRow = [];
        for (row of letters) {
            newRow.push(row[i]);
        }
        verticalJoin.push(newRow.join(''));
        verticalJoinReverse.push(newRow.reverse().join(''));
    }
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    for (l of verticalJoinReverse) {
        if (l.includes(word)) return true
    }
    return false;
}

// wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'VEEP')


module.exports = wordSearch