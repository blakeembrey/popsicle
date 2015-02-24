var gulp = require('gulp')
var server = require('../test/support/server')

gulp.task('server', function (done) {
  var app = server.listen(4567, done)

  function close () {
    app.close()

    gulp.removeListener('err', close)
    gulp.removeListener('stop', close)
  }

  gulp.on('err', close)
  gulp.on('stop', close)
})
