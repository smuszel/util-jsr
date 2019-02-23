const argv = require('yargs').argv;

// console.log(argv);

// const x = new Buffer();
// x.

let data = '';
const stdin = process.openStdin();

stdin.on('data', line => {
    const l = line.toString();
    console.log(l)
    // process.stdout.write('abc');
    // data += line.toUpperCase();
});

stdin.addListener('end', () => {
    // stdin.isTTY()
})
// const _args = {
//     regex: /name (\d+) (\d+) is/,
//     replacement: 'xyz',
//     replacements: [],
//     input: 'name 123 23 is',
//     global: false,
//     inplace: false
// }

// const regex = new RegExp(_args.regex);
// const replacer = (substr, ...groups) => {
//     groups.forEach((g, ix) => {
//         const gr = _args.replacements[ix] || _args.replacement;
//         substr = substr.replace(g, gr);
//     });

//     return substr;
// };

// const $ = _args.input.replace(regex, replacer);

// console.log($);