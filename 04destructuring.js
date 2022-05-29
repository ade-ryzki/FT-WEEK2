// spread operator & destruckturing

const data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }
    
    const editData = {
      ...data,
      name: 'ade ryzki aprinata',
      email: 'ade.ryzki@gmail.com',
      hobby: 'running',
    }
    
    console.log(editData)
    
    const {address:{street, city}} = data
    console.log([street, city])
    
    //done