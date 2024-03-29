Created a website for searching about countries. 
like there :- 
1. Capital
2. Continent
3. Population
4. Currency
5. Languages
6. Flags
By using " Country Guide API " LINK :- https://restcountries.com/

Challenges i have to face :- 
1. When getting the currency of different Countries.
2. When getting Different Languages of the different Countries.

Solution:- 
Well what i did was just , get the keys which represent the currenceis as an array using Object.keys() and from that use it to get the different currienceies.
for LANGUAGES i have to use Object.values() to get the values and the convert it into string using toString().

Thats how im able to solve it.
