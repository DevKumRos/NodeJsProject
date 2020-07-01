const yargs = require('yargs');
const notes = require('./notes')
const chalk = require('chalk');
const command = process.argv;


// const operation = command[2];
// if(operation === 'add') {
//   console.log("Add Note!!");
// } else if(operation === 'remove') {
//     console.log("Remove Note!!");
//   }
// console.log(command);
//Customs  yargs version
yargs.version('2.1.0');

//customs yargs add command
yargs.command({
  command: 'add',
  description: 'Add Notes!!',
  builder: {
    title: {
      describe: 'Notes Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Notes Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (args) =>  notes.addNotes(args.title, args.body)
});
//customs yargs remove command
yargs.command({
  command: 'remove',
  description: 'Remove Notes!!',
  builder: {
     title: {
       desribe: 'Removes the Note from list',
       demandOption: true,
       type: 'string'
     }
  },
  handler: (args) => notes.removeNotes(args.title)
  
});

//customs yargs list command
yargs.command({
  command: 'list',
  description: 'List of Notes!!',
  handler: () => { 
    const notesList = notes.listOfNotes();
    console.log(chalk.blue.inverse("List of Notes"));
    notesList.forEach((note) =>{
      console.log(chalk.grey.inverse("Title: "+note.title+", body: "+note.body));
    })
  }
 
});

//customs yargs read command
yargs.command({
  command: 'read',
  builder : {
    title: {
      desribe: 'Read the Note from given title',
      demandOption: true,
      type: 'string'
    }
  },
  description: 'Read of Notes!!',
  handler: (args) => notes.readNote(args.title)
  
});
yargs.parse();




