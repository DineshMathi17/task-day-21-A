fetch("https://animechan.vercel.app/api/quotes").then((data)=>{
    console.log(data)
      return data.json();
}).then((objectData)=>{
    console.log(objectData);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr>
       
        <td>${values.anime}</td>
        <td>${values.character}</td>
        <td>${values.quote}</td>
      
    </tr>
`;
    });
    document.getElementById("table_body").innerHTML=tableData
}).catch((err)=>{
    console.log(err)
})
