jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"supportsolutionscust/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"supportsolutionscust/test/integration/pages/App",
	"supportsolutionscust/test/integration/pages/Browser",
	"supportsolutionscust/test/integration/pages/Master",
	"supportsolutionscust/test/integration/pages/Detail",
	"supportsolutionscust/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "supportsolutionscust.view."
	});

	sap.ui.require([
		"supportsolutionscust/test/integration/NavigationJourneyPhone",
		"supportsolutionscust/test/integration/NotFoundJourneyPhone",
		"supportsolutionscust/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});