$(function () {

console.log('dziala');

    var next = document.querySelector('#nextPicture');
    console.log(next);

    var prev = document.querySelector('#prevPicture');
    console.log(prev);

    var list = document.querySelectorAll('li');
    console.log(list);

    var index = 0;

    list[index].classList.add('visible');


    next.addEventListener('click', function () {
        console.log('you clicked next');

        list[index].classList.remove('visible');
        index++;

        if ( index > list.length-1 ) {
            index = 0;
        }

        list[index].classList.add('visible');
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
        console.log('index: ' + index);
    });


});
