/*global QUnit*/

sap.ui.define([
	"MyBasProject/controller/CDAO_View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CDAO_View1 Controller");

	QUnit.test("I should test the CDAO_View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
