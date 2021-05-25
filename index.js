function superbowlWin(array) {
    const winYear = array.find(array => array.result === 'W')
    if (winYear === undefined) {
        return undefined
    } else {
        return winYear.year
    }
}