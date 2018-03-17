 var app=angular.module("myapp",["ngRoute"])
angular.module("myapp").config(function ($routeProvider){
	 
	 $routeProvider.when("/",{
		 controller:"customercontroller",
		 templetUrl:"../views/customerorder.html"
		 
	 })
	 
	 
 });
 
 
 /* angular.module('customermodule').config(function ($routeProvider) {



            $routeProvider.when('/', {
                controller:'custcontr',
                templateUrl:'view/customers.html'
            });*/