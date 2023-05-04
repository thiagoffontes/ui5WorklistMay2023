sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("treinamento.appcategories.controller.List", {
            onInit: function () {
                var oFilterModel = new JSONModel({
                    CategoryID : ""
                });
                this.setModel(oFilterModel, "filterModel");
            },
            onPress: function (oEvent){
                var oItem = oEvent.getSource();
                var sBindingContext = oItem.getBindingContext();

                this.getRouter().navTo("object", {
                    objectId : sBindingContext.getPath().replace(/\D/gm, "")
                });
            },
            onSearch: function (){
                var sSearchId = this.getModel("filterModel").getProperty("/CategoryID");
                var aFilters = [];
                if (sSearchId){
                    aFilters.push(new Filter("CategoryID", FilterOperator.EQ, sSearchId));
                }

                var oTable = this.getView().byId("Table");
                oTable.getBinding("items").filter(aFilters);
                oTable.getBinding("items").refresh();
            },
            onReset: function (){
                this.getModel("filterModel").setProperty("/CategoryID", "");
            }
        });
    });