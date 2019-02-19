var app = angular.module('app', []);
app.controller('myCtrl', function($scope, $http) {
$http.get('assets/js/voiture.json').then(function(res) { /* "$http.get" permet de charger (ou d'appeler) un fichier (ici voiture.json) afin d'y ajouter des fonctions */
  $scope.voitures = res.data; // scope.voiture va rechercher les infos sur le fichier voiture de jason

});
});
