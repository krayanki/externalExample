jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"hello/test/integration/NavigationJourneyPhone",
		"hello/test/integration/NotFoundJourneyPhone",
		"hello/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});