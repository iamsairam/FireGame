function startGame(){
    let player;
    let win1;
    let win2;
    let player1_Health;
    let player2_Health;
    let round_One = parseInt(document.getElementById('roundNo-1').innerHTML);
    let round_Two = parseInt(document.getElementById('roundNo-2').innerHTML);
    let result = document.getElementById("result").innerHTML+"<br/>";
    let final_count = document.querySelectorAll('#result .final-result').length;
    const score1 = Math.floor((Math.random() * 5) + 1);
    const score2 = Math.floor((Math.random() * 5) + 1);
    document.getElementById('currentPlayer').innerHTML=`&nbsp;Player 1 score is ${score1}&nbsp;<br />
    &nbsp;Player 2 score is ${score2}&nbsp;`;
    document.getElementById('Player1-Score').innerHTML=score1;
    document.getElementById('Player2-Score').innerHTML=score2;
    win1= localStorage.getItem('win1');
    win2= localStorage.getItem('win2');
    player1_Health= localStorage.getItem('health1');
    player2_Health= localStorage.getItem('health2');
    
    switch (win1) {
      case  null:
      if(score1 > score2){
       win1 = 1;
       localStorage.setItem('win1',win1);
       document.getElementById('Player1-wons').innerHTML=win1;
       //reducing health
       player2_Health = parseInt(document.getElementById('Player2-Health').innerText);
       player2_Health = player2_Health-score1;
       localStorage.setItem('health2',player2_Health);
       document.getElementById('Player2-Health').innerHTML=player2_Health;
       }
        break;
          case  'undefined':
      if(score1 > score2){
      win1 = 1;
       localStorage.setItem('win1',win1);
       document.getElementById('Player1-wons').innerHTML=win1;
       alert(document.getElementById('Player2-Health').innerText);
       player2_Health = parseInt(document.getElementById('Player1-Health').innerText);
       player2_Health=player2_Health-score1;
       localStorage.setItem('health2',player2_Health);
       document.getElementById('Player2-Health').innerHTML=player2_Health;
       }
       break;
    default:
        win1=parseInt(win1);
      if(score1>score2){
      win1 += 1;
       localStorage.setItem('win1',win1);
       document.getElementById('Player1-wons').innerHTML=win1;
       player2_Health=player2_Health-score1;
       localStorage.setItem('health2',player2_Health);
       document.getElementById('Player2-Health').innerHTML=player2_Health;
       }else{
       localStorage.setItem('win1',win1);
       document.getElementById('Player1-wons').innerHTML=win1;
       }
         break;     
    }
    
    switch (win2) {
        case  null:
      if(score1 < score2){
      win2 = 1;
      localStorage.setItem('win2',win2);
      document.getElementById('Player2-wons').innerHTML=win2;
       player1_Health = player1_Health = parseInt(document.getElementById('Player1-Health').innerText);
       player1_Health=player1_Health-score2;
       localStorage.setItem('health1',player1_Health);
       document.getElementById('Player1-Health').innerHTML=player1_Health;
       }
        break;
          case  'undefined':
      if(score1 < score2){
      win2 = 1;
       localStorage.setItem('win2',win2);
       document.getElementById('Player2-wons').innerHTML=win2;
       player1_Health =player1_Health = parseInt(document.getElementById('Player1-Health').innerText);
       player1_Health=player1_Health-score2;
       localStorage.setItem('health1',player1_Health);
       document.getElementById('Player1-Health').innerHTML=player1_Health;
       }
       break;
    default:
        win2 = parseInt(win2);
      if(score1 < score2){
       win2 += 1;
       localStorage.setItem('win2',win2);
       document.getElementById('Player2-wons').innerHTML=win2;
       player1_Health=player1_Health-score2;
       localStorage.setItem('health1',player1_Health);
       document.getElementById('Player1-Health').innerHTML=player1_Health;
      }else{
    localStorage.setItem('win2',win2);
    document.getElementById('Player2-wons').innerHTML=win2;
      }
         break;     
    }
    
    if(win1 >= 3){
    document.getElementById('currentPlayer').innerHTML=`<p style="font-family:cursive;padding:5px;background:#1cc06d"><u>Previous Round Result:</u><br/><b><i> Player1 Won the match </i></b><br/>Player1 No.of Wins:${win1}<br/>Player1 No.of Wins:${win2}</p>`;
    document.getElementById("result").innerHTML=`<span class="player1-result final-result">${result} Player1 won the match in Round No. ${round_One}</span>`
    localStorage.removeItem("win1");
    localStorage.removeItem("win2");
    if(round_One == round_Two){
      document.getElementById('roundNo-1').innerText=round_One+1;
      document.getElementById('roundNo-2').innerText=round_Two+1;
    }
    document.getElementById('Player1-Score').innerText = 0;
    document.getElementById('Player2-Score').innerText = 0;
    document.getElementById("Player1-wons").innerText=0;
    document.getElementById("Player2-wons").innerText=0;
    }else if(win2 >= 3){
    document.getElementById('currentPlayer').innerHTML=`<p style="font-family:cursive;padding:5px;background:#2d3a4b"><u>Previous Round Result:</u><br/><b><i> Player2 Won the match </i></b><br/>Player2 No.of Wins:${win2}<br/>Player1 No.of Wins:${win1}</p>`;
    document.getElementById("result").innerHTML=`<span class="player2-result final-result">${result} Player2 won the match in Round No. ${round_Two}.</span>`
    localStorage.removeItem("win1");
    localStorage.removeItem("win2");
    if(round_One == round_Two){
      document.getElementById('roundNo-1').innerText=round_One+1;
      document.getElementById('roundNo-2').innerText=round_Two+1;
    }
    document.getElementById('Player1-Score').innerText = 0;
    document.getElementById('Player2-Score').innerText = 0;
    document.getElementById("Player1-wons").innerText=0;
    document.getElementById("Player2-wons").innerText=0
    }else{
    // console.log('running match');
    }
    if(final_count == 5){
      alert('This Game is Only for 5 Rounds');
      localStorage.clear();
      location.reload();
    }
    if(parseInt(document.getElementById('Player1-Health').innerText) == 0 || parseInt(document.getElementById('Player2-Health').innerText) == 0){
      alert('Opponent Helth become 0\nGame is Over')
    }
    }