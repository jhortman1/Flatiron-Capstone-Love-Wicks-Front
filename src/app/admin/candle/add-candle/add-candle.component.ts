import { Candle } from 'src/app/Candle';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-candle',
  templateUrl: './add-candle.component.html',
  styleUrls: ['./add-candle.component.css']
})
export class AddCandleComponent implements OnInit {

  form:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.email,Validators.required]),
    description: new FormControl(null,[Validators.required,Validators.minLength(6)]),
    price: new FormControl(null,[Validators.required])
  });
  

  @Input()
  candle:Candle;
  
  private selectedFile: any;
  imgURL: any;

  @Output()
  candleAddedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  public onFileChanged(event: any) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }
  onChangeInStock($event:any)
  {
    const isChecked = $event.target.checked;
    if(isChecked)
    {
      this.candle.inStock = true;
    }
    else{
      this.candle.inStock = false;
    }
  }

  get name(): FormControl{
    return this.form.get('email') as FormControl;
  }
  get description(): FormControl{
    return this.form.get('password') as FormControl;
  }
  get price(): FormControl{
    return this.form.get('password') as FormControl;
  }
  
  saveCandle() {
    if(this.form.invalid)
    {
      if(this.candle.id == null)
      {
        const uploadData = new FormData();
        uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
        this.selectedFile.imageName = this.selectedFile.name;
    
        this.httpClient.post('http://localhost:8080/api/upload', uploadData, { observe: 'response' })
          .subscribe((response) => {
            if (response.status === 200) {
              this.httpClientService.addCandle(this.candle).subscribe(
                (candle) => {
                  this.candleAddedEvent.emit();
                  this.router.navigate(['admin', 'candles']);
                }
              );
              console.log('Image uploaded successfully');
            } else {
              console.log('Image not uploaded successfully');
            }
          }
          );
      } else {
        this.httpClientService.updateCandle(this.candle).subscribe(
          (candle) => {
            this.candleAddedEvent.emit();
            this.router.navigate(['admin', 'candles']);
          }
        );
      }
    }

  }

}
