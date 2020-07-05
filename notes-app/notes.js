const fs = require('fs')

const chalk = require('chalk')

const warning = chalk.red.inverse
const success = chalk.green.inverse

const getNotes= ()=>"Your Notes are"

const addNote = function(title,body){
    const notes = loadNotes()
    
    const duplicateNotes = notes.filter((note)=> (note.title === title))
    
    if (duplicateNotes.length ===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(success("note saved"))
    }
    else{
        console.log(warning("duplicate found"))
    }
    
}

const removeNote = function(title){
    //check if file exists
    const notes = loadNotes()
    const filterNotes = notes.filter((note)=> note.title !== title)

    //if exist then remove
    if(filterNotes.length !== notes.length)
    {
        saveNotes(filterNotes)
        console.log(success("Note removed"))
    }
    else{
        console.log(warning("Note not found!"))
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataBuffer)
    } catch (e){
        return []
    }    
}

const listNotes= ()=>{
    const notes = loadNotes()
    console.log(chalk.red.bold.inverse("Your Notes:"))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title)=>{
    const notes = loadNotes()
    //METHOD 1
    const note = notes.find((note)=> note.title === title)

    if (note){
        console.log(chalk.green.bold.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.bold("note not found"))
    }

    //METHOD 2
    // const filterNotes = notes.filter((note)=>title==note.title)
    
    
    // //console.log((filterNotes))
    // if (filterNotes.length === 0){
    //     console.log(chalk.red.bold("note not found"))
    // }

    // else{
    //     console.log(chalk.green.bold.inverse(filterNotes[0].title))
    //     console.log(filterNotes[0].body)
    // }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}