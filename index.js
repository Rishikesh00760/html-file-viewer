const $ = require('jquery');
const fs = require('fs');
const remote = require('electron').remote;
const dialog = remote.dialog;

function openFile() {
    dialog.showOpenDialog({ properties: ['openFile'] }, function (fileNames) {
        if (fileNames === undefined) {
            console.log('No file selected');
            return;
        }
        fs.readFile(fileNames[0], 'utf8', function (err, data) {
            if (err){
                alert('A error occured while opening and reading the file. Error message: ' + err.message)
            }
            
            $('#viewer').html(data);
        });
    });
}
