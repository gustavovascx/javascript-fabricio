function myDisplayer(some) {
    document.getElementById('demo').innerHTML = some
}

function myFirst() {
    myDisplayer("hello");
}

function mySecond() {
    myDisplayer("goodbye");
}

myFirst()
mySecond() // ele vai sobreescrever o myfirst