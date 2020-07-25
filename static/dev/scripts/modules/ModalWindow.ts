export class ModalWindow {
    private static modalWindowsCount: number = 0;
    private baseClass: string = "modal-window";
    private baseId: string = "modal-window-" + ModalWindow.modalWindowsCount;

    private modalWindow: HTMLDivElement;
    private modalWindowCloseButton: HTMLDivElement;
    private modalWindowBg: HTMLDivElement;

    private baseHtml: string = `
        <div id="${this.baseId}" class="${this.baseClass}">
            <div class="${this.baseClass}-bg"></div>
            <div class="${this.baseClass}-wrapper">
                <div class="${this.baseClass}-header">
                    <div class="${this.baseClass}-close">
                        Back
                    </div>
                    <div class="${this.baseClass}-title">
                        <div class="wrapper">
                            
                        </div>
                    </div>
                </div>
                <div class="${this.baseClass}-content">
                    <div class="wrapper">
                        
                    </div>
                </div>
                <div class="${this.baseClass}-footer">
                </div>
            </div>
        </div>
    `;

    constructor(className: string = "") {
        const temp: HTMLDivElement = document.createElement("div");
        temp.innerHTML = this.baseHtml;
        this.modalWindow = temp.querySelector("#" + this.baseId);

        if (className.length > 0) {
            this.modalWindow.classList.add(className);
        }

        this.modalWindowCloseButton = this.modalWindow
            .querySelector("." + this.baseClass + "-close");
        this.modalWindowBg = this.modalWindow
            .querySelector("." + this.baseClass + "-bg");

        document.body.appendChild(this.modalWindow);
        ModalWindow.modalWindowsCount++;
        this.initEvents();
    }

    public open(): void {
        if (!this.isOpen()) {
            document.body.classList.add(this.baseClass + "-open");
            this.modalWindow.classList.add("open");
        }
    }

    public close(): void {
        if (this.isOpen()) {
            document.body.classList.remove(this.baseClass + "-open");
            this.modalWindow.classList.remove("open");
        }
    }

    public isOpen(): boolean {
        return this.modalWindow.classList.contains("open");
    }

    private initEvents(): void {
        this.modalWindowCloseButton.addEventListener("click", function() {
            this.close();
        }.bind(this));

        this.modalWindowBg.addEventListener("click", function() {
            this.close();
        }.bind(this));
    }

    public setContent(htmlStringContent: string): void {
        this.modalWindow.querySelector("." + this.baseClass + "-content .wrapper")
            .innerHTML = htmlStringContent;
    }

    public setTitle(htmlStringContent: string): void {
        this.modalWindow.querySelector("." + this.baseClass + "-title .wrapper")
            .innerHTML = htmlStringContent;
    }
}