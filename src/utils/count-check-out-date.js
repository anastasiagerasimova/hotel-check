const countCheckOutDate = (checkInDate, days) => {
    const checkOutDateInMs = Date.parse(checkInDate) + +days*86400000
    return new Date(checkOutDateInMs)
        .toLocaleDateString()
        .split('.')
        .reverse()
        .join('-')
}

export default countCheckOutDate