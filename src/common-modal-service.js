/**
 * Created by ericjohndixon on 9/1/15.
 */
(function () {
  'use strict';

  angular.module('angular-mms-common-modals', ['ui.bootstrap', 'ui.router', 'angularSpinner'])
    .factory('ModalService', ['$uibModal', function ($uibModal) {
          return {
              openConfirm: openConfirm,
              openDirtyChecker: openDirtyChecker,
              openWarningBeforeAction: openWarningBeforeAction,
              openLoadingBackdrop: openLoadingBackdrop,
              openAlert: openAlert
          };


      /////////////////////////////////////////////////////////


          function openConfirm(modalTitle, modalBody) {
              return $uibModal.open({
                  animation: true,
                  templateUrl: 'src/confirm/confirm-modal-tpl.html',
                  controller: 'ConfirmRemoveModalCtrl as vm',
                  size: 'lg',
                  resolve: {
                      modalTitle: function() { return modalTitle; },
                      modalBody: function() { return modalBody; }
                  }
              });
          }

          function openDirtyChecker(toLocation, toParams, confirm, decline, invalidDataForSaveBoolean) {
              return $uibModal.open({
                  templateUrl: 'src/dirtyChecker/dirty-checker-modal-tpl.html',
                  controller: 'DirtyCheckerModalCtrl',
                  controllerAs: 'vm',
                  size: 'md',
                  backdrop: true,
                  resolve: {
                      toLocation: function() { return toLocation; },
                      toParams:   function() { return toParams; },
                      confirm:    function() { return confirm; },
                      decline:    function() { return decline; },
                      invalidDataForSaveBoolean : function() { return invalidDataForSaveBoolean; }
                  }
              });
          }

          function openWarningBeforeAction(modalTitle, modalWarning, modalQuestion) {
              return $uibModal.open({
                  animation: true,
                  templateUrl: 'src/warningBeforeAction/warning-before-action-modal-tpl.html',
                  controller: 'WarningBeforeActionModalCtrl as vm',
                  size: 'lg',
                  resolve: {
                      modalTitle: function() { return modalTitle; },
                      modalWarning: function() { return modalWarning },
                      modalQuestion: function() { return modalQuestion }
                  }
              });
          }

          function openLoadingBackdrop(loadingText, loadingPromise) {
              return $uibModal.open({
                  controller: 'LoadingBackdropModalCtrl as vm',
                  backdrop: 'static',
                  keyboard: false,
                  windowTemplateUrl: 'src/loadingBackdrop/loading-backdrop-modal-tpl.html',
                  templateUrl: 'src/loadingBackdrop/loading-backdrop-tpl.html',
                  size: 'sm',
                  resolve: {
                      loadingText: function() { return loadingText; },
                      loadingPromise : function() { return {promise: loadingPromise}; }
                  }
              });
          }

          function openAlert(modalTitle, modalBody) {
              return $uibModal.open({
                  animation: true,
                  templateUrl: 'src/alert/alert-modal-tpl.html',
                  controller: 'AlertModalCtrl as vm',
                  size: 'lg',
                  resolve: {
                      modalTitle: function() { return modalTitle; },
                      modalBody: function() { return modalBody; }
                  }
              });
          }

    }]);
})();
