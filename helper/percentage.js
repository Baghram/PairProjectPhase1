function percentage(value) {
    let totalvalue = 0
    for (let i = 0; i < value.length; i++) {
        totalvalue += Number(value[i])
    }
    let result = []
    for (let i = 0; i < value.length; i++) {
        let temp = Math.floor((Number(value[i]) / totalvalue) * 100)
        result.push(temp)
    }
    return result
}
module.exports = percentage