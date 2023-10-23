import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  data: any[] = [];
  errorPage: boolean = false;
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.fecthMainData();
  }

  private mainSub: Subscription | undefined;

  public fecthMainData() {
    this.mainSub = this.mainService.getData({}).subscribe({
      next: (data) => {
        this.data = data.payload?.datas;
      },

      error: (error) => {
        console.log(error);

        console.log('Menampilkan halaman eror...');

        this.errorPage = true;

        return;
      },
    });
  }
  ngOnDestroy(): void {
    if (this.mainSub) {
      this.mainSub.unsubscribe;
    }
  }
}
