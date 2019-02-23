const argv = require('yargs').argv;
const split = require('split')();
const makeReplacer = (regex, replacements) => {
    const _replacer = (substr, ...groups) => {
        groups.forEach((g, ix) => {
            const gr = replacements[ix];
            gr && (substr = substr.replace(g, gr));
        });

        return substr;
    };

    return str => str.replace(regex, _replacer)
}

const groupReplacements = argv._.slice(1, argv._.length);

const regexStr = argv._[0];
const regex = eval(`/${regexStr}/`);
const replacer = makeReplacer(regex, groupReplacements);

const processLine = b => {
    const r = replacer(b.toString());

    console.log(r);
}

process.stdin.pipe(split).on('data', processLine);