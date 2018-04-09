(function(){
	"use strict";

	angular.module("myApp").value("Config", {

		getUrl: "http://leandrosouzadeveloper.com.br/TCC/"
	});

	angular.module("myApp").service("Data", function($http, Config){
	
		//recuperação de dados
		this.getData = function(params){
			return $http({
				method: "POST",
				url: Config.getUrl + "apiRecupera.php",
				data: params,
				headers : {
				                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				            }
			});
		};
		
		//recuperação de dados categoria
		this.getDataCateg = function(params){
			return $http({
				method: "POST",
				url: Config.getUrl + "apiRecuperaCategoria.php",
				data: params,
				headers : {
				                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				            }
			});
		};
		//recuperação de credencial
		this.loginData = function(credential){
			return $http({
				method: "POST",
				url: Config.getUrl + "apiLogin.php",
				data: credential,
				headers : {
				                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				            }
			});
		};
		//cadastro
		this.setData = function(dados){
			return $http({
				method: "POST",
				url: Config.getUrl + "apiCadastro.php",
				data: dados,
				headers : {
				                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				            }
			});
		};
		
		//pesquisa
		this.setData1 = function(dadosPesquisa){
			return $http({
				method: "POST",
				url: Config.getUrl + "apiPesquisa.php",
				data: dados,
				headers : {
				                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				            }
			});
		};
		this.delData = function(id) {
			return $http ({
				method: "POST",
				url: Config.getUrl + "apiDeleta.php",
				data: id,
				headers : {
				                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				            }
			});
		};
		
		this.denuncia = function(id) {
			return $http ({
				method: "POST",
				url: Config.getUrl + "apiDenuncia.php",
				data: id,
				headers : {
				                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				            }
			});
		};

	});
})();
