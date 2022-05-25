const input_box = document.getElementById('input')
const add_box = document.getElementById('addbutton')
const list = document.getElementById('list')
function additem(){
    const text = input_box.value
    console.log(text)
list.innerHTML += `<li>${text}</li>`
}
add_box.addEventListener('click', additem)