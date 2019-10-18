var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'fim-pdf-merge',
  description: 'Service to merge two FIM PDFs',
  script: 'D:\\Projects\\node-services\\fim-pdf-merge\\merge.js',
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