import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splice-concept',
  templateUrl: './splice-concept.component.html',
  styleUrls: ['./splice-concept.component.css']
})
export class SpliceConceptComponent {
  id : number = 0;
  sname:string = "";
  city:string = "";
  public start:number = 0;
  public end:number = 4;
  isButtonDisplay = false;
  toDisplay = true;



  public  usersArray:any[]   = [		
		{id : 1  ,sname :  "Scott-1",  city  : "Hyd"  },
		{id : 2  ,sname :  "Scott-2",  city  : "Hyd"  },
		{id : 3  ,sname :  "Scott-3",  city  : "Hyd"  },
		{id : 4  ,sname :  "Scott-4",  city  : "Hyd"  },
		{id : 5  ,sname :  "Scott-5",  city  : "Hyd"  },
		{id : 6  ,sname :  "Scott-6",  city  : "Hyd"  },
		{id : 7  ,sname :  "Scott-7",  city  : "Hyd"  },
		{id : 8  ,sname :  "Scott-8",  city  : "Hyd"  },
		{id : 9  ,sname :  "Scott-9",  city  : "Hyd"  },
		{id : 10 ,  sname :  "Scott-10",  city  : "Hyd"  },
		{id : 11 ,  sname :  "Scott-11",  city  : "Hyd"  },
		{id : 12 ,  sname :  "Scott-12",  city  : "Hyd"  },
		{id : 13 ,  sname :  "Scott-13",  city  : "Hyd"  },
		{id : 14 ,  sname :  "Scott-14",  city  : "Hyd"  },
		{id : 15 ,  sname :  "Scott-15",  city  : "Hyd"  },		
		{id : 16 ,  sname :  "Scott-16",  city  : "Hyd"  },		
		{id : 17 ,  sname :  "Scott-17",  city  : "Hyd"  },		
		{id : 18 ,  sname :  "Scott-18",  city  : "Hyd"  },		
		{id : 19 ,  sname :  "Scott-19",  city  : "Hyd"  },		
		{id : 20 ,  sname :  "Scott-20",  city  : "Hyd"  },		
		{id : 21 ,  sname :  "Scott-21",  city  : "Hyd"  },		
		{id : 22 ,  sname :  "Scott-22",  city  : "Hyd"  },		
     ];
     
     public nextItems():void
     {
        this.end = this.end + 4;

        if(this.end >= this.usersArray.length)
        {
            this.isButtonDisplay = true;
            this.toDisplay = false;
        }
     }
}
