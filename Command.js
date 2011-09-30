var command_stack = []; 

var UserManager = (function(){
    return {
       requestInfo: function( user ){
          // Could be determined 
           console.info( "checking info for : " + user  );            
       },
       followUser: function( user ){
          console.info( "Following "+user+" comment" );
       },
       pingUser: function( user ){
          console.info( "Checking for "+user );
       }
    }
})();


UserManager.execute = function(command ){
  return UserManager[command.request](command["user"]);
};

(function(){
    if( command_stack.length > 0 ){
        command = command_stack.pop();
        UserManager.execute( command );
    }
    setTimeout(arguments.callee, 1000);
})();

command_stack.push( { request: "pingUser", user: "apagano" } );
command_stack.push( { request: "followUser", user: "apaganobeleno" } );
command_stack.push( { request: "followUser", user: "apaganobeleno" } );
command_stack.push( { request: "followUser", user: "apaganobeleno" } );
command_stack.push( { request: "followUser", user: "apaganobeleno" } );
command_stack.push( { request: "followUser", user: "apaganobeleno" } );
command_stack.push( { request: "followUser", user: "apaganobeleno" } );
command_stack.push( { request: "followUser", user: "apaganobeleno" } );
command_stack.push( { request: "requestInfo", user: "apaganobeleno" } );

