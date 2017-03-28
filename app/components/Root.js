import React from 'react';
import Signup from 'Signup';
import Signin from 'Signin';
import Topbar from 'Topbar';
import Explore from 'Explore';
import Playlists from 'Playlists';
import Player from 'Player';


export default function Root() {
  return (
   <div>
     <Signup/>
     <Signin/>

     <Topbar/>

     <Explore/>
     <Playlists/>

     <Player/>
   </div>
  );
}
