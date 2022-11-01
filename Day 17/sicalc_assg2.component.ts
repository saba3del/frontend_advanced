<h1>Simple Interest Calculator</h1>
<hr/>
<div [ngStyle]="{'background-color':'lightblue', padding : '20px', 'margin-right':'800px'}">
Principal Amount : <input [(ngModel)] = "priAmt" />
<br/><br/>
Rate% Per Year : <input [(ngModel)] = "rate" />
<br/><br/>
Time Period (In Years) : 
<!-- <input [(ngModel)] = "period" /> -->
<select [(ngModel)] = "period">
    <option>2</option>
    <option>3</option>
    <option>5</option>
    <option>7</option>
    <option>10</option>
</select>
<br/><br/>
<input type="button" value="Calculate Interest" (click)="simpleInterest()" />
</div>
<h3 [ngStyle]="{'background-color':'blue', 'color' : 'white', padding : '20px', 'margin-right':'800px'}">Simple Interest = {{result}}</h3>
