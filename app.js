const allPlayers = () => {
    document.getElementById('player-container').innerHTML = '';
    document.getElementById('spinner').style.display = 'block';


    const searchvalue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchvalue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetail(data.player))

}

    const showPlayerDetail = (players) => {
        if (players) {
            document.getElementById('spinner').style.display = 'none';
        }
        else{
            document.getElementById('spinner').style.display = 'block';
        }
    for (const player of players) {
        const parent = document.getElementById('player-container');
        const div = document.createElement('div');
        div.innerHTML = `<div class="card border p-5">
                        <div class="pro-pic">
                            <img class="w-50" src="${player.strThumb}" alt="">
                        </div>
                            <h2>Name:${player.strPlayer}</h2>
                            <h5>Country:${player.strNationality}</h5>
                            <p></p>
                        <div class="allbutton">
                            <button onclick="delet()" class="btn btn-danger" >Delet</button>
                            <button onclick="details('${player.idPlayer}')" class="btn btn-success" >Details</button>
                        </div>
                    </div>
                    `;
        parent.appendChild(div);
    }
  
}

const details = (info) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.players[0]));
}


const setDetails = (info) => {
    // if (info.strGender == 'male') {
    //     document.getElementById('male').style.display = 'block';
    //     document.getElementById('fmale').style.display = 'none';
    // }
    // else {
    //     document.getElementById('male').style.display = 'none';
    //     document.getElementById('fmale').style.display = ' block';
    // }
    document.getElementById('details-container').innerHTML = `
        <div>
            <div class="pro-pic">
                <img class="w-50" src="${info.strThumb}" alt="">
            </div>
                <h1>Name:${info.strPlayer}</h1>
            </div>
            <div>
                <h2>Details: ${info.strDescriptionEN} </h2>
            </div>
            `;
}
