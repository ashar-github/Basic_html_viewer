let input_wala = document.getElementById('input_wala');
let output_wala = document.getElementById('output_wala');

input_wala.addEventListener('input',()=>{
    let input = input_wala.value;
    output_wala.innerHTML = input;
});


let first_span = document.getElementById('first-span');
let second_span = document.getElementById('second-span');

second_span.addEventListener('mouseover', ()=>{
   first_span.style.color = 'red';
   input_wala.style.borderColor = 'red'
   output_wala.style.borderColor = 'red'
});

second_span.addEventListener('mouseout', ()=>{
   first_span.style.color = 'green';
   input_wala.style.borderColor = 'black'
   output_wala.style.borderColor = 'black'

});


// let input_geter = document.getElementById('input_wala');
// let output_geter = document.getElementById('output_wala');

// input_geter.addEventListener('input', () => {
//     let input = input_geter.value;
    
//     try {
//         let parsedInput = JSON.parse(input);
//         output_geter.innerHTML = `<pre>${JSON.stringify(parsedInput, null, 5)}</pre>`;
//         console.log(input);
//     } catch (error) {
//         output_geter.innerHTML = 'Invalid JSON';
//     }
// });



