# Tret-Financial

**Tret-Financial** is a personal finance web application written in JavaScript and
Golang. It adheres to [double-entry
accounting](https://en.wikipedia.org/wiki/Double-entry_bookkeeping_system)
principles and allows for importing directly from financial institutions using
OFX (via [ofxgo](https://github.com/aclindsa/ofxgo)).

This project is in active development and is not yet ready to be relied upon as
your primary accounting software (but please feel free to try it out and offer
feedback!).

## Features

* [Import from OFX](./docs/ofx_imports.md) and
  [Gnucash](http://www.gnucash.org/)
* Enter transactions manually using the register, double-entry accounting is
  enforced
* Generate [custom charts in Lua](./docs/lua_reports.md)

## Screenshots

![Yearly Expense Report](./screenshots/yearly_expenses.png)
![Transaction Register](./screenshots/transaction_register.png)
![Transaction Editing](./screenshots/editing_transaction.png)

## Usage Documentation

Though I believe much of the interface is 'discoverable', I'm working on
documentation for those things that may not be so obvious to use: creating
custom reports, importing transactions, etc. For the moment, the easiest way to
view that documentation is to [browse it on github](./docs/index.md).

## Missing Features

* Importing a few of the more exotic investment transactions via OFX
* Budgets
* Scheduled transactions
* Matching duplicate transactions
* Tracking exchange rates, security prices
* Import QIF
