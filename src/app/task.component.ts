import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'tasks',
    template: `
    <div class="list-item">
        <input type="text" [value]="task.title" readonly="true" />
    </div>    
    `,
})
export class TaskComponent {
    @Input() task: any;

    @Output()
    onPinTask = new EventEmitter<Event>();
    
    @Output()
    onArchiveTask = new EventEmitter<Event>();
}
