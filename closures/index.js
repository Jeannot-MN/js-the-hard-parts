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

const object = {
    value: 0
}

const func = outer(object);
func();

object.value = 10;
func();

const func2 = new outer(object);
func2();