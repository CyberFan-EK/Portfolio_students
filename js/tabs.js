const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescription = document.querySelectorAll('.design__descr')
const designImg = document.querySelectorAll('.design-images')

const changeTab = (btn, arr) => {
    arr.forEach((item) => {

        if (item.dataset ?.tabsField === btn) {
            item.classList.remove('hidden')
        } else {
            item.classList.add('hidden')
        }
    })
}

tabButtons.forEach((tab) => {

    tab.addEventListener('click', (event) => {
        const dataTab = event.target.dataset?.tabsHandler
        tabButtons.forEach((item) => {
            if (event.target === item) {
                item.classList.add('design-list__item_active')
            } else {
                item.classList.remove('design-list__item_active')
            }
        })
        changeTab(dataTab, tabDescription)
        changeTab(dataTab, designImg)
    })
})