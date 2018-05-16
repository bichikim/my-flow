/**
 * @flow
 * @author Bichi Kim <bichi@live.co.kr>
 */
let isDone: boolean = false

let decimal: number = 6

let color: string = 'blue'

let list1: number[] = [1, 2, 3]

let list2: Array<number> = [1, 2, 3]

let x: [string, number] = ['hello', 2]

let notSure: any = 4;

function logUser(): void {
  console.log('called logUser')
}

// eslint-disable-next-line no-undefined,no-undef-init
let unusable: void = undefined

interface ILabel {
  name: string,
  color: string
}

interface ILabelPaper extends ILabel {
  thickness: number
}

class Label {
  data: ILabel
  constructor(options: ILabel) {
    this.data = options
  }
}


const label: ILabel = {name: 'foo', color: 'red'}

const labelPaper: ILabelPaper = {...label, thickness: 5}

const label2: Label = new Label(label)

logUser()

console.log(isDone, decimal, color, list1, list2, x, notSure, unusable, label2, labelPaper)

export default (): number => {
  return 1
}