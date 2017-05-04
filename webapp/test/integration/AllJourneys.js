jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SOLCATSet in the list
// * All 3 SOLCATSet have at least one SolCatToSol

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
		"supportsolutionscust/test/integration/MasterJourney",
		"supportsolutionscust/test/integration/NavigationJourney",
		"supportsolutionscust/test/integration/NotFoundJourney",
		"supportsolutionscust/test/integration/BusyJourney",
		"supportsolutionscust/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});