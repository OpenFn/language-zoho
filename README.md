Language Zoho
=============

Language Pack for sending messages using the Zoho API.

Documentation
-------------

### Sample configuration

```json
{
  "account": "yourzohoaccount", 
  "authToken": "secretauthtoken", 
  "apiVersion": "v2" 
}
```

### addRow
To add a row to the "Customers" table in the "testing_openfn" database, use the following `addRow` function.
```js
addRow("testing_openfn", "Customers", fields(
  field("Subject", dataValue("formId")),
  field("Status", "Closed")
))
```

### updateRow
Coming soon. Want to help? https://zohoreportsapi.wiki.zoho.com/Updating-Data.html


Development
-----------

Clone the repo, run `npm install`.

Run tests using `npm run test` or `npm run test:watch`

Build the project using `make`.
