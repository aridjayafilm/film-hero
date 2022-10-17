/**
 * Formats the data string to a more readable format
 * @param dateString
 * @returns {string}
 */
const formatDate = (dateString) => {
    // If its not a date string, return unknown
    if(dateString === undefined) return 'Unknown'
    if(dateString === '') return 'Unknown'

    // Declare variables
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let day = ``

    // Split the string into chunks
    const chunks = dateString.split('-');

    // If the day has a leading zero remove it
    if(parseInt(chunks[2]) < 10) {
        day = `${chunks[2].substring(1)}th`
    } else {
        day = `${chunks[2]}th`
    }

    // Add the proper english thing 1 2 3
    if(chunks[2] === '01') day = '1st'
    if(chunks[2] === '02') day = '2nd'
    if(chunks[2] === '03') day = '3rd'

    // Return the new string
    return `${day} of ${months[chunks[1].toString() - 1]} ${chunks[0]}`
}

export default formatDate;
