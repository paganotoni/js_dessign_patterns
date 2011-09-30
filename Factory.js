
var mean_factory = (function(){
    // Could come form online calc or WS.    
    var bicicle_value = 100 ;
    var car_value = 20000 ;
    var bus_value = 100000 ; 
    
    var mean = function( people, val, name ){
      return {
        passengers: people,
        value: val, 
        identify: function(){
          console.info( "It's a " + name + " you have to pay "+ val );
        }
      }
    }
        
   return{
    build_mean: function( passengers, value ){
      
        
      // This could be a more complex job
      // related to instances creation.
      if( passengers <= 1  ){
        return new mean( passengers, bicicle_value, "Bicicle" );
      }else if( passengers <= 5 ){
        return new mean( passengers, car_value, "Car" )
      }else{
        return new mean( passengers, bus_value, "Bus");
      }
    }
  }
})()

console.info( mean_factory.build_mean( 1 ).identify( ) );
console.info( mean_factory.build_mean( 2 ).identify( ) );
console.info( mean_factory.build_mean( 12 ).identify( ) );

