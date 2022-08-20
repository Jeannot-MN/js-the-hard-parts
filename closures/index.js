function useState(intialState) {
    let state = intialState;

    function setState(newState) {
        state = newState;
    }

    return [state, setState]
}

const [age, setAge] = useState(0);

setAge(2);


console.log(age);

function outer(object) {

    return function() {
        console.log(object.value);
    }
}