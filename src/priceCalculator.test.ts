import { priceCalculator } from '../build/priceCalculator';

describe('priceCalculator', () => {
    describe('given a commodity with existing price data', () => {
        it('should return price information sorted by total cost descending', () => {
            const res = priceCalculator({
                commodity: 'orange',
                tons: 10,
                pricePerTon: 10,
            });
            expect(res[0]).toEqual({
                countryCode: 'IN',
                pricePerTon: 11,
                fixedOverhead: 25,
                totalCost: 135,
            });
            expect(res[1]).toEqual({
                countryCode: 'FR',
                pricePerTon: 11.5,
                fixedOverhead: 15,
                totalCost: 130,
            });
        });
    });
    describe('given a commodity with no price data', () => {
        it('should return an empty array', () => {
            const res = priceCalculator({
                commodity: 'pear',
                tons: 10,
                pricePerTon: 10,
            });
            expect(res).toHaveLength(0);
        });
    });
    describe('given invalid input', () => {
        it('should throw an error if pricePerTon is NaN', () => {
            expect.assertions(1);
            try {
                const res = priceCalculator({
                    commodity: 'orange',
                    tons: 10,
                    pricePerTon: Number('a'),
                });
            } catch (err) {
                expect(err.message).toBeDefined();
            }
        });
        it('should throw an error if tons is NaN', () => {
            expect.assertions(1);
            try {
                const res = priceCalculator({
                    commodity: 'orange',
                    tons: Number('b'),
                    pricePerTon: 20,
                });
            } catch (err) {
                expect(err.message).toBeDefined();
            }
        });
    });
});
