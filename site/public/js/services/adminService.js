app.service('adminService', function() {

    var clients = [{
        name: 'Dan Smith',
        email: 'dan@smith.com',
        code: 'fit4lyfe',
        month2date: 7,
        lastMonth: 32,
        total: 39
    },{
        name: 'Dan Smith',
        email: 'dan@smith.com',
        code: 'fit4lyfe',
        month2date: 7,
        lastMonth: 32,
        total: 39
    },{
        name: 'Dan Smith',
        email: 'dan@smith.com',
        code: 'fit4lyfeandreallyawesomeandlong',
        month2date: 7,
        lastMonth: 32,
        total: 39
    },{
        name: 'Dan Smith',
        email: 'dan@smith.com',
        code: 'fit4lyfe',
        month2date: 7,
        lastMonth: 32,
        total: 39
    }];

    this.clients = function() {
        return clients;
    };

});
