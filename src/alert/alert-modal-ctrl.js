/**
 * Created by ericjohndixon on 1/22/16.
 */
(function () {
    'use strict';

    angular
        .module('angular-mms-common-modals')
        .controller('AlertModalCtrl', AlertModalCtrl);
    AlertModalCtrl.$inject = ['$uibModalInstance', 'modalTitle', 'modalBody', '$sce'];

    //CONTROLLER
    function AlertModalCtrl($uibModalInstance, modalTitle, modalBody, $sce ) {
        var vm = this;
        vm.modalTitle = modalTitle;
        vm.modalBody = $sce.trustAsHtml(modalBody);
        vm.confirm = function () {
            $uibModalInstance.close();
        };
    }
})();
