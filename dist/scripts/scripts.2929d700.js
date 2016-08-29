"use strict";angular.module("fdexApp",["ngTouch","ngRoute","ngSanitize"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/detail/:id",{templateUrl:"views/realtydetail.html",controller:"RealtydetailCtrl",controllerAs:"Realtydetail"}).otherwise({redirectTo:"/"})}]),angular.module("fdexApp").controller("MainCtrl",["$scope","realtyApiFactory",function(a,b){a.results=[];var c=function(){b.getRealties().then(function(b){a.results=b.data},function(a){})};a.addContact=function(d){b.sendRealty(d).then(function(b){delete a.realty,a.realtyForm.$setPristine(),$("#myModal").modal("hide"),c()},function(){})},c()}]),angular.module("fdexApp").service("realtyApiFactory",["$http",function(a){return{getRealties:function(){return a.get("https://boiling-mountain-16510.herokuapp.com/api/realty")},getRealty:function(b){return a.get("https://boiling-mountain-16510.herokuapp.com/api/realty/"+b)},sendRealty:function(b){return a.post("https://boiling-mountain-16510.herokuapp.com/api/realty",b)}}}]),angular.module("fdexApp").controller("RealtydetailCtrl",["$scope","$routeParams","realtyApiFactory",function(a,b,c){c.getRealty(b.id).then(function(b){a.result=b.data,a.description=b.data.description},function(a){})}]),angular.module("fdexApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<!--<h1 class="text-center main-title">Imóveis perto de você</h1>--> <div class="col-xs-12"> <div class="row"> <div class="realties col-xs-12 col-sm-6 col-md-4" ng-repeat="result in results"> <div class="thumbnail"> <div class="item {{result.id}}"> <a href="#/detail/{{result.id}}"> <div class="thumb-image"> <img ng-src="{{result.image[0].url}}" alt="{{desc}}" class="thumb-image img-responsive"> <h3 class="price"><span class="label label-info">R${{result.value}}</span></h3> </div> <div class="text-center texts"> <h3>{{result.name}}</h3> <p>{{result.place[0].address}}</p> </div> </a> </div> </div> </div> </div> </div> <div id="myModal" class="modal fade" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">Adicionar um imóvel</h4> </div> <div class="modal-body"> <form name="realtyForm"> <div class="form-group"> <input class="form-control" ng-model="realty.name" placeholder="Nome do Imóvel"> </div> <div class="form-group"> <textarea class="form-control" ng-model="realty.description" placeholder="Descrição"></textarea> </div> <div class="form-group"> <select class="form-control" ng-model="realty.type"> <option value="">Selecione um tipo de casa</option> <option ng-model="realty.type" value="House">Casa</option> <option ng-model="realty.type" value="Appartment">Apartamento</option> </select> </div> <div class="form-group"> <input class="form-control" ng-model="realty.image.url" placeholder="Url da Imagem"> </div> <div class="form-group"> <input class="form-control" ng-model="realty.image.desc" placeholder="Descrição da Imagem"> </div> <div class="form-group"> <input class="form-control" ng-model="realty.value" placeholder="Valor"> </div> <div class="form-group"> <input class="form-control" ng-model="realty.place.address" placeholder="Endereço"> </div> <div class="form-group"> <input class="form-control" ng-model="realty.contact" placeholder="Contato"> </div> </form> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button> <button type="button" class="btn btn-primary" ng-click="addContact(realty);">Adicionar</button> </div> </div><!-- /.modal-content --> </div><!-- /.modal-dialog --> </div><!-- /.modal -->'),a.put("views/realtydetail.html",'<div class="jumbotron user-detail-page"> <div class="row"> <div class="col-xs-12"> <div class="col-sm-8"> <img ng-src="{{result.image[0].url}}" alt="{{desc}}" class="img-responsive">  </div> <div class="col-sm-4"> <h2>{{result.name}}</h2> <h3 class="price"><span class="label label-info">R${{result.value}}</span></h3> <p>{{result.place[0].address}}</p> <div class="description"> <p ng-bind-html="description"></p> </div> <p>Telefone: <span class="label label-default">{{result.contact}}</span></p> </div> </div> </div> </div>')}]);