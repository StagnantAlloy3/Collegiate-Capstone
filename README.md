# Project Name TBD

## Description
A mobile application for both iOS and Android that will leverage FDA data to report ingredients in products regulated by the FDA. This application is designed to make grocery shopping easier for people that have food related allergies or other dietary restrictions.  This application is intended to be used on a mobile device while shopping to eliminate the process of reading product ingredients.

Users will be able to make an optional account and build a profile that will contain basic user information, food alergies, and dietary restrictions.  Database will contain two tables: user information and a copy of the FDA dataset, which is publically available [here](https://fdc.nal.usda.gov/index.html).
### Notable User Features:
- User accounts with a two step verification process (via email or sms)
- Barcode scanning functionality to quickly and easily pull relevant product information.
- Manual item lookup when a barcode is not available.
- More features/functions TBD

## Frameworks and Technologies
- React Native: A framework designed for a mobile-first approach that is deployable to both Android and iOS devices with minimal difference.
- Java: Used for server-side processing, specifically endpoints, request handling, and data procesing from database.
- MongoDB: Used to store product information, user credentials, and user-specific data. (May be switched to Oracle SQL, as this is what I'm most familiar with)
