import {Component, OnInit, Input,HostListener} from '@angular/core';
import {FileUpload} from '../fileupload';
import {UploadFileService} from '../upload-file.service';
import {FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  @Input() fileUpload: FileUpload;
  
  constructor(private uploadService: UploadFileService) {}
  fileUploads: FirebaseListObservable<FileUpload[]>;

  ngOnInit() {
     this.fileUploads = this.uploadService.getFileUploads({limitToLast: 6})
     console.log("2222"+this.fileUpload);

  }
  public abscisse =[];
  public oordonnee =[];
  public jsonData = {};
  //public fs = require('fs');

       
  @HostListener('click',['$event']) 
    beaconGetXandY(elem){
       /*let myData;

      /* Read the file, and pass it to your callback*/
      /*let handleJSONFile = function (err, data) {
      if (err) {
           throw err;
      }
      this.fs.readFile('./myjsondataFile.json', handleJSONFile);

      myData= JSON.parse(data);
      }*/

       //alert(file);
       let f;
       let x =elem.offsetX;
       let y =elem.offsetY;
       this.abscisse.push(x);
       this.oordonnee.push(y);
       console.log(elem);
       alert("You have added a beacon at X = "+x+" and Y = "+y);
       alert("You should add a category for your point\n   1)An Entry Point\n   2)A Connector Point\n   3)A Beacon Point");
       console.log("clicked on : X = "+x+" and Y = "+y);
       console.log("positions X : "+this.abscisse);
       console.log("positions Y : "+this.oordonnee);
       //this.filterForeCasts(f);
       
    //window.addEventListener("click",);

  }
 
 deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload)
  }
  

}
