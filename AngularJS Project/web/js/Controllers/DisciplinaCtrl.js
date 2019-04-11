'use strict';
fasApp.controller("DisciplinaCtrl",
    function DisciplinaCtrl($scope,$location,disciplinaData){
        $scope.disciplinas = disciplinaData.getAll();
        //$scope.qtde=disciplinaData.count();
        $scope.newDisc={
            id:"",nome: "", credito:0
        };

        $scope.salvar=function(disciplina,id){
            $scope.newDisc.nome=disciplina.nome;
            $scope.newDisc.credito=disciplina.credito;
            $scope.newDisc.id=parseInt(id)+1;
            disciplinaData.create(disciplina);
            $location.path("/home");
        }
    });