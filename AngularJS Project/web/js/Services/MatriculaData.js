'use strict';
fasApp.factory('matriculaData', function ($resource,$q) {
    //var resource = $resource('../app/data/disciplina/:id.json', {id:'@id'},{"getAll":{method:"GET",isArray:true}});
    //var resource = $resource('../app/data/matricula.json',{});
    //var resource = $resource('data/matricula/:id.json', {id:'@id'});
    var resource = $resource('http://localhost:8080/RestApi/webresources/MatriculaResource/', {});
    var resourceId = $resource('http://localhost:8080/RestApi/webresources/MatriculaResource/:id' ,{id:'@id'});
   return{
       getAll: function () {
           return resource.query({method:'GET'});
       },
       create:function(matricula){
           console.log(matricula);
           resource.save(matricula,function(response){
                   console.log(response);
               },function(response){
                   console.log(response);
               }
           );

       },
       count:function(){
           return resourceId.get({id:"count"});
       },
       save:function(matricula){
          var updateMat = $resource('http://localhost:8080/RestApi/webresources/MatriculaResource/:id',{},
            {'update':{method:'PUT'}
          });
          updateMat.update({id:matricula.id},matricula);
       }
    }

});
