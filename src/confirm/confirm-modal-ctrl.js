/**
 * Created by ericjohndixon on 9/1/15.
 */
(function () {
    'use strict';

    angular
        .module('angular-mms-common-modals')
        .controller('ConfirmRemoveModalCtrl', ConfirmRemoveModalCtrl);
    ConfirmRemoveModalCtrl.$inject = ['$uibModalInstance', 'modalTitle', 'modalBody'];

    //CONTROLLER
    function ConfirmRemoveModalCtrl($uibModalInstance, modalTitle, modalBody) {
        var vm = this;
        vm.modalTitle = modalTitle;
        vm.modalBody = modalBody;
        vm.confirm = function () {
            $uibModalInstance.close();
        };
        vm.decline = function () {
            $uibModalInstance.dismiss();
        }
    }
})();
