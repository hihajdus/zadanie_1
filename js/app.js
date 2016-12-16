$(function () {

console.log('it works');

    var next = document.querySelector('#nextPicture');
    console.log(next);

    var prev = document.querySelector('#prevPicture');
    console.log(prev);

    var list = document.querySelectorAll('li');
    console.log(list);

    var index = 0; //shows the index image

    list[index].classList.add('visible'); //adds class




    next.addEventListener('click', function () { //adds the event, function as a parametr
        console.log('you clicked next');

        list[index].classList.remove('visible'); //remove class
        index++;

        if ( index > list.length-1 ) {
            index = 0;
        }

        list[index].classList.add('visible');
        list[index].classList.add('fade');
        console.log('index: ' + index);

    });

    prev.addEventListener('click', function () {
        console.log('you clicked prev');

        list[index].classList.remove('visible');
        index--;

        if ( index < 0 ) {
            index =  list.length-1;
        }

        list[index].classList.add('visible');
        list[index].classList.add('fade');
        console.log('index: ' + index);
    });


});
