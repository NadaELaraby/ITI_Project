var customercontroller=function ($scope){
		$scope.customers = [{
            name: "koke",
            id: 1,
            city: "madride",
            Orders: [
                {
                    id: 1,
                    product: "milk",
                    q: 3,
                    unitprice: 7.5

                },
                {
                    id: 2,
                    product: "rice",
                    q: 1,
                    unitprice: 10

                }
            ]

        },
        {
            name: "nine",
            id: 2,
            city: "milano",
            Orders: [
                {
                    id: 3,
                    product: "pride",
                    q: 2,
                    unitprice: 10

                },
                {
                    id: 1,
                    product: "milk",
                    q: 1,
                    unitprice: 7.5

                }
            ]

        }];
         


}
angular.module("myapp").controller("customercontroller",customercontroller);