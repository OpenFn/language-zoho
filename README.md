Language Zoho
=============

Language Pack for sending messages using the Zoho API.

Documentation
-------------

1. It is mandatory to use HTTPS in all API requests instead of HTTP request. HTTP is not supported
2. Always use https://reportsapi.zoho.com as the API request URL.
This API allows you to add a single row into a specified table.

Sample Request
A sample request for adding a row to the "EmployeeDetails" table inside the database "EmployeeDB"

base URL
```
https://reportsapi.zoho.com/api/abc@zoho.com/EmployeeDB/EmployeeDetails?ZOHO_ACTION=ADDROW
&ZOHO_OUTPUT_FORMAT=XML&ZOHO_ERROR_FORMAT=XML&authtoken=g38sl4j4856guvncrywox8251sssds&ZOHO_API_VERSION=1.0
```

Data Sent as POST parameters (URL Encoded)
```
&Name=Gary&Date Of Birth=12-Jun-1980&Country=USA&Salary=10000
```

```js
addRow(
  function(state) {
    return (
      `Name=` + dataValue("form.first_name")(state) +
      `&Date of Birth=` + dataValue("dob")(state) +
      `&Country=USA&Salary=10000`
    )
  }
)

```

Development
-----------

Clone the repo, run `npm install`.

Run tests using `npm run test` or `npm run test:watch`

Build the project using `make`.
