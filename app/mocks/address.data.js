System.register([], function(exports_1) {
    var _these, ADDRESSES;
    return {
        setters:[],
        execute: function() {
            _these = [
                { number: "123", street: "main", apt: "201", city: "San Francisco", state: "CA", zip: "99999" },
                { number: "456", street: "elm", apt: "", city: "San Mateo", state: "CA", zip: "99999" },
                { number: "789", street: "juniper", apt: null, city: "Restin", state: "VA", zip: "20101" },
                { number: "999", street: "elm", apt: "A", city: "San Francisco", state: "CA", zip: "99999" }
            ];
            exports_1("ADDRESSES", ADDRESSES = _these);
        }
    }
});
//# sourceMappingURL=address.data.js.map