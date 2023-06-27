import Calculator from "./Calculator";

class App {
    private static display: HTMLElement;
    private static buttons: NodeListOf<HTMLElement>;

    public static init(): void {
        App.display = document.querySelector('#field');
        App.buttons = document.querySelectorAll('.cell');

        Calculator.displayUpdate = () => {
            App.display.innerHTML = Calculator.displayValue;
        }

        App.buttons.forEach(button => {
            button.addEventListener('click', (event: Event) => {
                const element = event.target as HTMLElement;
                const { type, value } = element.dataset;
                Calculator.buttonHandler({type, value});
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', App.init);
