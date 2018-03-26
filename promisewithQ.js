var $q = require('q');

function async2(value) {
    var deferred = $q.defer();
    if (value === 0) {
        deferred.resolve("Accepted as the value is equivalent to the future");
    }

    deferred.reject('Rejected for demonstration');
    return deferred.promise;
}

var asyncPromise = async2(0);

asyncPromise.then(function(resolveData) {
    console.log("Resolved:", resolveData);
}, function(rejectData) {
    console.log("Rejected:", rejectData);
});
