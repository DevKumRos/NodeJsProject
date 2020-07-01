const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => "Get Notes data";

const listOfNotes = () => {
    console.log("List Of Notes ");
    return loadNotes();
}


const addNotes = (title, body) =>{
    const notes = loadNotes();
    const duplicatenotes = notes.find(
        (note) => note.title === title
    );
    if(!duplicatenotes){
        console.log(chalk.green.inverse("New Title is added"));
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
    } else {
        console.log(chalk.red.inverse("Title is already existing"));
    }
   
}

const saveNotes = (notes) => {
    const jsonStr = JSON.stringify(notes);
    fs.writeFileSync('notes.json', jsonStr);
}

const loadNotes = () => {
    try{
        const dataString = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataString);
    }catch(e){
        return [];
    }
    
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const removeNotes = notes.filter((note) => note.title != title);
    if(removeNotes.length != notes.length) {
        fs.writeFileSync('notes.json', JSON.stringify(removeNotes));
        console.log(chalk.green.bold.inverse('Data removed successfully'));
    } else {
        console.log(chalk.red.bold.inverse('Data doesnot exist to remove'));
    }
    
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if(note) {
        console.log(chalk.green.inverse("Note found for given title : ", title));
        return note;
    } else {
        console.log(chalk.red.inverse("Note didnt find for given title : ", title));
    }
      
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    listOfNotes: listOfNotes,
    removeNotes: removeNotes,
    readNote: readNote
}