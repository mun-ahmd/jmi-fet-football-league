
const participants = {
    'CS': 'Computer Engineering',
    'EC': 'Electronics & Communications Engineering',
    'EE': 'Electrical Engineering',
    'CE': 'Civil Engineering',
    'ME': 'Mechanical Engineering',
    'AS': 'Applied Sciences - Environmental - Aeronautics'
}

const FINAL_DAY = 6;

const fixtures = [
    { day: 1, home: 'ME', away: 'CE', result: '5-0', time: '13:00', goals: [0,1,2,3,4] },  
    { day: 1, home: 'EC', away: 'EE', result: '3-1', time: '14:30', goals: [1099, 9, 10, 11] },  
    { day: 1, home: 'CS', away: 'AS', result: '1-0', time: '16:00', goals: [8] },  
    { day: 2, home: 'CS', away: 'EC', result: '0-0', time: '10:00', goals: [] },  
    { day: 2, home: 'ME', away: 'AS', result: '3-0', time: '11:30', goals: [5, 6, 7] },  
    { day: 2, home: 'CE', away: 'EE', result: '0-2', time: '14:00', goals: [12, 13] },  
    { day: 3, home: 'EE', away: 'AS', result: '1-1', time: '10:00', goals: [14, 15] },  
    { day: 3, home: 'CE', away: 'EC', result: '0-5', time: '14:30', goals: [16, 17, 18, 19, 20] },  
    { day: 3, home: 'CS', away: 'ME', result: '0-0', time: '16:00', goals: [] },  
    { day: 4, home: 'CS', away: 'CE', result: '4-0', time: '10:00', goals: [21, 22, 23, 24] },  
    { day: 4, home: 'EE', away: 'ME', result: '0-0', time: '11:30', goals: [] },  
    { day: 4, home: 'AS', away: 'EC', result: '0-5', time: '13:00', goals: [25, 26, 27, 28, 29] },  
    { day: 5, home: 'EC', away: 'ME', result: '1-1', time: '10:00', goals: [30, 31] },  
    { day: 5, home: 'CS', away: 'EE', result: '3-1', time: '11:30', goals: [32,33,34,35]},  
    { day: 5, home: 'AS', away: 'CE', result: '7-2', time: '13:00', goals: [36,37,38,39,40,41,42,43,44] },  
]

const final_fixture = { 
    day: 6,
    home: 'CS',
    away: 'EC',
    winner: 'EC',
    result: [1,1],
    penalties: [1,2],
    time: '15:30',
    goals: [45, 46]
}

const fixture_descriptions = {
    1 : 'Day 1 - 21st September - Saturday',
    2 : 'Day 2 - 22nd September - Sunday',
    3 : 'Day 3 - 27th September - Friday',
    4 : 'Day 4 - 28th September - Saturday',
    5 : 'Day 5 - 29th September - Sunday',
    6 : 'Final - 6th October - Sunday'
}

