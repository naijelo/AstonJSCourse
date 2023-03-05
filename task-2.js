class Company {
  constructor(name, salary) {
    Company.addStaff( {name} );

    this.income = (value) => {
      Company.store.staffList = Company.store.staffList.map((el) => {
        if (el.name === name) {
          el.income += value - salary;
        }
        return el;
      });
      Company.store.money += value - salary;
    }

    this.spend = (value) => {
      Company.store.staffList = Company.store.staffList.map((el) => {
        if (el.name === name) {
          el.income -= value;
        }
        return el;
      });
      Company.store.money -= value;
    }
  }

  static store = {
    staffList: [],
    countStaff: 0,
    money: 0,
  }

  static addStaff( {name, income = 0} ) {
    this.store.staffList.push( {name, income} );
    this.store.countStaff++;
  }

  static getLeaders() {
    let incomeArray = [];
    let max;
    this.store.staffList.forEach((el) => incomeArray.push(el.income));
    max = Math.max.apply(null, incomeArray);
    return this.store.staffList.filter((el) => el.income === max);
  }
}