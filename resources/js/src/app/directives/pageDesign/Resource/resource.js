var ResourceService = require('services/ResourceService');

Vue.elementDirective('resource', {
    priority: 3000,
    params: [
        'name',
        'route',
        'data',
        'events'
    ],
    bind: function()
    {
        var resource = ResourceService.registerResource(
            this.params.name,
            this.params.route,
            this.params.data
        );

        var events = this.params.events || [];
        for( var i = 0; i < events.length; i++ )
        {
            var event = events[i].split('!');
            var usePayload;
            if( event.length > 1 )
            {
                usePayload = event[1];
            }

            resource.listen( event[0], usePayload );
        }
    }

});

Vue.elementDirective('resource-list', {
    priority: 3000,
    params: [
        'name',
        'route',
        'data',
        'events'
    ],
    bind: function()
    {
        var resource = ResourceService.registerResourceList(
            this.params.name,
            this.params.route,
            this.params.data
        );

        var events = this.params.events || [];
        for( var i = 0; i < events.length; i++ )
        {
            var event = events[i].split('!');
            var usePayload;
            if( event.length > 1 )
            {
                usePayload = event[1];
            }

            resource.listen( event[0], usePayload );
        }
    }
});
