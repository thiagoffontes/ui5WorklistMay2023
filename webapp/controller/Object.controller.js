sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("treinamento.appcategories.controller.Object", {
            onInit: function () {
                this.getRouter().getRoute("object").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent){
                var sObjectId = oEvent.getParameter("arguments").objectId;
                this._bindView("/Categories(" + sObjectId + ")");
            },
            _bindView: function (sObjectPath){

                this.getView().bindElement({
                    path: sObjectPath//,
                    // events: {
                    //     change: this._onBindingChange.bind(this),
                    //     dataRequested: function () {
                    //         oViewModel.setProperty("/busy", true);
                    //     },
                    //     dataReceived: function () {
                    //         oViewModel.setProperty("/busy", false);
                    //     }
                    // }
                });
            }
        });
    });