import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test29',
  templateUrl: './test29.component.html',
  styleUrls: ['./test29.component.css']
})
export class Test29Component implements OnInit {
features=[
  {title:'TIMELY',desc:'Course Completion'},
  {title:'24/7',desc:'Doubt Clearing & Faculty Support'},
  {title:'2 REVISIONS',desc:'and 6 mock Tests'},
  {title:'DIGITAL LIBRARY',desc:'facility at all Centers'},
  {title:'HOSTEL',desc:'Facility'},
  {title:'HI-TECH',desc:'Classrooms with Audio Visual Aids'},
]

OnlineSupport=[
  {title:'ONLINE',desc:'Video Lectures'},
  {title:'RANK TEST',desc:'Series'},
  {title:'FB LIVE',desc:'Doubt Clearing Sessions'},
  {title:'UNLIMITED' ,desc:'Practice Questions'},
  {title:'PERFORMANCE',desc:'Analytics'},
  {title:'SHORT NOTES',desc:'With Examples'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
