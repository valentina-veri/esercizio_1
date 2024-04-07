export type Task = {
    id: number,
    title: string,
    categoria: string,
    completato: boolean
}

export class TaskAddDTO {
    constructor(
        public title: string ="",
        public categoria: string ="",
        public completato: boolean = false
    ) {

    }
}