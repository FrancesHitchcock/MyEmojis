//localStorage.clear()

let myEmojis = ["👩‍💻", " 🥾", "🏃🏼‍♀️", "🚴🏼‍♀️", "🥑"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const dateH3 = document.getElementById("date-h3")
const emojiOfDaySpan = document.getElementById("emoji-of-day-span")
const emojisFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"))
const emojiOfDayFromLocalStorage = JSON.parse(localStorage.getItem("emojiOfDay"))

const now = new Date()
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const weekday = dayNames[now.getDay()]
const dayOfMonth = now.getDate()
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const month = monthNames[now.getMonth()]
const dateString = `${weekday} ${dayOfMonth} ${month}`

dateH3.innerHTML = dateString

if (emojisFromLocalStorage) {
    myEmojis = emojisFromLocalStorage
}

if (emojiOfDayFromLocalStorage) {
    emojiOfDaySpan.innerHTML = emojiOfDayFromLocalStorage
} else {emojiOfDaySpan.innerHTML = myEmojis[0]}

function renderEmojis() {   
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('li')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
}

function selectEmojiOfDay() {
    let emojiList = document.querySelectorAll("li")

    for (let i = 0; i < emojiList.length; i++) {
        emojiList[i].addEventListener("click", function() {
            emojiOfDaySpan.innerHTML = myEmojis[i]
            localStorage.setItem("emojiOfDay", JSON.stringify(myEmojis[i]))
        })
    }
}

function addEmoji(addMethod) {
    if (emojiInput.value) {
        addMethod
        emojiInput.value = ""
        renderEmojis()
        selectEmojiOfDay()
    }
}

function removeEmoji(removeMethod) {
    removeMethod
    renderEmojis()
    selectEmojiOfDay()
}

renderEmojis()

selectEmojiOfDay()

pushBtn.addEventListener("click", function(){
    addEmoji(myEmojis.push(emojiInput.value))
})

unshiftBtn.addEventListener("click", function(){
    addEmoji(myEmojis.unshift(emojiInput.value))
})

popBtn.addEventListener("click", function() {
    removeEmoji(myEmojis.pop())
})

shiftBtn.addEventListener("click", function() {
    removeEmoji(myEmojis.shift())
})


