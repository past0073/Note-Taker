const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../db/db.json');
const { uuid } = require('uuidv4');

module.exports = function (app) {
    
    app.get('/api.notes', function (req, res) {
        fs.readFile(dataPath, (err, data) => {
            if (err) throw err;
            notesRes = JSON.parse(data);
            res.json(notesRes);
        });
       
    });

    app.post('/api/notes', function (req, res) {

        fs.readFile(dataPath, (err, data) => {
            if (err) throw err;
        
            let savedNotes = [];

            if (data) {
                savedNotes = JSON.parse(data)
            }

            let newNote = req.body;

            savedNotes.push(newNote);
          
            fs.writeFile(dataPath, JSON.stringify(savedNotes), (err, data) => {
                if (err) throw err;
                res.json(newNote);
            })

        });
    });
};