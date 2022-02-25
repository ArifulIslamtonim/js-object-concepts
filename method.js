const student = {
    name: 'Ariful Islam Tonim',
    id: 101,
    balance: 5000,
    main: 'physics',
    isRich: false,
    subjects: ['bangla', 'english', 'ICT', 'Chemistry', 'biology', 'hair math'],
    mYLali: {
        relation: 'girlFriend',
        relationYear: '1 year done'
    },
    takeExam: function(){
        console.log(this.name);
    },
    treat: function(expenses, trips) {
        this.balance = this.balance - expenses - trips;
        return this.balance;
    }
}
student.takeExam();
const remaining = student.treat(2000, 100);
const remaining2 = student.treat(1000, 20);
console.log(remaining2);