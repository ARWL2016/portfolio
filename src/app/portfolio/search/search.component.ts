import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchInput') searchInputRef: ElementRef;

  @Input() searchResultsCount = 0;
  @Output() searchValueChanged = new EventEmitter<string>();

  public searchCtrl = new FormControl();

  constructor() { }

  ngOnInit() {
    this.searchCtrl.valueChanges.pipe(
      map(value => value.trim().toLocaleLowerCase()),
      debounceTime(500)
    ).subscribe(value => {
      this.searchValueChanged.emit(value)
    });
  }

  ngAfterViewInit(): void {
    this.searchInputRef.nativeElement.focus();
  }

}
