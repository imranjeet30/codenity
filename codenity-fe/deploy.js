const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/imranjeet30/codenity.git', // Replace with your actual repo URL
}, function(err) {
  if (err) {
    console.error('🚨 Deployment failed:', err);
  } else {
    console.log('✅ Deployment successful!');
  }
});
