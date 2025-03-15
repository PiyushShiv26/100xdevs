/*Using `1-counter.js` or `2-counter.js` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function padZero(num) {
    return num.toString().padStart(2, '0');
}
  
setInterval(() => {
    const now = new Date();
    
    // Get hours, minutes, seconds
    let hours24 = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Format 24-hour time (HH:MM:SS)
    const time24 = `${padZero(hours24)}:${padZero(minutes)}:${padZero(seconds)}`;
    
    // Format 12-hour time (HH:MM:SS AM/PM)
    const period = hours24 >= 12 ? 'PM' : 'AM';
    const hours12 = hours24 % 12 || 12; // Convert 0 to 12 for midnight
    const time12 = `${padZero(hours12)}:${padZero(minutes)}:${padZero(seconds)} ${period}`;
    
    // Log both formats
    console.log('24-hour format:', time24);
    console.log('12-hour format:', time12);
    console.log('-------------------');
}, 1000);

