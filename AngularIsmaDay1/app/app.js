angular.module('bookingmodule', ['ngRoute'])

//************************controllers*********************

//**********************moviecontr********************
function moviecontr($scope, moviedata) {

    $scope.title = "movies controller";
    $scope.movies = moviedata.getmovies();
}

angular.module('bookingmodule').controller('moviecontr', moviecontr);

//***********************selectcntrl********************
function selectcntrl($scope, $routeParams, moviedata) {

        $scope.movieId = $routeParams.movieid;
        $scope.movies = moviedata.getmovies();
        $scope.mydetails;
        $scope.places = [];
        $scope.getdetails = function (id) {

            for (i = 0; i < $scope.movies.length; i++) {
                if ($scope.movies[i].id == id) {
                    
                    //for return data to the controller
                    $scope.mydetails = $scope.movies[i].more
                }
            }
        }
        $scope.getdetails($scope.movieId);
        $scope.places = $scope.mydetails.places;

    }

angular.module('bookingmodule').controller("selectcntrl", selectcntrl);


//*******************************bookingcntl****************
    function bookingcntl($scope,$routeParams) {
        $scope.title = "about controller";
        $scope.seats = $routeParams.seats;

        }
    angular.module('bookingmodule').controller("bookingcntl", bookingcntl);




//***********************routing*******************
angular.module('bookingmodule').config(function ($routeProvider) {



    $routeProvider.when('/', {
        controller: 'moviecontr',
        templateUrl: 'view/movies.html'
    })


    //*************************routeParameter************

        $routeProvider.when('/select/:movieid', {
            controller: 'selectcntrl',
            templateUrl: 'view/selected.html'
        })
    //******************* for booking seats*******************
        $routeProvider.when('/booking/:seats', {
                    controller: 'bookingcntl',
                    templateUrl: 'view/booking.html'
        })
    //*********************for fill the form************
        $routeProvider.when('/form', {
           
            templateUrl: 'view/form.html'
        })
    //*********************for print************
        $routeProvider.when('/print', {

            templateUrl: 'view/print.html'
        })
    //******************otherwisePages***************
   // $routeProvider.otherwise({ redirectTo: '/' })


});
//function aboutcntl($scope) {
//    $scope.title = "about controller";

//}
//angular.module('bookingmodule').controller("aboutcntl", aboutcntl);


//function orderscntrl($scope, $routeParams, moviedata) {

//    $scope.customerid = $routeParams.custid;
//    $scope.customers = moviedata.getcustomers();
//    $scope.myorders = [];
//    $scope.getorders = function (id) {

//        for (i = 0; i < $scope.customers.length; i++) {
//            if ($scope.customers[i].id == id) {

//                $scope.myorders = $scope.customers[i].orders
//            }
//        }
//    }
//    $scope.getorders($scope.customerid);

//}

//angular.module('bookingmodule').controller("orderscntrl", orderscntrl);








