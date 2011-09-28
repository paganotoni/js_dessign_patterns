var queue = function(){
  var topics = {};

  // Some identity generator
  var token_generator = function(){
    var S4 = function() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }

    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  };


  return {
    publish: function( topic, args ){
      if( !topics[topic] ){
        return false;
      }          

      subscribers = topics[topic];
      // Pass Message to subscriptors
      for( var i = 0; i < subscribers.length; i++ ){
        subscribers[i].func( topic, args  ); 
      }
            
    },
    subscribe: function( topic, func ) {

      if( !topics[topic]){
        topics[topic] = []
      }

      var token = token_generator();

      topics[topic].push({
        token: token,
        func: func
      });
 
      return token;
    }
  }

}

var central = new queue(); 

var testSubscriber = function( topic , data ){
  console.info( topics + ": " + data );
}

queue.subscribe("topicOne", testSubscriber );
queue.publish( "topicOne", "Hey!" );

