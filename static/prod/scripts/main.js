(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var ModalWindow_1 = require("./modules/ModalWindow");
document.addEventListener("DOMContentLoaded", function () {
    var modalWindow = new ModalWindow_1.ModalWindow();
    // events
    var button = document.querySelector("#button");
    button.addEventListener("click", function () {
        if (!modalWindow.isOpen()) {
            modalWindow.open();
        }
        else {
            modalWindow.close();
        }
    });
});

},{"./modules/ModalWindow":2}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.ModalWindow = void 0;
var ModalWindow = /** @class */ (function () {
    function ModalWindow(className) {
        if (className === void 0) { className = ""; }
        this.baseClass = "modal-window";
        this.baseId = "modal-window-" + ModalWindow.modalWindowsCount;
        this.baseHtml = "\n        <div id=\"" + this.baseId + "\" class=\"" + this.baseClass + "\">\n            <div class=\"" + this.baseClass + "-bg\"></div>\n            <div class=\"" + this.baseClass + "-wrapper\">\n                <div class=\"" + this.baseClass + "-header\">\n                    <div class=\"" + this.baseClass + "-close\">\n                        Back\n                    </div>\n                    <div class=\"" + this.baseClass + "-title\">\n                        <div class=\"wrapper\">\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"" + this.baseClass + "-content\">\n                    <div class=\"wrapper\">\n                        \n                    </div>\n                </div>\n                <div class=\"" + this.baseClass + "-footer\">\n                </div>\n            </div>\n        </div>\n    ";
        var temp = document.createElement("div");
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
    ModalWindow.prototype.open = function () {
        if (!this.isOpen()) {
            document.body.classList.add(this.baseClass + "-open");
            this.modalWindow.classList.add("open");
        }
    };
    ModalWindow.prototype.close = function () {
        if (this.isOpen()) {
            document.body.classList.remove(this.baseClass + "-open");
            this.modalWindow.classList.remove("open");
        }
    };
    ModalWindow.prototype.isOpen = function () {
        return this.modalWindow.classList.contains("open");
    };
    ModalWindow.prototype.initEvents = function () {
        this.modalWindowCloseButton.addEventListener("click", function () {
            this.close();
        }.bind(this));
        this.modalWindowBg.addEventListener("click", function () {
            this.close();
        }.bind(this));
    };
    ModalWindow.prototype.setContent = function (htmlStringContent) {
        this.modalWindow.querySelector("." + this.baseClass + "-content .wrapper")
            .innerHTML = htmlStringContent;
    };
    ModalWindow.prototype.setTitle = function (htmlStringContent) {
        this.modalWindow.querySelector("." + this.baseClass + "-title .wrapper")
            .innerHTML = htmlStringContent;
    };
    ModalWindow.modalWindowsCount = 0;
    return ModalWindow;
}());
exports.ModalWindow = ModalWindow;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLnRzIiwiZGV2L3NjcmlwdHMvbW9kdWxlcy9Nb2RhbFdpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEscURBQWtEO0FBRWxELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUUxQyxJQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUV0QyxTQUFTO0lBQ1QsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdkIsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDSCxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDOzs7Ozs7QUNoQkg7SUFrQ0kscUJBQVksU0FBc0I7UUFBdEIsMEJBQUEsRUFBQSxjQUFzQjtRQWhDMUIsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQUNuQyxXQUFNLEdBQVcsZUFBZSxHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQU1qRSxhQUFRLEdBQVcseUJBQ1osSUFBSSxDQUFDLE1BQU0sbUJBQVksSUFBSSxDQUFDLFNBQVMsc0NBQzlCLElBQUksQ0FBQyxTQUFTLCtDQUNkLElBQUksQ0FBQyxTQUFTLGtEQUNWLElBQUksQ0FBQyxTQUFTLHFEQUNWLElBQUksQ0FBQyxTQUFTLDhHQUdkLElBQUksQ0FBQyxTQUFTLG1OQU1sQixJQUFJLENBQUMsU0FBUyw2S0FLZCxJQUFJLENBQUMsU0FBUyxpRkFJdkMsQ0FBQztRQUdFLElBQU0sSUFBSSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtB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WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHtNb2RhbFdpbmRvd30gZnJvbSBcIi4vbW9kdWxlcy9Nb2RhbFdpbmRvd1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IG1vZGFsV2luZG93ID0gbmV3IE1vZGFsV2luZG93KCk7XG5cbiAgICAvLyBldmVudHNcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvblwiKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIW1vZGFsV2luZG93LmlzT3BlbigpKSB7XG4gICAgICAgICAgICBtb2RhbFdpbmRvdy5vcGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RhbFdpbmRvdy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn0pOyIsImV4cG9ydCBjbGFzcyBNb2RhbFdpbmRvdyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgbW9kYWxXaW5kb3dzQ291bnQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBiYXNlQ2xhc3M6IHN0cmluZyA9IFwibW9kYWwtd2luZG93XCI7XG4gICAgcHJpdmF0ZSBiYXNlSWQ6IHN0cmluZyA9IFwibW9kYWwtd2luZG93LVwiICsgTW9kYWxXaW5kb3cubW9kYWxXaW5kb3dzQ291bnQ7XG5cbiAgICBwcml2YXRlIG1vZGFsV2luZG93OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIG1vZGFsV2luZG93Q2xvc2VCdXR0b246IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgbW9kYWxXaW5kb3dCZzogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGJhc2VIdG1sOiBzdHJpbmcgPSBgXG4gICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuYmFzZUlkfVwiIGNsYXNzPVwiJHt0aGlzLmJhc2VDbGFzc31cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuYmFzZUNsYXNzfS1iZ1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5iYXNlQ2xhc3N9LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHt0aGlzLmJhc2VDbGFzc30taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuYmFzZUNsYXNzfS1jbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmFja1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5iYXNlQ2xhc3N9LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuYmFzZUNsYXNzfS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5iYXNlQ2xhc3N9LWZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWU6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgY29uc3QgdGVtcDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0ZW1wLmlubmVySFRNTCA9IHRoaXMuYmFzZUh0bWw7XG4gICAgICAgIHRoaXMubW9kYWxXaW5kb3cgPSB0ZW1wLnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyB0aGlzLmJhc2VJZCk7XG5cbiAgICAgICAgaWYgKGNsYXNzTmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9kYWxXaW5kb3dDbG9zZUJ1dHRvbiA9IHRoaXMubW9kYWxXaW5kb3dcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgdGhpcy5iYXNlQ2xhc3MgKyBcIi1jbG9zZVwiKTtcbiAgICAgICAgdGhpcy5tb2RhbFdpbmRvd0JnID0gdGhpcy5tb2RhbFdpbmRvd1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyB0aGlzLmJhc2VDbGFzcyArIFwiLWJnXCIpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbFdpbmRvdyk7XG4gICAgICAgIE1vZGFsV2luZG93Lm1vZGFsV2luZG93c0NvdW50Kys7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0aGlzLmJhc2VDbGFzcyArIFwiLW9wZW5cIik7XG4gICAgICAgICAgICB0aGlzLm1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYmFzZUNsYXNzICsgXCItb3BlblwiKTtcbiAgICAgICAgICAgIHRoaXMubW9kYWxXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbFdpbmRvdy5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb2RhbFdpbmRvd0Nsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLm1vZGFsV2luZG93QmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDb250ZW50KGh0bWxTdHJpbmdDb250ZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKFwiLlwiICsgdGhpcy5iYXNlQ2xhc3MgKyBcIi1jb250ZW50IC53cmFwcGVyXCIpXG4gICAgICAgICAgICAuaW5uZXJIVE1MID0gaHRtbFN0cmluZ0NvbnRlbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFRpdGxlKGh0bWxTdHJpbmdDb250ZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKFwiLlwiICsgdGhpcy5iYXNlQ2xhc3MgKyBcIi10aXRsZSAud3JhcHBlclwiKVxuICAgICAgICAgICAgLmlubmVySFRNTCA9IGh0bWxTdHJpbmdDb250ZW50O1xuICAgIH1cbn0iXX0=
