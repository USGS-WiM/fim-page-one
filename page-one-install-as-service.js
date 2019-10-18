var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'fim-page-one',
  description: 'Service to retrieve page one info for fim print product',
  script: 'D:\\Projects\\Applications\\github\\fim-page-one\\page-one.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();