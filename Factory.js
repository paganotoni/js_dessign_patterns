


var mean = function( people, val, name ){
  return {
    passengers: people,
    value: val, 
    identify: function(){
      console.info( "It's a " + name );
    }
  }
}


var mean_factory = (function(){

  return{
    build_mean: function( passengers, value ){
      // This could be a more complex job
      // related to instances creation.
      if( passengers <= 1 && value <= 200 ){
        return new mean( passengers, value, "Bicicle" );
      }else if( passengers <= 5 && value <= 3000 ){
        return new mean( passengers, value, "Car" )
      }else{
        return new mean( passengers, value, "Bus");
      }
    }
  }
})()

console.info( mean_Factory.build_mean( 1, 100 ).identify( ) );


