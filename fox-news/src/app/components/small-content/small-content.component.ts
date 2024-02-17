import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-content',
  templateUrl: './small-content.component.html',
  styleUrls: ['./small-content.component.scss']
})
export class SmallContentComponent implements OnInit {
  @Input() post: any;

  constructor() { }

  formatDateString(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  limitTitle(title: string, limit: number): string {
    if (title.length > limit) {
      return title.substring(0, limit) + '...';
    } else {
      return title;
    }
  }

  ngOnInit(): void {
  }

}
