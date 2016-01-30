/*

 ____        _                        _            
/ ___|  __ _| |_ __ ___   ___  _ __  | |___      __
\___ \ / _` | | '_ ` _ \ / _ \| '_ \ | __\ \ /\ / /
 ___) | (_| | | | | | | | (_) | | | || |_ \ V  V / 
|____/ \__,_|_|_| |_| |_|\___/|_| |_(_)__| \_/\_/  

	Author: Ze-Hao, Wang (Salmon)
	GitHub: http://github.com/grass0916
	Site:   http://salmon.tw

	Copyright 2016 Salmon
	Released under the MIT license (only code, not include images)

*/

/* =============================================
                    Packages
   ============================================= */

// Native libraries below.
var fs     = require('fs');
// 3rd-party libraries below.
var app    = require('koa')();
var router = require('koa-router')();
var static = require('koa-static');

/* =============================================
                 Web application
   ============================================= */

// Import the source of web application.
var web = require('./src/web.js');

// RESTful web path.
router
	.get('/', web.core.index);

// Enable the koa web server.
app
	// Set the static files path.
	.use(static('./server/static'))
	// Set routes.
	.use(router.routes())
	.use(router.allowedMethods())
	// Start listening.
	.listen(8080);

// Error handling.
app
	.on('error', function (err) {
		log.error('server error', err);
	});