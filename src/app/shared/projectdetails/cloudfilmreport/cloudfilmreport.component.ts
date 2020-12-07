import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cloudfilmreport',
  templateUrl: './cloudfilmreport.component.html',
  styleUrls: ['./cloudfilmreport.component.scss']
})
export class CloudfilmreportComponent implements OnInit {



  closeResult: string;
  modalOptions:NgbModalOptions;

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



  cloudfilm() {
    this.router.navigate(['/projectdetails/cloudfilmreport'])
  }
  
  backpage(){
    this.router.navigate(['/projectdetails/viewreports'])
  }
  
  dicomshow(){
    this.router.navigate(['/projectdetails/dicomreport'])
  }


}
