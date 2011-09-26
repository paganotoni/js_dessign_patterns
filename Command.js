
var UserManager = {
  requestInfo: 
    function( user ){
      // Could be determined 
      console.info( user["name"] );            
    },
  deleteComment:
    function( user ){
      console.info( "Deleting "+user["name"]+" comment" );
    },
  pingUser: 
    function( user ){
      console.info( "Pinging "+user["name"] );
    }
}

UserManager.execute = function(command){
  return UserManager[command.request](command.user);
};

UserManager.execute( { request: "pingUser", user: user } )
