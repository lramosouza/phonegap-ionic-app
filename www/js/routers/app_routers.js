(function(){
	"use strict";
	angular.module("myApp").config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/menu/home");

		$stateProvider

		.state("menu", {
			url:"/menu",
			templateUrl:"views/menu.html",
			abstract: true,
			controller: "initCtrl"
		})
		
		.state("meuPerfil", {
			url:"/meuPerfil",
			templateUrl:"views/Meu Perfil.html",
			abstract: true,
			controller: "initCtrl"
		})
		
		
		.state("menu.home", {
			url:"/home",
			views:{
				'menuContent':{
					templateUrl:"views/home.html"
				}
			}
		})
		
		.state("menu.pesquisa", {
			url:"/pesquisa",
			views:{
				'menuContent':{
					templateUrl:"views/pesquisa.html"
				}
			}
		})
		
		.state("menu.meusservicos", {
			url:"/meusservicos",
			views:{
				'menuContent':{
					templateUrl:"views/meusservicos.html"
				}
			}
		})
		
		.state("menu.login", {
			url:"/login",
			views:{
				'menuContent':{
					templateUrl:"views/login.html",
					controller: "initLogin"
				}
			}
		})

		.state("menu.perfil", {
			url:"/perfil",
			views:{
				'menuContent':{
					templateUrl:"views/perfil.html",
				}
			}
		})
		.state("menu.ajuda", {
			url:"/ajuda",
			views:{
				'menuContent':{
					templateUrl:"views/ajuda.html",
				}
			}
		})
		
		.state("menu.categoria", {
			url:"/categoria",
			views:{
				'menuContent':{
					templateUrl:"views/categoria.html",
				}
			}
		})

		.state("menu.home.cadastro", {
			url:"/cadastro",
			templateUrl:"views/cadastro.html"

		});
		
		

	});
})();
