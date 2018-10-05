declare function require(name:string);      // Gör att require ka nanvändas i TypeScript
var fs = require('fs');

class FilePublisher {       
    filename: string;                       // medlemsvariabel av typen string

    constructor(name: string) {     
        this.filename = name;               // filename = name
    } 

    showFile(): void {                                              // metod som öppnar filen och skriver ut all data till konsollen, void = inget returvärde 
        fs.readFile(this.filename, 'utf8', function(err, file) {    // Read all of the file content 
            if (err) throw err;
            
            // ta bort onödiga tecken
            var remove;
            var reg = /\n| |-/;         // Tar bort radbrytning, mellanslag och streck
            remove = file.split(reg);
            
            // räknar ord
            file = [];                  // gör file till en array
            let count = {};

                for(let i of remove){                                       // för varje element i arrayen "file"
                    count[i] = count[i] != undefined ? count[i] + 1 : 1;    // om objektet är odefinierat definieras det och räknaren ändras till 1 
                                                                            // om objektet är definierat ökar räknaren med 1.
            }

            // sorterar ord
                var sorting = [];                   // gör sorting till en array
                for (var key in count)
                sorting.push([key, count[key]]);    // kopierar objekten till en associativ array
                sorting.sort(function (a, b) {
                    return a[1] - b[1];             // sorterar baserat på räkning 
                });
                sorting.reverse();                  // vänder den sorterade arrayen så den blir i fallande ordning
                console.log(sorting.slice(0, 10));  // visar de 10 högsta värdena
        });  
    }

}

let obj = new FilePublisher("hitch.txt");           // instansiera filepublisher med objekt
obj.showFile();

