const db = require('../models')
const Characters = db.characters
const Students = db.students
const Staff = db.staff
const Spells = db.spells


async function getDataCharacters() {

    console.log('ejecutando api')

    try {

        const response = await fetch('https://hp-api.onrender.com/api/characters')
        const data = await response.json()        
       
        const dataResults = data.map(d => ({
            charactersId: d.id,
            name: d.name,
            species: d.species,
            house: d.house,
            wizard: d.wizard,
            ancestry: d.ancestry,
            wand: d.wand,
            patronus: d.patronus,
            actor: d.actor,
            image: d.image
        }));
        
        const itemstoCreation = []
        const existedResults = await Characters.findAll()
        console.log(existedResults)

        for (const item of dataResults) {
            const match = existedResults.find((existedResult) => existedResult.charactersId === item.charactersId)
            if (!match) {
                //@ts-ignore
                itemstoCreation.push(item)
            }
        }
        // console.log(itemstoCreation)
        
        if (itemstoCreation.length > 0) {
            Characters.bulkCreate(itemstoCreation)
            return 'Sincronizando base de datos'
        }

        return 'No hay datos nuevos para guardar en la base de datos'
    }
    catch (error) {
        console.log(error.message)

    }
}

async function getDataStudents() {

    console.log('ejecutando api')

    try {

        const response = await fetch('https://hp-api.onrender.com/api/characters/students')
        const data = await response.json()
        
        
       
        const dataResults = data.map(d => ({
            studentsId: d.id,
            name: d.name,
            species: d.species,
            house: d.house,
            wizard: d.wizard,
            ancestry: d.ancestry,
            wand: d.wand,
            patronus: d.patronus,
            actor: d.actor,
            image: d.image
        }));
        
        const itemstoCreation = []
        const existedResults = await Students.findAll()
        console.log(existedResults)

        for (const item of dataResults) {
            const match = existedResults.find((existedResult) => existedResult.studentsId === item.studentsId)
            if (!match) {
                //@ts-ignore
                itemstoCreation.push(item)
            }
        }
        // console.log(itemstoCreation)
        
        if (itemstoCreation.length > 0) {
            Characters.bulkCreate(itemstoCreation)
            return 'Sincronizando base de datos'
        }

        return 'No hay datos nuevos para guardar en la base de datos'
    }
    catch (error) {
        console.log(error.message)

    }
}

async function getDataStaff() {

    console.log('ejecutando api')

    try {

        const response = await fetch('https://hp-api.onrender.com/api/characters/staff')
        const data = await response.json()
        
        
       
        const dataResults = data.map(d => ({
            staffId: d.id,
            name: d.name,
            species: d.species,
            house: d.house,
            wizard: d.wizard,
            ancestry: d.ancestry,
            wand: d.wand,
            patronus: d.patronus,
            actor: d.actor,
            image: d.image
        }));
        
        const itemstoCreation = []
        const existedResults = await Staff.findAll()
        console.log(existedResults)

        for (const item of dataResults) {
            const match = existedResults.find((existedResult) => existedResult.staffId === item.staffId)
            if (!match) {
                //@ts-ignore
                itemstoCreation.push(item)
            }
        }
        // console.log(itemstoCreation)
        
        if (itemstoCreation.length > 0) {
            Characters.bulkCreate(itemstoCreation)
            return 'Sincronizando base de datos'
        }

        return 'No hay datos nuevos para guardar en la base de datos'
    }
    catch (error) {
        console.log(error.message)

    }
}

async function getDataSpells() {

    console.log('ejecutando api')

    try {

        const response = await fetch('https://hp-api.onrender.com/api/spells')
        const data = await response.json()
        
        
       
        const dataResults = data.map(d => ({
            spellsId: d.id,
            name: d.name,
            description: d.description,
        }));
        
        const itemstoCreation = []
        const existedResults = await Spells.findAll()
        console.log(existedResults)

        for (const item of dataResults) {
            const match = existedResults.find((existedResult) => existedResult.spellsId === item.spellsId)
            if (!match) {
                //@ts-ignore
                itemstoCreation.push(item)
            }
        }
        // console.log(itemstoCreation)
        
        if (itemstoCreation.length > 0) {
            Characters.bulkCreate(itemstoCreation)
            return 'Sincronizando base de datos'
        }

        return 'No hay datos nuevos para guardar en la base de datos'
    }
    catch (error) {
        console.log(error.message)

    }
}


module.exports = {
    getDataCharacters,
    getDataStudents,
    getDataStaff,
    getDataSpells
}