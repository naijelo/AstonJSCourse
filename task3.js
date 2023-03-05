function createLiker() {
  const obj = {
    counter: 0,
    like() {
      this.counter++;
      return this;
    },
    dislike() {
      this.counter--;
      return this;
    },
    val() {
      return this.counter;
    },
  };
  return obj;
}
