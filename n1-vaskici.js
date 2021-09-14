const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function skaiciausIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, data => {
            resolve(parseInt(data));
        });
    });
}

async function tekstoIvedimas(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, data => {
            resolve(data);
        });
    });
}

async function main() {

    var zaidimoPabaiga;
    var zmogausPergales = 0;
    var kompiuterioPergales = 0;
    var lygiosios = 0;

    console.log('--------------------- ZAIDIMO PRADZIA --------------------------')
    while (zaidimoPabaiga != "X") {
        var zmogausPasirinkimas = await tekstoIvedimas("Ivesk A/P/Z/X:");
        zmogausPasirinkimas = zmogausPasirinkimas.toUpperCase();

        var kompiuterioPasirinkimas = Math.trunc(Math.random() * 3 + 1);

        if (kompiuterioPasirinkimas === 1) {
            kompiuterioPasirinkimas = 'A';
        } else if (kompiuterioPasirinkimas === 2) {
            kompiuterioPasirinkimas = 'P';
        } else {
            kompiuterioPasirinkimas = 'Z';
        }

        console.log('Zmogaus pasirinkimas: ', zmogausPasirinkimas);
        console.log('Kompiuterio pasirinkimas: ', kompiuterioPasirinkimas);

        if (zmogausPasirinkimas === 'A' && kompiuterioPasirinkimas === 'Z') {
            console.log('Laimejo zmogus');
            zmogausPergales += 1;
        } else if (kompiuterioPasirinkimas === 'A' && zmogausPasirinkimas === 'Z') {
            console.log('Laimejo kompiuteris');
            kompiuterioPergales += 1;
        } else if (zmogausPasirinkimas === 'P' && kompiuterioPasirinkimas === 'A') {
            console.log('Laimejo zmogus');
            zmogausPergales += 1;
        } else if (kompiuterioPasirinkimas === 'P' && zmogausPasirinkimas === 'A') {
            console.log('Laimejo kompiuteris');
            kompiuterioPergales += 1;
        } else if (zmogausPasirinkimas === 'Z' && kompiuterioPasirinkimas === 'P') {
            console.log('Laimejo zmogus');
            zmogausPergales += 1;
        } else if (kompiuterioPasirinkimas === 'Z' && zmogausPasirinkimas === 'P') {
            console.log('Laimejo kompiuteris');
            kompiuterioPergales += 1;
        } else if (zmogausPasirinkimas === kompiuterioPasirinkimas) {
            console.log('Lygiosios!');
            lygiosios += 1;
        } else if (zmogausPasirinkimas === 'X') {
            console.log('Zaidimo pabaiga!');
            zaidimoPabaiga = 'X'
        } else {
            console.log('Tokio pasirinkimo nera, prasom ivesti teisinga pasirinkima');
        }
        console.log('\n');
    }
    console.log('Zmogus laimejo: ', zmogausPergales);
    console.log('Kompiuteris laimejo: ', kompiuterioPergales);
    console.log('Lygiosios: ', lygiosios);
    console.log('--------------------- ZAIDIMO PABAIGA --------------------------\n');
    rl.close();
}
main();
