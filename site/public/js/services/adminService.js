app.service('adminService', function($q, $http) {

    this.getPromoCodes = function () {
        var dfd = $q.defer();
        
        $http.get('/api/admin/getPromoCodes')
            .then(function (response) {
                var codes = response.data;
                dfd.resolve(codes);
            })
            .catch(function (err) {
                dfd.reject(err);
            })
        
        return dfd.promise;
    }
    
    this.submitPromoCode = function (code) {
        var dfd = $q.defer();
        
        $http.post('/api/admin/addPromoCode', code)
            .then(function (response) {
                var codes = response.data;
                dfd.resolve(codes);
            })
            .catch(function (err) {
                dfd.reject(err);
            })
        
        return dfd.promise;
    }
    
    this.updatePromoCode = function(code) {
        var dfd = $q.defer();
        var id = code._id;
        delete code._id;
        
        $http.post('/api/admin/updatePromoCode/' + id, code)
            .then(function(response) {
                var codes = response.data;
                dfd.resolve(codes);
            })
            .catch(function(err) {
                dfd.reject(err);
            })
        
        return dfd.promise;
        
    }
    
    this.deletePromoCode = function(id) {
        var dfd = $q.defer();
        
        $http.delete('/api/admin/deletePromoCode/' + id)
            .then(function(response) {
                var codes = response.data;
                dfd.resolve(codes);
            })
            .catch(function(err) {
                dfd.reject(err);
            })
        
        return dfd.promise;
    }

});
