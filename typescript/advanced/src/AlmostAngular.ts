interface ComponentDecorator {
    selector: string
    template: string
}

function Component(config: ComponentDecorator):any {
    return function <T extends { new(...args: any[]): object }>(Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args);

                let querySelector = document.querySelector(config.selector)!;
                querySelector.innerHTML = config.template;
            }
        }
    }
}

@Component({
    selector: '#card',
    template: ` 
 <div class="card">
   <div class="card-content">
      <span class="card-title">Card Component</span>
   </div>
</div>
    `
})
class CardComponent {
    constructor(public name: string) {

    }

    logName(): void {
        console.log(`Component Name: ${this.name}`);
    }
}
const card:any = new CardComponent("Card Component");
