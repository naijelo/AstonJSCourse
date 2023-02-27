function createPerson({name = "New User", skills = []}) {
  return obj = {
    name,
    skills,
    addSkill(skill) {

      if (!this.skills.includes(skill)) {
        this.skills = [...this.skills, skill];
      }
      
      return this;
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((el) => el !== skill);

      return this;
    },
    addName(name) {
      this.name = name;

      return this;
    }
  }
}