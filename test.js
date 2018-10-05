var fs = require('fs');
var FilePublisher = /** @class */ (function () {
    function FilePublisher(name) {
        this.filename = name; // filename = name
    }
    FilePublisher.prototype.showFile = function () {
        fs.readFile(this.filename, 'utf8', function (err, file) {
            if (err)
                throw err;
            // ta bort onödiga tecken
            var remove;
            var reg = /\n| |-/; // Tar bort radbrytning, mellanslag och streck
            remove = file.split(reg);
            // räknar ord
            file = []; // gör file till en array
            var count = {};
            for (var _i = 0, remove_1 = remove; _i < remove_1.length; _i++) { // för varje element i arrayen "file"
                var i = remove_1[_i];
                count[i] = count[i] != undefined ? count[i] + 1 : 1; // om objektet är odefinierat definieras det och räknaren ändras till 1 
                // om objektet är definierat ökar räknaren med 1.
            }
            // sorterar ord
            var sorting = []; // gör sorting till en array
            for (var key in count)
                sorting.push([key, count[key]]); // kopierar objekten till en associativ array
            sorting.sort(function (a, b) {
                return a[1] - b[1]; // sorterar baserat på räkning 
            });
            sorting.reverse(); // vänder den sorterade arrayen så den blir i fallande ordning
            console.log(sorting.slice(0, 10)); // visar de 10 högsta värdena
        });
    };
    return FilePublisher;
}());
var obj = new FilePublisher("hitch.txt"); // instansiera filepublisher med objekt
obj.showFile();
