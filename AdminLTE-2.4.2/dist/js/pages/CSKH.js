debugger;
var app = angular.module('cskh', [])
                .controller('cskhCtrl', cskhCtrl)
                .factory('Customers', Customers);
function cskhCtrl($scope, Customers) {
    $scope.customers = Customers.customers;
    $scope.addCustomer = function(){
        Customers.customers.push($scope.newCustomer);
        $scope.newCustomer = {};
    }
}
function Customers(){
    var customer ={
            customers : [
                {id:67, doituong : "Contract - Contract", madt : 391, group : "Custommer", name : "Nguyễn Thành Đôn", cmnd : 186693334, acc : "Donnt", bank : "186693334", taxid : 908639, address : "Hà Nội" },
                {id:68, doituong : "Contract - Contract", madt : 392, group : "Custommer", name : "Đỗ Văn Vững", cmnd : 186693334, acc : "Vungdv", bank : "186693334", taxid : 908639, address : "Hà Nội" },
                {id:69, doituong : "Contract - Contract", madt : 393, group : "Custommer", name : "Ngô Minh Đức", cmnd : 186693334, acc : "DucNM", bank : "186693334", taxid : 908639, address : "Hà Nội" },
                {id:70, doituong : "Contract - Contract", madt : 394, group : "Custommer", name : "Trần Xuân Hùng", cmnd : 186693334, acc : "HungTX", bank : "186693334", taxid : 908639, address : "Hà Nội" },
                {id:71, doituong : "Contract - Contract", madt : 395, group : "Custommer", name : "Nguyễn Minh Đức", cmnd : 186693334, acc : "DucNM", bank : "186693334", taxid : 908639, address : "Hà Nội" },
                {id:72, doituong : "Contract - Contract", madt : 396, group : "Custommer", name : "Nguyễn Thanh Tùng", cmnd : 186693334, acc : "TungTT", bank : "186693334", taxid : 908639, address : "Hà Nội" },
            ]
    };
    return customer;
}