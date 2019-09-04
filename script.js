function createSubArray(){
  let arr = [];
  for(i=0;i<10;i++){
  arr[i] ={
      x:j,
      y:i,
      occupied:'no'
    }
  }
  return arr;
  }
  
  function fillBoard(){
    j = 0;
    let arr1 = [];
    for(let z=0;z<10;z++){
      arr1[z] = createSubArray();
      j=j+1;
    }
    board = arr1;
  }
  fillBoard();
  
  let rover1 = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: [{x:0, y:0}]  
  };
  
  let rover2 = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: [{x:0, y:0}]  
  };
  
  let rover3 = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: [{x:0, y:0}]  
  };
  
  function turnLeft(rover){
    switch(true){
      case rover.direction === 'N':
        rover.direction = 'W';
        break;
      case rover.direction === 'W':
        rover.direction = 'S';
        break;
      case rover.direction === 'S':
        rover.direction = 'E';
        break;
      default:
        rover.direction = 'N';
        break;
    }
    console.log("turnLeft was called!");
  }
  
  function turnRight(rover){
    switch(true){
      case rover.direction === 'N':
        rover.direction = 'E';
        break;
      case rover.direction === 'E':
        rover.direction = 'S';
        break;
      case rover.direction = 'S':
        rover.direction = 'W';
        break;
      default:
        rover.direction = 'N';
        break;
    }
    console.log("turnRight was called!");
  }
  let stop = false;
  
  function moveForward(rover){
    if(rover.x >= 0 && rover.x<10 && rover.y >=0 && rover.y<10){
      let key1 = true;
      direction = rover.direction;
    switch(direction){
      case  'N':
      if(rover.y > 0){
        if(board[rover.x][rover.y-1].occupied ==='no'){
          board[rover.x][rover.y].occupied = 'no'
          rover.y--;
          board[rover.x][rover.y].occupied = 'yes'
        }else{
          console.log('Obstacle detected, rover stopped');
          key1 = false;
          break;
        }}else{
          console.log('Rover out of bounds!');
          key1 = false;
          break;
        }
        break;
      case 'W':
      if(rover.x > 0){
        if(board[rover.x-1][rover.y].occupied ==='no'){
         board[rover.x][rover.y].occupied = 'no'
         rover.x--;
         board[rover.x][rover.y].occupied = 'yes' 
        }else{
          console.log('Obstacle detected, rover stopped');
          key1 = false;
          break;
        }}else{
          console.log('Rover out of bounds!');
          key1 = false;
          break;
        }
        break;
      case 'E':
      if(rover.x < 9){
         if(board[rover.x+1][rover.y].occupied ==='no'){
         board[rover.x][rover.y].occupied = 'no'
         rover.x++;
         board[rover.x][rover.y].occupied = 'yes' 
        }else{
          console.log('Obstacle detected, rover stopped');
          key1 = false;
          break;
        }}else{
          console.log('Rover out of bounds!')
          key1 = false;
          break;
        }
        break;
      case 'S':
      if(rover.y < 9){
          if(board[rover.x][rover.y+1].occupied ==='no'){
          board[rover.x][rover.y].occupied = 'no'
          rover.y++;
          board[rover.x][rover.y].occupied = 'yes'
        }else{
          console.log('Obstacle detected, rover stopped');
          key1= false;
          break;
        }}else{
          console.log('Rover out of bounds!');
          key1 = false;
          break;
        }
        break;
      default:
        console.log('Rover out of bounds!');
        key1 = false;
        break;
        }
     if(key1 === true){
    console.log("moveForward was called")
    let position = {x:rover.x, y:rover.y};
    rover.travelLog.push(position);
     }else{
       stop = true;
     }
    } else{
      console.log(`Rover out of bounds!`);
    }
    
  }
  
  function moveBackward(rover){
    if(rover.x >=0 && rover.x<10 && rover.y >=0 && rover.y<10){
      let key2= true;
      direction = rover.direction;
    switch(direction){
      case 'N':
      if(rover.y < 9){
        if(board[rover.x][rover.y+1].occupied ==='no'){
          board[rover.x][rover.y].occupied = 'no'
          rover.y++;
          board[rover.x][rover.y].occupied = 'yes'
        }else{
          console.log('Obstacle detected, rover stopped');
          key2 = false;
          break;
        }}else{
          console.log('Rover out of bounds!')
          key2 = false;
          break;
        }
        break;
      case 'W':
      if(rover.x < 9){
         if(board[rover.x+1][rover.y].occupied ==='no'){
          board[rover.x][rover.y].occupied = 'no'
          rover.x++;
          board[rover.x][rover.y].occupied = 'yes'
        }else{
          console.log('Obstacle detected, rover stopped');
          key2 = false;
          break;
        }}else{
          console.log('Rover out of bounds!');
          key2 = false;
          break;
        }
        break;
      case 'E':
      if(rover.x > 0){
        if(board[rover.x-1][rover.y].occupied ==='no'){
          board[rover.x][rover.y].occupied = 'no'
          rover.x--;
          board[rover.x][rover.y].occupied = 'yes'
        }else{
          console.log('Obstacle detected, rover stopped');
          key2 = false;
          break;
        }}else{
          console.log('Rover out of bounds!');
          key2 = false;
          break;
        }
        break;
      case 'S':
      if (rover.y > 0){
        if(board[rover.x][rover.y-1].occupied ==='no'){
          board[rover.x][rover.y].occupied = 'no'
          rover.y--;
          board[rover.x][rover.y].occupied = 'yes'
        }else{
          console.log('Obstacle detected, rover stopped');
          key2 = false;
          break;
        }}else{
          console.log('Rover out of bounds!');
          key2 = false;
          break;
        }
        break;
      default:
        console.log('Rover out of bounds!');
        key2 = false;
        break;
    }
     if(key2 === true){
    console.log("moveBackward was called")
    let position = {x:rover.x, y:rover.y};
    rover.travelLog.push(position);
     }else{
       stop = true;
     }
    } else{
      console.log(`Rover out of bounds!`);
    }
    
  }
    
  function commands(rover,commands){
    let key = true;
    let h = 0;
    while(key === true && h<commands.length){
    for(l=0; l<commands.length; l++){
      let check = commands.charAt(l);
      if(check === 'l' || check === 'r' || check === 'b' || check === 'f' ){
        key = true;
        h++;
      } else{
        key = false;
      }
     }
      
    }
    if(key === true){
    for(let k=0; k<commands.length; k++){
      if(stop === true){
        console.log('Rover stopped!');
        break;
      }else{
      let command = commands.charAt(k);
      switch(command){
        case 'f':
          moveForward(rover);
          break;
        case 'l':
          turnLeft(rover);
          break;
        case 'r':
          turnRight(rover);
          break;
        case 'b':
          moveBackward(rover);
        default:  
          break; 
        }
      }
    }
    }else{
      console.log(`Command not valid, Rover's position is x:${rover.x}, y:${rover.y}`);
    }
    console.log(`Rover's travel log is:`) 
    console.log(rover.travelLog); 
  }
  function generateObstacles(obstacles){
    for(i=0; i<obstacles; i++){
      board[Math.floor(Math.random()*10)][Math.floor(Math.random()*10)].occupied = 'yes';
    }
  }
  
  generateObstacles();
  commands();