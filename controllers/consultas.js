app.controller('consultasCtrl', function($scope, $http) {

	$scope.datasets = [
		{
			"nome": "Pessoa",
			"datasetName":"pessoa"
		},
		{
			"nome": "Alunos 01",
			"datasetName":"aluno_SI"
		},
		{
			"nome": "Alunos 02",
			"datasetName":"aluno_CC"
		},
		{
			"nome": "Docentes",
			"datasetName":"docentes"
		},
		{
			"nome": "Curso",
			"datasetName": "curso"
		},
		{
			"nome": "Turma",
			"datasetName":"turma"
		},
		{
			"nome": "Orgão",
			"datasetName":"orgao"
		}
	];
   
	$scope.formatos = [
		{
		
			"nome": "JSON",
			"format":"json"
		},
		{
			"nome": "XML",
			"format":"xml"
		},
		//{
		//	"nome": "CSV",
		//	"format":"csv"
		//},
		{
			"nome": "RDF",
			"format": "rdf"
		}
	];

	$scope.download = {
		show: false
	};

	$scope.buscar =  function (data) {
    console.log(data);

		if(!data || !data.datasetName) {
			alert("Selecione o dataset");
			return;
		}

		if (!data || !data.format) {
			alert("Selecione o formato");
			return;
		}

		if(data.where == "") data.where = {};

		$http({
	      method: 'POST',
	      url: 'http://localhost:8080/find/execute_query',
	      data: data,
	      headers: {
	        'Content-Type' : 'application/json'
	      }
	    }).then(function successCallback(res) {
	    	console.log(res);
	    	if(res.data){ 

	    		$scope.download.data = res.data;
	    		$scope.download.format = data.format;
	    		$scope.download.show = true;
	  		 // console.log(res.data);
	    	
	    	} else {

	    		alert("Não houve retorno");
	    	}

	    }, function errorCallback(res) {
	     	console.log('deu erro');
	     	alert("Não houve retorno para a consulta");
	    });
    
    };	



    $scope.fazerDownload = function () {

    	var format = $scope.download.format.toLowerCase();
    	var data = $scope.download.data;
    	var contentType = "text/csv;charset=utf-8";


    	if(format == "json") {
    		contentType = "application/json;charset=utf-8";
    		data = JSON.stringify(data);
    	} else if(format == "xml") {
    		contentType = "application/xml;charset=utf-8";
    	} else {
    		contentType = "application/rdf+xm;charset=utf-8";
    	}

    	var blob = new Blob([data], { type: contentType });
    	var fileName = "file." + format;

    	var link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
       	link.href = (window.URL || window.webkitURL).createObjectURL(blob);
       	link.download = fileName;
        
	    var event = document.createEvent("MouseEvents");
	    event.initEvent("click", true, false);
	    link.dispatchEvent(event);

    }
		
});
