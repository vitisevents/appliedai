appliedai.co.uk
==================

Applied AI Conference Website

## Installation

Your computer needs:
[Node.js](https://nodejs.org/en/) 0.12 or greater.
[Jekyll](https://jekyllrb.com/docs/installation/) 3.3.1 or greater.

Clone the project
```bash
git clone https://github.com/vitisevents/appliedai
```
From the root of the project run:
```bash
npm i
```
Run gulp to build the site and watch files
```bash
gulp
```

## Editing SASS
Styles are imported from the `vitis-frontend` repository to edit these styles do the following:

Clone `vitis-frontend`
```bash
git clone https://github.com/vitisevents/vitis-frontend
```
Use [npm-link](https://docs.npmjs.com/cli/link)
```bash
cd vitis-frontend
```
```bash
npm link
```
```bash
cd ../appliedai
```
```bash
npm link vitis-frontend
```
