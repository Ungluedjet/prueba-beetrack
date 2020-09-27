const url = 'http://newsapi.org/v2/top-headlines?';

const country = 'country=us&';

const key = 'apiKey=576bfc69ae6e4995b8e695f9bbbed374';

const apiUrl = url + country + key;

const amazonUrlAdd = 'http://pruebanode-env.eba-usndm3tp.us-east-2.elasticbeanstalk.com/article/add';

const amazonUrlAll = 'http://pruebanode-env.eba-usndm3tp.us-east-2.elasticbeanstalk.com/article/all';

export { apiUrl, url, amazonUrlAdd, amazonUrlAll };