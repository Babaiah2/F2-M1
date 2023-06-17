let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  
  arr.map((item) =>{
      if(item.profession === 'developer'){
          console.log(item);
      }
  });
}

function PrintDeveloperbyForEach() {
 
  arr.forEach((item) =>{
      if(item.profession === 'developer')
      {
          console.log(item);
      }
  });
}

function addData() {
  
  let ans=[{id:4,name:"srikar",age:"29",profession:"Tester"}];
  arr.push(ans);
  console.log(arr);

}

function removeAdmin() {
  
  arr.filter((item) =>{
      if(item.profession !== 'admin'){
          console.log(item);
      }
  });
}

function concatenateArray() {
  
  let newArray=[
      { id: 5, name: "Babaiah", age: "23", profession: "developer" },
      { id: 6, name: "Raju", age: "24", profession: "Manager" },
      { id: 7, name: "srinu", age: "29", profession: "techi" },
    ];
 let ans=arr.concat(newArray);
 console.log(ans);

  }