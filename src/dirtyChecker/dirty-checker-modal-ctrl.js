/**
 * Created by ericjohndixon on 6/25/15.
 */
(function () {
  "use strict";

  angular.module('angular-mms-common-modals')
    .controller('DirtyCheckerModalCtrl', function(confirm, decline, toLocation, toParams, invalidDataForSaveBoolean, $uibModalInstance, $state, $window){
          var vm = this;
          vm.confirmBtnClass = 'btn-primary';
          vm.confirmBtnText = 'Save';
          vm.declineBtnText = 'Don\'t save';
          vm.invalidDataForSaveBoolean = invalidDataForSaveBoolean;


          vm.confirm = function () {
              if (confirm) {
                  confirm().then(function () {
                      finalAction(true);
                  });
              }
              else {
                  finalAction(true);
              }
          };
          vm.decline = function () {
              if (decline) {
                  decline().then(function () {
                      finalAction(true);
                  });
              }
              else {
                  finalAction(true);
              }
          };
          vm.close = function() {
              $uibModalInstance.dismiss();
          };

          function finalAction(continueNavigation) {
              if (continueNavigation) {
                  $uibModalInstance.close();
                  (toLocation.name) ? $state.go(toLocation.name, toParams) : $window.location.href = toLocation;
              } else {
                  $uibModalInstance.close(); // stays on same page if toLocation is null as is the case with errors
              }
          }
    });
})();
