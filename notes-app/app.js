const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')
const { removeNote, listNotes, readNote } = require('./notes')

//customie yargs version
yargs.version("1.0.0")

//create add command
yargs.command({
    command:'add',
    describe:"Add a new note",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"body of the note",
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//create a remove commnad
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        removeNote(argv.title)
    }
})

//read command
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:"title of the note",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        readNote(argv.title)
    }
})

//read command
yargs.command({
    command:'list',
    describe:'return list of notes',
    handler(){
        listNotes()
    }
})
yargs.parse()
//console.log(yargs.argv)
