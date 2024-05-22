var student = {
    name: "Tonika",
    batch: 3,
  };
  console.log(student.name + " is in " + student.batch);

  function fullname(firstname, lastname){
    return "Welcome "+lastname+", "+firstname;
  }
  console.log(fullname("Poojitha", "K"));


  function fullname(firstname, lastname){
    return `Welcome ${lastname}, ${firstname}`;
  }
  console.log(fullname("Poojitha", "K"));

  function movieUrl(domain, genre, year) {
    return "http://" + domain + "?genere=" + genre + "&year=" + year;
  }

  console.log(movieUrl("imdb.com", "thriller", 2020));

  function movieUrl1(domain, genre, year) {
    return `http:// ${domain}?genere=${genre} &year=${year}`;
  }

  console.log(movieUrl1("imdb.com", "thriller", 2020));
