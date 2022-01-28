//events are split into 5 categories to ensure variety. 3 random categories will be selected followed by a random event from each of those
const doSomething = ['Sell Your House', 'Quit Your Job', 'Sell Your Car', 'Join a Gym', 'Throw Your Phone Off a Bridge', 'Delete Facebook', 'put all your money on red', 'Shave Your Head', 'Fake Your Death' ]
const move = ['Move to Miami', 'Move to New York', 'Move to Morocco', 'Move to Tokyo', 'Move to Thailand', 'Move to Mexico', 'Move to Brazil', 'Move to LA', 'Move to Hollywood', 'Move to Moscow', 'Move to San Francisco', 'Move to Egypt', 'Move to The Bahamas', 'Move to Jamaica' ]
const become = ['become a Magician', 'become a Pilot', 'become a Astronaut', 'become a Zoo Keeper', 'become a Rock Star', 'become a Model', 'become a Movie Star', 'become a Monk', 'become a Bee Keeper', 'become a Stuntman', 'become a poet', 'become a chef']
const buy = ['buy a Ferari', 'buy a Lambo', 'buy Bitcoin', 'buy 42,069 Doge Coin', 'buy a Mansion', 'buy a Speedboat', 'buy a Jet Pack', 'buy a Tank', 'buy a Farm', 'buy a motorbike', 'buy a jetski' ]
const learn  =['learn the Piano', 'learn the Flute', 'learn to code!', 'learn the Saxophone', 'learn the Drums', 'learn Taekwondo', 'master Kung Fu', 'learn to Breakdance', 'learn Ballet'  ]

//array of the category array. We will select 3 at random
const categoryList = [doSomething, move, become, buy, learn]



//choosing 3 random categories
const randCats = (list)=> {
    const userThree = []
        
        while (userThree.length < 3){
           let item = list[Math.floor(list.length * Math.random()) ]
           if (!userThree.includes(item)){
               userThree.push(item)
           }
        }
        return userThree
    }

//defining an array of 3 chosen categories
const chosenThree = randCats(categoryList)


//takes a category array and selects one random item
const findItemInList = (list)=>{
const userList = list[Math.floor(list.length*Math.random())]
return userList 
}

//randomly picks an event from each chosen category
const getItemsFromChosenCategories = (chosen) =>{

    const threeEvents = []
    for (i =0; i <chosen.length; i++){
        threeEvents.push(findItemInList(chosen[i]))
    }
    return threeEvents
}


//defining the three randomly chosen events from each of the randomly selected categories
const userEvents = getItemsFromChosenCategories(chosenThree)

//printing the final message of excellent life advice
console.log(`You need to ${userEvents[0]}, ${userEvents[1]} and ${userEvents[2]}` )






