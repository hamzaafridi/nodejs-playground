// const square = function(x){
//     return x*x
// }

// this is more simple
// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

const event = {
    name: 'Birthday party',
    guetList: ['1','2','3'],
    printGuestList(){
        const that = this


        console.log("Guest List for " + this.name)

        this.guetList.forEach((guest) =>{
            console.log(guest + " is attending " + this.name)
        })
    }
}

event.printGuestList()