const dev = {
  API_URL: 'http://localhost:3000/dev',
};

const prod = {
  API_URL: 'prod link',
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default {
  ...config,
};
