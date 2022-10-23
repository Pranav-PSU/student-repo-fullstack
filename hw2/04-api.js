const url = 'https://restcountries.com/v3.1/all';

const getData = (url) => {
    // Add your code here
    let results = document.getElementById('results');
    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            if (response.length != 0) {
                response.forEach((ele, ind) => {
                    console.log(`${++ind}. ${ele.name.common}-${ele.population}`);
                    var li = document.createElement('li');
                    li.appendChild(
                        document.createTextNode(` ${ele.name.common} - ${ele.population}`)
                    );
                    results.appendChild(li);
                });
            } else {
                results.innerHTML = 'No data Found';
                return false;
            }
        })
        .catch((err) => {
            results.innerHTML = 'Something Went Wrong';
            console.log(err);
        });
};

getData(url);