const goals = [
    { id: 0, name : 'Ayan', team : 'ME', assist : null },
    { id: 1, name : 'Ansab', team : 'ME', assist : 'Osama' },
    { id: 2, name : 'Ansab', team : 'ME', assist : 'Momodou' },
    { id: 3, name : 'Osama', team : 'ME', assist : 'Momodou' },
    { id: 4, name : 'Rehan', team : 'ME', assist : 'Momodou' },
    { id: 5, name : 'Asjad', team : 'ME', assist : null, penalty: true },
    { id: 6, name : 'Aman', team : 'ME', assist : 'Osama' },
    { id: 7, name : 'Saquib', team : 'ME', assist : 'Asjad' },
    { id: 8, name : 'Hamza', team : 'CS', assist : 'Ameen' },
    { id: 1099, name : 'Ragib (OG)', team : 'EC', assist : null, ownGoal: true },
    { id: 9, name : 'Rehan', team : 'EE', assist : 'Hidayat' },
    { id: 10, name : 'Riaz', team : 'EC', assist : 'Zayan' },
    { id: 11, name : 'Zayan', team : 'EC', assist : 'Danish' },
    { id: 12, name : 'Saad', team : 'EE', assist : 'Rehan' },
    { id: 13, name : 'Tathagat', team : 'EE', assist : 'Salman' },
    { id: 14, name : 'Mehbubul', team : 'AS', assist : 'Aatif' },
    { id: 15, name : 'Hedayat', team : 'EE', assist : 'Iftikhar' },
    { id: 16, name : 'Zia', team : 'EC', assist : 'Nashar' },
    { id: 17, name : 'Ashaiz', team : 'EC', assist : 'Zia' },
    { id: 18, name : 'Zia', team : 'EC', assist : 'Ashaiz' },
    { id: 19, name : 'Zia', team : 'EC', assist : null, penalty: true },
    { id: 20, name : 'Ashaiz', team : 'EC', assist : null },
    { id: 21, name : 'Hammad', team : 'CS', assist : 'Khushal' },
    { id: 22, name : 'Abdullah Ammar', team : 'CS', assist : null },
    { id: 23, name : 'Hammad', team : 'CS', assist : 'Khushal' },
    { id: 24, name : 'Khushal', team : 'CS', assist : 'Abdullah Ammar' },
    { id: 25, name : 'Ashaiz', team : 'EC', assist : 'Nashar' },
    { id: 26, name : 'Zayan', team : 'EC', assist : 'Zia' },
    { id: 27, name : 'Ashaiz', team : 'EC', assist : 'Zia' },
    { id: 28, name : 'Ashaiz', team : 'EC', assist : null, penalty: true },
    { id: 29, name : 'Zia', team : 'EC', assist : 'Imdadul' },
  { id: 30, name: 'Momodou', team: 'ME', assist: 'Osama' },
  { id: 31, name: 'Riaz', team: 'EC', assist: 'Ashaiz' },
  { id: 32, name: 'Rehan', team: 'EE', assist: 'Iftikhar' },
  { id: 33, name: 'Ali', team: 'CS', assist: null, penalty: true },
  { id: 34, name: 'Hammad', team: 'CS', assist: 'Khushal' },
  { id: 35, name: 'Abdullah Ammar', team: 'CS', assist: null },
  { id: 36, name: 'Saim', team: 'AS', assist: null, penalty: true },
  { id: 37, name: 'Aatif', team: 'AS', assist: 'Mehbubal' },
  { id: 38, name: 'Misbah', team: 'AS', assist: 'Aatif' },
  { id: 39, name: 'Fahad', team: 'AS', assist: 'Mehbubul' },
  { id: 40, name: 'Aquib', team: 'CE', assist: 'Abul' },
  { id: 41, name: 'Mehbubul', team: 'AS', assist: null },
  { id: 42, name: 'Saim', team: 'AS', assist: 'Mehbubul' },
  { id: 43, name: 'Aquib', team: 'CE', assist: 'Abul' },
  { id: 44, name: 'Saim', team: 'AS', assist: null },
  { id: 45, name: 'Hamza', team: 'CS', assist: null },
  { id: 46, name: 'Riaz', team: 'EC', assist: null },
]

function getGoalByID(id){
    for (let goal of goals){
        if(goal.id == id){
            return goal;
        }
    }
    console.log(`No goal with id ${id} found!`);
    return null;
}

const topCleanSheets = [
    { name : 'Khushal', team : 'CS', count : 4 },
    { name : 'Kashif', team : 'ME', count : 4 },
    { name : 'Jasim', team : 'EC', count : 3 },
    { name : 'Nauman', team : 'EE', count : 2 },
    { name : 'Suhaib', team : 'CS', count : 1 },
    { name : 'Vasudev', team : 'CS', count : 2 }
]

