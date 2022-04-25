

export const getMonth = () => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let d = new Date;
    return (`${months[d.getMonth()]} ${d.getFullYear()}`)
}