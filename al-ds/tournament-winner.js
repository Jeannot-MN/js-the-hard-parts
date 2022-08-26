function tournamentWinner(competitions, results) {
    const log = {};
    let overAllWinner;

    for (let i = 0; i < competitions.length; i++) {
        const winningTeam = competitions[i][1 - results[i]];
        log[winningTeam] = log[winningTeam] === undefined ? 3 : log[winningTeam] + 3;

        if (!overAllWinner || log[winningTeam] > log[overAllWinner]) {
            overAllWinner = winningTeam;
        }
    }

    return overAllWinner;
}