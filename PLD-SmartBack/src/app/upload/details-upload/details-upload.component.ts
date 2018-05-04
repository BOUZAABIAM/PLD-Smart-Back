import {Component, OnInit, Input,HostListener} from '@angular/core';
import {FileUpload} from '../fileupload';
import {UploadFileService} from '../upload-file.service';
import {FirebaseListObservable} from 'angularfire2/database';



@Component({
  selector: 'details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {

  //@Input() fileUpload: FileUpload;
  fileUploads: FirebaseListObservable<FileUpload[]>;
  constructor(private uploadService: UploadFileService) {}
   public category =[];
  ngOnInit() {
     this.fileUploads = this.uploadService.getFileUploads({limitToLast: 6});
    //console.log(this.fileUpload);
      //console.log(this.fileUpload);

  }
  filterForeCasts(filterVal: any) {
        if (filterVal == "0")
            alert("You should add a category for your point\n   1)An Entry Point\n   2)A Connector Point\n   3)A Beacon Point");
        else
        this.category.push( filterVal);
        console.log(this.category);
    }
  
  

}
