(function() {
	"use strict";

	angular.module("myApp").controller("initCtrl", function($scope, Data, $ionicModal, $location, DBLocal, DBLocalLoginDeUsuario,$ionicScrollDelegate){
		$scope.home = "Contatos";
		$scope.perfil = "Perfil";
		$scope.contatos = [];
		$scope.servicos = [];
		$scope.myswipe = true;
		$scope.paginacao = true;

		$scope.loadMore = function() {
			var  params = {
				counter: $scope.contatos.length,
				token:"1f3d2gs3f2fg3as2fdg3re2t1we46er45"
			};
			Data.getData(params).success(function(data) {
				if(data.length != 0){
					angular.forEach(data, function(result) {
						$scope.contatos.push(result);
					});
					$scope.paginacao = true;
				}else{
					$scope.paginacao = false;
				}
				$scope.$broadcast('scroll.infiniteScrollComplete');
			});
		};
		
		
		
		// INSERINDO DADOS LOCALMENTE
		// DBLocal.localdb();

	// 	var nome = "Sergio";
	// 	var email = "joao@email.com";
	// 	var senha = "654321";

		// DBLocal.db.transaction(function(res) {
		// 	res.executeSql("INSERT INTO USER(nome, email, senha) VALUES(?,?,?);", [nome, email, senha]);
		// });

		//RECUPERANDO DADO LOCAL
		// DBLocal.db.transaction(function(res) {
		// 	var q = "SELECT * FROM USER";
		// 	res.executeSql(q, null, function(i, data) {
		// 		$scope.nome = "Olá " + data.rows.item(1).nome;
		// 	});
		// });

	// 	DBLocal.db.transaction(function(res) {
	// 		res.executeSql("DELETE FROM USER WHERE nome = ?;",[nome]);
	// 	});


		//VERIFICAÇÃO DE CREDENCIAL DELOGIN DE USUARIO
// 		DBLocalLoginDeUsuario.initLogin();

// 		DBLocalLoginDeUsuario.db.transaction(function(res) {
	// 		var q = "SELECT * FROM LOGINUSUARIO";
	// 		res.executeSql(q, null, function(i, data) {
	// 			alert("Olá " + data.rows.item(i).nome);
	// 		});
	// 	});
		

		//BANCO DE DADOS ONLINE
		var getData = function(){
			var  params = {
				counter:0,
				token:"1f3d2gs3f2fg3as2fdg3re2t1we46er45"
			};
		Data.getData(params).success(function(data){
				$scope.contatos = data;

			}).error(function(data){
				console.log(data? data : "Não foi possivel acessar o servidor");
			});
		};
		
		
		$ionicModal.fromTemplateUrl('views/cadastro.html',{
			scope: $scope,
    			animation: 'slide-in-up'

		}).then(function(modal) {
		    $scope.modal = modal;
		  });
		 $scope.abreModal = function(){
		 	$scope.modal.show();
		 };
		$scope.fechaModal = function(){
		 	$scope.modal.hide();
		 }; 
		$scope.buscarPorCategoria = function(){
			alert("FUNFANDO");
		}
		
		//ENVIANDO DADOS
		$scope.cadastroUsuario = function(cadastro) {
			Data.setData(cadastro).success(function(data) {
				alert(data);
				$scope.modal.hide();
				getData();
			}).error(function(data) {
				alert(data);
			});

			console.log(cadastro);
		};
		
		//ENVIANDO DADOS
		$scope.cadastroServicos = function(servico) {
			Data.setData(servico).success(function(data) {
				alert(data);
				$scope.modal.hide();
				getDataServicos();
			}).error(function(data) {
				alert(data);
			});

			console.log(servico);
		};

		//Denunciar Dados
		$scope.denunciar = function(contato) {
			console.log(contato.id);
			//CONFIRMANDO A OPERAÇÃO
			navigator.notification.confirm(
				"Tem certeza que deseja denunciar este serviço?",
				denunciarContato,
				"Atenção",
				["Denunciar", "Cancelar"]
			);
 
			//CALLBACK
			function denunciarContato(buttonIndex) {

				if(buttonIndex === 1){
					Data.delData(contato.id).success(function(data) {
						navigator.notification.alert(data?data:"Não foi possivel denunciar este serviço", null, "Menssagem", "OK");
						getData();
						  $ionicScrollDelegate.scrollTop();
					}).error(function(data) {
						navigator.notification.alert("Não foi possivel denunciar este serviço, tente novamente!", null, "Menssagem", "OK");
					});
				};
			};
		}; 
		
		//Remover Dados
		$scope.apagar = function(contato) {
			console.log(contato.id);
			//CONFIRMANDO A OPERAÇÃO
			navigator.notification.confirm(
				"Tem certeza que deseja remover este serviço?",
				denunciarContato,
				"Atenção",
				["Denunciar", "Cancelar"]
			);
 
			//CALLBACK
			function denunciarContato(buttonIndex) {

				if(buttonIndex === 1){
					Data.delData(contato.id).success(function(data) {
						navigator.notification.alert(data?data:"Não foi possivel remover este serviço", null, "Menssagem", "OK");
						getDataServicos();
						  $ionicScrollDelegate.scrollTop();
					}).error(function(data) {
						navigator.notification.alert("Não foi possivel remover este serviço, tente novamente!", null, "Menssagem", "OK");
					});
				};
			};
		}; 

		// IMPRIMINDO NO PERFIL
		$scope.perfilUsuario = function(id) {
			$scope.usuarioPerfil = $scope.contatos.filter(function(element) {
				return element.id == id;
			});
			console.log($scope.usuarioPerfil);
			$location.path("/menu/perfil");
		};
		
		var getDataCateg  = function(){
		var params = {
				counter:0,
				token:"1f3d2gs3f2fg3as2fdg3re2t1we46er45"
			};
			Data.getDataCateg(params).success(function(data){
				$scope.categorias = data;
			}).error(function(data){
				console.log(data? data : "Não foi possivel acessar o servidor");
			});
		};
		
		getDataCateg();
	});
})();