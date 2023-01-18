import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void,
}

// challenge #4 - make a class called ListTemplate, singleton and implements DOMList, and code the functions
export default class ListTemplate implements DOMList {
    ul: HTMLUListElement

    // singleton
    static instance: ListTemplate = new ListTemplate()

    private constructor() {
        // assertion
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ""
    }

    render(fullList: FullList): void {
        this.clear()

        fullList.list.forEach(item => {
            // create a list element
            const li = document.createElement('li')
            li.className = "item"

            // input
            const check = document.createElement('input')
            check.type = "checkbox"
            check.id = item.id
            check.tabIndex = 0
            check.checked = item.checked
            li.append(check)

            // evt listener
            check.addEventListener("change", () => {
                item.checked = !item.checked
                fullList.save()
            })

            // label
            const label = document.createElement('label')
            label.htmlFor = item.id
            label.textContent = item.item
            li.append(label)

            // button click
            const button = document.createElement("button")
            button.className = "button"
            button.textContent = "X"
            li.append(button)

            button.addEventListener("click", () => {
                fullList.removeItem(item.id)
                this.render(fullList)
            })

            this.ul.append(li)
        })
    }
}