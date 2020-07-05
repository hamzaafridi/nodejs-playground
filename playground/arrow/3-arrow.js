//ES6 arrow function  

// const square = function(x){
//     return x*x
// }

//arrow function
// const square = (x) => {
//     return x*x
// }

//somefunction don't need alot of information and processing can work in single step
// const square = (x) => x*x

// console.log(square(2))

//arrow function do not bind this
const event = {
    name: 'birthday',
    guestList: ['hamza','manahil','hareem'],
    printGuestList(){

        console.log('Guest list for '+this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()