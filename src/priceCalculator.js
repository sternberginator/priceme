const data = require('../data/example.json');

const priceCalculator = ({
    commodity,
    tons,
    pricePerTon,
}) => {
    return data.filter((d) => d.COMMODITY_NAME === commodity).map((d) => {
        const fixedOverhead = Number(d.FIXED_OVERHEAD);
        const adjustedPricePerTon = pricePerTon + Number(d.VAR_OVERHEAD);
        return {
            countryCode: d.COUNTRY,
            pricePerTon: adjustedPricePerTon,
            fixedOverhead,
            totalCost: adjustedPricePerTon * tons + fixedOverhead,
        };
    });
};

module.exports = {
    priceCalculator,
};
