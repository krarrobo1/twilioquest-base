function onObjectiveCompleted(self, event, world) {
  if (event.objective === self.objectiveName) {
    self.setState({
      isCompleting: true,
    });
  }
}

module.exports = {
  animations: {
    objectiveCompleted: {},
    objectiveCompleting: {},
    objectiveNotCompleted: {},
  },
  spriteSheets: {},
  properties: {
    sprite: {
      useGidAsDefaultFrameIndex: true,
      layers: [],
    },
  },
  events: {
    onLevelDidLoad: function (self, event, world) {
      self.setState({
        isCompleted: world.isObjectiveCompleted(self.objectiveName),
      });
    },
    onObjectiveCompleted,
    onObjectiveCompletedAgain: onObjectiveCompleted,
  },
  state: {
    isCompleting: false,
    isCompleted: false,
  },
  render: function (self, world) {
    if (self.state.isCompleting) {
      self
        .playAnimation("objectiveCompleting")
        .then(() => self.setState({ isCompleting: false, isCompleted: true }));
    } else if (self.state.isCompleted) {
      self.playAnimation("objectiveCompleted");
    } else {
      self.playAnimation("objectiveNotCompleted");
    }
  },
};
