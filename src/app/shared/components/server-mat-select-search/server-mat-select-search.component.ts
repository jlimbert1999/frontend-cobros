import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  ReplaySubject,
  Subject,
  debounceTime,
  filter,
  takeUntil,
  tap,
} from 'rxjs';

interface MatSelectSearchData {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'server-mat-select-search',
  templateUrl: './server-mat-select-search.component.html',
  styleUrls: ['./server-mat-select-search.component.scss'],
})
export class ServerMatSelectSearchComponent implements OnChanges {
  @Input() allowNullValues: boolean = false;
  @Input() results: MatSelectSearchData[] = [];
  @Input() placeholder: string;
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();
  @Output() eventSelectedOption: EventEmitter<string> = new EventEmitter();

  public resultServerSideCtrl: FormControl = new FormControl();
  public resultServerSideFilteringCtrl: FormControl = new FormControl();
  public filteredServerSideResuls: ReplaySubject<MatSelectSearchData[]> =
    new ReplaySubject<any[]>(1);
  public searching: boolean = false;
  protected _onDestroy = new Subject<void>();

  ngOnInit() {
    this.resultServerSideFilteringCtrl.valueChanges
      .pipe(
        filter((search: string) => !!search),
        tap(() => (this.searching = true)),
        takeUntil(this._onDestroy),
        debounceTime(1000)
      )
      .subscribe((text) => {
        this.searching = false;
        this.searchEvent.emit(text);
      });
  }
  ngOnChanges(): void {
    this.filteredServerSideResuls.next(this.results);
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  selectOption(option: MatSelectSearchData) {
    this.eventSelectedOption.emit(option.value);
  }
}
