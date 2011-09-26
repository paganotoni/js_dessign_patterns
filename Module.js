
var ConfigurationHolder = function(){

  var pending_users_to_add = 0;
  var allowed_users = [ 'root', 'other', 'this' ];
  
  var add_user = function ( username ){
    if( pending_users_to_add > 0 ){
      allowed_users.push( username );
      pending_users_to_add--;
    }else{
      console.info( "Sorry You can not add more users" )
    }
  }

  return {
    try_to_add_user: function( username ){
      add_user( username );
    }
  }

} 

