/**
 * Created by ericjohndixon on 1/5/16.
 */
(function () {
    'use strict';

    angular
        .module('angular-mms-common-modals')
        .controller('LoadingBackdropModalCtrl', LoadingBackdropModalCtrl);
    LoadingBackdropModalCtrl.$inject = ['$uibModalInstance', 'loadingText', 'loadingPromise', '$q'];

    //CONTROLLER
    function LoadingBackdropModalCtrl($uibModalInstance, loadingText, loadingPromise, $q) {
        var vm = this;
        vm.loadingText = loadingText;

        //When finished loading close modal
        $q.when(loadingPromise.promise, $uibModalInstance.close, $uibModalInstance.close);
    }
})();
