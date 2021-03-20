const converDateToFormat = (dateObj) => {
    return dateObj.toLocaleDateString().split('.').reverse().join('-')
}

export default converDateToFormat