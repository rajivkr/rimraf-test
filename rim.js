const rimraf = require('rimraf');

rimraf('app.asar', function(err) {
  if (err) {
    throw err;
  }
  console.log('success');
});

rimraf('path/app.asar', function(err) {
  if (err) {
    throw err;
  }
  console.log('success');
});
