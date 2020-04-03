let listahan = ['Toyo', 'Suka', 'Sabon'];

$(document).ready(function(){

    let btnJquery = $('#btn_jquery');
    let list = $('#list');
    let header = $('#header');

    $('#btn_jquery').on('click', function(){

        
        $.ajax({

            method: 'GET',
            url : 'https://www.pinoyfreecoder.com/api/users',
            success: function(data){

                console.log(data);

            }

        })


        $.each(listahan, function(index, item){
            
            list.append(`<li>${item}</li>`);

        });
    })

});

document.addEventListener('DOMContentLoaded', ()=>{

    let btnES6 = document.querySelector('#btn_ES6');
    let list = document.querySelector('#list');
    let header = document.querySelector('#header');

    btnES6.addEventListener('click', () => {

        header.classList.toggle('blink');


        fetch('https://www.pinoyfreecoder.com/api/users')
          .then(response => {
              return response.json();
          }).then( data => {
              console.log(data);
          })

        let html = "";

        listahan.forEach(function(item, index){
            
            html += "<li>";
            html += item;
            html += "</li>";

        })

        list.innerHTML = html;
        //console.log('ES6 Click');
        // let node = document.createElement('li');
        // let textNote = document.createTextNode('ES6 List');
        // node.style.fontSize = "40px";
        // node.appendChild(textNote);

        // list.appendChild(node);
    })
 

})