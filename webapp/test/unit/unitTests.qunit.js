/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"MyBasProject/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
