function fetchData(){
fetch("https://jsonplaceholder.typicode.com/photos").then(response =>{
     return response.json();
}).then(data => {

for(let i=0; i<100; i++)
{
    let src_image = data[i].url;
    let title_image = data[i].title;
    let text_image = data[i].title + data[i].title;

    const div = document.createElement('div');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const button = document.createElement('input');

    div.setAttribute('class',"card-item");
    div.setAttribute('id',i);
    img.setAttribute('src',src_image);
    h3.innerHTML = title_image;
    p.innerHTML = text_image;
    button.setAttribute('class','btn');
    button.setAttribute('type','button');
    button.setAttribute('value','Button');
    button.setAttribute('onclick',`buttonClick(${i})`);

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button);
    div.style.backgroundColor="white";

    document.getElementById("grid-items").appendChild(div);
}
});
}

const buttonClick = (elementid) => {
    let chosen_item = document.getElementById(elementid);

    if(chosen_item.style.backgroundColor === 'white')
    {
        let cards = document.getElementsByClassName("card-item");
        for(let i=0;i<cards.length; i++)
         cards[i].style.backgroundColor='white';
        chosen_item.style.backgroundColor = 'rgb(219, 213, 213)';
    }    
    else
      chosen_item.style.backgroundColor = 'white';
}

fetchData();
