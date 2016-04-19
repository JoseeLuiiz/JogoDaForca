angular.module("jogo", []).controller("forca", function($scope) {

  var list = [];
  list[0] = {
      dica: "PINGUIM É UM",
      resposta: "ave"
  };
  list[1] = {
      dica: "EM QUE ESTADO AMERICANO FICA A CIDADE DE MIAMI",
      resposta: "florida"
  };
  list[2] = {
      dica: "LUIZ GONZAGA ERA O REI DE QUÊ",
      resposta: "baiao"
  };
  list[3] = {
      dica: "QUAL É O COLETIVO DE CÃES",
      resposta: "matilha"
  };
  list[4] = {
      dica: "QUAL É CONSIDERADO O MÊS DAS NOIVAS",
      resposta: "maio"
  };

  $scope.err = 0;
  $scope.erro = 0;
  $scope.acabou = 0;
  $scope.msgvit = "Bom Jogo!";
  $scope.palavrasUsadas = "";

  $scope.validacaoImagem = function(){
    if($scope.erro == 0){ return "i00.jpg";}
    if($scope.erro == 1){ return "i01.jpg";}
    if($scope.erro == 2){ return "i02.jpg";}
    if($scope.erro == 3){ return "i03.jpg";}
    if($scope.erro == 4){ return "i04.jpg";}
    if($scope.erro == 5){ return "i05.jpg";}
    if($scope.erro >= 6){return "i06.jpg";}
  }


  $scope.novojogo = function(){
    $scope.erro = 0;
    $scope.msgvit = "Bom Jogo!";
    $scope.palavrasUsadas = "";

    var num = Math.floor((Math.random() * list.length));
    $scope.palavraSortiada = list[num];
    $scope.parcial = new Array($scope.palavraSortiada.resposta.length);
    for (var i = 0; i < $scope.palavraSortiada.resposta.length; i++) {
  	  if($scope.palavraSortiada.resposta[i]==" "){
  		  $scope.parcial[i] = " "
  	  }else{
  		  $scope.parcial[i] = "_"
  	  }
    }
  }

  $scope.letra = function(key) {
    console.log(key);
    $scope.palavrasUsadas = $scope.palavrasUsadas + key + " ";
    for (var i = 0; i < $scope.palavraSortiada.resposta.length; i++) {
      if ($scope.palavraSortiada.resposta[i] == key) {
        $scope.parcial[i] = key;

      }else{
		  $scope.err ++ ;
	  }

    }
	if($scope.err == $scope.palavraSortiada.resposta.length){
		$scope.erro ++;
		$scope.err = 0;
	}else{
		$scope.err = 0;
	}

	for (var i = 0; i < $scope.palavraSortiada.resposta.length; i++) {
		if($scope.parcial[i] != "_" ){
			$scope.acabou ++;
		}
	}
	if($scope.acabou == $scope.palavraSortiada.resposta.length){
		$scope.msgvit = "Você Ganhou !";
		$scope.acabou = 0;
	}else{
		$scope.acabou = 0;
	}
  if($scope.erro >= 6){
    $scope.msgvit = "Você Perdeu !";
  }

  }





});
