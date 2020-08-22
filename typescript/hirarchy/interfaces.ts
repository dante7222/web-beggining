interface Rect {
    readonly id: string // immutable
    color?: string // ? - means optional can not implement
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    // necessary
    id: "1234",
    size: {
        width: 10,
        height: 20
    },
    //not required
    color: "green"
};

let rect2 = {} as Rect;
let rect3 = <Rect>{};
// rect2 = 1;  Rect intefaace only

//inheritance
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    color: "",
    id: "",
    size: {
        height: 0,
        width: 0
    },
    getArea(): number {
        return 10
    }
}

// class implements interface same as in java
interface ICLock {
    time: Date;

    setTime(date: Date): void
}

class Clock implements ICLock {
    time: Date = new Date();

    setTime(date: Date): void {
        this.time = date;
    };
}

// ====
interface Styles {
    [key: string]: string // variable with this type can use strings only
}

const css: Styles = {
    border: "hello"
}
