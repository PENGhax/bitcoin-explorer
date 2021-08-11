## Enviroment requirement
To run this dev-application, please ensure nodejs installed on your computer.
Or you can download from `https://nodejs.org/en/download/`.

## First time to use.
After installed nodejs, please resolve all dependencies.
Run `npm install` to install all dependencies.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Data API
Data API not set the reverse proxy.

    - Get all blocks `https://blockstream.info/api/blocks`
    - Get block hash `https://blockstream.info/api/block-height/:height`
    - Get block detail by hash `https://blockstream.info/api/block/:hash`

## Pages
    - `/` Home URL display latest 10 block.
    - `/block-detail/:height` display block detail page.

## Features
    - List blocks
    - View block detail
    - Query block height. Enter the height value and click the 'Search' button.
