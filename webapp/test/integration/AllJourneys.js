jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Orders in the list
// * All 3 Orders have at least one Order_Details

sap.ui.require([
	"sap/ui/test/Opa5",
	"hello/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"hello/test/integration/pages/App",
	"hello/test/integration/pages/Browser",
	"hello/test/integration/pages/Master",
	"hello/test/integration/pages/Detail",
	"hello/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "hello.view."
	});

	sap.ui.require([
		"hello/test/integration/MasterJourney",
		"hello/test/integration/NavigationJourney",
		"hello/test/integration/NotFoundJourney",
		"hello/test/integration/BusyJourney",
		"hello/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});