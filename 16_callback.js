// let jennyHomework = function(callback){
//     console.log(`Jenny started homework`);
//     console.log(`Jenny took an hour`);
//     console.log(`Finally she has completed her homework`);
//     callback();
// }
// let elonCopyHomework = function(){
//     console.log(`Elon is playing`);
//     console.log(`Jenny called back Elon`);
//     console.log(`Elon came and copied his homework`);
// }

// jennyHomework(elonCopyHomework);

// let homework = function(){
//     console.log(`Elon is playing`);
//     console.log(`Jenny called back Elon`);
//     console.log(`Elon came and copied his homework`);
// }
//setTimeout(homework 1000);

console.log('Started');
setTimeout(function(){
    console.log(`Elon is playing`);
    console.log(`Jenny called back Elon`);
    console.log(`Elon came and copied his homework`);
}, 1000);

console.log(`Callback Hell....`);
setTimeout(function(){
    console.log(`Invoked after 2 secs`);
    setTimeout(function(){
        console.log(`Invoked after 5 secs`);
        setTimeout(function(){
            console.log(`Invoked after 7 secs`);
        }, 7000);
    }, 5000);
}, 2000);