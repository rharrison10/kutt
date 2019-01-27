const URL = require('url');
const config = require('../config');

exports.addProtocol = url => {
  const hasProtocol = /^https?/.test(URL.parse(url).protocol);
  return hasProtocol ? url : `http://${url}`;
};

exports.generateShortUrl = (id, domain) =>
  `https://${domain || config.DEFAULT_DOMAIN}/${id}`;

exports.isAdmin = email => config.ADMIN_EMAILS.includes(email);
