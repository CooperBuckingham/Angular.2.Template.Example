System.register(['../mocks/address.data', 'angular2/core', '../mocks/data.service'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var address_data_1, core_1, data_service_1;
    var AddressService;
    return {
        setters:[
            function (address_data_1_1) {
                address_data_1 = address_data_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            AddressService = (function (_super) {
                __extends(AddressService, _super);
                function AddressService() {
                    _super.call(this);
                    this._data = address_data_1.ADDRESSES;
                }
                AddressService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AddressService);
                return AddressService;
            })(data_service_1.DataService);
            exports_1("AddressService", AddressService);
        }
    }
});
//# sourceMappingURL=addresses.service.js.map