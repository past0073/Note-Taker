const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../db/db.json');
const { uuid } = require('uuidv4');

module.exports = function (app) {
    
    app.get('/api/notes', function (req, res) {
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
            noteRes = JSON.parse(data);

            if (data) {
                savedNotes.push(noteRes);
            }

            let newNote = req.body;

            newNote.id = uuidv4();

            savedNotes.push(newNote);
          
            fs.writeFile(dataPath, JSON.stringify(savedNotes), (err, data) => {
                if (err) throw err;
                res.json(savedNotes);
            });

        });
    });

        app.delete("api/notes/:id", function (req, res) {
            let noteId = req.params.id;
            fs.readFile(dataPath, (err, data) => {
                if (err) throw err;
                allNotes = JSON.parse(data);
                for (i=0; i<allNotes.length; i++) {
                    if (noteID === allNotes[i].id) {
                        allNotes.splice(i,1)
                    }
                }

                fs.writeFile(dataPath, JSON.stringify(allNotes), (err, data) => {
                    if (err) throw err;
                    res.JSON(req.body)
                })
            });
        });
};