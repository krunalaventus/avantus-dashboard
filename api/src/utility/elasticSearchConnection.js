var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    'localhost:3399/_search'
  ],
  log: 'trace'
});

module.exports = client;  

var categoryclient = new elasticsearch.Client( {  
  hosts: [
    'localhost:3399/category/1'
  ],
  log: 'trace'
});

module.exports = categoryclient;

var brandclient = new elasticsearch.Client( {  
  hosts: [
    'localhost:3399/brand/1'
  ],
  log: 'trace'
});

module.exports = brandclient;