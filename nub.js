var pubnub = require("pubnub")({
//    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : "pub-c-11fe35af-0b36-4d11-88f6-532dd18e2c79",
    subscribe_key : "sub-c-b635a546-70b7-11e5-a5ee-02ee2ddab7fe"
});

/* ---------------------------------------------------------------------------
Publish Messages
--------------------------------------------------------------------------- */
/*var message = { "some" : "data" };
pubnub.publish({ 
    channel   : 'my_channel',
    message   : message,
    callback  : function(e) { console.log( "SUCCESS!", e ); },
    error     : function(e) { console.log( "FAILED! RETRY PUBLISH!", e ); }
});*/

/* ---------------------------------------------------------------------------
Listen for Messages
--------------------------------------------------------------------------- */
pubnub.subscribe({
    channel  : "my_channel",
    callback : function(message) {
        console.log( " > ", message );
    }
});

/* ---------------------------------------------------------------------------
Type Console Message
--------------------------------------------------------------------------- */
/*
var stdin = process.openStdin();
stdin.on( 'data', function(chunk) {
    pubnub.publish({
        channel : "my_channel",
        message : ''+chunk
    });
});*/

 
