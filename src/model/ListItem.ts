export interface Item {
    id: string,
    item: string,
    checked: boolean,
}

export default class ListItem implements Item {
    // challenge 1 - pass the arguments in private state
    constructor(
        private _id: string = "",
        private _item: string = "",
        private _checked: boolean = false
    ) {}
}