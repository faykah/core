# @faykah/core

Data mock library.

```ts
import { seedObject, seedArray } from "@faykah/core";
import { emails, Email } from "@faykah/email-fr";
import { phones, Phone } from "@faykah/phones-fr";
import { addresses, Address } from "@faykah/address-fr";
import { citySuffixes } from "@faykah/city-suffixe-fr";
import { longitudes } from "@faykah/longitude-fr";
import { latitudes } from "@faykah/latitude-en";

const generateLocation = ;

const generateUser = createObjectGenerator({
	email: emails,
	address: addresses,
	location: createObjectGenerator({
		latitudes,
		longitudes, 
	}),
	phone: phones,
	city: citySuffixes,
});

const generateEmail = createArrayGenerator(emails);

generateUser(); // {"email": "john@doe.com", "address": "28 rue du test", "location": {"latitude": 80}}
generateUser(); // {"email": "bar@foo.com", "address": "128 VSCode street", "location": {"latitude": 11}}
generateEmail(); // "john@doe.com"
generateEmail(); // "foo@bar.com"
```
