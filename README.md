Language Zoho
=============

Language Pack for sending messages using the Zoho API.

Documentation
-------------

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
