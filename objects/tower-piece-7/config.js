module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestTowerPiece7: {
      fileName: "floatingtowerpiece7.png",
      frameDimensions: {
        width: 72,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestTowerPiece7",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
      shouldPickRandomInitialFrame: true,
    },
  },
};
