/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Attribute, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation, } from '@angular/core';
import { NgbToastConfig } from './toast-config';
/**
 * This directive allows the usage of HTML markup or other directives
 * inside of the toast's header.
 *
 * \@since 5.0.0
 */
export class NgbToastHeader {
}
NgbToastHeader.decorators = [
    { type: Directive, args: [{ selector: '[ngbToastHeader]' },] }
];
/**
 * Toasts provide feedback messages as notifications to the user.
 * Goal is to mimic the push notifications available both on mobile and desktop operating systems.
 *
 * \@since 5.0.0
 */
export class NgbToast {
    /**
     * @param {?} ariaLive
     * @param {?} config
     */
    constructor(ariaLive, config) {
        this.ariaLive = ariaLive;
        /**
         * A template like `<ng-template ngbToastHeader></ng-template>` can be
         * used in the projected content to allow markup usage.
         */
        this.contentHeaderTpl = null;
        /**
         * An event fired immediately when toast's `hide()` method has been called.
         * It can only occur in 2 different scenarios:
         * - `autohide` timeout fires
         * - user clicks on a closing cross (&times)
         *
         * Additionally this output is purely informative. The toast won't disappear. It's up to the user to take care of
         * that.
         */
        this.hideOutput = new EventEmitter();
        if (this.ariaLive == null) {
            this.ariaLive = config.ariaLive;
        }
        this.delay = config.delay;
        this.autohide = config.autohide;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() { this._init(); }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('autohide' in changes) {
            this._clearTimeout();
            this._init();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this._clearTimeout();
        this.hideOutput.emit();
    }
    /**
     * @private
     * @return {?}
     */
    _init() {
        if (this.autohide && !this._timeoutID) {
            this._timeoutID = setTimeout((/**
             * @return {?}
             */
            () => this.hide()), this.delay);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _clearTimeout() {
        if (this._timeoutID) {
            clearTimeout(this._timeoutID);
            this._timeoutID = null;
        }
    }
}
NgbToast.decorators = [
    { type: Component, args: [{
                selector: 'ngb-toast',
                exportAs: 'ngbToast',
                encapsulation: ViewEncapsulation.None,
                host: {
                    'role': 'alert',
                    '[attr.aria-live]': 'ariaLive',
                    'aria-atomic': 'true',
                    '[class.toast]': 'true',
                    '[class.show]': 'true',
                    '[class.autohide]': 'autohide',
                },
                template: `
    <ng-template #headerTpl>
      <strong class="mr-auto">{{header}}</strong>
    </ng-template>
    <ng-template [ngIf]="contentHeaderTpl || header">
      <div class="toast-header">
        <ng-template [ngTemplateOutlet]="contentHeaderTpl || headerTpl"></ng-template>
        <button type="button" class="close" aria-label="Close" i18n-aria-label="@@ngb.toast.close-aria" (click)="hide()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </ng-template>
    <div class="toast-body">
      <ng-content></ng-content>
    </div>
  `,
                styles: [".ngb-toasts{position:fixed;top:0;right:0;margin:.5em;z-index:1200}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}"]
            }] }
];
/** @nocollapse */
NgbToast.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['aria-live',] }] },
    { type: NgbToastConfig }
];
NgbToast.propDecorators = {
    delay: [{ type: Input }],
    autohide: [{ type: Input }],
    header: [{ type: Input }],
    contentHeaderTpl: [{ type: ContentChild, args: [NgbToastHeader, { read: TemplateRef, static: true },] }],
    hideOutput: [{ type: Output, args: ['hide',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgbToast.prototype._timeoutID;
    /**
     * Delay after which the toast will hide (ms).
     * default: `500` (ms) (inherited from NgbToastConfig)
     * @type {?}
     */
    NgbToast.prototype.delay;
    /**
     * Auto hide the toast after a delay in ms.
     * default: `true` (inherited from NgbToastConfig)
     * @type {?}
     */
    NgbToast.prototype.autohide;
    /**
     * Text to be used as toast's header.
     * Ignored if a ContentChild template is specified at the same time.
     * @type {?}
     */
    NgbToast.prototype.header;
    /**
     * A template like `<ng-template ngbToastHeader></ng-template>` can be
     * used in the projected content to allow markup usage.
     * @type {?}
     */
    NgbToast.prototype.contentHeaderTpl;
    /**
     * An event fired immediately when toast's `hide()` method has been called.
     * It can only occur in 2 different scenarios:
     * - `autohide` timeout fires
     * - user clicks on a closing cross (&times)
     *
     * Additionally this output is purely informative. The toast won't disappear. It's up to the user to take care of
     * that.
     * @type {?}
     */
    NgbToast.prototype.hideOutput;
    /** @type {?} */
    NgbToast.prototype.ariaLive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbInRvYXN0L3RvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBUzlDLE1BQU0sT0FBTyxjQUFjOzs7WUFEMUIsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFDOzs7Ozs7OztBQXdDekMsTUFBTSxPQUFPLFFBQVE7Ozs7O0lBdUNuQixZQUEyQyxRQUFnQixFQUFFLE1BQXNCO1FBQXhDLGFBQVEsR0FBUixRQUFRLENBQVE7Ozs7O1FBYk0scUJBQWdCLEdBQTJCLElBQUksQ0FBQzs7Ozs7Ozs7OztRQVdqRyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUdwRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELGtCQUFrQixLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBRXRDLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVPLEtBQUs7UUFDWCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7Ozs7O0lBRU8sYUFBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNILENBQUM7OztZQXRHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNKLE1BQU0sRUFBRSxPQUFPO29CQUNmLGtCQUFrQixFQUFFLFVBQVU7b0JBQzlCLGFBQWEsRUFBRSxNQUFNO29CQUNyQixlQUFlLEVBQUUsTUFBTTtvQkFDdkIsY0FBYyxFQUFFLE1BQU07b0JBQ3RCLGtCQUFrQixFQUFFLFVBQVU7aUJBQy9CO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7O2FBRUY7Ozs7eUNBd0NjLFNBQVMsU0FBQyxXQUFXO1lBdkY1QixjQUFjOzs7b0JBd0RuQixLQUFLO3VCQU1MLEtBQUs7cUJBTUwsS0FBSzsrQkFNTCxZQUFZLFNBQUMsY0FBYyxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO3lCQVc5RCxNQUFNLFNBQUMsTUFBTTs7Ozs7OztJQW5DZCw4QkFBbUI7Ozs7OztJQU1uQix5QkFBdUI7Ozs7OztJQU12Qiw0QkFBMkI7Ozs7OztJQU0zQiwwQkFBd0I7Ozs7OztJQU14QixvQ0FBaUg7Ozs7Ozs7Ozs7O0lBV2pILDhCQUFzRDs7SUFFMUMsNEJBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQXR0cmlidXRlLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtOZ2JUb2FzdENvbmZpZ30gZnJvbSAnLi90b2FzdC1jb25maWcnO1xuXG4vKipcbiAqIFRoaXMgZGlyZWN0aXZlIGFsbG93cyB0aGUgdXNhZ2Ugb2YgSFRNTCBtYXJrdXAgb3Igb3RoZXIgZGlyZWN0aXZlc1xuICogaW5zaWRlIG9mIHRoZSB0b2FzdCdzIGhlYWRlci5cbiAqXG4gKiBAc2luY2UgNS4wLjBcbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbbmdiVG9hc3RIZWFkZXJdJ30pXG5leHBvcnQgY2xhc3MgTmdiVG9hc3RIZWFkZXIge1xufVxuXG4vKipcbiAqIFRvYXN0cyBwcm92aWRlIGZlZWRiYWNrIG1lc3NhZ2VzIGFzIG5vdGlmaWNhdGlvbnMgdG8gdGhlIHVzZXIuXG4gKiBHb2FsIGlzIHRvIG1pbWljIHRoZSBwdXNoIG5vdGlmaWNhdGlvbnMgYXZhaWxhYmxlIGJvdGggb24gbW9iaWxlIGFuZCBkZXNrdG9wIG9wZXJhdGluZyBzeXN0ZW1zLlxuICpcbiAqIEBzaW5jZSA1LjAuMFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2ItdG9hc3QnLFxuICBleHBvcnRBczogJ25nYlRvYXN0JyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICdyb2xlJzogJ2FsZXJ0JyxcbiAgICAnW2F0dHIuYXJpYS1saXZlXSc6ICdhcmlhTGl2ZScsXG4gICAgJ2FyaWEtYXRvbWljJzogJ3RydWUnLFxuICAgICdbY2xhc3MudG9hc3RdJzogJ3RydWUnLFxuICAgICdbY2xhc3Muc2hvd10nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hdXRvaGlkZV0nOiAnYXV0b2hpZGUnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjaGVhZGVyVHBsPlxuICAgICAgPHN0cm9uZyBjbGFzcz1cIm1yLWF1dG9cIj57e2hlYWRlcn19PC9zdHJvbmc+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiY29udGVudEhlYWRlclRwbCB8fCBoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1oZWFkZXJcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRIZWFkZXJUcGwgfHwgaGVhZGVyVHBsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIGkxOG4tYXJpYS1sYWJlbD1cIkBAbmdiLnRvYXN0LmNsb3NlLWFyaWFcIiAoY2xpY2spPVwiaGlkZSgpXCI+XG4gICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1ib2R5XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ2JUb2FzdCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsXG4gICAgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfdGltZW91dElEO1xuXG4gIC8qKlxuICAgKiBEZWxheSBhZnRlciB3aGljaCB0aGUgdG9hc3Qgd2lsbCBoaWRlIChtcykuXG4gICAqIGRlZmF1bHQ6IGA1MDBgIChtcykgKGluaGVyaXRlZCBmcm9tIE5nYlRvYXN0Q29uZmlnKVxuICAgKi9cbiAgQElucHV0KCkgZGVsYXk6IG51bWJlcjtcblxuICAvKipcbiAgICogQXV0byBoaWRlIHRoZSB0b2FzdCBhZnRlciBhIGRlbGF5IGluIG1zLlxuICAgKiBkZWZhdWx0OiBgdHJ1ZWAgKGluaGVyaXRlZCBmcm9tIE5nYlRvYXN0Q29uZmlnKVxuICAgKi9cbiAgQElucHV0KCkgYXV0b2hpZGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRleHQgdG8gYmUgdXNlZCBhcyB0b2FzdCdzIGhlYWRlci5cbiAgICogSWdub3JlZCBpZiBhIENvbnRlbnRDaGlsZCB0ZW1wbGF0ZSBpcyBzcGVjaWZpZWQgYXQgdGhlIHNhbWUgdGltZS5cbiAgICovXG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHRlbXBsYXRlIGxpa2UgYDxuZy10ZW1wbGF0ZSBuZ2JUb2FzdEhlYWRlcj48L25nLXRlbXBsYXRlPmAgY2FuIGJlXG4gICAqIHVzZWQgaW4gdGhlIHByb2plY3RlZCBjb250ZW50IHRvIGFsbG93IG1hcmt1cCB1c2FnZS5cbiAgICovXG4gIEBDb250ZW50Q2hpbGQoTmdiVG9hc3RIZWFkZXIsIHtyZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlfSkgY29udGVudEhlYWRlclRwbDogVGVtcGxhdGVSZWY8YW55PnwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEFuIGV2ZW50IGZpcmVkIGltbWVkaWF0ZWx5IHdoZW4gdG9hc3QncyBgaGlkZSgpYCBtZXRob2QgaGFzIGJlZW4gY2FsbGVkLlxuICAgKiBJdCBjYW4gb25seSBvY2N1ciBpbiAyIGRpZmZlcmVudCBzY2VuYXJpb3M6XG4gICAqIC0gYGF1dG9oaWRlYCB0aW1lb3V0IGZpcmVzXG4gICAqIC0gdXNlciBjbGlja3Mgb24gYSBjbG9zaW5nIGNyb3NzICgmdGltZXMpXG4gICAqXG4gICAqIEFkZGl0aW9uYWxseSB0aGlzIG91dHB1dCBpcyBwdXJlbHkgaW5mb3JtYXRpdmUuIFRoZSB0b2FzdCB3b24ndCBkaXNhcHBlYXIuIEl0J3MgdXAgdG8gdGhlIHVzZXIgdG8gdGFrZSBjYXJlIG9mXG4gICAqIHRoYXQuXG4gICAqL1xuICBAT3V0cHV0KCdoaWRlJykgaGlkZU91dHB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihAQXR0cmlidXRlKCdhcmlhLWxpdmUnKSBwdWJsaWMgYXJpYUxpdmU6IHN0cmluZywgY29uZmlnOiBOZ2JUb2FzdENvbmZpZykge1xuICAgIGlmICh0aGlzLmFyaWFMaXZlID09IG51bGwpIHtcbiAgICAgIHRoaXMuYXJpYUxpdmUgPSBjb25maWcuYXJpYUxpdmU7XG4gICAgfVxuICAgIHRoaXMuZGVsYXkgPSBjb25maWcuZGVsYXk7XG4gICAgdGhpcy5hdXRvaGlkZSA9IGNvbmZpZy5hdXRvaGlkZTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHsgdGhpcy5faW5pdCgpOyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICgnYXV0b2hpZGUnIGluIGNoYW5nZXMpIHtcbiAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpO1xuICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KCk7XG4gICAgdGhpcy5oaWRlT3V0cHV0LmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXQoKSB7XG4gICAgaWYgKHRoaXMuYXV0b2hpZGUgJiYgIXRoaXMuX3RpbWVvdXRJRCkge1xuICAgICAgdGhpcy5fdGltZW91dElEID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmhpZGUoKSwgdGhpcy5kZWxheSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXJUaW1lb3V0KCkge1xuICAgIGlmICh0aGlzLl90aW1lb3V0SUQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0SUQpO1xuICAgICAgdGhpcy5fdGltZW91dElEID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==