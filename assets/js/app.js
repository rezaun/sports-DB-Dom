const allPlayers = () =>{
    document.getElementById('playerContainer').innerHTML = '';
    document.getElementById('spinner').style.display='block';
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
     fetch(url)
    .then(res => res.json())
    .then(data =>showPlayDetails(data.player));
    
}

const showPlayDetails = (players) => {
    const container = document.getElementById('playerContainer');
    if(players){
        document.getElementById('spinner').style.display='none';
    }
    for(const player of players){
        //console.log(player);
    const div = document.createElement('div');
    div.classList.add('col-md-12');
    div.classList.add('py-4');
    div.innerHTML = `
    <div class="card p-4">
        <div class="pro-pic">
            <img class="w-25" src="${player.strThumb}" alt="">
        </div>
        <h2>Name: ${player.strPlayer}</h2>
        <h5>Country: ${player.strNationality}</h5>
        <p>Description:</p>
        <div class="allButton">
            <button class="btn btn-danger">Delete</button>
            <button onclick="details(${player.idPlayer})" class="btn btn-success">Details</button>
        </div>        
    </div>    
    `;
    container.appendChild(div);  
    }
}


const details = (info) =>{
    const url =`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`;
     fetch (url)
        .then(res => res.json())
        .then(data =>setDetails(data.players[0]));
}

const setDetails = (info) =>{
if(info.strGender == "Male"){
    document.getElementById('male').style.display = 'block';
    
}else{
    document.getElementById('female').style.display = 'block';
}

    const detailsContaier = document.getElementById('details-contaier').innerHTML = `
    <img src="${info.strThumb}" alt />
    <h1>${info.strPlayer}</h1>
    `;
}