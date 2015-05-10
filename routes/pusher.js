/**
 * New node file
 */
var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '116647',
  key: 'ee66e653295e6c547c46',
  secret: '6e1e00f8e858f3ba3fcb'
});

pusher.trigger('test_channel', 'my_event', {
  "message": "hello world"
});

exports.pusher=pusher;