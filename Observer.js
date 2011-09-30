
var spreadsheet = (function(){
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

var formula = function( data ){
  console.info( "Formula will be recalculed based on:" + data );
}

var graphics = function( data ){
  console.info( "graplhics are coing to be repainted based on: " + data )
}

spreadsheet.subscribe( "valueChange", formula );
spreadsheet.subscribe( "valueChange", graphics );

spreadsheet.publish( "valueChange", "(this could be real data for procesing)");

