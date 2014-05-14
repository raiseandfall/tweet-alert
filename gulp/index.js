/**
 * Created by raiseandfall on 5/14/14.
 */
var fs = require('fs'),
    onlyScripts = require('./util/scriptFilter'),
    tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach(function(task) {
  console.log('task : ', task);
	require('./tasks/' + task);
});