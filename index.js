function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
 }

function mondayWork(toDo="go to the office") {
    return `This Monday, I will ${toDo}.`
}

function wrapAdjective (highlight="*") {
    return function (adjective="persistent") {
        return `You are ${highlight}${adjective}${highlight}!`
    }

    //let highlight = 'a hard worker'
     //return `You are a ${highlight}!`
}
    