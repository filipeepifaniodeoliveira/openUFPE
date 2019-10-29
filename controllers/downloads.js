app.controller('downloadsCtrl',['$scope', '$http', function($scope, $http) {

  $scope.pegarDados = function () {
    pegarDadosPessoa();
    pegarDadosAluno();
    pegarDadosDocentes();
    pegarDadosCursos();
    pegarDadosOrgao();
    pegarDadosTurma();
  }

//pegar dados do dataset pessoa  
  function pegarDadosPessoa () {
    console.log('chamou o pegar dados pessoa');

    $http({
      method: 'GET',
      url: 'http://localhost:8080/find/about/pessoa',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(function successCallback(res) {

      var data = res.data;
      console.log(data);
      
      if(data && data[0]) {
        $scope.posts = data;
      } else {
        $scope.posts = [data];
      }


    }, function errorCallback(res) {
      console.log('deu erro');
    });
  }
  $scope.pegarDadosPessoa = pegarDadosPessoa;



//pegar dados do dataset alunos
function pegarDadosAluno () {
    console.log('chamou o pegar dados aluno');

    $http({
      method: 'GET',
      url: 'http://localhost:8080/find/about/aluno',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(function successCallback(res) {

      var aluno = res.data;
      console.log(aluno);
      
      if(aluno && aluno[0]) {
        $scope.posts_aluno = aluno;
      } else {
        $scope.posts_aluno = [aluno];
      }


    }, function errorCallback(res) {
      console.log('deu erro');
    });

  }
$scope.pegarDadosAluno = pegarDadosAluno;





//pegar dados do dataset docentes
function pegarDadosDocentes () {
    console.log('chamou o pegar dados docentes');

    $http({
      method: 'GET',
      url: 'http://localhost:8080/find/about/docente',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(function successCallback(res) {

      var docente = res.data;
      console.log(docente);
      
      if(docente && docente[0]) {
        $scope.posts_docente = docente;
      } else {
        $scope.posts_docente = [docente];
      }


    }, function errorCallback(res) {
      console.log('deu erro');
    });

  }
$scope.pegarDadosDocentes = pegarDadosDocentes;






//Pegar dados do dataset cusos
function pegarDadosCursos () {
    console.log('chamou o pegar dados cursos');

    $http({
      method: 'GET',
      url: 'http://localhost:8080/find/about/curso',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(function successCallback(res) {

      var curso = res.data;
      console.log(curso);
      
      if(curso && curso[0]) {
        $scope.posts_curso = curso;
      } else {
        $scope.posts_curso = [curso];
      }


    }, function errorCallback(res) {
      console.log('deu erro');
    });

  }
$scope.pegarDadosCursos = pegarDadosCursos;




//Pegar dados do dataset Orgao
function pegarDadosOrgao () {
    console.log('chamou o pegar dados Orgao');

    $http({
      method: 'GET',
      url: 'http://localhost:8080/find/about/orgao',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(function successCallback(res) {

      var orgao = res.data;
      console.log(orgao);
      
      if(orgao && orgao[0]) {
        $scope.posts_orgao = orgao;
      } else {
        $scope.posts_orgao = [orgao];
      }


    }, function errorCallback(res) {
      console.log('deu erro');
    });

  }
$scope.pegarDadosOrgao = pegarDadosOrgao;





//Pegar dados do dataset turma
function pegarDadosTurma () {
    console.log('chamou o pegar dados turma');

    $http({
      method: 'GET',
      url: 'http://localhost:8080/find/about/turma',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(function successCallback(res) {

      var turma = res.data;
      console.log(turma);
      
      if(turma && turma[0]) {
        $scope.posts_turma = turma;
      } else {
        $scope.posts_turma = [turma];
      }


    }, function errorCallback(res) {
      console.log('deu erro');
    });

  }
$scope.pegarDadosTurma = pegarDadosTurma;

}]);


 