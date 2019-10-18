# fim-page-one
Simple node service used to retrieve page one info for fim print product 

#### Installation
*Prerequisite*: Please install Node JS by following [this link](https://nodejs.org/en/download/) and the installation instructions for your platform.

```bash
git clone https://github.com/USGS-WiM/fim-page-one.git
cd fim-page-one

# install the project's dependencies
npm install
```

#### Getting up and running (installing the service)
*Steps to Make a Node Script a Windows Service*
1. In IIS, install the URL Rewrite and ARR modules if not already installed (ARR must also be manually enabled after installation)
2. In IIS, add the reverse proxy rule to the root web.config file (or compose the rule in IIS)
3. In a CLI, install node-windows npm package globally: `npm install -g node-windows`
4. In your project folder (the one hosting the main js file of your node service), link node-windows to your project: `npm link node-windows`
5. In your project folder, install your project as a Windows service: `node page-one-install-as-service.js`
6. Check that the data folder with is properly referenced in `page-one.js`