
var central = (function(){
  var topics = {};

  return {
    publish: function( topic, args ){
      if( !topics[topic] ){
        return false;
      }          

      subscribers = topics[topic];
      // Pass Message to subscriptors
      for( var i = 0; i < subscribers.length; i++ ){
        subscribers[i].func( args  ); 
      }
            
    },
    subscribe: function( topic, func ) {

      if( !topics[topic]){
        topics[topic] = []
      }

      topics[topic].push({
        func: func
      });

    }
  }

})()

var functionOne = function( data ){
  console.info( "Data : "+ data );
  console.info( "Function One" );
}

central.subscribe( "topicOne", functionOne );

var functionTwo = function( data ){
  console.info( "Data : "+ data );
  console.info( "Function Two");
}

central.subscribe( "topicOne", functionOne );
central.subscribe( "topicTwo", functionOne );

central.publish( "topicOne", "Hey!" );

