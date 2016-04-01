/**
 * Created by ericjohndixon on 11/9/15.
 */
(function () {
    'use strict';

    angular
        .module('angular-mms-common-modals')
        .controller('WarningBeforeActionModalCtrl', WarningBeforeActionModalCtrl);
    WarningBeforeActionModalCtrl.$inject = ['$uibModalInstance', 'modalTitle', 'modalWarning', 'modalQuestion'];

    //CONTROLLER
    function WarningBeforeActionModalCtrl($uibModalInstance, modalTitle, modalWarning, modalQuestion) {
        var vm = this;
        vm.modalTitle = modalTitle;
        vm.modalWarning = modalWarning;
        vm.modalQuestion = modalQuestion;
        vm.confirm = function () {
            $uibModalInstance.close();
        };
        vm.decline = function () {
            $uibModalInstance.dismiss();
        };
    }
})();
