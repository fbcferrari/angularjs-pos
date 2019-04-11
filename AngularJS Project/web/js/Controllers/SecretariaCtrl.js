'use strict';
    fasApp.controller('SecretariaCtrl',
        function SecretariaCtrl($scope,$http,$location,matriculaData) {
            $scope.details=false;
            $scope.matriculas = matriculaData.getAll();
            $scope.creditoTotal=0;
            $scope.matriculaSelect;
            $scope.changeMat = function(mat){
                $scope.creditoTotal=0;
                $scope.matriculaSelect = mat;
                var i;
                for(i=0;i<mat.disciplinas.length;i++){
                    $scope.creditoTotal+=mat.disciplinas[i].credito;
                }
                $scope.details=true;
                
            };

            $scope.aprova = function(matricula){
                matricula.aprovado=true;
                matriculaData.save(matricula);
                $scope.details=false;
                $location.path("/home");
            }
            $scope.voltar = function(){
                $scope.details=false;
            }
        }
);