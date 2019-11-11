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
var NgbToastHeader = /** @class */ (function () {
    function NgbToastHeader() {
    }
    NgbToastHeader.decorators = [
        { type: Directive, args: [{ selector: '[ngbToastHeader]' },] }
    ];
    return NgbToastHeader;
}());
export { NgbToastHeader };
/**
 * Toasts provide feedback messages as notifications to the user.
 * Goal is to mimic the push notifications available both on mobile and desktop operating systems.
 *
 * \@since 5.0.0
 */
var NgbToast = /** @class */ (function () {
    function NgbToast(ariaLive, config) {
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
    NgbToast.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () { this._init(); };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgbToast.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('autohide' in changes) {
            this._clearTimeout();
            this._init();
        }
    };
    /**
     * @return {?}
     */
    NgbToast.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._clearTimeout();
        this.hideOutput.emit();
    };
    /**
     * @private
     * @return {?}
     */
    NgbToast.prototype._init = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autohide && !this._timeoutID) {
            this._timeoutID = setTimeout((/**
             * @return {?}
             */
            function () { return _this.hide(); }), this.delay);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgbToast.prototype._clearTimeout = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._timeoutID) {
            clearTimeout(this._timeoutID);
            this._timeoutID = null;
        }
    };
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
                    template: "\n    <ng-template #headerTpl>\n      <strong class=\"mr-auto\">{{header}}</strong>\n    </ng-template>\n    <ng-template [ngIf]=\"contentHeaderTpl || header\">\n      <div class=\"toast-header\">\n        <ng-template [ngTemplateOutlet]=\"contentHeaderTpl || headerTpl\"></ng-template>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" i18n-aria-label=\"@@ngb.toast.close-aria\" (click)=\"hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </ng-template>\n    <div class=\"toast-body\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: [".ngb-toasts{position:fixed;top:0;right:0;margin:.5em;z-index:1200}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}"]
                }] }
    ];
    /** @nocollapse */
    NgbToast.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['aria-live',] }] },
        { type: NgbToastConfig }
    ]; };
    NgbToast.propDecorators = {
        delay: [{ type: Input }],
        autohide: [{ type: Input }],
        header: [{ type: Input }],
        contentHeaderTpl: [{ type: ContentChild, args: [NgbToastHeader, { read: TemplateRef, static: true },] }],
        hideOutput: [{ type: Output, args: ['hide',] }]
    };
    return NgbToast;
}());
export { NgbToast };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbInRvYXN0L3RvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7O0FBUTlDO0lBQUE7SUFFQSxDQUFDOztnQkFGQSxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUM7O0lBRXpDLHFCQUFDO0NBQUEsQUFGRCxJQUVDO1NBRFksY0FBYzs7Ozs7OztBQVMzQjtJQXFFRSxrQkFBMkMsUUFBZ0IsRUFBRSxNQUFzQjtRQUF4QyxhQUFRLEdBQVIsUUFBUSxDQUFROzs7OztRQWJNLHFCQUFnQixHQUEyQixJQUFJLENBQUM7Ozs7Ozs7Ozs7UUFXakcsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFHcEQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxxQ0FBa0I7OztJQUFsQixjQUF1QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7OztJQUV0Qyw4QkFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxVQUFVLElBQUksT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7SUFFRCx1QkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVPLHdCQUFLOzs7O0lBQWI7UUFBQSxpQkFJQztRQUhDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVOzs7WUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDOzs7OztJQUVPLGdDQUFhOzs7O0lBQXJCO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7SUFDSCxDQUFDOztnQkF0R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDSixNQUFNLEVBQUUsT0FBTzt3QkFDZixrQkFBa0IsRUFBRSxVQUFVO3dCQUM5QixhQUFhLEVBQUUsTUFBTTt3QkFDckIsZUFBZSxFQUFFLE1BQU07d0JBQ3ZCLGNBQWMsRUFBRSxNQUFNO3dCQUN0QixrQkFBa0IsRUFBRSxVQUFVO3FCQUMvQjtvQkFDRCxRQUFRLEVBQUUsZ21CQWVUOztpQkFFRjs7Ozs2Q0F3Q2MsU0FBUyxTQUFDLFdBQVc7Z0JBdkY1QixjQUFjOzs7d0JBd0RuQixLQUFLOzJCQU1MLEtBQUs7eUJBTUwsS0FBSzttQ0FNTCxZQUFZLFNBQUMsY0FBYyxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDOzZCQVc5RCxNQUFNLFNBQUMsTUFBTTs7SUFvQ2hCLGVBQUM7Q0FBQSxBQXZHRCxJQXVHQztTQXpFWSxRQUFROzs7Ozs7SUFFbkIsOEJBQW1COzs7Ozs7SUFNbkIseUJBQXVCOzs7Ozs7SUFNdkIsNEJBQTJCOzs7Ozs7SUFNM0IsMEJBQXdCOzs7Ozs7SUFNeEIsb0NBQWlIOzs7Ozs7Ozs7OztJQVdqSCw4QkFBc0Q7O0lBRTFDLDRCQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEF0dHJpYnV0ZSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TmdiVG9hc3RDb25maWd9IGZyb20gJy4vdG9hc3QtY29uZmlnJztcblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBhbGxvd3MgdGhlIHVzYWdlIG9mIEhUTUwgbWFya3VwIG9yIG90aGVyIGRpcmVjdGl2ZXNcbiAqIGluc2lkZSBvZiB0aGUgdG9hc3QncyBoZWFkZXIuXG4gKlxuICogQHNpbmNlIDUuMC4wXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25nYlRvYXN0SGVhZGVyXSd9KVxuZXhwb3J0IGNsYXNzIE5nYlRvYXN0SGVhZGVyIHtcbn1cblxuLyoqXG4gKiBUb2FzdHMgcHJvdmlkZSBmZWVkYmFjayBtZXNzYWdlcyBhcyBub3RpZmljYXRpb25zIHRvIHRoZSB1c2VyLlxuICogR29hbCBpcyB0byBtaW1pYyB0aGUgcHVzaCBub3RpZmljYXRpb25zIGF2YWlsYWJsZSBib3RoIG9uIG1vYmlsZSBhbmQgZGVza3RvcCBvcGVyYXRpbmcgc3lzdGVtcy5cbiAqXG4gKiBAc2luY2UgNS4wLjBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdiLXRvYXN0JyxcbiAgZXhwb3J0QXM6ICduZ2JUb2FzdCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGhvc3Q6IHtcbiAgICAncm9sZSc6ICdhbGVydCcsXG4gICAgJ1thdHRyLmFyaWEtbGl2ZV0nOiAnYXJpYUxpdmUnLFxuICAgICdhcmlhLWF0b21pYyc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnRvYXN0XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnNob3ddJzogJ3RydWUnLFxuICAgICdbY2xhc3MuYXV0b2hpZGVdJzogJ2F1dG9oaWRlJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2hlYWRlclRwbD5cbiAgICAgIDxzdHJvbmcgY2xhc3M9XCJtci1hdXRvXCI+e3toZWFkZXJ9fTwvc3Ryb25nPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImNvbnRlbnRIZWFkZXJUcGwgfHwgaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9hc3QtaGVhZGVyXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50SGVhZGVyVHBsIHx8IGhlYWRlclRwbFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBpMThuLWFyaWEtbGFiZWw9XCJAQG5nYi50b2FzdC5jbG9zZS1hcmlhXCIgKGNsaWNrKT1cImhpZGUoKVwiPlxuICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwidG9hc3QtYm9keVwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdiVG9hc3QgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LFxuICAgIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3RpbWVvdXRJRDtcblxuICAvKipcbiAgICogRGVsYXkgYWZ0ZXIgd2hpY2ggdGhlIHRvYXN0IHdpbGwgaGlkZSAobXMpLlxuICAgKiBkZWZhdWx0OiBgNTAwYCAobXMpIChpbmhlcml0ZWQgZnJvbSBOZ2JUb2FzdENvbmZpZylcbiAgICovXG4gIEBJbnB1dCgpIGRlbGF5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEF1dG8gaGlkZSB0aGUgdG9hc3QgYWZ0ZXIgYSBkZWxheSBpbiBtcy5cbiAgICogZGVmYXVsdDogYHRydWVgIChpbmhlcml0ZWQgZnJvbSBOZ2JUb2FzdENvbmZpZylcbiAgICovXG4gIEBJbnB1dCgpIGF1dG9oaWRlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUZXh0IHRvIGJlIHVzZWQgYXMgdG9hc3QncyBoZWFkZXIuXG4gICAqIElnbm9yZWQgaWYgYSBDb250ZW50Q2hpbGQgdGVtcGxhdGUgaXMgc3BlY2lmaWVkIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAqL1xuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcblxuICAvKipcbiAgICogQSB0ZW1wbGF0ZSBsaWtlIGA8bmctdGVtcGxhdGUgbmdiVG9hc3RIZWFkZXI+PC9uZy10ZW1wbGF0ZT5gIGNhbiBiZVxuICAgKiB1c2VkIGluIHRoZSBwcm9qZWN0ZWQgY29udGVudCB0byBhbGxvdyBtYXJrdXAgdXNhZ2UuXG4gICAqL1xuICBAQ29udGVudENoaWxkKE5nYlRvYXN0SGVhZGVyLCB7cmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZX0pIGNvbnRlbnRIZWFkZXJUcGw6IFRlbXBsYXRlUmVmPGFueT58IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBBbiBldmVudCBmaXJlZCBpbW1lZGlhdGVseSB3aGVuIHRvYXN0J3MgYGhpZGUoKWAgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZC5cbiAgICogSXQgY2FuIG9ubHkgb2NjdXIgaW4gMiBkaWZmZXJlbnQgc2NlbmFyaW9zOlxuICAgKiAtIGBhdXRvaGlkZWAgdGltZW91dCBmaXJlc1xuICAgKiAtIHVzZXIgY2xpY2tzIG9uIGEgY2xvc2luZyBjcm9zcyAoJnRpbWVzKVxuICAgKlxuICAgKiBBZGRpdGlvbmFsbHkgdGhpcyBvdXRwdXQgaXMgcHVyZWx5IGluZm9ybWF0aXZlLiBUaGUgdG9hc3Qgd29uJ3QgZGlzYXBwZWFyLiBJdCdzIHVwIHRvIHRoZSB1c2VyIHRvIHRha2UgY2FyZSBvZlxuICAgKiB0aGF0LlxuICAgKi9cbiAgQE91dHB1dCgnaGlkZScpIGhpZGVPdXRwdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoQEF0dHJpYnV0ZSgnYXJpYS1saXZlJykgcHVibGljIGFyaWFMaXZlOiBzdHJpbmcsIGNvbmZpZzogTmdiVG9hc3RDb25maWcpIHtcbiAgICBpZiAodGhpcy5hcmlhTGl2ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmFyaWFMaXZlID0gY29uZmlnLmFyaWFMaXZlO1xuICAgIH1cbiAgICB0aGlzLmRlbGF5ID0gY29uZmlnLmRlbGF5O1xuICAgIHRoaXMuYXV0b2hpZGUgPSBjb25maWcuYXV0b2hpZGU7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7IHRoaXMuX2luaXQoKTsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoJ2F1dG9oaWRlJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKTtcbiAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpO1xuICAgIHRoaXMuaGlkZU91dHB1dC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0KCkge1xuICAgIGlmICh0aGlzLmF1dG9oaWRlICYmICF0aGlzLl90aW1lb3V0SUQpIHtcbiAgICAgIHRoaXMuX3RpbWVvdXRJRCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRlKCksIHRoaXMuZGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFyVGltZW91dCgpIHtcbiAgICBpZiAodGhpcy5fdGltZW91dElEKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dElEKTtcbiAgICAgIHRoaXMuX3RpbWVvdXRJRCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=