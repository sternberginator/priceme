# PriceMe MVP

### Equip interview coding challenge

Clara Sternberg
10/25/2021

Note: I set this up so that the commit history would show how much time I spent on each part of this. It took longer than expected due to setting up TypeScript and testing and getting everything to run without error.

## To run

`npm run getPrices -- <commodity> <tons> <price per ton>`

Example input/outut:
```
$ npm run getPrices -- lemon 250 45

Country  Total cost	  Cost breakdown
FR	     $11637.00	  ($46.45/ton * 250 tons) + $24.50
IN	     $11625.00	  ($46.42/ton * 250 tons) + $20.00
CH	     $11595.35	  ($46.31/ton * 250 tons) + $17.85
HN	     $11592.00	  ($46.24/ton * 250 tons) + $32.00
```

### To run tests

`npm run test`
