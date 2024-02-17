import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Input() mainPost: any;

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
