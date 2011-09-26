
var CatsSingleton = ( function(){
  var instantiated;
  var container = [];

  // This contitions can change on time
  var some_startup_condition = true;
  var some_server_condition = false;

  // Some extrange variables.
  var extrange_cat_variable1 = 10009;
  var extrange_cat_variable2 = 10023;
  var extrange_cat_variable3 = 10024;

  var init = function(){
    return{ 
      add_cat_name: function( cat_name ){
        //Some strange calc arround if append or not the cat name.
        container.push( cat_name );
      },
      cat_count: function(){
        return container.length
      }
    }   
  };
  
  return {
    get_instance: function(){
      if( instantiated == undefined ){
        instantiated = init()
      } 
      
      return instantiated;
    }
  }
})()
