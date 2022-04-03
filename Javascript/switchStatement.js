/**
 * Switch Statement are another statements 
 * that can replace the if and else
 * Using Days of the week
 * 
 * THE FIRST LOGIC WAS DONE BY USING AN IF STATEMENT
 * 
 * sECOND LOGIC WAS FROM SWITCH STATEMENT
 * whenever there is a mtach the switch start executing it from there 
 * hence the need to break it
 */

const dayOfWeek = 7;

// if (dayOfWeek === 1) {
//     console.log('MONDAY');
// } else if (dayOfWeek === 2) {
//     console.log('TUESDAY');
// } else if (dayOfWeek === 3) {
//     console.log('WEDNESDAY');
// } else if (dayOfWeek === 4) {
//     console.log('THURSDAY');
// } else if (dayOfWeek === 5) {
//     console.log('FRIDAY');
// } else if (dayOfWeek === 6) {
//     console.log('SATURDAY');
// } else if (dayOfWeek === 7) {
//     console.log('SUNDAY');
// } else {
//     console.log('WHERE ARE YOU FROM DUDE!! MARS?')
// } //END OF IF STATEMENT


switch (dayOfWeek) {
    case 1: value: console.log('MONDAY');
        break;
    case 2: value: console.log('TUESDAY');
        break;
    case 3: value: console.log('WEDNESDAY');
        break;
    case 4: value: console.log('THURSDAY');
        break;
    case 5: value: console.log('FRIDAY');
        break;
    // case 6: value: console.log('SATURDAY');
    //     break;
    // case 7: value: console.log('SUNDAY');
    //     break;
    // or
    case 6:
    case 7:
        value: console.log('Weekend')
        break; //We combined case 6 and case 7
    default: value: console.log('WHERE ARE YOU FROM DUDE!! MARS?');
        break;
} //END OF SWTICH,CASE,BLOCK
