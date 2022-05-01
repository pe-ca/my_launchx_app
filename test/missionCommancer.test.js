const MissionCommander = require('./../app/missionCommander')

describe("UnitTest for Mission Commander class", () =>{
    test('Caso de prueba 1', ()=>{
        const missionCommander = new MissionCommander("Woopa")
        expect(missionCommander.name).toBe("Woopa")
    })
})