// Function to display league table
function displayLeagueTable() {
    const tableBody = document.getElementById('table-body');
    
    let teams = []
    Object.entries(participants).forEach( ([pkey, participant]) => {
        let team = {
            position : null,
            name : participant,
            played : 0,
            won : 0,
            drawn : 0,
            lost : 0,
            points : 0,
            goals_for : 0,
            goals_against : 0,
            goal_difference : 0
        }
        for (let fixture of fixtures) {
            if (!fixture.result){
                continue;
            }

            let is_home = fixture.home == pkey;
            let is_away = fixture.away == pkey;

            if(!(is_home || is_away)){
                continue;
            }

            team.played += 1;
            
            let [home_goals, away_goals] = fixture.result.split('-').map(Number)
            
            if (is_home){
                team.goals_for += home_goals;
                team.goals_against += away_goals;
            }
            else{
                team.goals_for += away_goals;
                team.goals_against += home_goals;
            }

            if(home_goals == away_goals){
                team.drawn += 1;
            }
            else if(
                (is_home && (home_goals > away_goals)) ||
                (is_away && (away_goals > home_goals))
            ){
                team.won += 1;
            }
            else{
                team.lost += 1;
            }
        }
        team.points = (team.won * 3) + team.drawn;
        team.goal_difference = team.goals_for - team.goals_against
        teams.push(team)
    })

    teams.sort((a,b) => {
        if (a.points != b.points) {
            return b.points - a.points;
        }
        if (a.goal_difference != b.goal_difference) {
            return b.goal_difference - a.goal_difference;
        }
        return b.goals_for - a.goals_for;
    })

    teams.forEach((team, position) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${1+position}</td>
            <td>${team.name}</td>
            <td>${team.played}</td>
            <td>${team.won}</td>
            <td>${team.drawn}</td>
            <td>${team.lost}</td>
            <td>${team.points}</td>
            <td>${team.goal_difference}</td>
            <td>${team.goals_for}</td>
            <td>${team.goals_against}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to display top scorers
function displayTopScorers() {
    const scorersList = document.getElementById('scorers-list');
 
    let topScorers = new Map();
    goals.forEach(({name, team, assist, ownGoal}) => {
        if (name == null || ownGoal != null){
            return;
        }

        let identifier = `${name}-${team}`;
        if(topScorers.has(identifier)){
            let scorer = topScorers.get(identifier);
            scorer.goals += 1;
            topScorers.set(identifier, scorer);
        }
        else{
            topScorers.set(identifier, {name : name, team : team, goals: 1});
        }
    })

    topScorers = Array.from(topScorers.values());
    topScorers.sort((a,b) => {return b.goals - a.goals;})

    topScorers.forEach(scorer => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${scorer.name} (${scorer.team}) <span style="float: right;">${scorer.goals} goals</span>`;
        scorersList.appendChild(listItem);
    });
}

// Function to display top assisters
function displayTopAssisters() {
    const assistersList = document.getElementById('assisters-list');

    let topAssisters = new Map();
    goals.forEach(({name, team, assist}) => {
        if (assist == null){
            return;
        }

        let identifier = `${assist}-${team}`;
        if(topAssisters.has(identifier)){
            let assister = topAssisters.get(identifier);
            assister.assists += 1;
            topAssisters.set(identifier, assister);
        }
        else{
            topAssisters.set(identifier, {name : assist, team : team, assists: 1});
        }
    })

    topAssisters = Array.from(topAssisters.values());
    topAssisters.sort((a,b) => {return b.assists - a.assists;});

    topAssisters.forEach(assister => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${assister.name} (${assister.team}) <span style="float: right;">${assister.assists} assists</span>`;
        assistersList.appendChild(listItem);
    });
}

function displayTopCleanSheets() {
    const cleanSheetsList = document.getElementById('clean-sheets-list');

    topCleanSheets.sort((a,b) => {return b.count - a.count;});

    topCleanSheets.forEach(keeper => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${keeper.name} (${keeper.team}) <span style="float: right;">${keeper.count} clean sheets</span>`;
        cleanSheetsList.appendChild(listItem);
    });
}

// Function to group fixtures by day and display them
function displayFixturesGroupedByDay() {
    const fixturesGrouped = document.getElementById('fixtures-grouped');
    let currentDay = 0;
    
    [...fixtures, final_fixture].forEach(fixture => {
        
        let date = new Date(`1970-01-01T${fixture.time}:00`);
        
        // Check if the date is valid
        if (!isNaN(date.getTime())) {
           fixture.time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) 
            if (fixture.time.length < 8){
                //add leading 0
                fixture.time = '0'.concat(fixture.time);
            }
        }

        let dayHeader = null;
        if (fixture.day !== currentDay) {
            // Create a new day header
            dayHeader = document.createElement('h3');
            dayHeader.textContent = `${fixture_descriptions[fixture.day]}`;
            fixturesGrouped.appendChild(dayHeader);
            currentDay = fixture.day;
        }

        // Create the fixture list item
        const listItem = document.createElement('li');


        if (fixture.day == FINAL_DAY){
            listItem.classList.add('final');
            let finalResult = '';
            if(fixture.penalties){
                finalResult = `${fixture.result[0]}(${fixture.penalties[0]}) - ${fixture.result[1]}(${fixture.penalties[1]})`;
            }
            else if(fixture.result) {
                finalResult = `${fixture.result[0]} - ${fixture.result[1]}`
            }
            else{
                finalResult = 'TBD'
            }
            listItem.innerHTML = `${fixture.home} vs ${fixture.away} - <span>${fixture.time}</span><span style="float: right;">${finalResult}</span>`;
            if(fixture.result) {
                listItem.innerHTML = `<h3>Winner: ${participants[fixture.winner]}</h3>`.concat(listItem.innerHTML);
            }
        }
        else{
            listItem.innerHTML = `${fixture.home} vs ${fixture.away} - <span>${fixture.time}</span><span style="float: right;">${fixture.result ?? 'TBD'}</span>`;
        }
        if (fixture.result) {
            if (fixture.day != FINAL_DAY){
                listItem.classList.add('past');
            }
            // Add goalscorers if available
            if (fixture.goals.length > 0) {
                const scorersList = document.createElement('ul');
                scorersList.classList.add('goalscorers-list');
                
                fixture.goals.forEach(goalID => {
                    let scorer = getGoalByID(goalID)
                    const scorerItem = document.createElement('li');
                    scorerItem.innerHTML = `${scorer.name}`;
                    if (scorer.assist){
                        scorerItem.innerHTML = scorerItem.innerHTML.concat(
                            `<span class="assist">${scorer.assist}</span>`
                        );
                    }
                    else if (scorer.penalty){
                        scorerItem.innerHTML = scorerItem.innerHTML.concat(
                            `<span class="assist">Penalty</span>`
                        );
                    }
                    scorerItem.innerHTML = scorerItem.innerHTML.concat(
                        `<span class="scorer-team">${scorer.team}</span>`
                    );
                    scorersList.appendChild(scorerItem);
                });

                listItem.appendChild(scorersList);
            }
        } else {
            listItem.classList.add('upcoming');
        }
        fixturesGrouped.appendChild(listItem);

        if (fixture.day == FINAL_DAY && fixture.result != null) {
            const finalFixtureElement = document.getElementById('final-fixture');
            


            const ulFinal = document.createElement('ul');
            if(dayHeader){
                ulFinal.appendChild(dayHeader);
            }
            ulFinal.appendChild(listItem);
            finalFixtureElement.appendChild(ulFinal);
        }

    });
}

// Initialize the data display
displayLeagueTable();
displayTopScorers();
displayTopAssisters();
displayTopCleanSheets();
displayFixturesGroupedByDay();
