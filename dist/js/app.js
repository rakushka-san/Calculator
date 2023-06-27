(()=>{"use strict";var e,a,r={422:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0});var r=function(){function e(){}return Object.defineProperty(e,"displayUpdate",{set:function(a){e._displayUpdate=a},enumerable:!1,configurable:!0}),Object.defineProperty(e,"displayValue",{get:function(){return e._displayValue},enumerable:!1,configurable:!0}),e.buttonHandler=function(a){switch(a.type){case"number":e.numberHandler(a);break;case"operation":e.operationHandler(a);break;case"action":e.actionHandler(a)}e._displayUpdate()},e.numberHandler=function(a){e._displayValue.length!=e._maxLength&&("."===a.value&&-1!==e.displayValue.indexOf(".")||("0"!==e._displayValue||"."!==a.value?"0"!==e._displayValue?e._displayValue+=a.value:e._displayValue=a.value:e._displayValue+=a.value))},e.operationHandler=function(a){void 0!==e._operator&&e.calculate(),e._operator=a.value,e._previousOperand=parseFloat(e._displayValue),e._displayValue="0"},e.actionHandler=function(a){switch(a.value){case"equals":e.calculate(),e._currentOperand=e._previousOperand=e._operator=void 0;break;case"C":e._displayValue="0",e._currentOperand=e._previousOperand=e._operator=void 0;break;case"back":e._displayValue=e.displayValue.slice(0,-1),""===e._displayValue&&(e._displayValue="0")}},e.calculate=function(){var a;switch(e._currentOperand=parseFloat(e._displayValue),e._operator){case"+":a=e._previousOperand+e._currentOperand;break;case"-":a=e._previousOperand-e._currentOperand;break;case"*":a=e._previousOperand*e._currentOperand;break;case"/":if(0===e._currentOperand){a=0;break}a=e._previousOperand/e._currentOperand;break;case"%":a=e._previousOperand*(e._currentOperand/100);break;default:a=e._currentOperand}var r=a.toString();r.length>e._maxLength&&(r=r.slice(0,e._maxLength-2),r+=".."),e._displayValue=r},e._maxLength=12,e._displayValue="0",e}();a.default=r}},n={};e=function e(a){var t=n[a];if(void 0!==t)return t.exports;var u=n[a]={exports:{}};return r[a](u,u.exports,e),u.exports}(422),a=function(){function a(){}return a.init=function(){a.display=document.querySelector("#field"),a.buttons=document.querySelectorAll(".cell"),e.default.displayUpdate=function(){a.display.innerHTML=e.default.displayValue},a.buttons.forEach((function(a){a.addEventListener("click",(function(a){var r=a.target.dataset,n=r.type,t=r.value;e.default.buttonHandler({type:n,value:t})}))}))},a}(),document.addEventListener("DOMContentLoaded",a.init)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9YLE9BSEFFLEVBQW9CSixHQUFVRyxFQUFRQSxFQUFPRCxRQUFTSCxHQUcvQ0ksRUFBT0QsT0FDZixDRnRCQSxNQUVBLDBCQW9CQSxRQWhCa0IsRUFBQUcsS0FBZCxXQUNJQyxFQUFJQyxRQUFVQyxTQUFTQyxjQUFjLFVBQ3JDSCxFQUFJSSxRQUFVRixTQUFTRyxpQkFBaUIsU0FFeEMsVUFBV3RDLGNBQWdCLFdBQ3ZCaUMsRUFBSUMsUUFBUUssVUFBWSxVQUFXMUIsWUFDdkMsRUFFQW9CLEVBQUlJLFFBQVFHLFNBQVEsU0FBQW5DLEdBQ2hCQSxFQUFPb0MsaUJBQWlCLFNBQVMsU0FBQ0MsR0FDOUIsSUFDTSxFQURVQSxFQUFNQyxPQUNVQyxRQUF4QnRDLEVBQUksT0FBRU0sRUFBSyxRQUNuQixVQUFXUixjQUFjLENBQUNFLEtBQUksRUFBRU0sTUFBSyxHQUN6QyxHQUNKLEdBQ0osRUFDSixFQXBCQSxHQXNCQXVCLFNBQVNNLGlCQUFpQixtQkFBb0JSLEVBQUlELEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vYXNzZXRzL3RzL2FwcC50cyIsIndlYnBhY2s6Ly9jYWxjdWxhdG9yLy4vYXNzZXRzL3RzL0NhbGN1bGF0b3IudHMiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9DYWxjdWxhdG9yXCI7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZGlzcGxheTogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBidXR0b25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgQXBwLmRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmllbGQnKTtcclxuICAgICAgICBBcHAuYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcblxyXG4gICAgICAgIENhbGN1bGF0b3IuZGlzcGxheVVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgQXBwLmRpc3BsYXkuaW5uZXJIVE1MID0gQ2FsY3VsYXRvci5kaXNwbGF5VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBcHAuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBlbGVtZW50LmRhdGFzZXQ7XHJcbiAgICAgICAgICAgICAgICBDYWxjdWxhdG9yLmJ1dHRvbkhhbmRsZXIoe3R5cGUsIHZhbHVlfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgQXBwLmluaXQpO1xyXG4iLCJpbnRlcmZhY2UgSUJ1dHRvbiB7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxjdWxhdG9yIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9tYXhMZW5ndGg6IG51bWJlciA9IDEyO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2Rpc3BsYXlWYWx1ZTogc3RyaW5nID0gXCIwXCI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudE9wZXJhbmQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3RhdGljIF9wcmV2aW91c09wZXJhbmQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3RhdGljIF9vcGVyYXRvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2Rpc3BsYXlVcGRhdGU6IEZ1bmN0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IGRpc3BsYXlVcGRhdGUoZGlzcGxheVVwZGF0ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICBDYWxjdWxhdG9yLl9kaXNwbGF5VXBkYXRlID0gZGlzcGxheVVwZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBkaXNwbGF5VmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQ2FsY3VsYXRvci5fZGlzcGxheVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYnV0dG9uSGFuZGxlcihidXR0b246IElCdXR0b24pOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKGJ1dHRvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgICAgICBDYWxjdWxhdG9yLm51bWJlckhhbmRsZXIoYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdvcGVyYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgQ2FsY3VsYXRvci5vcGVyYXRpb25IYW5kbGVyKGJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnYWN0aW9uJzpcclxuICAgICAgICAgICAgICAgIENhbGN1bGF0b3IuYWN0aW9uSGFuZGxlcihidXR0b24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDYWxjdWxhdG9yLl9kaXNwbGF5VXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbnVtYmVySGFuZGxlcihidXR0b246IElCdXR0b24pOiB2b2lkIHtcclxuICAgICAgICBpZiAoQ2FsY3VsYXRvci5fZGlzcGxheVZhbHVlLmxlbmd0aCA9PSBDYWxjdWxhdG9yLl9tYXhMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJ1dHRvbi52YWx1ZSA9PT0gJy4nICYmIENhbGN1bGF0b3IuZGlzcGxheVZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENhbGN1bGF0b3IuX2Rpc3BsYXlWYWx1ZSA9PT0gJzAnICYmIGJ1dHRvbi52YWx1ZSA9PT0gXCIuXCIpIHtcclxuICAgICAgICAgICAgQ2FsY3VsYXRvci5fZGlzcGxheVZhbHVlICs9IGJ1dHRvbi52YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKENhbGN1bGF0b3IuX2Rpc3BsYXlWYWx1ZSA9PT0gJzAnKSB7XHJcbiAgICAgICAgICAgIENhbGN1bGF0b3IuX2Rpc3BsYXlWYWx1ZSA9IGJ1dHRvbi52YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ2FsY3VsYXRvci5fZGlzcGxheVZhbHVlICs9IGJ1dHRvbi52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvcGVyYXRpb25IYW5kbGVyKGJ1dHRvbjogSUJ1dHRvbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChDYWxjdWxhdG9yLl9vcGVyYXRvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIENhbGN1bGF0b3IuY2FsY3VsYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDYWxjdWxhdG9yLl9vcGVyYXRvciA9IGJ1dHRvbi52YWx1ZTtcclxuICAgICAgICBDYWxjdWxhdG9yLl9wcmV2aW91c09wZXJhbmQgPSBwYXJzZUZsb2F0KENhbGN1bGF0b3IuX2Rpc3BsYXlWYWx1ZSk7XHJcbiAgICAgICAgQ2FsY3VsYXRvci5fZGlzcGxheVZhbHVlID0gJzAnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGFjdGlvbkhhbmRsZXIoYnV0dG9uOiBJQnV0dG9uKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoKGJ1dHRvbi52YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdlcXVhbHMnOlxyXG4gICAgICAgICAgICAgICAgQ2FsY3VsYXRvci5jYWxjdWxhdGUoKTtcclxuICAgICAgICAgICAgICAgIENhbGN1bGF0b3IuX2N1cnJlbnRPcGVyYW5kID0gQ2FsY3VsYXRvci5fcHJldmlvdXNPcGVyYW5kID0gQ2FsY3VsYXRvci5fb3BlcmF0b3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnQyc6XHJcbiAgICAgICAgICAgICAgICBDYWxjdWxhdG9yLl9kaXNwbGF5VmFsdWUgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICBDYWxjdWxhdG9yLl9jdXJyZW50T3BlcmFuZCA9IENhbGN1bGF0b3IuX3ByZXZpb3VzT3BlcmFuZCA9IENhbGN1bGF0b3IuX29wZXJhdG9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2JhY2snOlxyXG4gICAgICAgICAgICAgICAgQ2FsY3VsYXRvci5fZGlzcGxheVZhbHVlID0gQ2FsY3VsYXRvci5kaXNwbGF5VmFsdWUuc2xpY2UoMCwgLTEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKENhbGN1bGF0b3IuX2Rpc3BsYXlWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBDYWxjdWxhdG9yLl9kaXNwbGF5VmFsdWUgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2FsY3VsYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIENhbGN1bGF0b3IuX2N1cnJlbnRPcGVyYW5kID0gcGFyc2VGbG9hdChDYWxjdWxhdG9yLl9kaXNwbGF5VmFsdWUpO1xyXG4gICAgICAgIGxldCByZXM6IG51bWJlcjtcclxuXHJcbiAgICAgICAgc3dpdGNoIChDYWxjdWxhdG9yLl9vcGVyYXRvcikge1xyXG4gICAgICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgICAgICAgIHJlcyA9IENhbGN1bGF0b3IuX3ByZXZpb3VzT3BlcmFuZCArIENhbGN1bGF0b3IuX2N1cnJlbnRPcGVyYW5kO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgICAgICAgcmVzID0gQ2FsY3VsYXRvci5fcHJldmlvdXNPcGVyYW5kIC0gQ2FsY3VsYXRvci5fY3VycmVudE9wZXJhbmQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICAgICAgICByZXMgPSBDYWxjdWxhdG9yLl9wcmV2aW91c09wZXJhbmQgKiBDYWxjdWxhdG9yLl9jdXJyZW50T3BlcmFuZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcvJzpcclxuICAgICAgICAgICAgICAgIGlmIChDYWxjdWxhdG9yLl9jdXJyZW50T3BlcmFuZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXMgPSBDYWxjdWxhdG9yLl9wcmV2aW91c09wZXJhbmQgLyBDYWxjdWxhdG9yLl9jdXJyZW50T3BlcmFuZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICclJzpcclxuICAgICAgICAgICAgICAgIHJlcyA9IENhbGN1bGF0b3IuX3ByZXZpb3VzT3BlcmFuZCAqIChDYWxjdWxhdG9yLl9jdXJyZW50T3BlcmFuZCAvIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlcyA9IENhbGN1bGF0b3IuX2N1cnJlbnRPcGVyYW5kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlc1N0cmluZyA9IHJlcy50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBpZiAocmVzU3RyaW5nLmxlbmd0aCA+IENhbGN1bGF0b3IuX21heExlbmd0aCkge1xyXG4gICAgICAgICAgICByZXNTdHJpbmcgPSByZXNTdHJpbmcuc2xpY2UoMCwgQ2FsY3VsYXRvci5fbWF4TGVuZ3RoIC0gMik7XHJcbiAgICAgICAgICAgIHJlc1N0cmluZyArPSBcIi4uXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENhbGN1bGF0b3IuX2Rpc3BsYXlWYWx1ZSA9IHJlc1N0cmluZztcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIl0sIm5hbWVzIjpbImRpc3BsYXlVcGRhdGUiLCJDYWxjdWxhdG9yIiwiX2Rpc3BsYXlVcGRhdGUiLCJfZGlzcGxheVZhbHVlIiwiYnV0dG9uSGFuZGxlciIsImJ1dHRvbiIsInR5cGUiLCJudW1iZXJIYW5kbGVyIiwib3BlcmF0aW9uSGFuZGxlciIsImFjdGlvbkhhbmRsZXIiLCJsZW5ndGgiLCJfbWF4TGVuZ3RoIiwidmFsdWUiLCJkaXNwbGF5VmFsdWUiLCJpbmRleE9mIiwidW5kZWZpbmVkIiwiX29wZXJhdG9yIiwiY2FsY3VsYXRlIiwiX3ByZXZpb3VzT3BlcmFuZCIsInBhcnNlRmxvYXQiLCJfY3VycmVudE9wZXJhbmQiLCJzbGljZSIsInJlcyIsInJlc1N0cmluZyIsInRvU3RyaW5nIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJpbml0IiwiQXBwIiwiZGlzcGxheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImRhdGFzZXQiXSwic291cmNlUm9vdCI6IiJ9