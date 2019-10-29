app.controller('indicadoresCtrl',['$scope', '$http', function($scope, $http) {

  $scope.pegarDados = function () {
    pegarDadosSI();
    pegarDadosCC();
  }



//alunos do curso de SI que abandonaram o curso de 2012 a 2016
function pegarDadosSI () {
    console.log('chamou o pegar dados');

//alunos admitidos em 2016 que desistiram do curso

    $http({
          url: 'http://localhost:8080/find/execute_query',
          method: 'POST',
          data: {

        "datasetName":"aluno_SI", 
        "format":"json",
        "where":
        { 
          "codg_progm_fomc" : "311",
          "codg_tipo_sitc_acadmc" :"17"
        }
         
     
        },
          headers: {
            'Content-Type': 'application/json'            
          }
          
        }).then(function successCallback(res) {
          $scope.indicadores = res.data;
          //console.log(res.data);

           var desistiu2011 = 0;
           var desistiu2012 = 0;
           var desistiu2013 = 0;
           var desistiu2014 = 0;
           var desistiu2015 = 0;
           var desistiu2016 = 0;
           
           var dados   = res.data;
           console.log(dados);
          // var cursos  = [];
          // var qtdAlunos = 35;


          //    if 17
          //     if ano_adms
          //     else if ano_adms




           for (var i = 0; i< dados.length; i++) {
           
            if (dados[i].ano_adms == "2011" && dados[i].codg_tipo_sitc_acadmc == "17"){
            desistiu2011 = desistiu2011 + 1;
            console.log(desistiu2011 + "desistentes em 2011");

          }

            else if (dados[i].ano_adms == "2012" && dados[i].codg_tipo_sitc_acadmc == "17"){
            desistiu2012 = desistiu2012 + 1;
            console.log(desistiu2012 + "desistentes em 2012");

          }

            else if (dados[i].ano_adms == "2013" && dados[i].codg_tipo_sitc_acadmc == "17"){
            desistiu2013 = desistiu2013 + 1;
            console.log(desistiu2013 + "desistentes em 2013");

          }

            else if (dados[i].ano_adms == "2014" && dados[i].codg_tipo_sitc_acadmc == "17"){
            desistiu2014 = desistiu2014 + 1;
            console.log(desistiu2014 + "desistentes em 2014");

          } else if ( dados[i].ano_adms == "2015" && dados[i].codg_tipo_sitc_acadmc == "17"){

            desistiu2015 = desistiu2015 +1;
            console.log(desistiu2015 + "desistentes em 2015");

          } else if ( dados[i].ano_adms == "2016" && dados[i].codg_tipo_sitc_acadmc == "17"){

            desistiu2016 = desistiu2016 +1;
            console.log(desistiu2016 + "desistentes em 2016");

          }

         } 
       

          //grafico
          $scope.bar_si = {

            labels : ['2011','2012', '2013', '2014', '2015', '2016'],
            series : ['Numero de alunos que abandonaram o curso'],
            data : [
                   [desistiu2011, desistiu2012, desistiu2013, desistiu2014, desistiu2015, desistiu2016]
                ]
          };

         // cursos.push(dados.tipo);
         // mediaCursos ++;
         // $scope.cursos = cursos;

    }, function errorCallback(res) {
      console.log('deu erro');
    });

  }


  
//alunos do curso de CC que abandonaram o curso de 2012 a 2016
  function pegarDadosCC () {
    console.log('chamou o pegar dados');

//alunos admitidos em 2016 que desistiram do curso

    $http({
          url: 'http://localhost:8080/find/execute_query',
          method: 'POST',
          data: {

        "datasetName":"aluno_02", 
        "format":"json",
        "where":
        { 
          "codg_progm_fomc" : "45",
          "codg_tipo_sitc_acadmc" :"17"
        }
         
     
        },
          headers: {
            'Content-Type': 'application/json'            
          }
          
        }).then(function successCallback(cc) {
          $scope.indicadores = cc.data;
          //console.log(res.data);

           var desistiuCC2011 = 0;
           var desistiuCC2012 = 0;
           var desistiuCC2013 = 0;
           var desistiuCC2014 = 0;
           var desistiuCC2015 = 0;
           var desistiuCC2016 = 0;
           
           
           var dadosCC   = cc.data;
           console.log(dadosCC);
          // var cursos  = [];
          // var qtdAlunos = 35;

           for (var i = 0; i< dadosCC.length; i++) {
           
          if (dadosCC[i].ano_adms == "2011" && dadosCC[i].codg_tipo_sitc_acadmc == "17"){
            desistiuCC2011 = desistiuCC2011 + 1;
            console.log(desistiuCC2011 + "desistentes CC em 2011");

          }

          else if (dadosCC[i].ano_adms == "2012" && dadosCC[i].codg_tipo_sitc_acadmc == "17"){
            desistiuCC2012 = desistiuCC2012 + 1;
            console.log(desistiuCC2012 + "desistentes CC em 2012");

          }

            else if (dadosCC[i].ano_adms == "2013" && dadosCC[i].codg_tipo_sitc_acadmc == "17"){
            desistiuCC2013 = desistiuCC2013 + 1;
            console.log(desistiuCC2013 + "desistentes CC em 2013");

          }

            else if (dadosCC[i].ano_adms == "2014" && dadosCC[i].codg_tipo_sitc_acadmc == "17"){
            desistiuCC2014 = desistiuCC2014 + 1;
            console.log(desistiuCC2014 + "desistentes CC em 2014");

          } else if ( dadosCC[i].ano_adms == "2015" && dadosCC[i].codg_tipo_sitc_acadmc == "17"){

            desistiuCC2015 = desistiuCC2015 +1;
            console.log(desistiuCC2015 + "desistentes CC em 2015");

          } else if ( dadosCC[i].ano_adms == "2016" && dadosCC[i].codg_tipo_sitc_acadmc == "17"){

            desistiuCC2016 = desistiuCC2016 +1;
            console.log(desistiuCC2016 + "desistentes CC em 2016");

          }

         } 

          $scope.bar_cc = {

            labels : ['2011','2012', '2013', '2014', '2015', '2016'],
            series : ['Numero de alunos que abandonaram o curso'],
          
            data : [
                   [desistiuCC2011, desistiuCC2012, desistiuCC2013, desistiuCC2014, desistiuCC2015, desistiuCC2016]
                  ]
          };

         // cursos.push(dados.tipo);
         // mediaCursos ++;
         // $scope.cursos = cursos;

    }, function errorCallback(res) {
      console.log('deu erro');
    });

  }

  $scope.pegarDadosSI = pegarDadosSI;
  $scope.pegarDadosCC = pegarDadosCC;


 }]);
