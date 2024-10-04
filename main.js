const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    /**
     * 
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */
    const NewEmployee = {
        name : name,
        email : email,
        joinYear : joinYear,

    };

    employees.push(NewEmployee);
  }
  
  addEmployee('budi','budi@gmail.com',2021);
  console.log(employees);
