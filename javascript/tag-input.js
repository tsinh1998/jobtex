
// const ul = document.querySelector(".tag-input ul"),
// input = document.querySelector("input"),
// tagNumb = document.querySelector(".details span");
// /*Số lượng tối đa tag*/
// let maxTags = 10,
// /*Thiết lập tag mặc định*/
// tags = ["niemvui", "laptrinh"];
// countTags();
// createTag();
// /*Đếm số lượng tag*/
// function countTags(){
//     input.focus();
//     tagNumb.innerText = maxTags - tags.length;
// }
// /*Tạo tag*/
// function createTag(){
//     ul.querySelectorAll("li").forEach(li => li.remove());
//     tags.slice().reverse().forEach(tag =>{
//         let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, 
// '${tag}')"></i></li>`;
//         ul.insertAdjacentHTML("afterbegin", liTag);
//     });
//     countTags();
// }
// /*Xoá tag*/
// function remove(element, tag){
//     let index  = tags.indexOf(tag);
//     tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
//     element.parentElement.remove();
//     countTags();
// }
// /*Thêm tag bằng dấu enter*/
// function addTag(e){
//     if(e.key == "Enter"){
//         let tag = e.target.value.replace(/\s+/g, ' ');
//         if(tag.length > 1 && !tags.includes(tag)){
//             if(tags.length  <  10){
//                 tag.split(',').forEach(tag => {
//                     tags.push(tag);
//                     createTag();
//                 });
//             }
//         }
//         e.target.value = "";
//     }
// }
// input.addEventListener("keyup", addTag);
// const removeBtn = document.querySelector(".details button");
// removeBtn.addEventListener("click", () =>{
//     tags.length = 0;
//     ul.querySelectorAll("li").forEach(li => li.remove());
//     countTags();
// });


const tagInput = document.querySelector(".tag-input");
const tagArea = document.querySelector(".tag-area");
const ul = document.querySelector(".tag-area ul");
const label = document.querySelector(".label");

let tags = [];

function addEvent(element) {
    tagArea.addEventListener("click", () => {
        element.focus();
    });

    element.addEventListener("focus", () => {
        tagArea.classList.add("active");
        label.classList.add("label-active");
    });

    element.addEventListener("blur", (e) => {
        tagArea.classList.remove("active");
        if (element.value === "" && tags.length === 0) {
            label.classList.remove("label-active");
        }
        if (!element.value.match(/^\s+$/gi) && element.value !== "") {
            tags.push(e.target.value.trim());
            element.value = "";
            renderTags();
        }
    });
    /**
     * NOTE: Keyboard events works unexpected on mobile devices.
     * For mobile devices you need to add this code
     * to get the last character user entered.
     * value[value.length - 1] === " "
     *
     * keycode 32 is for SpaceBar
     * keycode 13 is for EnterKey
     */

    element.addEventListener("keydown", (e) => {
        console.log(e);
        const value = e.target.value;
        if (
            (e.keyCode === 32 ||
                e.keyCode === 13 ||
                value[value.length - 1] === " ") &&
            !value.match(/^\s+$/gi) &&
            value !== ""
        ) {
            tags.push(e.target.value.trim());
            element.value = "";
            renderTags();
        }
        if (e.keyCode === 8 && value === "") {
            tags.pop();
            renderTags();
        }
    });
}
addEvent(tagInput);

function renderTags() {
    ul.innerHTML = "";
    tags.forEach((tag, index) => {
        createTag(tag, index);
    });
    const input = document.createElement("input");
    input.type = "text";
    input.className = "tag-input";
    addEvent(input);
    ul.appendChild(input);
    input.focus();
    setTimeout(() => (input.value = ""), 0);
}

function createTag(tag, index) {
    const li = document.createElement("li");
    li.className = "tag";
    const text = document.createTextNode(tag);
    const span = document.createElement("span");
    span.className = "cross";
    span.dataset.index = index;
    span.addEventListener("click", (e) => {
        tags = tags.filter((_, index) => index != e.target.dataset.index);
        renderTags();
    });
    li.appendChild(text);
    li.appendChild(span);
    ul.appendChild(li);
}

// 


