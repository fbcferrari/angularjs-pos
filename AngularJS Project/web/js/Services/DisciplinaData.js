'use strict';
fasApp.factory('disciplinaData', function ($resource,$q) {
    var resource = $resource('http://localhost:8080/RestApi/webresources/DisciplinaResource/' ,{});
    var resourceId = $resource('http://localhost:8080/RestApi/webresources/DisciplinaResource/:id' ,{id:'@id'});
    return{
        getAll: function () {
            return resource.query({method:'GET'});
        },
        get:function(idDisc){
            return resourceId.get({id:idDisc});
        },
        create:function(disciplina){
            console.log(disciplina);
            resource.save(disciplina,function(response){
                    console.log(response);
                },function(response){
                    console.log(response);
                }
            );

        },
        count:function(){
            return resourceId.get({id:"count"});
        }
    }
});
