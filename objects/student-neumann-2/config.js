const conversationOnInteract = require("../../scripts/conversationOnInteract");

module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3],
      frameRate: 4,
    },
  },
  spriteSheets: {
    twilioQuestApiStudentNeumann2: {
      fileName: "NPC_Student_Neumann2.png",
      frameDimensions: {
        width: 32,
        height: 32,
      },
    },
  },
  events: {
    onPlayerDidInteract: conversationOnInteract,
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioQuestApiStudentNeumann2",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 3000,
      maxIdleTime: 5000,
    },
  },
};
