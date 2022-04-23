import { franc, francAll } from 'franc'
import langs from 'langs'
import colors from 'colors'
const input = process.argv[2]

const langCode = franc(input)
const language = langs.where("3", langCode)

// try {
//     console.log(language.name);
// } catch (error) {
//     console.log('OPPPS,COULDN'T FIGURE IT OUT, TRY WITH MORE SAMPLE TEXT.')
//     console.log(error)
// } // Method 1

// if (language === undefined) {
//     console.log("Sorrry, Couldn'tOULDN'T FIGURE IT OUT, TRY WITH MORE SAMPLE TEXT!")
// } else {
//     console.log(language.name);
// } // Method 2

if (langCode === 'und') {
    console.log("Sorrry, Couldn'COULDN'T FIGURE IT OUT, TRY WITH MORE SAMPLE TEXT!".red)
} else {
    console.log(`OUR BEST GUESS IS: ${language.name}`.green);
} // Method 3


