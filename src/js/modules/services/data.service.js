var dataConstants = require('../constants/data.constants');

module.exports =
    angular
        .module('data.service', [
            dataConstants.name
        ])
        .service('dataService', dataService);

dataService.$inject = ['$http', '$log', 'SERVICE_URL'];

function dataService($http, $log, SERVICE_URL) {
    "use strict";

    var service = {
        getWorks: getWorks,
        getPage: getPage
    };

    return service;

    function getWorks() {

    }

    function getPage(pageURL) {
        pageURL = pageURL + ".json";

        return $http
            .get(SERVICE_URL + pageURL)
            .then(getPageComplete)
            .catch(getPageFailed);


        function getPageComplete(response) {
            return response.data;
        }

        function getPageFailed(error) {
            $log.error('Get Page: ' + pageURL + ' failed because: ' + error.data);
        }
    }
}