//*********************factory*********************
angular.module('bookingmodule').factory('moviedata', function () {

    var factory = {};
    var movies = [
      {
          id: 1,
          src: "imgs/1.jpg",
          Name: "War for the Planet of the Apes",
          duration: "3hr",
          rating: "****",
          type: "action",
          more: {
              src: "imgs/1.jpg",
              Name: "War for the Planet of the Apes",
              duration: "3hr",
              rating: "****",
              actors: " Andy Serkis  Woody Harrelson  Steve Zahn",
              description: "Caesar and his fellow apes go into a deadly conflict with the humans led by a deadly Colonel",
              cairo1: "0",
              cairo2: "98",
              cairo3: "102",

              alex1: "120",
              alex2: "90",
              alex3: "130",

              portsaid1: "70",
              portsaid2: "60",
              portsaid3: "105"
          }
                         
      },
      {
          id: 2,
          src: "imgs/2.jpg",
          Name: "American Made",
          duration: "3hr",
          rating: "***",
          type: "action",
          more: {
              src: "imgs/2.jpg",
              Name: "American Made",
              duration: "3hr",
              rating: "***",
              actors: " Tom Cruise  Domhnall Gleeson  Jesse Plemons ",
              description: "In the 80s, a pilot joins the CIA as a drug runner in the South.",
              cairo1: "103",
              cairo2: "96",
              cairo3: "78",

              alex1: "130",
              alex2: "100",
              alex3: "89",

              portsaid1: "70",
              portsaid2: "0",
              portsaid3: "0"
              //places:[100,200,50]

          }

      },
      {
          id: 3,
          src: "imgs/3.jpg",
          Name: "2:22",
          duration: "2hr",
          rating: "**",
          type: " Thriller",
          more: {
              src: "imgs/3.jpg",
              Name: "2:22",
              duration: "2hr",
              actors: " Teresa Palmer  Michiel Huisman  Sam Reid ",
              description: "A guy’s life is out of control after the same horrible events happen repeatedly day after day",
              cairo1: "0",
              cairo2: "100",
              cairo3: "104",

              alex1: "94",
              alex2: "89",
              alex3: "120",

              portsaid1: "120",
              portsaid2: "59",
              portsaid3: "0"
          }

      },
        {
          id: 4,
          src: "imgs/4.jpg",
          Name: "Spider-Man",
          duration: "3hr",
          rating: "***",
          type: "action",
          more: {
              src: "imgs/4.jpg",
              Name: "Spider-Man",
              duration: "3hr",
              rating: "***",
              actors: "Robert Downey Jr.  Marisa Tomei  Tom Holland",
              description: "Following the events of Captain America: Civil War, Peter Parker returns to his normal life but when The Vulture",
              cairo1: "0",
              cairo2: "100",
              cairo3: "79",

              alex1: "104",
              alex2: "60",
              alex3: "75",

              portsaid1: "0",
              portsaid2: "0",
              portsaid3: "0"
          }

        },
        {
            id: 5,
            src: "imgs/5.jpg",
            Name: "Inhumans",
            duration: "3hr",
            rating: "***",
            type: "action",
            more: {
                src: "imgs/5.jpg",
                Name: "Inhumans",
                duration: "3hr",
                rating: "***",
                actors: " Eme Ikwuakor  Mike Moh  Sonya Balmores ",
                description: "A group of isolated people with supernatural powers unite to defend themselves.",
                cairo1: "0",
                cairo2: "100",
                cairo3: "85",

                alex1: "100",
                alex2: "95",
                alex3: "0",

                portsaid1: "75",
                portsaid2: "60",
                portsaid3: "0"
            }
                         
        },
      
         {
             id: 6,
             Name: "Home Again",
             duration: "3hr",
             rating: "*",
             type: "Romance",
             src: "imgs/6.jpg",
             more: {
                 Name: "Home Again",
                 duration: "3hr",
                 rating: "*",
                 type: "Romance",
                 src: "imgs/6.jpg",
                 actors: " Reese Witherspoon  Lake Bell ",
                 description: "When Alice gets divorced, she takes her children and moves to LA. ",
                 cairo1: "0",
                 cairo2: "100",
                 cairo3: "104",

                 alex1: "94",
                 alex2: "89",
                 alex3: "120",

                 portsaid1: "120",
                 portsaid2: "59",
                 portsaid3: "0"
             }
         },
          {
              id: 7,
              src: "imgs/7.jpg",
              Name: "6 Days",
              duration: "2hr",
              rating: "***",
              type: "action",
              more: {
                  src: "imgs/7.jpg",
                  Name: "6 Days",
                  duration: "2hr",
                  rating: "***",
                  actors: "Mark Strong  Abbie Cornish  Jamie Bell ",
                  description: "In April 1980",
                  cairo1: "103",
                  cairo2: "96",
                  cairo3: "78",

                  alex1: "130",
                  alex2: "100",
                  alex3: "89",

                  portsaid1: "70",
                  portsaid2: "0",
                  portsaid3: "0"
              }

          },
           {
               id: 8,
               src: "imgs/25.jpg",
               Name: "Blind",
               duration: "2hr",
               rating: "**",
               type: " Romance",
               more: {
                   ssrc: "imgs/25.jpg",
                   Name: "Blind",
                   duration: "2hr",
                   rating: "**",
                   actors: "  Alec Baldwin ",
                   description: "Five years after losing his wife and his sight due to a car accident",
                   cairo1: "0",
                   cairo2: "100",
                   cairo3: "104",

                   alex1: "94",
                   alex2: "89",
                   alex3: "120",

                   portsaid1: "120",
                   portsaid2: "59",
                   portsaid3: "0"
               }

           },
        {
            id: 9,
            src: "imgs/77.jpg",
            Name: "The Monster",
            duration: "3hr",
            rating: "***",
            type: " Horror",
            more: {
                src: "imgs/77.jpg",
                Name: "The Monster",
                duration: "3hr",
                rating: "***",
                actors: " Aaron Douglas ",
                description: "Kathy, an alcoholic and a heavy smoker, is the mother of Lizzy",
                cairo1: "0",
                cairo2: "100",
                cairo3: "79",

                alex1: "104",
                alex2: "60",
                alex3: "75",

                portsaid1: "0",
                portsaid2: "0",
                portsaid3: "0"
            }

        },
          {
              id: 8,
              src: "imgs/88.jpg",
              Name: "The Beguiled",
              duration: "2hr",
              rating: "***",
              type: "Drama",
              more: {
                  src: "imgs/88.jpg",
                  Name: "The Beguiled",
                  duration: "2hr",
                  rating: "***",
                  actors: "Colin Farrell  ",
                  description: "During the Civil war a group of girls find a wounded Union soldier",
                  cairo1: "103",
                  cairo2: "96",
                  cairo3: "78",

                  alex1: "130",
                  alex2: "100",
                  alex3: "89",

                  portsaid1: "70",
                  portsaid2: "0",
                  portsaid3: "0"
              }

          }
                              
    
                              

     
    ];
    factory.getmovies = function () {
        return movies;
    }
    return factory;
})