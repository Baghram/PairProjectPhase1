function roundcount(value) {
    let temp = []
    for (let i = 0; i < value.length; i++) {
        temp.push(value[i].count)
    }
    return temp
}
module.exports = roundcount