'use strict';
    fasApp.controller('MatriculaCtrl',
        function MatriculaCtrl($scope,$location,matriculaData,disciplinaData) {
            $scope.disciplinas=disciplinaData.getAll();
            $scope.disciplinasEscolhidas=[];
            $scope.creditoTotal= 0;

            $scope.matriculaInsert = {
            id:"",nome: "", email: "", dataNasc: "", disciplinas: [],aprovado:false
            };
            $scope.matriculas = matriculaData.getAll();


            $scope.addDisc = function(matricula,disc){
                $scope.disciplinasEscolhidas.push(disc);
                $scope.creditoTotal+=disc.credito;
            };

            $scope.saveMatricula = function (matricula,disciplinas,newId) {
                $scope.matriculaInsert.nome=matricula.nome;
                $scope.matriculaInsert.email=matricula.email;
                $scope.matriculaInsert.dataNasc=matricula.dataNasc;
                $scope.matriculaInsert.disciplinas=disciplinas;
                $scope.matriculaInsert.id=parseInt(newId)+1;
                console.log($scope.matriculaInsert);
                matriculaData.create($scope.matriculaInsert);
                $location.path("/home");
                        /*.then(
                        function(response) { console.log('success', response); },
                        function(response) { console.log('failure', response); }*/
            };
        }
    );
