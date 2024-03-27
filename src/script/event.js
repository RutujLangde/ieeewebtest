document.addEventListener('DOMContentLoaded', function () {
    const event1 = document.getElementById('event1');
    const buttonevent1 = document.getElementById('buttonevent1');
    const event2 = document.getElementById('event2');
    const buttonevent2 = document.getElementById('buttonevent2');
    const event3 = document.getElementById('event3');
    const buttonevent3 = document.getElementById('buttonevent3');
    const event4 = document.getElementById('event4');
    const buttonevent4 = document.getElementById('buttonevent4');


    buttonevent1.addEventListener('click', function () {
        console.log('works')
        event1.classList.add('evevtshow');
        event2.classList.add('evevthidden'); 
        event3.classList.add('evevthidden');
        event4.classList.add('evevthidden');
        event2.classList.remove('evevtshow');
        event3.classList.remove('evevtshow'); 
        event4.classList.remove('evevtshow'); 
        
    });

    buttonevent2.addEventListener('click', function () {
        console.log('works')
        event2.classList.add('evevtshow');
        event1.classList.add('evevthidden'); 
        event3.classList.add('evevthidden');
        event4.classList.add('evevthidden');
        event1.classList.remove('evevtshow'); 
        event3.classList.remove('evevtshow'); 
        event4.classList.remove('evevtshow'); 
    });
    buttonevent3.addEventListener('click', function () {
        console.log('works')
        event3.classList.add('evevtshow');
        event1.classList.add('evevthidden'); 
        event2.classList.add('evevthidden');
        event4.classList.add('evevthidden');
        event1.classList.remove('evevtshow'); 
        event2.classList.remove('evevtshow'); 
        event4.classList.remove('evevtshow'); 
    });

    buttonevent4.addEventListener('click', function () {
        console.log('works')
        event4.classList.add('evevtshow');
        event1.classList.add('evevthidden'); 
        event2.classList.add('evevthidden');
        event3.classList.add('evevthidden');
        event1.classList.remove('evevtshow'); 
        event2.classList.remove('evevtshow'); 
        event3.classList.remove('evevtshow'); 
    });
});