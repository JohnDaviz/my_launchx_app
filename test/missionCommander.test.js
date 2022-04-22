const MissionCommander = require('./../app/missionCommander');

describe("Esto es una suite de pruebas", () => {
  test('Caso de prueba 1', () => {
    const myMissionCommander = new MissionCommander("Woopa")
    expect(myMissionCommander.name).toBe("Woopa");
  });
})
