import { priceCalculator } from '../build/priceCalculator';

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

let prices;
try {
    prices = priceCalculator(userInput);
} catch (err) {
    console.log(`${err.message}\n`);
    process.exit(1);
}

const formatDollars = (num: number): string => `$${Number(num).toFixed(2)}`;

console.log('Country\tTotal Cost\tCost breakdown');
console.log(prices.map((p) => {
    const breakdown = `(${formatDollars(p.pricePerTon)}/ton * ${userInput.tons} tons) + ${formatDollars(p.fixedOverhead)}`;
    return `${p.countryCode}\t${formatDollars(p.totalCost)}\t${breakdown}`;
}).join('\n'));
