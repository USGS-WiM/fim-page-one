var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'fim-page-one',
  script: require('path').join(__dirname,'page-one.js')
});

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

// Uninstall the service.
svc.uninstall();