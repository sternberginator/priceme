const {
    priceCalculator,
} = require('../build/priceCalculator');

const USAGE = `
usage: node index.ts <commodity> <tons> <price per ton>
`;

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log(USAGE);
    process.exit(1);
}

const userInput = {
    commodity: args[0],
    tons: Number(args[1]),
    pricePerTon: Number(args[2]),
};

const prices = priceCalculator(userInput);
prices.sort((a, b) => b.totalCost - a.totalCost);

const round = (num, dec = 2) => Math.round((num + Number.EPSILON) * (10 ** dec)) / (10 ** dec);

console.log(prices.map((p) => {
    const breakdown = `($${p.pricePerTon}/ton * ${userInput.tons} tons) + $${p.fixedOverhead}`;
    return `${p.countryCode}: $${round(p.totalCost)} | ${breakdown}`;
}).join('\n'));
