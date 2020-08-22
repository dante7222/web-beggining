abstract class Component {
    hello2: string
    abstract hello: number

    abstract render(): void

    abstract info(): string

    private static go() {
        console.log("hello")
    }
}

class ComponentImpl extends Component {
    hello: number;

    info(): string {
        return "";
    }

    render(): void {
    }

}
