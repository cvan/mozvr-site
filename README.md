# Mozilla VR Site

Source for Mozilla VR site: __http://mozvr.com/__


## Installation

1. Clone the repo:

    ```js
    git clone git@github.com:MozVR/mozvr-site.git && cd mozvr.com
    ```

2. Install the Node dependencies:

    ```js
    npm install
    ```

## Development

Serve the site from the simple server:

    npm run dev

Then launch the site from your favourite browser:

[__http://localhost:9090/__](http://localhost:9090/)

If you'd like, you can serve the site from a different port:

    PORT=8000 npm run dev

To push your changes to the repo:

    git pull --rebase
    git push


## Deployment

To deploy the site to GitHub Pages:

    npm run deploy

To deploy the site to __your__ GitHub Pages (e.g., https://your_username.github.io/mozvr-site/):

    npm run deploy your_username
